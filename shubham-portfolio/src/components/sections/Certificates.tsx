"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import CertificateCard from "@/components/certificates/CertificateCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificates } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const SHOWN = 3;

function randomStart(n: number) {
  const all = Array.from({ length: n }, (_, i) => i);
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all.slice(0, Math.min(SHOWN, n));
}

/** Shows three certificates; every few seconds one card is swapped for a random other one. */
export default function Certificates() {
  const { t } = useLanguage();
  const c = t.certificates;
  const [slots, setSlots] = useState<number[]>(() => Array.from({ length: Math.min(SHOWN, certificates.length) }, (_, i) => i));
  const [fading, setFading] = useState<number | null>(null);
  const paused = useRef(false);

  useEffect(() => {
    setSlots(randomStart(certificates.length));
  }, []);

  useEffect(() => {
    if (certificates.length <= SHOWN) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: number;
    const tick = () => {
      timer = window.setTimeout(() => {
        if (!paused.current) {
          const slot = Math.floor(Math.random() * SHOWN);
          setFading(slot);
          window.setTimeout(() => {
            setSlots((current) => {
              const unused = certificates.map((_, i) => i).filter((i) => !current.includes(i));
              const next = [...current];
              next[slot] = unused[Math.floor(Math.random() * unused.length)];
              return next;
            });
            setFading(null);
          }, 450);
        }
        tick();
      }, 4500 + Math.random() * 3500);
    };
    tick();
    return () => window.clearTimeout(timer);
  }, []);

  if (certificates.length === 0) return null;

  return (
    <section className="section" id="certificates">
      <div className="container">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} number="09" icon="battery" />
        <Reveal>
          <div
            className="cert-grid"
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
          >
            {slots.map((certIndex, slot) => (
              <div key={slot} className={`cert-slot ${fading === slot ? "is-fading" : ""}`}>
                <CertificateCard key={certIndex} item={certificates[certIndex]} className="cert-enter" />
              </div>
            ))}
          </div>
        </Reveal>
        <div className="cert-more">
          <a className="btn btn-ghost" href="/certificates/">
            {c.exploreAll} ({certificates.length}) <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
