"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import EnergyIcon from "@/components/energy/EnergyIcon";
import type { SymbolKey } from "@/components/energy/symbols";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { presentations, publications } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const icons: SymbolKey[] = ["agri", "tower", "battery", "twin", "chip"];

export default function Research() {
  const { t, pick } = useLanguage();
  const r = t.research;
  return (
    <section className="section interests-band" id="research">
      <div className="container">
        <SectionHeading eyebrow={r.eyebrow} title={r.title} number="04" icon="wind" />
        <p className="sub-kicker">{r.interestsTitle}</p>
      </div>
      <div className="interests-grid" id="interests">
        {t.interests.items.map((item, index) => (
          <motion.article
            className="interest"
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="interest-icon">
              <EnergyIcon name={icons[index % icons.length]} size={34} />
            </span>
            <span className="num">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="container research-lists">
        <div>
          <p className="sub-kicker">{r.publicationsTitle}</p>
          {publications.map((pub) => (
            <Reveal key={pub.url || pub.title.en}>
              <a className="card pub-card" href={pub.url || undefined} target="_blank" rel="noreferrer">
                <span className="pub-icon">
                  <FileText size={22} aria-hidden="true" />
                </span>
                <div>
                  <span className="meta">
                    <span>{pick(pub.venue)}</span>
                    <span>{pub.year}</span>
                  </span>
                  <h3>{pick(pub.title)}</h3>
                  {pub.url && (
                    <span className="text-link">
                      {r.readPaper} <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="talks" id="presentations">
          <p className="sub-kicker">{r.talksTitle}</p>
          {presentations.map((item, index) => (
            <Reveal className="talk" key={item.year + item.title.en} delay={index * 0.04}>
              <span className="talk-year">{item.year}</span>
              <div>
                <span className={`badge ${item.kind === "speaker" ? "badge-amber" : "badge-accent"}`}>
                  {item.kind === "speaker" ? t.projects.speaker : t.projects.talk}
                </span>
                <h3>{pick(item.title)}</h3>
                <p>{pick(item.venue)}</p>
                {(item.url || item.paperUrl) && (
                  <div className="talk-links">
                    {item.url && (
                      <a className="text-link" href={item.url} target="_blank" rel="noreferrer">
                        {t.projects.viewConference} <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                    {item.paperUrl && (
                      <a className="text-link" href={item.paperUrl} target="_blank" rel="noreferrer">
                        {t.projects.viewPaper} <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
