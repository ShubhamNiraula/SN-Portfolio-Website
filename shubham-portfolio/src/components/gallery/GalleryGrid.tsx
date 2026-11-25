"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { gallery as allPhotos } from "@/data/site";
import { markBroken, useWorkingPhotos } from "@/lib/workingPhotos";
import { useLanguage } from "@/i18n/LanguageProvider";

function formatDate(date: string, lang: string) {
  if (!date) return "";
  const [y, m] = date.split("-");
  if (!m) return y;
  const d = new Date(Number(y), Number(m) - 1, 1);
  return d.toLocaleDateString(lang === "ru" ? "ru-RU" : "en-GB", { month: "long", year: "numeric" });
}

export default function GalleryGrid() {
  const { t, lang, pick } = useLanguage();
  const g = t.gallery;
  const gallery = useWorkingPhotos(allPhotos);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: number) => setOpenIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [gallery.length]
  );

  // If a photo disappears from the list while open, keep the index in range.
  useEffect(() => {
    if (openIndex === null) return;
    if (gallery.length === 0) setOpenIndex(null);
    else if (openIndex >= gallery.length) setOpenIndex(gallery.length - 1);
  }, [gallery.length, openIndex]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  // Swipe left/right on phones.
  const [touchX, setTouchX] = useState<number | null>(null);

  if (gallery.length === 0) return null;
  const current = openIndex === null ? null : gallery[openIndex];

  return (
    <>
        <div className="gallery-grid">
          {gallery.map((photo, index) => (
            <Reveal key={photo.image} delay={(index % 3) * 0.06} className="gallery-item">
              <button type="button" className="gallery-tile" onClick={() => setOpenIndex(index)} aria-label={`${g.open}: ${pick(photo.caption)}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.thumb || photo.image} alt={pick(photo.caption)} loading="lazy" onError={() => markBroken(photo.thumb || photo.image)} />
                <span className="gallery-caption">
                  <span className="gallery-caption-text">{pick(photo.caption)}</span>
                  <span className="gallery-caption-meta">
                    {[pick(photo.place), formatDate(photo.date, lang)].filter(Boolean).join(" · ")}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={pick(current.caption)}
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            setTouchX(null);
          }}
        >
          <button type="button" className="lightbox-btn lightbox-close" onClick={close} aria-label={g.close}>
            <X size={22} />
          </button>
          {gallery.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-btn lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label={g.previous}
              >
                <ChevronLeft size={26} />
              </button>
              <button
                type="button"
                className="lightbox-btn lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label={g.next}
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img key={current.image} src={current.image} alt={pick(current.caption)} onError={() => markBroken(current.image)} />
            <figcaption>
              <strong>{pick(current.caption)}</strong>
              <span>
                {[pick(current.place), formatDate(current.date, lang)].filter(Boolean).join(" · ")}
                {"  ·  "}
                {(openIndex ?? 0) + 1} / {gallery.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
