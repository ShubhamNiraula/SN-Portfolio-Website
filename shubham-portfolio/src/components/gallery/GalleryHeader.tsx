"use client";

import { ArrowLeft } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function GalleryHeader() {
  const { t } = useLanguage();
  return (
    <>
      <a className="back-link" href="/#moments" style={{ marginBottom: 28 }}>
        <ArrowLeft size={15} aria-hidden="true" /> {t.gallery.back}
      </a>
      <SectionHeading eyebrow={`${t.gallery.eyebrow} · ${gallery.length}`} title={t.gallery.title} icon="solar" />
    </>
  );
}
