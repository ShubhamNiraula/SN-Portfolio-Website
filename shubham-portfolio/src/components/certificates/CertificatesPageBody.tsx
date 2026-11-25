"use client";

import { ArrowLeft } from "lucide-react";
import CertificateCard from "@/components/certificates/CertificateCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificates } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function CertificatesPageBody() {
  const { t } = useLanguage();
  const c = t.certificates;
  const sorted = [...certificates].sort((a, b) => (a.year < b.year ? 1 : -1));
  return (
    <>
      <a className="back-link" href="/#certificates" style={{ marginBottom: 28 }}>
        <ArrowLeft size={15} aria-hidden="true" /> {c.back}
      </a>
      <SectionHeading eyebrow={`${c.eyebrow} · ${certificates.length}`} title={c.title} icon="battery" />
      <div className="cert-grid">
        {sorted.map((item, i) => (
          <Reveal key={item.title.en} delay={(i % 3) * 0.06}>
            <CertificateCard item={item} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
