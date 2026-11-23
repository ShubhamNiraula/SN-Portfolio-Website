"use client";

import EnergyIcon from "@/components/energy/EnergyIcon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} number="05" icon="bolt" />

        {t.projects.items.map((project, index) => (
          <Reveal key={index}>
            <article className="card project-card hoverable">
              <span className="project-icon">
                <EnergyIcon name="chip" size={38} />
              </span>
              <div>
                <span className="meta">{project.category}</span>
                <h3>{project.title}</h3>
                {project.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}

      </div>
    </section>
  );
}
