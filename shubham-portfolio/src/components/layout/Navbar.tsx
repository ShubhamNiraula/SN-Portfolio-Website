"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { profile, siteLanguages } from "@/data/site";

function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      {siteLanguages.map((option) => (
        <button
          type="button"
          key={option.code}
          className={lang === option.code ? "active" : ""}
          aria-pressed={lang === option.code}
          onClick={() => setLang(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t, pick } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navigation = [
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.experience, href: "/#experience" },
    { label: t.nav.education, href: "/#education" },
    { label: t.nav.interests, href: "/#interests" },
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.blog, href: "/#blog" },
    { label: t.nav.certificates, href: "/#certificates" }
  ];

  return (
    <>
      <header className="site-header">
        <a href="/#home" className="brand" aria-label={pick(profile.name)}>
          {profile.initials}<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <LanguageSwitch />
          <a className="header-contact" href="/#contact">
            {t.nav.connect} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href="/#contact" onClick={closeMenu}>
            {t.nav.contact} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      )}
    </>
  );
}
