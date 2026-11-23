import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import MotionProvider from "@/components/ui/MotionProvider";

const sans = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans", display: "swap" });
const serif = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhamniraula.com.np"),
  title: "Shubham Niraula | Electrical & Power Engineer",
  description:
    "Shubham Niraula — Electrical and Power Engineer, Master's student at ITMO University. Renewable energy integration, agrivoltaics, intelligent control and automation.",
  keywords: [
    "Shubham Niraula",
    "Electrical Engineer",
    "Power Engineer",
    "Renewable Energy",
    "Solar PV",
    "Agrivoltaics",
    "Power Systems",
    "ITMO"
  ],
  openGraph: {
    title: "Shubham Niraula | Electrical & Power Engineer",
    description:
      "Renewable energy integration for weak and rural grids. MS student at ITMO University with utility-scale solar experience.",
    type: "website",
    url: "https://shubhamniraula.com.np",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Shubham Niraula — Electrical & Power Engineer" }],
    locale: "en_US",
    alternateLocale: ["ru_RU"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Niraula | Electrical & Power Engineer",
    description: "Renewable energy integration for weak and rural grids.",
    images: ["/og-image.jpg"]
  },
  alternates: { canonical: "/" }
};

// Helps Google understand who the site is about.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shubham Niraula",
  alternateName: "Шубхам Нираула",
  url: "https://shubhamniraula.com.np",
  image: "https://shubhamniraula.com.np/profile.jpg",
  jobTitle: "Electrical and Power Engineer",
  email: "mailto:shubhamniraula47@gmail.com",
  nationality: "Nepal",
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "Kathmandu University" }],
  affiliation: { "@type": "CollegeOrUniversity", name: "ITMO University" },
  knowsAbout: ["Solar PV", "Renewable energy integration", "Power systems", "Agrivoltaics", "Power transformers", "Intelligent control"],
  sameAs: ["https://www.linkedin.com/in/shubham-niraula/"]
};

// Phones, tablets and computers each get the right zoom; browser bars follow light/dark mode.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#121519" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <LanguageProvider>
          <MotionProvider>{children}</MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
