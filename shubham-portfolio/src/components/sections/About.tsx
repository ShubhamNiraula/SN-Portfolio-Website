"use client";

import { motion } from "framer-motion";
import { RadioTower } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { about, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section className="content-section page-wrap" id="about">
      <SectionHeading
        eyebrow="A LITTLE ABOUT ME"
        title="Engineering with purpose."
        number="01"
      />
      <motion.div
        className="about-layout"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="about-lead">{about.lead}</p>
        <div className="about-detail">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="about-location">
            <RadioTower size={16} aria-hidden="true" /> {profile.location}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
