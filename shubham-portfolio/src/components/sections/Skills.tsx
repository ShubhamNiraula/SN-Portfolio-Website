import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/ui/SkillCard";
import { languages, skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="content-section page-wrap" id="skills">
      <SectionHeading
        eyebrow="WHAT I WORK WITH"
        title="Skills & capabilities."
        number="06"
      />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard skill={skill} index={index} key={skill.name} />
        ))}
      </div>

      <div className="languages-row">
        <div>
          <p className="eyebrow">LANGUAGES</p>
          <h3>Communication</h3>
        </div>
        {languages.map((language) => (
          <div className="language" key={language.name}>
            <span>{language.name}</span>
            <strong>{language.level}</strong>
            <small>{language.note}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
