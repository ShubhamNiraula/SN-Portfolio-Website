/*
 * ============================================================
 *  THINGS YOU WILL UPDATE OFTEN LIVE IN THIS FILE
 *  - articles:      links to your blogs published on other websites
 *  - presentations: your conference talks (+ link to the conference)
 *  - certificates:  your certificates (put the files in public/certificates/)
 *
 *  Every text has an English (en) and a Russian (ru) version.
 *  Leave a link as "" if you don't have one yet; the button simply won't show.
 * ============================================================
 */

export type Lang = "en" | "ru";
export type Localized = { en: string; ru: string };

export const siteLanguages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" }
];

export const profile = {
  name: { en: "SHUBHAM NIRAULA", ru: "ШУБХАМ НИРАУЛА" } as Localized,
  initials: "SN",
  image: "/profile.jpg",
  email: "shubhamniraula47@gmail.com",
  academicEmail: "shubhamniraula@niuitmo.ru",
  cv: "/Shubham_Niraula_CV.pdf",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-niraula/" }
  ]
};

/* ---------- Blogs published on other websites ---------- */
export type Article = {
  title: Localized;
  site: string; // e.g. "ITMO.NEWS"
  date: string; // e.g. "2026-08-30"
  url: string;
  summary: Localized;
};

export const articles: Article[] = [
  // Example — copy this block for each blog post:
  // {
  //   title: { en: "My summer in the Arctic Volunteer Corps", ru: "Моё лето в Арктическом волонтёрском корпусе" },
  //   site: "ITMO.NEWS",
  //   date: "2026-09-01",
  //   url: "https://news.itmo.ru/...",
  //   summary: { en: "Short one-line description.", ru: "Короткое описание." }
  // },
];

/* ---------- Conference presentations ---------- */
export type Presentation = {
  title: Localized;
  venue: Localized;
  year: string;
  url: string; // link to the conference page (or "")
};

export const presentations: Presentation[] = [
  {
    title: {
      en: "IoT Based Home Automation System Using Programmable Logic Controller (PLC) and Human Machine Interface (HMI)",
      ru: "Система домашней автоматизации на основе IoT с использованием программируемого логического контроллера (ПЛК) и человеко-машинного интерфейса (HMI)"
    },
    venue: {
      en: "Kathmandu University Communication Automation and Power, Kathmandu University",
      ru: "Kathmandu University Communication Automation and Power, Университет Катманду"
    },
    year: "2024",
    url: ""
  },
  {
    title: {
      en: "Influence of Personal Factors on Learning Russian: Research and Findings",
      ru: "Влияние личностных факторов на изучение русского языка: исследования и выводы"
    },
    venue: {
      en: "XV Congress of Young Scientists, ITMO University",
      ru: "XV Конгресс молодых учёных, Университет ИТМО"
    },
    year: "2026",
    url: ""
  },
  {
    title: {
      en: "Research on the Influence of Personality Factors on Russian Language Learning",
      ru: "Исследование влияния личностных факторов на изучение русского языка"
    },
    venue: {
      en: "XVIII International Student Scientific-Practical Conference, Herzen State Pedagogical University of Russia",
      ru: "XVIII Международная студенческая научно-практическая конференция, РГПУ им. А. И. Герцена"
    },
    year: "2026",
    url: ""
  }
];

/* ---------- Certificates ----------
 * 1. Put the file in public/certificates/ (PDF or JPG/PNG).
 * 2. file:  "/certificates/your-file.pdf"
 * 3. image: optional preview picture, e.g. "/certificates/your-file.jpg" (or "")
 */
export type Certificate = {
  title: Localized;
  issuer: Localized;
  year: string;
  file: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    title: {
      en: "L. A. Verbitskaya International Creative Competition",
      ru: "Международный творческий конкурс имени Л. А. Вербицкой"
    },
    issuer: { en: "Participation", ru: "Участие" },
    year: "2026",
    file: "",
    image: ""
  },
  {
    title: {
      en: "VI International Olympiad for Foreign Students of Preparatory Faculties",
      ru: "VI Международная олимпиада для иностранных слушателей подготовительных факультетов"
    },
    issuer: { en: "Participation", ru: "Участие" },
    year: "2026",
    file: "",
    image: ""
  },
  {
    title: {
      en: "International Arctic Volunteer Corps",
      ru: "Международный Арктический волонтёрский корпус"
    },
    issuer: { en: "Volunteer, builders team", ru: "Волонтёр, строительная команда" },
    year: "2026",
    file: "",
    image: ""
  }
];

/* ---------- Contact form ----------
 * Messages are delivered to this address by FormSubmit (formsubmit.co).
 * The FIRST message sends you an activation email — click "Activate" in it once.
 */
export const contactFormEndpoint = `https://formsubmit.co/ajax/${profile.email}`;
