"use client";

import { useEffect, useMemo, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { journey, type JourneyRegion, type JourneyStop } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

/* ---------- Land outlines (loaded in the visitor's browser) ----------
 * Only land and coastlines are drawn — no country borders — so the map
 * takes no position on any disputed boundary.
 */
type Topo = {
  transform: { scale: [number, number]; translate: [number, number] };
  arcs: [number, number][][];
  objects: Record<string, { type: string; arcs?: unknown; geometries?: { type: string; arcs: unknown }[] }>;
};
type Polygon = [number, number][][];

const LAND_SOURCES = {
  coarse: [
    "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json",
    "https://unpkg.com/world-atlas@2/land-110m.json"
  ],
  fine: [
    "https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json",
    "https://unpkg.com/world-atlas@2/land-50m.json"
  ]
};
const landCache: Partial<Record<"coarse" | "fine", Polygon[]>> = {};

function decodeTopo(topo: Topo): Polygon[] {
  const { scale, translate } = topo.transform;
  const arcs = topo.arcs.map((arc) => {
    let x = 0;
    let y = 0;
    return arc.map(([dx, dy]) => {
      x += dx;
      y += dy;
      return [x * scale[0] + translate[0], y * scale[1] + translate[1]] as [number, number];
    });
  });
  const ring = (indexes: number[]) => {
    const pts: [number, number][] = [];
    indexes.forEach((i, n) => {
      const a = i >= 0 ? arcs[i] : arcs[~i].slice().reverse();
      pts.push(...(n === 0 ? a : a.slice(1)));
    });
    return pts;
  };
  const obj = Object.values(topo.objects)[0];
  const geoms = obj.type === "GeometryCollection" ? obj.geometries ?? [] : [obj as { type: string; arcs: unknown }];
  const polygons: Polygon[] = [];
  for (const g of geoms) {
    if (g.type === "Polygon") polygons.push((g.arcs as number[][]).map(ring));
    if (g.type === "MultiPolygon") (g.arcs as number[][][]).forEach((p) => polygons.push(p.map(ring)));
  }
  return polygons;
}

async function loadLand(detail: "coarse" | "fine"): Promise<Polygon[] | null> {
  if (landCache[detail]) return landCache[detail]!;
  for (const url of LAND_SOURCES[detail]) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      landCache[detail] = decodeTopo((await res.json()) as Topo);
      return landCache[detail]!;
    } catch {
      // try the next source
    }
  }
  return null;
}

/* ---------- Projection ---------- */
const W = 1000;
const H = 560;
type Bounds = { lon0: number; lon1: number; lat0: number; lat1: number };
const VIEWS: Record<"all" | JourneyRegion, Bounds> = {
  all: { lon0: 20, lon1: 128, lat0: 6, lat1: 70 },
  nepal: { lon0: 80.6, lon1: 87.4, lat0: 26.3, lat1: 29.4 },
  india: { lon0: 67, lon1: 92, lat0: 7, lat1: 32 },
  china: { lon0: 110, lon1: 125, lat0: 24, lat1: 36 },
  russia: { lon0: 24, lon1: 76, lat0: 52, lat1: 66.5 }
};

function makeProjection(b: Bounds) {
  const k = Math.cos((((b.lat0 + b.lat1) / 2) * Math.PI) / 180);
  const s = Math.min(W / ((b.lon1 - b.lon0) * k), H / (b.lat1 - b.lat0));
  const ox = (W - (b.lon1 - b.lon0) * k * s) / 2;
  const oy = (H - (b.lat1 - b.lat0) * s) / 2;
  return (lon: number, lat: number): [number, number] => [ox + (lon - b.lon0) * k * s, oy + (b.lat1 - lat) * s];
}

