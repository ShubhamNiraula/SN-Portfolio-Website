"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Layers, Sprout, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

const icons = [Sprout, Zap, Bot, Layers, Cpu];

export default function Interests() {
  const { t } = useLanguage();
  return (
    <section className="content-section interests-section" id="interests">
      <div className="interests-heading">
        <SectionHeading
          eyebrow={t.interests.eyebrow}
          title={t.interests.title}
          number="04"
        />
      </div>
      <div className="interests-grid">
        {t.interests.items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.article
              className="interest-card"
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="interest-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
