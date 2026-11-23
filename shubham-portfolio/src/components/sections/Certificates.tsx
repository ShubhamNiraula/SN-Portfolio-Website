"use client";

import { ArrowUpRight, Award } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificates } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Certificates() {
  const { t, pick } = useLanguage();
  const c = t.certificates;
  if (certificates.length === 0) return null;

  return (
    <section className="section" id="certificates">
      <div className="container">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} number="09" icon="battery" />
        <div className="cert-grid">
          {certificates.map((item, index) => {
            const inner = (
              <>
                <div className="cert-thumb">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image} alt={pick(item.title)} loading="lazy" />
                  ) : (
                    <Award size={36} strokeWidth={1.4} aria-hidden="true" />
                  )}
                </div>
                <div className="cert-body">
                  <div className="meta">
                    <span>{pick(item.issuer)}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3>{pick(item.title)}</h3>
                  {item.file ? (
                    <span className="text-link">
                      {c.view} <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="cert-pending">{c.pending}</span>
                  )}
                </div>
              </>
            );
            return (
              <Reveal key={item.title.en} delay={(index % 3) * 0.07}>
                {item.file ? (
                  <a className="card cert-card" href={item.file} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div className="card cert-card">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
