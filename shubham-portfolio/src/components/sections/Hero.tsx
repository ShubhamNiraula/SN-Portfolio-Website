"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Cpu, Download, Zap } from "lucide-react";
import { profile } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Hero() {
  const { t, pick } = useLanguage();
  const name = pick(profile.name);
  return (
    <>
      <section className="hero page-wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="status-dot" aria-hidden="true" />
            {t.hero.role}
          </motion.div>

          <motion.h1
            id="hero-title"
            className="hero-name"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <span>{name.split(" ")[0]} </span>
            <span className="name-accent">
              {name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            {t.hero.taglineFirst}
            <br />
            <span>{t.hero.taglineSecond}</span>
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a className="button button-primary" href="#projects">
              {t.hero.explore} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#experience">
              {t.hero.viewExperience} <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href={profile.cv} download>
              {t.hero.downloadCv} <Download size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <div className="hero-meta">
            <span>
              <span className="meta-line" aria-hidden="true" />
              {t.hero.basedIn} {t.hero.location}
            </span>
            <span>01 — 08</span>
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, x: 18 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="photo-frame">
            <div className="photo-topline">
              <span>PROFILE / 001</span>
              <span className="photo-cross" aria-hidden="true">
                ✳
              </span>
            </div>
            <Image
              src={profile.image}
              alt={t.hero.portraitAlt}
              width={700}
              height={900}
              priority
              className="profile-photo"
            />
            <div className="photo-caption">
              <span>{name}</span>
              <span>{t.hero.photoCaption}</span>
            </div>
          </div>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="floating-chip chip-top animate-float-slow">
            <Zap size={14} aria-hidden="true" /> {t.hero.chipPower}
          </div>
          <div className="floating-chip chip-bottom animate-float-slow-reverse">
            <Cpu size={14} aria-hidden="true" /> {t.hero.chipAutomation}
          </div>
          <div className="visual-index">SN — 2026</div>
        </motion.div>

        <div className="hero-grid-mark animate-grid-shift" aria-hidden="true" />
      </section>

      <section className="stats-strip page-wrap" aria-label="Highlights">
        {t.highlights.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>
    </>
  );
}
