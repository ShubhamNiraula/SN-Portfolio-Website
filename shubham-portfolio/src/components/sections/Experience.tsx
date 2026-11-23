"use client";

import { ArrowUpRight } from "lucide-react";
import EnergyIcon from "@/components/energy/EnergyIcon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { solarProjects } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Experience() {
  const { t, pick } = useLanguage();
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} number="02" icon="transformer" />

        <div className="timeline">
          {t.experience.items.map((item, index) => (
            <Reveal className="job" key={index} delay={index * 0.05}>
              <div className="job-date">{item.date}</div>
              <div>
                <h3>{item.role}</h3>
                <p className="job-company">
                  {item.companyUrl ? (
                    <a className="name-link" href={item.companyUrl} target="_blank" rel="noreferrer">
                      {item.company} <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : (
                    <span>{item.company}</span>
                  )}
                  <span className="job-place"> · {item.place}</span>
                </p>
                <p className="job-desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="solar-block" id="solar-projects">
          <p className="sub-kicker">{t.experience.solarTitle}</p>
          <div className="solar-grid">
            {solarProjects.map((project, index) => {
              const body = (
                <>
                  <span className="solar-icon">
                    <EnergyIcon name="solar" size={40} />
                  </span>
                  <div>
                    <h3>{pick(project.name)}</h3>
                    <p className="solar-capacity">{project.capacity}</p>
                    <p>{pick(project.location)}</p>
                    <p>{pick(project.role)}</p>
                    {project.url && (
                      <span className="text-link" style={{ marginTop: 10 }}>
                        {t.experience.projectWebsite} <ArrowUpRight size={14} aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </>
              );
              return (
                <Reveal key={project.name.en} delay={index * 0.08}>
                  {project.url ? (
                    <a className="card solar-card" href={project.url} target="_blank" rel="noreferrer">
                      {body}
                    </a>
                  ) : (
                    <div className="card solar-card hoverable">{body}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
