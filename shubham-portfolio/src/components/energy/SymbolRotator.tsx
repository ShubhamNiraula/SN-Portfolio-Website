"use client";

import { useEffect, useRef, useState } from "react";
import EnergyIcon from "./EnergyIcon";
import { energySymbols, rotatingSymbols, type SymbolKey } from "./symbols";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Shows one energy symbol at a time and swaps it for a random other one
 * after a random pause (4–9 s), so it never follows a fixed pattern.
 */
export default function SymbolRotator() {
  const { pick } = useLanguage();
  const [current, setCurrent] = useState<SymbolKey>("solar");
  const [visible, setVisible] = useState(true);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    // Start on a random symbol too.
    setCurrent(rotatingSymbols[Math.floor(Math.random() * rotatingSymbols.length)]);

    const schedule = () => {
      const wait = 4000 + Math.random() * 5000;
      timers.current.push(
        window.setTimeout(() => {
          setVisible(false);
          timers.current.push(
            window.setTimeout(() => {
              setCurrent((prev) => {
                let next = prev;
                while (next === prev) {
                  next = rotatingSymbols[Math.floor(Math.random() * rotatingSymbols.length)];
                }
                return next;
              });
              setVisible(true);
              schedule();
            }, 600)
          );
        }, wait)
      );
    };
    schedule();
    const all = timers.current;
    return () => all.forEach((id) => window.clearTimeout(id));
  }, []);

  const symbol = energySymbols[current];

  return (
    <div className={`symbol-rotator tone-bg-${symbol.tone}`} aria-live="off">
      <div className={`symbol-rotator-icon ${visible ? "is-visible" : ""}`}>
        <EnergyIcon name={current} size={64} strokeWidth={2.2} />
      </div>
      <span className={`symbol-rotator-label ${visible ? "is-visible" : ""}`}>{pick(symbol.label)}</span>
    </div>
  );
}
