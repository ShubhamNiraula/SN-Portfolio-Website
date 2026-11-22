"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificates } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Certificates() {
  const { t, pick } = useLanguage();
  const c = t.certificates;

  if (certificates.length === 0) return null;

  return (
    <section className="content-section page-wrap" id="certificates">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} number="07" />
      <div className="certificate-grid">
        {certificates.map((item, index) => {
          const inner = (
            <>
              <div className="certificate-preview">
                {item.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image} alt={pick(item.title)} loading="lazy" />
                ) : (
                  <Award size={34} strokeWidth={1.3} aria-hidden="true" />
                )}
              </div>
              <div className="certificate-body">
                <div className="post-meta">
                  <span>{pick(item.issuer)}</span>
                  <span>{item.year}</span>
                </div>
                <h3>{pick(item.title)}</h3>
                <span className={item.file ? "inline-link" : "certificate-pending"}>
                  {item.file ? (
                    <>
                      {c.view} <ArrowUpRight size={13} aria-hidden="true" />
                    </>
                  ) : (
                    c.pending
                  )}
                </span>
              </div>
            </>
          );

          return (
            <motion.div
              key={item.title.en}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              {item.file ? (
                <a className="certificate-card" href={item.file} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div className="certificate-card">{inner}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
