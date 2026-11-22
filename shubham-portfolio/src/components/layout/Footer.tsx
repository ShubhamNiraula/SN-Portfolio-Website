"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { profile } from "@/data/site";

export default function Footer() {
  const { t, pick } = useLanguage();
  return (
    <footer className="site-footer page-wrap">
      <a href="/#home" className="brand" aria-label={pick(profile.name)}>
        {profile.initials}<span>.</span>
      </a>
      <p>{t.footer.tagline}</p>
      <a href="/#home" className="back-top">
        {t.footer.backTop}
      </a>
      <span className="copyright">
        © {new Date().getFullYear()} {pick(profile.name)}
      </span>
    </footer>
  );
}
