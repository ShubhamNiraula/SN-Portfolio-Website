"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/ui/SkillCard";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;
  return (
    <section className="content-section page-wrap" id="skills">
      <SectionHeading
        eyebrow={s.eyebrow}
        title={s.title}
        number="08"
      />
      <div className="skills-grid">
        {s.items.map((skill, index) => (
          <SkillCard skill={skill} index={index} key={index} />
        ))}
      </div>

      <div className="languages-row">
        <div>
          <p className="eyebrow">{s.languagesEyebrow}</p>
          <h3>{s.languagesTitle}</h3>
        </div>
        {s.languages.map((language, index) => (
          <div className="language" key={index}>
            <span>{language.name}</span>
            <strong>{language.level}</strong>
            <small>{language.note}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
