"use client";

import { ArrowUpRight, Award } from "lucide-react";
import type { Certificate } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function CertificateCard({ item, className = "" }: { item: Certificate; className?: string }) {
  const { t, pick } = useLanguage();
  const c = t.certificates;
  const inner = (
    <>
      <div className="cert-thumb">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={pick(item.title)} loading="lazy" />
        ) : (
          <Award size={36} strokeWidth={1.4} aria-hidden="true" />
        )}
      </div>
      <div className="cert-body">
        <div className="meta">
          <span>{pick(item.issuer)}</span>
          <span>{item.year}</span>
        </div>
        <h3>{pick(item.title)}</h3>
        {item.file ? (
          <span className="text-link">
            {c.view} <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        ) : (
          <span className="cert-pending">{c.pending}</span>
        )}
      </div>
    </>
  );
  return item.file ? (
    <a className={`card cert-card ${className}`} href={item.file} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    <div className={`card cert-card ${className}`}>{inner}</div>
  );
}
