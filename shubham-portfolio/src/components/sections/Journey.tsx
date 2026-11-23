"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { journey } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

// Simple equirectangular projection of the region we need (Europe → East Asia).
const W = 1000;
const H = 560;
const LON0 = 24;
const LON1 = 110;
const LAT0 = 68;
const LAT1 = 19;
const px = (lon: number) => ((lon - LON0) / (LON1 - LON0)) * W;
const py = (lat: number) => ((LAT0 - lat) / (LAT0 - LAT1)) * H;

function arc(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const bend = Math.min(120, len * 0.22);
  // bend the curve "upwards" (towards the north)
  const nx = -dy / len;
  const ny = dx / len;
  const sign = ny > 0 ? -1 : 1;
  return `M${x1.toFixed(1)} ${y1.toFixed(1)} Q${(mx + sign * nx * bend).toFixed(1)} ${(my + sign * ny * bend).toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

export default function Journey() {
  const { t, pick } = useLanguage();
  const j = t.journey;
  const [active, setActive] = useState<string | null>(null);
  const byId = Object.fromEntries(journey.map((s) => [s.id, s]));
  const countries = new Set(journey.map((s) => s.country.en)).size;

  const dots: { x: number; y: number }[] = [];
  for (let x = 10; x < W; x += 22) for (let y = 10; y < H; y += 22) dots.push({ x, y });

  return (
    <section className="section" id="journey">
      <div className="container">
        <SectionHeading eyebrow={j.eyebrow} title={j.title} number="07" icon="tower" />
        <div className="journey-grid">
          <Reveal className="journey-map card">
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={j.title}>
              <g className="jm-dots">
                {dots.map((d, i) => (
                  <circle key={i} cx={d.x} cy={d.y} r={1.3} />
                ))}
              </g>
              {[30, 50, 70, 90, 110].map((lon) => (
                <line key={`lon${lon}`} className="jm-grid" x1={px(lon)} x2={px(lon)} y1={0} y2={H} />
              ))}
              {[25, 40, 55].map((lat) => (
                <line key={`lat${lat}`} className="jm-grid" y1={py(lat)} y2={py(lat)} x1={0} x2={W} />
              ))}
              {journey
                .filter((s) => s.from && byId[s.from])
                .map((s, i) => {
                  const f = byId[s.from!];
                  const d = arc(px(f.lon), py(f.lat), px(s.lon), py(s.lat));
                  const on = active === s.id || active === s.from;
                  return (
                    <g key={s.id} className={`jm-route ${on ? "is-on" : ""}`}>
                      <path d={d} className="jm-route-base" />
                      <path d={d} className="jm-route-flow" style={{ animationDelay: `${-i * 1.3}s` }} />
                    </g>
                  );
                })}
              {journey.map((s, i) => (
                <g
                  key={s.id}
                  className={`jm-stop ${active === s.id ? "is-on" : ""}`}
                  transform={`translate(${px(s.lon).toFixed(1)} ${py(s.lat).toFixed(1)})`}
                  onMouseEnter={() => setActive(s.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <circle r={24} className="jm-halo" />
                  <circle r={15} className="jm-pin" />
                  <text dy="5" textAnchor="middle" className="jm-num">
                    {i + 1}
                  </text>
                </g>
              ))}
              {[
                { en: "RUSSIA", ru: "РОССИЯ", lon: 50, lat: 66 },
                { en: "CHINA", ru: "КИТАЙ", lon: 98, lat: 38 },
                { en: "NEPAL", ru: "НЕПАЛ", lon: 84, lat: 24.6 },
                { en: "INDIA", ru: "ИНДИЯ", lon: 76, lat: 22 }
              ].map((c) => (
                <text key={c.en} x={px(c.lon)} y={py(c.lat)} textAnchor="middle" className="jm-country">
                  {pick({ en: c.en, ru: c.ru })}
                </text>
              ))}
            </svg>
            <p className="journey-count">
              <strong>{countries}</strong> {j.countries} · <strong>{journey.length}</strong> {j.places}
            </p>
          </Reveal>

          <ol className="journey-list">
            {journey.map((s, i) => (
              <li
                key={s.id}
                className={active === s.id ? "is-on" : ""}
                onMouseEnter={() => setActive(s.id)}
                onMouseLeave={() => setActive(null)}
              >
                <span className="jl-num">{i + 1}</span>
                <div>
                  <strong>{pick(s.name)}</strong>
                  <span className="jl-country">{pick(s.country)}</span>
                  <p>{pick(s.note)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
