import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Niraula | Electrical & Electronics Engineer",
  description:
    "Portfolio of Shubham Niraula — Electrical and Electronics Engineer focused on power systems, engineering design and automation.",
  keywords: [
    "Shubham Niraula",
    "Electrical Engineer",
    "Electronics Engineer",
    "PLC",
    "Automation",
    "Power Systems"
  ],
  openGraph: {
    title: "Shubham Niraula | Electrical & Electronics Engineer",
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
      <body>{children}</body>
    </html>
  );
}
