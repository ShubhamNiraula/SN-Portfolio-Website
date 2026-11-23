"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { gallery } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const INTERVAL = 5500;

/** Auto-playing photo slideshow for the landing page. Pauses on hover; swipe on phones. */
export default function PhotoSlideshow() {
  const { t, pick } = useLanguage();
  const g = t.gallery;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = gallery.length;

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + count) % count), [count]);

  useEffect(() => {
    if (count < 2 || paused || userPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => go(1), INTERVAL);
    return () => window.clearTimeout(id);
  }, [index, paused, userPaused, go, count]);

  if (count === 0) return null;

  return (
    <div
      className="slideshow"
      role="region"
      aria-roledescription="carousel"
      aria-label={g.title}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="slides">
        {gallery.map((photo, i) => (
          <figure
            key={photo.image}
            className={`slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            {/* blurred copy fills the frame behind photos of any shape */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="slide-backdrop" src={photo.thumb || photo.image} alt="" aria-hidden="true" loading={i < 2 ? "eager" : "lazy"} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="slide-photo" src={photo.image} alt={pick(photo.caption)} loading={i < 2 ? "eager" : "lazy"} />
          </figure>
        ))}
      </div>

      <div className="slide-caption" aria-live="polite">
        <span className="slide-count">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <strong>{pick(gallery[index].caption)}</strong>
        <span className="slide-place">{pick(gallery[index].place)}</span>
      </div>

      <div className="slide-controls">
        <button type="button" onClick={() => go(-1)} aria-label={g.previous}>
          <ChevronLeft size={20} />
        </button>
        <button type="button" onClick={() => setUserPaused((p) => !p)} aria-label={userPaused ? g.play : g.pause}>
          {userPaused ? <Play size={16} /> : <Pause size={16} />}
        </button>
        <button type="button" onClick={() => go(1)} aria-label={g.next}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="slide-progress" aria-hidden="true">
        {gallery.map((photo, i) => (
          <button
            type="button"
            key={photo.image}
            tabIndex={-1}
            className={`${i === index ? "is-active" : ""} ${paused || userPaused ? "is-paused" : ""}`}
            onClick={() => setIndex(i)}
          >
            <span style={{ animationDuration: `${INTERVAL}ms` }} />
          </button>
        ))}
      </div>

    </div>
  );
}
