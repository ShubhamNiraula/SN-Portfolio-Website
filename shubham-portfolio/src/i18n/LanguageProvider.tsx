"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content, type Content } from "@/data/content";
import type { Lang, Localized } from "@/data/site";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
  pick: (text: Localized) => string;
};

const STORAGE_KEY = "site-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // On first visit: use the saved choice, otherwise the browser language.
  useEffect(() => {
    let initial: Lang = "en";
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "ru") {
        initial = saved;
      } else if (navigator.language?.toLowerCase().startsWith("ru")) {
        initial = "ru";
      }
    } catch {
      // Storage can be unavailable (private mode); English is fine then.
    }
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: content[lang],
    pick: (text) => text[lang] || text.en
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
