"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import CountUp from "@/components/energy/CountUp";
import PowerFlow from "@/components/energy/PowerFlow";
import SymbolRotator from "@/components/energy/SymbolRotator";
import { profile } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { t, pick } = useLanguage();
  // If the cut-out portrait is missing on the server, fall back to the original photo.
  const [heroSrc, setHeroSrc] = useState(profile.heroImage);
  const name = pick(profile.name);
  const displayName = name
    .split(" ")
    .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
    .join(" ");

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          <div>
            <motion.span
              className="kicker"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              {t.hero.role}
            </motion.span>
            <motion.h1
              id="hero-title"
              className="hero-name"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
            >
              {displayName}
            </motion.h1>
            <motion.p
              className="hero-statement"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease }}
            >
              <em>{t.hero.taglineFirst}</em> {t.hero.taglineSecond}
            </motion.p>
            <motion.p
              className="hero-intro"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26, ease }}
            >
              {t.hero.description}
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease }}
            >
              <a className="btn btn-primary" href={pick(profile.cv)} download>
                {t.hero.downloadCv} <Download size={17} aria-hidden="true" />
              </a>
              <a className="btn btn-ghost" href="#contact">
                {t.nav.connect}
              </a>
            </motion.div>
            <motion.p
              className="hero-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <span className="live-dot" aria-hidden="true" />
              <MapPin size={14} aria-hidden="true" /> {t.hero.location}
            </motion.p>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease }}
          >
            <div className="portrait">
              <Image
                src={heroSrc}
                alt={t.hero.portraitAlt}
                width={922}
                height={922}
                priority
                onError={() => setHeroSrc(profile.image)}
                className={heroSrc === profile.image ? "is-fallback" : undefined}
              />
            </div>
            <SymbolRotator />
          </motion.div>
        </div>

        <PowerFlow />

        <div className="stats">
          {t.highlights.map((item) => (
            <a key={item.label} href={item.href} className="stat">
              <strong>
                <CountUp value={item.value} />
              </strong>
              <span className="stat-label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
