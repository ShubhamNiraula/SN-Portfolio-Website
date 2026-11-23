"use client";

import { ArrowUpRight, Award } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Education() {
  const { t } = useLanguage();
  const e = t.education;
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading eyebrow={e.eyebrow} title={e.title} number="03" icon="chip" />
        <div className="edu-grid">
          {e.items.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <article className="card edu-card hoverable">
                <div className="meta">
                  <span>{item.status}</span>
                  <span>{item.date}</span>
                </div>
                <h3>
                  <a className="name-link" href={item.url} target="_blank" rel="noreferrer">
                    {item.institution} <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </h3>
                <p className="edu-qual">{item.qualification}</p>
                <p className="edu-desc">{item.description}</p>
                <span className="edu-mark" aria-hidden="true">
                  {item.watermark}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="award">
          <span className="award-icon">
            <Award size={22} aria-hidden="true" />
          </span>
          <div>
            <h3>{e.scholarshipTitle}</h3>
            <p>{e.scholarshipText}</p>
          </div>
          <span className="award-year">{e.scholarshipYear}</span>
        </Reveal>
      </div>
    </section>
  );
}
