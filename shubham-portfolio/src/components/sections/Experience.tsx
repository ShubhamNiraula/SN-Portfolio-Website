"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();
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
              <p className="company-name">{item.company}</p>
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
    </section>
  );
}
