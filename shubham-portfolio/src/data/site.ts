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
  // CV per language (files are in the public folder).
  cv: { en: "/Shubham_Niraula_CV.pdf", ru: "/Shubham_Niraula_CV_RU.pdf" } as Localized,
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
  {
    title: {
      en: "From the Plains of Nepal to the Siberian Arctic: My Week in the International Arctic Volunteer Corps",
      ru: "С равнин Непала в сибирскую Арктику: моя неделя в Международном арктическом волонтёрском корпусе"
    },
    site: "ITMO.NEWS",
    date: "2026-11-12",
    url: "https://news.itmo.ru/en/blog/429/",
    summary: {
      en: "A volunteer expedition in the Khanty-Mansi region: cultural visits, local people and trail and mural repair at a lake nature reserve.",
      ru: "Волонтёрская экспедиция в Ханты-Мансийском округе: знакомство с культурой, встречи с жителями и восстановление троп и муралов в заповеднике."
    }
  },
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
  kind: "talk" | "speaker";
  title: Localized;
  venue: Localized;
  year: string;
  url: string; // link to the conference / event page (or "")
  paperUrl: string; // link to the published paper or abstract (or "")
};

export const presentations: Presentation[] = [
  {
    kind: "speaker",
    title: {
      en: "Speaker at RE Week 2024 – Nepal",
      ru: "Спикер на RE Week 2024 – Nepal"
    },
    venue: {
      en: "RE Week 2024 – Nepal, solar and renewable energy industry event, Kathmandu",
      ru: "RE Week 2024 – Nepal, отраслевое мероприятие по солнечной и возобновляемой энергетике, Катманду"
    },
    year: "2024",
    url: "https://events.firstviewgroup.com/REWeek2024-Nepal#/speakers?lang=en&speakerId=5336000501858046",
    paperUrl: ""
  },
  {
    kind: "talk",
    title: {
      en: "IoT Based Home Automation System Using Programmable Logic Controller (PLC) and Human Machine Interface (HMI)",
      ru: "Система домашней автоматизации на основе IoT с использованием программируемого логического контроллера (ПЛК) и человеко-машинного интерфейса (HMI)"
    },
    venue: {
      en: "KU CAP-24: Communication, Automation and Power Networking Conference, Kathmandu University, 4 December 2024",
      ru: "KU CAP-24: конференция «Связь, автоматизация и энергетика», Университет Катманду, 4 декабря 2024 г."
    },
    year: "2024",
    url: "https://ku.edu.np/news-app/successful-completion-of-communication-automation-and-power-networking-conference-2024-ku-cap-24-",
    paperUrl: ""
  },
  {
    kind: "talk",
    title: {
      en: "Influence of Personal Factors on Learning Russian: Research and Findings",
      ru: "Влияние личностных факторов на изучение русского языка: исследования и выводы"
    },
    venue: {
      en: "XV Congress of ITMO Young Scientists, ITMO University, 6–10 April 2026",
      ru: "XV Конгресс молодых учёных ИТМО, Университет ИТМО, 6–10 апреля 2026 г."
    },
    year: "2026",
    url: "https://kmu.itmo.ru/",
    paperUrl: "https://kmu.itmo.ru/digests/article/17763"
  },
  {
    kind: "talk",
    title: {
      en: "Research on the Influence of Personality Factors on Russian Language Learning",
      ru: "Исследование влияния личностных факторов на изучение русского языка"
    },
    venue: {
      en: "XVIII International Student Scientific-Practical Conference “International Communication in Science, Culture and Education”, Herzen State Pedagogical University of Russia, 14 April 2026",
      ru: "XVIII Международная студенческая научно-практическая конференция «Международная коммуникация в науке, культуре и образовании», РГПУ им. А. И. Герцена, 14 апреля 2026 г."
    },
    year: "2026",
    url: "https://herzen.spb.ru/news-events/events/?ELEMENT_ID=60626",
    paperUrl: ""
  }
];

/* ---------- Utility-scale solar projects ---------- */
export type SolarProject = {
  name: Localized;
  capacity: string;
  location: Localized;
  role: Localized;
  url: string; // project / developer website (or "")
};

