"use client";

import EnergyIcon from "@/components/energy/EnergyIcon";
import type { SymbolKey } from "@/components/energy/symbols";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { nowItems, nowUpdated } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const focus: { icon: SymbolKey; en: string; ru: string }[] = [
  { icon: "solar", en: "Solar PV", ru: "Солнечная энергетика" },
  { icon: "tower", en: "Power systems", ru: "Энергосистемы" },
  { icon: "transformer", en: "Transformers", ru: "Трансформаторы" },
  { icon: "chip", en: "Intelligent control", ru: "Интеллектуальное управление" }
];

export default function About() {
  const { t, lang, pick } = useLanguage();
  const [ny, nm] = nowUpdated.split("-");
  const updated = new Date(Number(ny), Number(nm || 1) - 1, 1).toLocaleDateString(lang === "ru" ? "ru-RU" : "en-GB", { month: "long", year: "numeric" });
  const about = t.about;
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} number="01" icon="leaf" />
        <div className="about-grid">
          <Reveal>
            <p className="about-lead">{about.lead}</p>
            {nowItems.length > 0 && (
              <div className="now-card">
                <div className="now-head">
                  <span className="now-title">
                    <span className="live-dot" aria-hidden="true" /> {t.now.title}
                  </span>
                  <span className="now-updated">
                    {t.now.updated}: {updated}
                  </span>
                </div>
                <ul>
                  {nowItems.map((item) => (
                    <li key={item.en}>{pick(item)}</li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
          <Reveal delay={0.1} className="about-text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="about-tags">
              {focus.map((f) => (
                <span className="about-tag" key={f.icon}>
                  <EnergyIcon name={f.icon} size={18} />
                  {lang === "ru" ? f.ru : f.en}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
