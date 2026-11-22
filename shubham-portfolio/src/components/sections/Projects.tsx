"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Mic } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { presentations } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Projects() {
  const { t, pick } = useLanguage();
  const projects = t.projects.items;
  return (
    <section className="content-section page-wrap" id="projects">
      <SectionHeading
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        number="05"
      />
      {projects.map((project, index) => (
        <motion.article
          className="project-card"
          key={index}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
        >
          <div className="project-visual" aria-label="PLC system illustration">
            <div className="circuit-orbit orbit-a" />
            <div className="circuit-orbit orbit-b" />
            <div className="circuit-center">
              <Cpu size={52} strokeWidth={1.1} aria-hidden="true" />
            </div>
            <div className="circuit-node node-one">TEMP</div>
            <div className="circuit-node node-two">LIGHT</div>
            <div className="circuit-node node-three">GAS</div>
            <div className="circuit-node node-four">HMI</div>
            <span className="project-visual-label">SYSTEM / PLC-01</span>
          </div>
          <div className="project-info">
            <div className="project-kicker">
              <span>{project.category}</span>
              <span>{String(index + 1).padStart(2, "0")} — {String(projects.length).padStart(2, "0")}</span>
            </div>
            <h3>{project.title}</h3>
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}

      <div className="presentations">
        <p className="eyebrow">{t.projects.presentationsTitle}</p>
        {presentations.map((item) => (
          <div className="presentation-item" key={item.year + item.title.en}>
            <Mic size={18} aria-hidden="true" />
            <div>
              <h3>{pick(item.title)}</h3>
              <p>{pick(item.venue)}</p>
              {item.url && (
                <a className="inline-link" href={item.url} target="_blank" rel="noreferrer">
                  {t.projects.viewConference} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              )}
            </div>
            <span>{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