export const solarProjects: SolarProject[] = [
  {
    name: { en: "Pashupati Renewables Limited (PRL)", ru: "Pashupati Renewables Limited (PRL)" },
    capacity: "10 MW + 15 MW",
    location: { en: "Nepal", ru: "Непал" },
    role: {
      en: "Design Engineer at REnergo Developers",
      ru: "Инженер-проектировщик, REnergo Developers"
    },
    url: ""
  },
  {
    name: { en: "Pure Energy, Nepalgunj (Golyan Group)", ru: "Pure Energy, Непалгандж (Golyan Group)" },
    capacity: "10 MW + 10 MW",
    location: { en: "Khajura, Banke, Nepal", ru: "Хаджура, Банке, Непал" },
    role: {
      en: "Graduate Engineer Trainee — O&M, Golyan Group (Jul–Sep 2023)",
      ru: "Инженер-стажёр по эксплуатации (O&M), Golyan Group (июль–сентябрь 2023)"
    },
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
    title: { en: "Certificate of the Arctic Volunteer — International Arctic Volunteer Corps", ru: "Сертификат арктического волонтёра — Международный арктический волонтёрский корпус" },
    issuer: { en: "Youth Center of Yugra, Khanty-Mansiysk", ru: "Молодёжный центр Югры, Ханты-Мансийск" },
    year: "2026",
    file: "/certificates/arctic-volunteer-2026.jpg",
    image: "/certificates/arctic-volunteer-2026-preview.jpg"
  },
  {
    title: { en: "Participant with a talk — XV Congress of ITMO Young Scientists", ru: "Участник с докладом — XV Конгресс молодых учёных ИТМО" },
    issuer: { en: "ITMO University", ru: "Университет ИТМО" },
    year: "2026",
    file: "/certificates/itmo-young-scientists-congress-2026.pdf",
    image: "/certificates/itmo-young-scientists-congress-2026-preview.jpg"
  },
  {
    title: { en: "Speaker — XVIII International Student Scientific-Practical Conference “International Communication in Science, Culture and Education”", ru: "Доклад — XVIII Международная студенческая научно-практическая конференция «Международная коммуникация в науке, культуре и образовании»" },
    issuer: { en: "Herzen State Pedagogical University of Russia", ru: "РГПУ им. А. И. Герцена" },
    year: "2026",
    file: "/certificates/herzen-conference-2026.pdf",
    image: "/certificates/herzen-conference-2026-preview.jpg"
  },
  {
    title: { en: "L. A. Verbitskaya International Creative Competition — artistic reading of Russian poetry", ru: "Международный творческий конкурс имени Л. А. Вербицкой — художественное чтение стихов русских поэтов" },
    issuer: { en: "Saint Petersburg State University", ru: "СПбГУ" },
    year: "2026",
    file: "/certificates/verbitskaya-competition-2026.pdf",
    image: "/certificates/verbitskaya-competition-2026-preview.jpg"
  },
  {
    title: { en: "VI International Olympiad for Foreign Students of Preparatory Faculties", ru: "VI Международная олимпиада для иностранных обучающихся подготовительных факультетов" },
    issuer: { en: "Kazan, Russia", ru: "Казань" },
    year: "2026",
    file: "/certificates/international-olympiad-2026.pdf",
    image: "/certificates/international-olympiad-2026-preview.jpg"
  },
  {
    title: { en: "Certificate of Appreciation — paper presentation at KU CAP-2024", ru: "Благодарственный сертификат — доклад на KU CAP-2024" },
    issuer: { en: "Kathmandu University, Dept. of Electrical and Electronics Engineering", ru: "Университет Катманду, кафедра электротехники и электроники" },
    year: "2024",
    file: "/certificates/ku-cap-2024.pdf",
    image: "/certificates/ku-cap-2024-preview.jpg"
  }
];

/* ---------- Contact form ----------
 * Messages are delivered to this address by FormSubmit (formsubmit.co).
 * The FIRST message sends you an activation email — click "Activate" in it once.
 */
export const contactFormEndpoint = `https://formsubmit.co/ajax/${profile.email}`;
