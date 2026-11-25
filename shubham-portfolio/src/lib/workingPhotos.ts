"use client";

import { useEffect, useState } from "react";

/**
 * Keeps track of photos whose files are missing on the server, so the
 * gallery and slideshow quietly skip them instead of showing a broken image.
 * Every URL is checked once per visit (a light HEAD request, no download).
 */
const broken = new Set<string>();
const checked = new Set<string>();
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((fn) => fn());
}

export function markBroken(url: string) {
  if (broken.has(url)) return;
  broken.add(url);
  notify();
}

function check(url: string) {
  if (checked.has(url)) return;
  checked.add(url);
  fetch(url, { method: "HEAD", cache: "no-store" })
    .then((res) => {
      if (!res.ok) markBroken(url);
    })
    .catch(() => {
      // offline / network hiccup: don't hide anything
    });
}

/** Returns only the items whose image (and thumbnail, if any) exist. */
export function useWorkingPhotos<T extends { image: string; thumb?: string }>(items: T[]): T[] {
  const [, setTick] = useState(0);
  useEffect(() => {
    const fn = () => setTick((n) => n + 1);
    listeners.add(fn);
    items.forEach((p) => {
      check(p.image);
      if (p.thumb) check(p.thumb);
    });
    return () => {
      listeners.delete(fn);
    };
  }, [items]);
  return items.filter((p) => !broken.has(p.image) && !(p.thumb && broken.has(p.thumb)));
}
