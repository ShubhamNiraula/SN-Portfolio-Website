"use client";

import { ArrowUpRight } from "lucide-react";
import EnergyIcon from "@/components/energy/EnergyIcon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { activities } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

function formatDate(date: string, lang: string) {
  const [y, m] = date.split("-");
  if (!m) return y;
  return new Date(Number(y), Number(m) - 1, 1).toLocaleDateString(lang === "ru" ? "ru-RU" : "en-GB", {
    month: "short",
    year: "numeric"
  });
}

export default function Volunteering() {
  const { t, lang, pick } = useLanguage();
  const v = t.volunteering;
  if (activities.length === 0) return null;
  return (
    <section className="section" id="volunteering">
      <div className="container">
        <SectionHeading eyebrow={v.eyebrow} title={v.title} number="06" icon="leaf" />
        <div className="activity-grid">
          {activities.map((a, index) => {
            const body = (
              <>
                <div className="meta">
                  <span>{pick(a.place)}</span>
                  <span>{formatDate(a.date, lang)}</span>
                </div>
                <h3>{pick(a.title)}</h3>
                <p>{pick(a.role)}</p>
                {a.url && (
                  <span className="text-link">
                    {v.readMore} <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                )}
                <EnergyIcon name="leaf" size={70} className="activity-mark" strokeWidth={1.6} />
              </>
            );
            return (
              <Reveal key={a.title.en} delay={(index % 2) * 0.07}>
                {a.url ? (
                  <a className="card activity-card" href={a.url} target="_blank" rel="noreferrer">
                    {body}
                  </a>
                ) : (
                  <div className="card activity-card hoverable">{body}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