function arc([x1, y1]: [number, number], [x2, y2]: [number, number]) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  const bend = Math.min(110, len * 0.25);
  const nx = -(y2 - y1) / len;
  const ny = (x2 - x1) / len;
  const sign = ny > 0 ? -1 : 1;
  return `M${x1.toFixed(1)} ${y1.toFixed(1)} Q${(mx + sign * nx * bend).toFixed(1)} ${(my + sign * ny * bend).toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

export default function Journey() {
  const { t, pick } = useLanguage();
  const j = t.journey;
  const [view, setView] = useState<"all" | JourneyRegion>("all");
  const [active, setActive] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const [land, setLand] = useState<Polygon[] | null>(landCache.fine ?? landCache.coarse ?? null);
  const [fine, setFine] = useState(Boolean(landCache.fine));

  useEffect(() => {
    let alive = true;
    loadLand("coarse").then((l) => alive && l && !landCache.fine && setLand(l));
    return () => {
      alive = false;
    };
  }, []);

  // Sharper coastlines when zooming in to a country.
  useEffect(() => {
    if (view === "all" || fine) return;
    let alive = true;
    loadLand("fine").then((l) => {
      if (alive && l) {
        setLand(l);
        setFine(true);
      }
    });
    return () => {
      alive = false;
    };
  }, [view, fine]);

  const project = useMemo(() => makeProjection(VIEWS[view]), [view]);
  const byId = useMemo(() => Object.fromEntries(journey.map((s) => [s.id, s])), []);

  const landPath = useMemo(() => {
    if (!land) return "";
    const b = VIEWS[view];
    const pad = 30;
    let d = "";
    for (const poly of land) {
      // skip land far outside the current view
      let near = false;
      for (const [lon, lat] of poly[0]) {
        if (lon > b.lon0 - pad && lon < b.lon1 + pad && lat > b.lat0 - pad && lat < b.lat1 + pad) {
          near = true;
          break;
        }
      }
      if (!near) continue;
      for (const ring of poly) {
        let prevLon: number | null = null;
        ring.forEach(([lon, lat], i) => {
          const [x, y] = project(lon, lat);
          const jump = prevLon !== null && Math.abs(lon - prevLon) > 180;
          d += `${i === 0 || jump ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
          prevLon = lon;
        });
        d += "Z";
      }
    }
    return d;
  }, [land, view, project]);

  const visible = (s: JourneyStop) => view === "all" || s.region === view;
  const zoomed = view !== "all";
  const regions: ("all" | JourneyRegion)[] = ["all", "nepal", "india", "china", "russia"];
  const countryCount = new Set(journey.map((s) => s.country.en)).size;

  const dots: [number, number][] = [];
  if (!land) for (let x = 10; x < W; x += 22) for (let y = 10; y < H; y += 22) dots.push([x, y]);

  return (
    <section className="section" id="journey">
      <div className="container">
        <SectionHeading eyebrow={j.eyebrow} title={j.title} number="07" icon="tower" />

        <div className="jm-tabs" role="tablist" aria-label={j.title}>
          {regions.map((r) => (
            <button
              key={r}
              type="button"
              role="tab"
              aria-selected={view === r}
              className={view === r ? "active" : ""}
              onClick={() => setView(r)}
            >
              {j.views[r]}
            </button>
          ))}
        </div>

        <div className="journey-grid">
          <Reveal className="journey-map card">
            <div className="jm-canvas">
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={j.title} className={`jm-svg view-${view}`}>
              <defs>
                <clipPath id="jm-clip">
                  <rect width={W} height={H} rx="10" />
                </clipPath>
              </defs>
              <g clipPath="url(#jm-clip)">
                <rect width={W} height={H} className="jm-sea" />
                {dots.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r={1.3} className="jm-dot" />
                ))}
                {landPath && <path key={view + (fine ? "f" : "c")} d={landPath} className="jm-land" fillRule="evenodd" />}
                {journey
                  .filter((s) => s.from && byId[s.from] && (zoomed ? visible(s) && visible(byId[s.from]) : true))
                  .map((s, i) => {
                    const f = byId[s.from!];
                    const on = active === s.id || active === s.from;
                    return (
                      <g key={`${view}-${s.id}`} className={`jm-route ${on ? "is-on" : ""}`}>
                        <path d={arc(project(f.lon, f.lat), project(s.lon, s.lat))} className="jm-route-base" />
                        <path
                          d={arc(project(f.lon, f.lat), project(s.lon, s.lat))}
                          className="jm-route-flow"
                          style={{ animationDelay: `${-i * 0.9}s` }}
                        />
                      </g>
                    );
                  })}
                {journey.map((s, i) => {
                  if (!visible(s)) return null;
                  const [x, y] = project(s.lon, s.lat);
                  return (
                    <g
                      key={`${view}-${s.id}`}
                      className={`jm-stop kind-${s.kind} ${active === s.id ? "is-on" : ""}`}
                      transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}
                      onMouseEnter={() => {
                        setActive(s.id);
                        setHover(s.id);
                      }}
                      onMouseLeave={() => {
                        setActive(null);
                        setHover(null);
                      }}
                      onClick={() => setHover((h) => (h === s.id ? null : s.id))}
                      tabIndex={0}
                      role="button"
                      aria-label={`${i + 1}. ${pick(s.name)} — ${pick(s.note)}`}
                      onFocus={() => setHover(s.id)}
                      onBlur={() => setHover(null)}
                    >
                      <g className="jm-mark">
                      <circle r={zoomed ? 22 : 18} className="jm-halo" />
                      <circle r={zoomed ? 14 : 12} className="jm-pin" />
                      <text dy="4.5" textAnchor="middle" className="jm-num">
                        {i + 1}
                      </text>
                      {zoomed && (
                        <text
                          x={s.label === "left" ? -22 : s.label === "above" || s.label === "below" ? 0 : 22}
                          y={s.label === "above" ? -26 : s.label === "below" ? 34 : 0}
                          dy="5"
                          textAnchor={s.label === "left" ? "end" : s.label === "above" || s.label === "below" ? "middle" : "start"}
                          className="jm-label"
                        >
                          {pick(s.name)}
                        </text>
                      )}
                      </g>
                    </g>
                  );
                })}
              </g>
            </svg>
            {hover &&
              byId[hover] &&
              visible(byId[hover]) &&
              (() => {
                const st = byId[hover];
                const [x, y] = project(st.lon, st.lat);
                const idx = journey.findIndex((q) => q.id === st.id) + 1;
                return (
                  <div
                    className={`jm-tip kind-${st.kind} ${x > W * 0.62 ? "flip-x" : ""} ${y < H * 0.3 ? "below" : ""}`}
                    style={{ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` }}
                    role="tooltip"
                  >
                    <span className="jm-tip-num">{idx}</span>
                    <strong>{pick(st.name)}</strong>
                    <span className="jm-tip-country">
                      {pick(st.country)} · {st.period}
                    </span>
                    <p>{pick(st.note)}</p>
                  </div>
                );
              })()}
            </div>
            <div className="jm-footer">
              <p className="journey-count">
                <strong>{countryCount}</strong> {j.countries} · <strong>{journey.length}</strong> {j.places}
              </p>
              <ul className="jm-legend">
                {(["study", "work", "site", "event", "volunteer"] as const).filter((k) => journey.some((q) => q.kind === k)).map((k) => (
                  <li key={k} className={`kind-${k}`}>
                    <span /> {j.kinds[k]}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <ol className="journey-list">
            {journey.map((s, i) =>
              visible(s) ? (
                <li
                  key={s.id}
                  className={`kind-${s.kind} ${active === s.id ? "is-on" : ""}`}
                  onMouseEnter={() => setActive(s.id)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setView(s.region)}
                >
                  <span className="jl-num">{i + 1}</span>
                  <div>
                    <strong>{pick(s.name)}</strong>
                    <span className="jl-country">{pick(s.country)}</span>
                    <p>{pick(s.note)}</p>
                    <span className="jl-period">{s.period}</span>
                  </div>
                </li>
              ) : null
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}
