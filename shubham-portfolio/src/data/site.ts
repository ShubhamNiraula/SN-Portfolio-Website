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
  heroImage: "/profile-cutout.webp",
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
      en: "From the Plains of Nepal to the Siberian Arctic: Part 2 of My Week in the International Arctic Volunteer Corps",
      ru: "С равнин Непала в сибирскую Арктику: часть 2 — моя неделя в Международном арктическом волонтёрском корпусе"
    },
    site: "ITMO.NEWS",
    date: "2026-11-23",
    url: "https://news.itmo.ru/en/blog/430/",
    summary: {
      en: "Days 4–7: a lake swim, a visit to the Khanty village of Kazym, finishing construction work at a natural monument and the flight back to Khanty-Mansiysk.",
      ru: "Дни 4–7: купание в озере, поездка в хантыйское село Казым, завершение строительных работ на памятнике природы и перелёт в Ханты-Мансийск."
    }
  },
  {
    title: {
      en: "From the Plains of Nepal to the Siberian Arctic: My Week in the International Arctic Volunteer Corps (Part 1)",
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
    name: { en: "Dharamnagar Solar Farm – I", ru: "СЭС Дхарамнагар – I" },
    capacity: "10 MW",
    location: { en: "Kapilvastu, Lumbini Province, Nepal · Pashupati Renewables", ru: "Капилвасту, провинция Лумбини, Непал · Pashupati Renewables" },
    role: { en: "Design Engineer at REnergo Developers", ru: "Инженер-проектировщик, REnergo Developers" },
    url: "https://www.prpl.com.np/projects/dsf-i/"
  },
  {
    name: { en: "Dharamnagar Solar Farm – II", ru: "СЭС Дхарамнагар – II" },
    capacity: "15 MW",
    location: { en: "Kapilvastu, Lumbini Province, Nepal · Pashupati Renewables", ru: "Капилвасту, провинция Лумбини, Непал · Pashupati Renewables" },
    role: { en: "Design Engineer at REnergo Developers", ru: "Инженер-проектировщик, REnergo Developers" },
    url: "https://www.prpl.com.np/projects/dsf-ii/"
  },
  {
    name: { en: "Pure Energy I & II (Golyan Group)", ru: "Pure Energy I и II (Golyan Group)" },
    capacity: "10 MW + 10 MW",
    location: { en: "Khajura, Banke, Nepal", ru: "Хаджура, Банке, Непал" },
    role: {
      en: "Graduate Engineer Trainee — O&M (Jul–Sep 2023)",
      ru: "Инженер-стажёр по эксплуатации (O&M), июль–сентябрь 2023"
    },
    url: "https://pureenergynepal.com/our-ventures/"
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
    issuer: { en: "Online", ru: "Онлайн" },
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

/* ---------- "Currently" box (update whenever things change) ---------- */
export const nowUpdated = "2026-11"; // year-month of your last update
export const nowItems: Localized[] = [
  {
    en: "Volunteering at the VI Congress of Young Scientists, Saint Petersburg (December 2026)",
    ru: "Волонтёр VI Конгресса молодых учёных, Санкт-Петербург (декабрь 2026)"
  },
  {
    en: "Writing blog posts for ITMO.NEWS",
    ru: "Пишу блог для ITMO.NEWS"
  }
];

/* ---------- Publications ---------- */
export type Publication = { title: Localized; venue: Localized; year: string; url: string };
export const publications: Publication[] = [
  {
    title: {
      en: "Influence of Personal Factors on Learning Russian: Research and Findings",
      ru: "Влияние личностных факторов на изучение русского языка: исследования и выводы"
    },
    venue: {
      en: "Proceedings of the XV Congress of ITMO Young Scientists",
      ru: "Сборник трудов XV Конгресса молодых учёных ИТМО"
    },
    year: "2026",
    url: "https://kmu.itmo.ru/digests/article/17763"
  }
];

/* ---------- Volunteering & leadership ---------- */
export type Activity = { title: Localized; role: Localized; place: Localized; date: string; url: string };
export const activities: Activity[] = [
  {
    title: { en: "VI Congress of Young Scientists", ru: "VI Конгресс молодых учёных" },
    role: { en: "Volunteer", ru: "Волонтёр" },
    place: { en: "Saint Petersburg", ru: "Санкт-Петербург" },
    date: "2026-12",
    url: ""
  },
  {
    title: { en: "“Druzhim 47” youth forum", ru: "Форум «Дружим 47»" },
    role: {
      en: "International team project on promoting tourism through international cooperation",
      ru: "Международный командный проект о развитии туризма через международное сотрудничество"
    },
    place: { en: "Gatchina, Leningrad region", ru: "Гатчина, Ленинградская область" },
    date: "2026-10",
    url: ""
  },
  {
    title: { en: "International Arctic Volunteer Corps", ru: "Международный арктический волонтёрский корпус" },
    role: {
      en: "Builders team — built an access ramp at the district administration building",
      ru: "Строительная команда — построили пандус у здания администрации"
    },
    place: { en: "Beloyarsky district, Khanty-Mansi region", ru: "Белоярский район, ХМАО — Югра" },
    date: "2026-08",
    url: "https://news.itmo.ru/en/blog/429/"
  },
  {
    title: { en: "L. A. Verbitskaya International Creative Competition", ru: "Международный творческий конкурс имени Л. А. Вербицкой" },
    role: { en: "Participant — artistic reading of Russian poetry", ru: "Участник — художественное чтение стихов русских поэтов" },
    place: { en: "Saint Petersburg State University", ru: "СПбГУ" },
    date: "2026",
    url: ""
  },
  {
    title: {
      en: "VI International Olympiad for Foreign Students of Preparatory Faculties",
      ru: "VI Международная олимпиада для иностранных обучающихся подготовительных факультетов"
    },
    role: { en: "Participant", ru: "Участник" },
    place: { en: "Online", ru: "Онлайн" },
    date: "2026",
    url: ""
  }
];

/* ---------- My journey (map) ----------
 * Career points on the world map. lon/lat = position.
 * kind: "study" | "work" | "site" (inspections / project sites) | "event" | "volunteer"
 * region: which zoom tab the stop belongs to.
 * from: draws a route from another stop's id.
 */
export type JourneyKind = "study" | "work" | "site" | "event" | "volunteer";
export type JourneyRegion = "nepal" | "india" | "china" | "russia";
export type JourneyStop = {
  id: string;
  name: Localized;
  country: Localized;
  note: Localized;
  period: string;
  kind: JourneyKind;
  region: JourneyRegion;
  lon: number;
  lat: number;
  from?: string;
  label?: "left" | "right" | "above" | "below"; // where the name sits in zoomed views
};

const NEPAL = { en: "Nepal", ru: "Непал" };
const INDIA = { en: "India", ru: "Индия" };
const CHINA = { en: "China", ru: "Китай" };
const RUSSIA = { en: "Russia", ru: "Россия" };

export const journey: JourneyStop[] = [
  {
    id: "dhulikhel", kind: "study", region: "nepal", label: "right", lon: 85.55, lat: 27.62, period: "2018 — 2023",
    name: { en: "Dhulikhel", ru: "Дхуликхел" }, country: NEPAL,
    note: { en: "Kathmandu University — BE, Electrical & Electronics · KU CAP-2024 talk", ru: "Университет Катманду — бакалавриат · доклад на KU CAP-2024" }
  },
  {
    id: "nepalgunj", kind: "work", region: "nepal", lon: 81.62, lat: 28.08, period: "2023", from: "dhulikhel",
    name: { en: "Nepalgunj (Khajura)", ru: "Непалгандж (Хаджура)" }, country: NEPAL,
    note: { en: "Pure Energy 2 × 10 MW solar — Graduate Engineer Trainee, O&M", ru: "СЭС Pure Energy 2 × 10 МВт — инженер-стажёр по эксплуатации" }
  },
  {
    id: "kathmandu", kind: "work", region: "nepal", label: "above", lon: 85.32, lat: 27.71, period: "2023 — 2024", from: "nepalgunj",
    name: { en: "Kathmandu", ru: "Катманду" }, country: NEPAL,
    note: { en: "Nepal Ekarat Engineering (NEEK) — Assistant Engineer · RE Week 2024 speaker", ru: "Nepal Ekarat Engineering (NEEK) — младший инженер · спикер RE Week 2024" }
  },
  {
    id: "hetauda", kind: "site", region: "nepal", label: "below", lon: 85.03, lat: 27.43, period: "2023 — 2024", from: "kathmandu",
    name: { en: "Hetauda", ru: "Хетауда" }, country: NEPAL,
    note: { en: "NEEK transformer manufacturing plant", ru: "Завод трансформаторов NEEK" }
  },
  {
    id: "chennai", kind: "site", region: "india", lon: 80.27, lat: 13.08, period: "2023 — 2024", from: "kathmandu",
    name: { en: "Chennai", ru: "Ченнаи" }, country: INDIA,
    note: { en: "Wilson transformer inspection", ru: "Инспекция трансформаторов Wilson" }
  },
  {
    id: "noida", kind: "work", region: "india", lon: 77.39, lat: 28.54, period: "2024 — 2025", from: "kathmandu",
    name: { en: "Noida", ru: "Нойда" }, country: INDIA,
    note: { en: "REnergo Developers — Design Engineer (hybrid)", ru: "REnergo Developers — инженер-проектировщик (гибридно)" }
  },
  {
    id: "chandrauta", kind: "site", region: "nepal", lon: 83.0, lat: 27.62, period: "2024 — 2025", from: "noida",
    name: { en: "Chandrauta (Kapilvastu)", ru: "Чандраута (Капилвасту)" }, country: NEPAL,
    note: { en: "Pashupati Renewables — 10 MW + 15 MW Dharamnagar solar farms", ru: "Pashupati Renewables — СЭС Дхарамнагар 10 МВт + 15 МВт" }
  },
  {
    id: "changzhou", kind: "site", region: "china", label: "above", lon: 119.97, lat: 31.81, period: "2024 — 2025", from: "noida",
    name: { en: "Changzhou", ru: "Чанчжоу" }, country: CHINA,
    note: { en: "Trina Solar — solar module inspection", ru: "Trina Solar — инспекция солнечных модулей" }
  },
  {
    id: "ningbo", kind: "site", region: "china", lon: 121.55, lat: 29.87, period: "2024 — 2025", from: "changzhou",
    name: { en: "Ningbo", ru: "Нинбо" }, country: CHINA,
    note: { en: "Ginlong (Solis) Technologies — visit", ru: "Ginlong (Solis) Technologies — визит" }
  },
  {
    id: "spb", kind: "study", region: "russia", lon: 30.31, lat: 59.94, period: "2025 —", from: "kathmandu",
    name: { en: "Saint Petersburg", ru: "Санкт-Петербург" }, country: RUSSIA,
    note: { en: "ITMO University — MS · Druzhim 47 forum in Gatchina", ru: "Университет ИТМО — магистратура · форум «Дружим 47» в Гатчине" }
  },
  {
    id: "khanty", kind: "volunteer", region: "russia", lon: 69.02, lat: 61.0, period: "2026", from: "spb",
    name: { en: "Khanty-Mansiysk", ru: "Ханты-Мансийск" }, country: RUSSIA,
    note: { en: "International Arctic Volunteer Corps", ru: "Международный арктический волонтёрский корпус" }
  },
  {
    id: "beloyarsky", kind: "volunteer", region: "russia", lon: 66.67, lat: 63.71, period: "2026", from: "khanty",
    name: { en: "Beloyarsky", ru: "Белоярский" }, country: RUSSIA,
    note: { en: "Builders team — access ramp for the district administration", ru: "Строительная команда — пандус для администрации района" }
  }
];

/* ---------- Quotes at the top of the page ----------
 * They change in random order every ~10 seconds. Add, remove or edit freely.
 */
export type Quote = { text: Localized; author: Localized };

export const quotes: Quote[] = [
  {
    text: {
      en: "Scientists study the world as it is; engineers create the world that has never been.",
      ru: "Учёные изучают мир таким, какой он есть; инженеры создают мир, которого никогда не было."
    },
    author: { en: "Theodore von Kármán", ru: "Теодор фон Карман" }
  },
  {
    text: {
      en: "Engineering is the art of directing the great sources of power in nature for the use and convenience of man.",
      ru: "Инженерия — это искусство направлять великие источники силы природы на пользу и удобство человека."
    },
    author: { en: "Thomas Tredgold, 1828", ru: "Томас Тредголд, 1828" }
  },
  {
    text: {
      en: "I'd put my money on the sun and solar energy. What a source of power!",
      ru: "Я бы сделал ставку на солнце и солнечную энергию. Какой источник силы!"
    },
    author: { en: "Thomas Edison, 1931", ru: "Томас Эдисон, 1931" }
  },
  {
    text: {
      en: "Nothing is too wonderful to be true, if it be consistent with the laws of nature.",
      ru: "Нет ничего слишком чудесного, чтобы быть правдой, если это согласуется с законами природы."
    },
    author: { en: "Michael Faraday", ru: "Майкл Фарадей" }
  },
  {
    text: {
      en: "The scientist discovers a new type of material or energy, and the engineer discovers a new use for it.",
      ru: "Учёный открывает новый вид материала или энергии, а инженер находит ему новое применение."
    },
    author: { en: "Gordon Lindsay Glegg", ru: "Гордон Линдси Глегг" }
  },
  {
    text: {
      en: "If you cannot measure it, you cannot improve it.",
      ru: "Если вы не можете это измерить, вы не можете это улучшить."
    },
    author: { en: "Attributed to Lord Kelvin", ru: "Приписывается лорду Кельвину" }
  }
];

/* ---------- Photo gallery ----------
 * To add a photo:
 * 1. Put it in public/gallery/ (e.g. my-photo.jpg). A smaller copy for the grid is
 *    optional (e.g. my-photo-thumb.jpg); otherwise use the same file for both.
 * 2. Copy one block below, change the file names, caption, place and date.
 * Newest photos first looks best.
 */
export type GalleryPhoto = {
  image: string; // large photo (opens when clicked)
  thumb: string; // smaller photo shown in the grid
  caption: Localized;
  place: Localized;
  date: string; // e.g. "2024-10" or "2024"
  slideshow?: boolean; // set to false to show only on the Gallery page, not in the homepage slideshow
};

export const gallery: GalleryPhoto[] = [
  {
    image: "/gallery/arctic-speaking.jpg",
    thumb: "/gallery/arctic-speaking-thumb.jpg",
    caption: { en: "Speaking at the International Arctic Volunteer Corps", ru: "Выступление в Международном арктическом волонтёрском корпусе" },
    place: { en: "Khanty-Mansi region, Russia", ru: "ХМАО — Югра, Россия" },
    date: "2026-08"
  },
  {
    image: "/gallery/arctic-stage.jpg",
    thumb: "/gallery/arctic-stage-thumb.jpg",
    caption: { en: "On stage with the international volunteer team", ru: "На сцене с международной командой волонтёров" },
    place: { en: "Khanty-Mansi region, Russia", ru: "ХМАО — Югра, Россия" },
    date: "2026-08"
  },
  {
    image: "/gallery/arctic-team-presentation.jpg",
    thumb: "/gallery/arctic-team-presentation-thumb.jpg",
    caption: { en: "Presenting our team's work on stage", ru: "Презентация работы нашей команды" },
    place: { en: "Khanty-Mansi region, Russia", ru: "ХМАО — Югра, Россия" },
    date: "2026-08",
    slideshow: false
  },
  {
    image: "/gallery/arctic-building-ramp.jpg",
    thumb: "/gallery/arctic-building-ramp-thumb.jpg",
    caption: { en: "Building an access ramp with the builders team", ru: "Строим пандус вместе со строительной командой" },
    place: { en: "Beloyarsky district, Russia", ru: "Белоярский район, Россия" },
    date: "2026-08"
  },
  {
    image: "/gallery/arctic-bread-oven.jpg",
    thumb: "/gallery/arctic-bread-oven-thumb.jpg",
    caption: { en: "Baking bread in a traditional clay oven", ru: "Печём хлеб в традиционной глиняной печи" },
    place: { en: "Khanty-Mansi region, Russia", ru: "ХМАО — Югра, Россия" },
    date: "2026-08"
  },
  {
    image: "/gallery/arctic-traditional-dress.jpg",
    thumb: "/gallery/arctic-traditional-dress-thumb.jpg",
    caption: { en: "In traditional northern dress at a cultural camp", ru: "В традиционной северной одежде на этнолагере" },
    place: { en: "Khanty-Mansi region, Russia", ru: "ХМАО — Югра, Россия" },
    date: "2026-08"
  },
  {
    image: "/gallery/arctic-team-walk.jpg",
    thumb: "/gallery/arctic-team-walk-thumb.jpg",
    caption: { en: "Exploring Beloyarsky with the international team", ru: "Знакомство с Белоярским вместе с международной командой" },
    place: { en: "Beloyarsky, Russia", ru: "Белоярский, Россия" },
    date: "2026-08",
    slideshow: false
  },
  {
    image: "/gallery/arctic-lecture.jpg",
    thumb: "/gallery/arctic-lecture-thumb.jpg",
    caption: { en: "Listening to a lecture during the programme", ru: "На лекции во время программы" },
    place: { en: "Khanty-Mansi region, Russia", ru: "ХМАО — Югра, Россия" },
    date: "2026-08",
    slideshow: false
  },
  {
    image: "/gallery/arctic-closing.jpg",
    thumb: "/gallery/arctic-closing-thumb.jpg",
    caption: { en: "Closing ceremony of the Arctic Volunteer Corps", ru: "Закрытие Арктического волонтёрского корпуса" },
    place: { en: "Khanty-Mansi region, Russia", ru: "ХМАО — Югра, Россия" },
    date: "2026-08"
  },
  {
    image: "/gallery/arctic-dance-evening.jpg",
    thumb: "/gallery/arctic-dance-evening-thumb.jpg",
    caption: { en: "Dance evening with fellow volunteers", ru: "Танцевальный вечер с волонтёрами" },
    place: { en: "Khanty-Mansi region, Russia", ru: "ХМАО — Югра, Россия" },
    date: "2026-08",
    slideshow: false
  },
  {
    image: "/gallery/arctic-cultural-evening.jpg",
    thumb: "/gallery/arctic-cultural-evening-thumb.jpg",
    caption: { en: "Cultural evening with international volunteers", ru: "Культурный вечер с иностранными волонтёрами" },
    place: { en: "Khanty-Mansi region, Russia", ru: "ХМАО — Югра, Россия" },
    date: "2026-08",
    slideshow: false
  },
  {
    image: "/gallery/itmo-congress-participants.jpg",
    thumb: "/gallery/itmo-congress-participants-thumb.jpg",
    caption: { en: "Presenting my survey study on learning Russian", ru: "Представляю исследование об изучении русского языка" },
    place: { en: "ITMO University, Saint Petersburg", ru: "Университет ИТМО, Санкт-Петербург" },
    date: "2026-04"
  },
  {
    image: "/gallery/itmo-congress-results.jpg",
    thumb: "/gallery/itmo-congress-results-thumb.jpg",
    caption: { en: "Sharing results: how language experience shapes learning", ru: "Результаты: как языковой опыт влияет на обучение" },
    place: { en: "ITMO University, Saint Petersburg", ru: "Университет ИТМО, Санкт-Петербург" },
    date: "2026-04",
    slideshow: false
  },
  {
    image: "/gallery/student-conference-methodology.jpg",
    thumb: "/gallery/student-conference-methodology-thumb.jpg",
    caption: { en: "Presenting the research methodology at a student conference", ru: "Рассказываю о методологии исследования на студенческой конференции" },
    place: { en: "Saint Petersburg", ru: "Санкт-Петербург" },
    date: "2026-04"
  },
  {
    image: "/gallery/saint-petersburg-marble-hall.jpg",
    thumb: "/gallery/saint-petersburg-marble-hall-thumb.jpg",
    caption: { en: "Exploring Saint Petersburg's architecture", ru: "Архитектура Санкт-Петербурга" },
    place: { en: "Saint Petersburg", ru: "Санкт-Петербург" },
    date: "2026",
    slideshow: false
  },
  {
    image: "/gallery/himalayan-energy-expo-2024.jpg",
    thumb: "/gallery/himalayan-energy-expo-2024-thumb.jpg",
    caption: { en: "At the Himalayan Energy Expo, Bhrikutimandap", ru: "На выставке Himalayan Energy Expo, Бхрикутимандап" },
    place: { en: "Kathmandu, Nepal", ru: "Катманду, Непал" },
    date: "2024-04"
  },
  {
    image: "/gallery/schneider-neek-innovation-day-2024.jpg",
    thumb: "/gallery/schneider-neek-innovation-day-2024-thumb.jpg",
    caption: { en: "Schneider Electric \u00d7 NEEK Innovation Day 2024", ru: "Schneider Electric × NEEK Innovation Day 2024" },
    place: { en: "Kathmandu, Nepal", ru: "Катманду, Непал" },
    date: "2024"
  },
  {
    image: "/gallery/neek-compact-substation-launch.jpg",
    thumb: "/gallery/neek-compact-substation-launch-thumb.jpg",
    caption: { en: "With a compact substation at its product launch", ru: "Рядом с комплектной подстанцией на презентации продукта" },
    place: { en: "Kathmandu, Nepal", ru: "Катманду, Непал" },
    date: "2024",
    slideshow: false
  },
  {
    image: "/gallery/schneider-neek-event.jpg",
    thumb: "/gallery/schneider-neek-event-thumb.jpg",
    caption: { en: "At the Schneider Electric and NEEK event", ru: "На мероприятии Schneider Electric и NEEK" },
    place: { en: "Kathmandu, Nepal", ru: "Катманду, Непал" },
    date: "2024",
    slideshow: false
  },
  {
    image: "/gallery/neek-seminar-group.jpg",
    thumb: "/gallery/neek-seminar-group-thumb.jpg",
    caption: { en: "Group photo at the NEEK distribution transformer seminar", ru: "Общее фото на семинаре NEEK по распределительным трансформаторам" },
    place: { en: "Kathmandu, Nepal", ru: "Катманду, Непал" },
    date: "2024",
    slideshow: false
  },
  {
    image: "/gallery/industry-event-discussion.jpg",
    thumb: "/gallery/industry-event-discussion-thumb.jpg",
    caption: { en: "Discussion at an industry event", ru: "Обсуждение на отраслевом мероприятии" },
    place: { en: "Nepal", ru: "Непал" },
    date: "2024",
    slideshow: false
  },
  {
    image: "/gallery/neek-team.jpg",
    thumb: "/gallery/neek-team-thumb.jpg",
    caption: { en: "With the team at Nepal Ekarat Engineering (NEEK)", ru: "С командой Nepal Ekarat Engineering (NEEK)" },
    place: { en: "Nepal", ru: "Непал" },
    date: "2024",
    slideshow: false
  },
  {
    image: "/gallery/neek-colleagues.jpg",
    thumb: "/gallery/neek-colleagues-thumb.jpg",
    caption: { en: "With colleagues at the NEEK office", ru: "С коллегами в офисе NEEK" },
    place: { en: "Nepal", ru: "Непал" },
    date: "2024",
    slideshow: false
  },
  {
    image: "/gallery/trina-solar-inspection.jpg",
    thumb: "/gallery/trina-solar-inspection-thumb.jpg",
    caption: { en: "Solar module quality inspection at Trina Solar", ru: "Инспекция качества солнечных модулей на заводе Trina Solar" },
    place: { en: "Changzhou, China", ru: "Чанчжоу, Китай" },
    date: ""
  },
  {
    image: "/gallery/ginlong-solis-visit.jpg",
    thumb: "/gallery/ginlong-solis-visit-thumb.jpg",
    caption: { en: "Visit to Ginlong (Solis) Technologies", ru: "Визит в Ginlong (Solis) Technologies" },
    place: { en: "China", ru: "Китай" },
    date: ""
  },
  {
    image: "/gallery/ginlong-solis-visit-2.jpg",
    thumb: "/gallery/ginlong-solis-visit-2-thumb.jpg",
    caption: { en: "With the team during the Ginlong (Solis) visit", ru: "С командой во время визита в Ginlong (Solis)" },
    place: { en: "China", ru: "Китай" },
    date: "",
    slideshow: false
  },
  {
    image: "/gallery/solar-plant-site.jpg",
    thumb: "/gallery/solar-plant-site-thumb.jpg",
    caption: { en: "At a utility-scale solar plant", ru: "На крупной солнечной электростанции" },
    place: { en: "Nepal", ru: "Непал" },
    date: ""
  },
  {
    image: "/gallery/pure-energy-transformer.jpg",
    thumb: "/gallery/pure-energy-transformer-thumb.jpg",
    caption: { en: "At the plant transformer, Pure Energy solar project", ru: "У трансформатора СЭС Pure Energy" },
    place: { en: "Khajura, Banke, Nepal", ru: "Хаджура, Банке, Непал" },
    date: "2023"
  },
  {
    image: "/gallery/rooftop-solar.jpg",
    thumb: "/gallery/rooftop-solar-thumb.jpg",
    caption: { en: "On a rooftop solar installation", ru: "На крышной солнечной электростанции" },
    place: { en: "Nepal", ru: "Непал" },
    date: "",
    slideshow: false
  },
  {
    image: "/gallery/substation-inspection.jpg",
    thumb: "/gallery/substation-inspection-thumb.jpg",
    caption: { en: "Site inspection at a substation", ru: "Инспекция на подстанции" },
    place: { en: "Nepal", ru: "Непал" },
    date: ""
  },
  {
    image: "/gallery/field-testing.jpg",
    thumb: "/gallery/field-testing-thumb.jpg",
    caption: { en: "On-site testing with the engineering team", ru: "Полевые испытания с инженерной командой" },
    place: { en: "Nepal", ru: "Непал" },
    date: "",
    slideshow: false
  },
  {
    image: "/gallery/nea-substation-construction.jpg",
    thumb: "/gallery/nea-substation-construction-thumb.jpg",
    caption: { en: "At an NEA substation construction site", ru: "На строительстве подстанции NEA" },
    place: { en: "Nepal", ru: "Непал" },
    date: ""
  },
  {
    image: "/gallery/nea-substation-transformer.jpg",
    thumb: "/gallery/nea-substation-transformer-thumb.jpg",
    caption: { en: "Power transformer installation at an NEA substation", ru: "Монтаж силового трансформатора на подстанции NEA" },
    place: { en: "Nepal", ru: "Непал" },
    date: "",
    slideshow: false
  },
  {
    image: "/gallery/receiving-certificate.jpg",
    thumb: "/gallery/receiving-certificate-thumb.jpg",
    caption: { en: "Receiving a certificate", ru: "Вручение сертификата" },
    place: { en: "Nepal", ru: "Непал" },
    date: "",
    slideshow: false
  },
  {
    image: "/gallery/formal-portrait.jpg",
    thumb: "/gallery/formal-portrait-thumb.jpg",
    caption: { en: "Portrait", ru: "Портрет" },
    place: { en: "", ru: "" },
    date: "",
    slideshow: false
  },
  {
    image: "/gallery/re-week-2024-presenting.jpg",
    thumb: "/gallery/re-week-2024-presenting-thumb.jpg",
    caption: { en: "Presenting at RE Week 2024 – Nepal", ru: "Выступление на RE Week 2024 – Nepal" },
    place: { en: "Kathmandu, Nepal", ru: "Катманду, Непал" },
    date: "2024-10"
  },
  {
    image: "/gallery/re-week-2024-recognition.jpg",
    thumb: "/gallery/re-week-2024-recognition-thumb.jpg",
    caption: { en: "Recognised on stage at RE Week 2024 – Nepal", ru: "Награждение на сцене RE Week 2024 – Nepal" },
    place: { en: "Kathmandu, Nepal", ru: "Катманду, Непал" },
    date: "2024-10"
  },
  {
    image: "/gallery/re-week-2024-speaker.jpg",
    thumb: "/gallery/re-week-2024-speaker-thumb.jpg",
    caption: { en: "Speaker announcement — RE Week 2024 – Nepal", ru: "Анонс спикера — RE Week 2024 – Nepal" },
    place: { en: "Kathmandu, Nepal", ru: "Катманду, Непал" },
    date: "2024-10",
    slideshow: false
  },
  {
    image: "/gallery/neek-500kva-transformer.jpg",
    thumb: "/gallery/neek-500kva-transformer-thumb.jpg",
    caption: { en: "With a NEEK 500 kVA, 11 kV distribution transformer", ru: "Рядом с распределительным трансформатором NEEK 500 кВА, 11 кВ" },
    place: { en: "Nepal Ekarat Engineering, Nepal", ru: "Nepal Ekarat Engineering, Непал" },
    date: "2024"
  },
  {
    image: "/gallery/transformer-seminar-kathmandu.jpg",
    thumb: "/gallery/transformer-seminar-kathmandu-thumb.jpg",
    caption: { en: "Industry seminar on distribution transformers", ru: "Отраслевой семинар по распределительным трансформаторам" },
    place: { en: "Kathmandu, Nepal", ru: "Катманду, Непал" },
    date: "2024"
  },
  {
    image: "/gallery/neek-farewell-1.jpg",
    thumb: "/gallery/neek-farewell-1-thumb.jpg",
    caption: { en: "Farewell at Nepal Ekarat Engineering (NEEK)", ru: "Проводы в Nepal Ekarat Engineering (NEEK)" },
    place: { en: "Nepal", ru: "Непал" },
    date: "2024-06"
  },
  {
    image: "/gallery/neek-farewell-2.jpg",
    thumb: "/gallery/neek-farewell-2-thumb.jpg",
    caption: { en: "Thank-you words from the NEEK team", ru: "Слова благодарности от команды NEEK" },
    place: { en: "Nepal", ru: "Непал" },
    date: "2024-06",
    slideshow: false
  },
  {
    image: "/gallery/substation-site-visit.jpg",
    thumb: "/gallery/substation-site-visit-thumb.jpg",
    caption: { en: "Site visit to a high-voltage substation", ru: "На высоковольтной подстанции" },
    place: { en: "On site", ru: "На объекте" },
    date: ""
  }
];

/* ---------- Contact form ----------
 * Messages are delivered to this address by FormSubmit (formsubmit.co).
 * The FIRST message sends you an activation email — click "Activate" in it once.
 */
export const contactFormEndpoint = `https://formsubmit.co/ajax/${profile.email}`;
