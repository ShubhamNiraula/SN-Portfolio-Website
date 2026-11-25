import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CertificatesPageBody from "@/components/certificates/CertificatesPageBody";

export const metadata: Metadata = {
  title: "Certificates | Shubham Niraula",
  description: "Certificates from conferences, training programmes, competitions and volunteering — Shubham Niraula."
};

export default function CertificatesPage() {
  return (
    <main>
      <Navbar />
      <section className="section gallery-page">
        <div className="container">
          <CertificatesPageBody />
        </div>
      </section>
      <Footer />
    </main>
  );
}
