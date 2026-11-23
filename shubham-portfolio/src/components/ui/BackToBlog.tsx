"use client";

import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function BackToBlog() {
  const { t } = useLanguage();
  return (
    <a className="back-link" href="/#blog">
      <ArrowLeft size={15} aria-hidden="true" /> {t.blog.back}
    </a>
  );
}
