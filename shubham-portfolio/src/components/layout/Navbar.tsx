"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import EnergyIcon from "@/components/energy/EnergyIcon";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => window.innerWidth > 1024 && setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const navigation = [
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.experience, href: "/#experience" },
    { label: t.nav.interests, href: "/#research" },
    { label: t.nav.volunteering, href: "/#volunteering" },
    { label: t.nav.blog, href: "/#blog" },
    { label: t.nav.certificates, href: "/#certificates" },
    { label: t.nav.gallery, href: "/gallery/" }
  ];
  const name = pick(profile.name);
  const displayName = name.charAt(0) + name.slice(1).toLowerCase().replace(/ (\S)/, (m) => m.toUpperCase());

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="/#home" className="brand" aria-label={displayName}>
            <span className="brand-mark">
              <EnergyIcon name="tower" size={20} strokeWidth={3} className="brand-icon" />
            </span>
            <span className="brand-name">{displayName}</span>
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
            <a className="btn btn-primary header-cta" href="/#contact">
              {t.nav.contact}
            </a>
            <button
              className="menu-button"
              type="button"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)}>
            {t.nav.connect} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </nav>
      )}
    </>
  );
}
