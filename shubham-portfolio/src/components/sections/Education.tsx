"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Education() {
  const { t } = useLanguage();
  const e = t.education;
  return (
    <section className="content-section page-wrap" id="education">
      <SectionHeading
        eyebrow={e.eyebrow}
        title={e.title}
        number="03"
      />
      <div className="education-grid">
        {e.items.map((item, index) => (
          <motion.article
            className={`education-card${item.featured ? " education-featured" : ""}`}
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.12 }}
          >
            <div className="card-topline">
              <span>{item.status}</span>
              <GraduationCap size={21} aria-hidden="true" />
            </div>
            <p className="eyebrow">{item.date}</p>
            <h3>{item.institution}</h3>
            <p className="education-subtitle">{item.qualification}</p>
            <p className="education-note">{item.description}</p>
            <span className="card-watermark" aria-hidden="true">
              {item.watermark}
            </span>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="scholarship-banner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="award-icon">
          <Award size={23} aria-hidden="true" />
        </div>
        <div>
          <p className="eyebrow">{e.recognition}</p>
          <h3>{e.scholarshipTitle}</h3>
          <p>{e.scholarshipText}</p>
        </div>
        <span className="award-year">{e.scholarshipYear}</span>
      </motion.div>
    </section>
  );
}
