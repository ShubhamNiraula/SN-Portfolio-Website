"use client";

import { useEffect, useRef, useState } from "react";

/** Counts a value like "45 MW" or "02+" up from zero the first time it is seen. */
export default function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const digits = match ? match[1].length : 0;
  const suffix = match ? match[2] : "";
  const [current, setCurrent] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!match || !ref.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    setCurrent(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCurrent(Math.round(target * eased));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {String(current).padStart(digits, "0")}
      {suffix}
    </span>
  );
}
