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

/* ---------- "Currently" box (update whenever things change) ---------- */
export const nowUpdated = "2026-11"; // year-month of your last update
export const nowItems: Localized[] = [
  {
    en: "Preparing my Master's thesis on solid-state transformers for weak and rural grids",
    ru: "Готовлю магистерскую диссертацию о твердотельных трансформаторах для слабых и сельских сетей"
  },
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
    title: { en: "International youth forum — team project", ru: "Международный молодёжный форум — командный проект" },
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
    place: { en: "Kazan", ru: "Казань" },
    date: "2026",
    url: ""
  }
];

/* ---------- My journey (map) ----------
 * lon/lat = position on the map. "from" draws a route from another stop's id.
 */
export type JourneyStop = {
  id: string;
  name: Localized;
  country: Localized;
  note: Localized;
  lon: number;
  lat: number;
  from?: string;
};
export const journey: JourneyStop[] = [
  {
    id: "ktm", lon: 85.3, lat: 27.7,
    name: { en: "Kathmandu & Dhulikhel", ru: "Катманду и Дхуликхел" },
    country: { en: "Nepal", ru: "Непал" },
    note: { en: "Home · Kathmandu University · NEEK", ru: "Дом · Университет Катманду · NEEK" }
  },
  {
    id: "npj", lon: 81.6, lat: 28.05, from: "ktm",
    name: { en: "Nepalgunj", ru: "Непалгандж" },
    country: { en: "Nepal", ru: "Непал" },
    note: { en: "Pure Energy solar plants", ru: "СЭС Pure Energy" }
  },
  {
    id: "noida", lon: 77.4, lat: 28.6, from: "ktm",
    name: { en: "Noida", ru: "Нойда" },
    country: { en: "India", ru: "Индия" },
    note: { en: "Design Engineer, REnergo", ru: "Инженер-проектировщик, REnergo" }
  },
  {
    id: "china", lon: 104.0, lat: 33.0, from: "ktm",
    name: { en: "China", ru: "Китай" },
    country: { en: "China", ru: "Китай" },
    note: { en: "Travel", ru: "Поездка" }
  },
  {
    id: "spb", lon: 30.3, lat: 59.9, from: "ktm",
    name: { en: "Saint Petersburg & Gatchina", ru: "Санкт-Петербург и Гатчина" },
    country: { en: "Russia", ru: "Россия" },
    note: { en: "ITMO University · forums", ru: "Университет ИТМО · форумы" }
  },
  {
    id: "kazan", lon: 49.1, lat: 55.8, from: "spb",
    name: { en: "Kazan", ru: "Казань" },
    country: { en: "Russia", ru: "Россия" },
    note: { en: "International Olympiad", ru: "Международная олимпиада" }
  },
  {
    id: "hmao", lon: 67.5, lat: 62.5, from: "spb",
    name: { en: "Khanty-Mansiysk & Beloyarsky", ru: "Ханты-Мансийск и Белоярский" },
    country: { en: "Russia", ru: "Россия" },
    note: { en: "Arctic Volunteer Corps", ru: "Арктический волонтёрский корпус" }
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
};

export const gallery: GalleryPhoto[] = [
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
    date: "2024-10"
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
    date: "2024-06"
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
