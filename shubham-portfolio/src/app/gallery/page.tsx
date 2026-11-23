import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryHeader from "@/components/gallery/GalleryHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Shubham Niraula",
  description: "Photos from projects, sites, conferences and events — Shubham Niraula, electrical and power engineer."
};

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <section className="section gallery-page">
        <div className="container">
          <GalleryHeader />
          <GalleryGrid />
        </div>
      </section>
      <Footer />
    </main>
  );
}
