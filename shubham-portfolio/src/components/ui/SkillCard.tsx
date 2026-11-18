"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Skill } from "@/data/portfolio";

type SkillCardProps = {
  skill: Skill;
  index: number;
};

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.045 }}
    >
      <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <span className="skill-group">{skill.group}</span>
        <h3>{skill.name}</h3>
      </div>
      <ArrowUpRight size={17} aria-hidden="true" />
    </motion.div>
  );
}
