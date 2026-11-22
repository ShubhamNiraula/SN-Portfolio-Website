import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export const metadata: Metadata = {
  title: "Shubham Niraula | Electrical & Power Engineer",
  description:
    "Shubham Niraula — Electrical and Power Engineer, Master's student at ITMO University. Renewable energy integration, agrivoltaics, intelligent control and automation.",
  keywords: [
    "Shubham Niraula",
    "Electrical Engineer",
    "Electronics Engineer",
    "PLC",
    "Automation",
    "Power Systems",
    "Renewable Energy",
    "Agrivoltaics",
    "ITMO"
  ],
  openGraph: {
    title: "Shubham Niraula | Electrical & Power Engineer",
    description:
      "Engineering systems. Designing tomorrow. Explore the work and experience of Shubham Niraula.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
