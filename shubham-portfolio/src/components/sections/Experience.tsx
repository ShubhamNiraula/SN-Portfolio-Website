"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Sun } from "lucide-react";
import { solarProjects } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Experience() {
  const { t, pick } = useLanguage();
  return (
    <section className="content-section page-wrap" id="experience">
      <SectionHeading
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        number="02"
      />
      <div className="timeline">
        {t.experience.items.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.12 }}
          >
            <div className="timeline-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="timeline-main">
              <p className="eyebrow">{item.date}</p>
              <h3>{item.role}</h3>
              <p className="company-name">
                {item.companyUrl ? (
                  <a className="name-link" href={item.companyUrl} target="_blank" rel="noreferrer">
                    {item.company} <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <span>{item.company}</span>
                )}
                <span className="company-place"> · {item.place}</span>
              </p>
              <p className="timeline-description">{item.description}</p>
            </div>
            <BriefcaseBusiness
              className="timeline-icon"
              size={22}
              aria-hidden="true"
            />
          </motion.article>
        ))}
      </div>

      <div className="solar-projects" id="solar-projects">
        <p className="eyebrow">{t.experience.solarTitle}</p>
        <div className="solar-grid">
          {solarProjects.map((project) => {
            const body = (
              <>
                <div className="solar-top">
                  <Sun size={20} aria-hidden="true" />
                  <strong>{project.capacity}</strong>
                </div>
                <h3>{pick(project.name)}</h3>
                <p className="solar-location">{pick(project.location)}</p>
                <p className="solar-role">{pick(project.role)}</p>
                {project.url && (
                  <span className="inline-link">
                    {t.experience.projectWebsite} <ArrowUpRight size={13} aria-hidden="true" />
                  </span>
                )}
              </>
            );
            return project.url ? (
              <a className="solar-card" key={project.name.en} href={project.url} target="_blank" rel="noreferrer">
                {body}
              </a>
            ) : (
              <div className="solar-card" key={project.name.en}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
