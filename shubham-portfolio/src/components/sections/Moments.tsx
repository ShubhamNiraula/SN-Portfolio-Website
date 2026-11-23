"use client";

import PhotoSlideshow from "@/components/gallery/PhotoSlideshow";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

/** Landing-page photo slideshow section. */
export default function Moments() {
  const { t } = useLanguage();
  return (
    <section className="section moments" id="moments">
      <div className="container">
        <Reveal className="moments-head">
          <span className="kicker">{t.gallery.eyebrow}</span>
          <a className="text-link" href="/gallery/">
            {t.gallery.viewAll} →
          </a>
        </Reveal>
        <Reveal>
          <PhotoSlideshow />
        </Reveal>
      </div>
    </section>
  );
}
