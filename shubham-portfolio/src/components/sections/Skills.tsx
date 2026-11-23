"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;
  const groups: { name: string; items: string[] }[] = [];
  s.items.forEach((skill) => {
    const g = groups.find((x) => x.name === skill.group);
    if (g) g.items.push(skill.name);
    else groups.push({ name: skill.group, items: [skill.name] });
  });

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} number="10" icon="bolt" />
        <div className="skills-grid">
          <div className="skill-groups">
            {groups.map((group, index) => (
              <Reveal className="skill-group" key={group.name} delay={index * 0.05}>
                <h3>{group.name}</h3>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="card lang-card">
              <p className="sub-kicker" style={{ marginBottom: 6 }}>
                {s.languagesEyebrow}
              </p>
              <h3>{s.languagesTitle}</h3>
              {s.languages.map((language, index) => (
                <div className="lang-row" key={index}>
                  <strong>{language.name}</strong>
                  <span>{language.level}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
