"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { profile } from "@/data/site";

export default function Footer() {
  const { t, pick } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {pick(profile.name)}
        </span>
        <a href="/#home">{t.footer.backTop}</a>
      </div>
    </footer>
  );
}
