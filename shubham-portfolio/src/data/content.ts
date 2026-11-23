/*
 * All page text in English (en) and Russian (ru).
 * Change a sentence here and it changes on the website.
 */
import type { Lang } from "./site";

const en = {
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    interests: "Research",
    volunteering: "Volunteering",
    journey: "Journey",
    projects: "Projects",
    blog: "Blog",
    certificates: "Certificates",
    gallery: "Gallery",
    connect: "Let's connect",
    contact: "Contact",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    language: "Language"
  },
  hero: {
    role: "Electrical & power engineer · ITMO University",
    taglineFirst: "Renewable energy integration",
    taglineSecond: "for weak and rural grids.",
    description:
      "MS student at ITMO with 45 MW of utility-scale solar experience, seeking Ph.D. research in renewable integration and intelligent control.",
    location: "SAINT PETERSBURG, RUSSIA",
    basedIn: "BASED IN",
    explore: "Explore projects",
    viewExperience: "View experience",
    downloadCv: "Download CV",
    photoCaption: "ENGINEER",
    chipPower: "POWER SYSTEMS",
    chipAutomation: "AUTOMATION",
    portraitAlt: "Portrait of Shubham Niraula"
  },
  highlights: [
    { value: "02+", label: "Years in industry", href: "#experience" },
    { value: "45 MW", label: "Utility-scale solar PV", href: "#solar-projects" },
    { value: "04", label: "Conference talks", href: "#presentations" },
    { value: "06", label: "Certificates", href: "#certificates" }
  ],
  about: {
    eyebrow: "A LITTLE ABOUT ME",
    title: "Engineering with purpose.",
    lead:
      "I work where renewable energy, power systems and intelligent control meet.",
    paragraphs: [
      "Before ITMO, I designed and commissioned utility-scale solar plants totalling 45 MW in Nepal, assessed smaller projects, and supported transformers and distribution equipment up to 33 kV.",
      "Now I'm building toward a Ph.D. in renewable energy integration and intelligent control — technology that makes clean power reliable where grids are weakest."
    ]
  },
  experience: {
    eyebrow: "WHERE I'VE WORKED",
    title: "Experience.",
    solarTitle: "UTILITY-SCALE SOLAR PROJECTS",
    projectWebsite: "Project website",
    items: [
      {
        role: "Design Engineer",
        company: "REnergo Developers Pvt. Ltd.",
        companyUrl: "https://renergo.in",
        place: "Noida, India (Hybrid)",
        date: "JUL 2024 — SEP 2025",
        description:
          "Electrical layouts and PV arrangements for the 10 MW and 15 MW Pashupati Renewables plants; substation earthing (IEEE Std 80), BOMs and specifications; inspection, testing and commissioning; AutoCAD and PVsyst design."
      },
      {
        role: "Assistant Engineer",
        company: "Nepal Ekarat Engineering Co. Pvt. Ltd. (NEEK)",
        companyUrl: "https://neek-transformer.com",
        place: "Nepal",
        date: "SEP 2023 — JUN 2024",
        description:
          "Technical support and troubleshooting for power transformers, OLTCs and distribution equipment up to 33 kV."
      },
      {
        role: "Graduate Engineer Trainee — O&M",
        company: "Golyan Group (Pure Energy)",
        companyUrl: "",
        place: "Nepalgunj, Banke, Nepal",
        date: "JUL 2023 — SEP 2023",
        description:
          "O&M trainee at Pure Energy's two 10 MW solar PV plants in Khajura, Banke."
      }
    ]
  },
  education: {
    eyebrow: "ACADEMIC BACKGROUND",
    title: "Education.",
    items: [
      {
        status: "01 / CURRENT",
        date: "2026 — 2028 (EXPECTED)",
        institution: "ITMO University",
        url: "https://en.itmo.ru/",
        qualification: "MS, Electrical and Power Engineering",
        description:
          "Saint Petersburg. Power systems, renewable energy and control.",
        watermark: "ITMO",
        featured: true
      },
      {
        status: "02 / COMPLETED",
        date: "2018 — 2023",
        institution: "Kathmandu University",
        url: "https://ku.edu.np/",
        qualification: "BE, Electrical and Electronics Engineering (Power & Control)",
        description:
          "Dhulikhel, Nepal. Thesis on PLC-based home automation.",
        watermark: "KU",
        featured: false
      }
    ],
    recognition: "RECOGNITION",
    scholarshipTitle: "Russian Government Quota Scholarship",
    scholarshipText:
      "Awarded for Master's study at ITMO University.",
    scholarshipYear: "2025"
  },
  interests: {
    eyebrow: "WHAT I WANT TO RESEARCH",
    title: "Research interests.",
    items: [
      {
        title: "Agrivoltaics",
        description: "Agro-photovoltaic systems that produce food and clean energy on the same land."
      },
      {
        title: "Renewable Energy Integration",
        description: "Connecting solar and other renewables reliably into weak and modern grids."
      },
      {
        title: "Energy-Efficient Autonomous Systems",
        description: "Autonomous machines and systems designed around minimal energy use."
      },
      {
        title: "Digital Twins",
        description: "Virtual models of energy and agricultural systems for monitoring and optimisation."
      },
      {
        title: "Intelligent Control & Automation",
        description: "Smart control strategies, PLCs and automation for real-world systems."
      }
    ]
  },
  projects: {
    eyebrow: "SELECTED WORK",
    title: "Projects.",
    items: [
      {
        category: "UNDERGRADUATE THESIS · 2022 — 2023",
        title: "Home Automation Using PLC",
        paragraphs: [
          "Industrial control applied to a home: a PLC runs the appliances with ladder logic, sensors watch conditions, and a touch-panel HMI allows monitoring and manual control."
        ],
        tags: ["PLC", "LADDER LOGIC", "SENSORS", "HMI", "IOT"]
      }
    ],
    presentationsTitle: "CONFERENCE TALKS & SPEAKING",
    viewConference: "Conference website",
    viewPaper: "Read the paper",
    speaker: "SPEAKER",
    talk: "PRESENTATION"
  },
  blog: {
    eyebrow: "WRITING",
    title: "Blog.",
    myPosts: "MY POSTS",
    elsewhere: "PUBLISHED ELSEWHERE",
    read: "Read",
    empty: "New posts are coming soon.",
    back: "Back to all posts",
    postLanguage: "This post is written in"
  },
  gallery: {
    eyebrow: "In the field",
    title: "Gallery.",
    open: "Open photo",
    close: "Close",
    previous: "Previous photo",
    next: "Next photo",
    pause: "Pause slideshow",
    play: "Play slideshow",
    viewAll: "View full gallery",
    back: "Back to home"
  },
  research: {
    eyebrow: "Research",
    title: "Research.",
    interestsTitle: "Interests",
    publicationsTitle: "Publications",
    talksTitle: "Conference talks",
    readPaper: "Read the paper"
  },
  now: {
    title: "Currently",
    updated: "Updated"
  },
  volunteering: {
    eyebrow: "Beyond engineering",
    title: "Volunteering & leadership.",
    readMore: "Read more"
  },
  journey: {
    eyebrow: "Places that shaped me",
    title: "My journey.",
    countries: "countries",
    places: "places"
  },
  certificates: {
    eyebrow: "ACHIEVEMENTS",
    title: "Certificates.",
    view: "View certificate",
    pending: "Certificate coming soon"
  },
  skills: {
    eyebrow: "WHAT I WORK WITH",
    title: "Skills & capabilities.",
    items: [
      { name: "Solar PV Plant Design", group: "POWER & ENERGY" },
      { name: "Transformers & OLTCs", group: "POWER & ENERGY" },
      { name: "Substation Grounding (IEEE Std 80)", group: "POWER & ENERGY" },
      { name: "HV/LV Equipment, Inspection & Commissioning", group: "POWER & ENERGY" },
      { name: "AutoCAD, PVsyst", group: "DESIGN" },
      { name: "ETAP, PSCAD, MATLAB/Simulink", group: "SIMULATION" },
      { name: "Python, C/C++", group: "PROGRAMMING" },
      { name: "PLC Ladder Logic", group: "CONTROLS" }
    ],
    languagesEyebrow: "LANGUAGES",
    languagesTitle: "Communication",
    languages: [
      { name: "Nepali", level: "Native", note: "Mother tongue" },
      { name: "English", level: "Fluent", note: "Professional" },
      { name: "Hindi", level: "Fluent", note: "Professional" },
      { name: "Russian", level: "B1", note: "Studying in Russian" }
    ]
  },
  contact: {
    eyebrow: "Contact",
    titleFirst: "Let's work",
    titleSecond: "together.",
    copy:
      "Research collaboration, Ph.D. position or a project in renewable energy? I'd be glad to hear from you.",
    formTitle: "SEND ME A MESSAGE",
    name: "Your name",
    email: "Your email",
    message: "Your message",
    send: "Send message",
    sending: "Sending…",
    success: "Thank you! Your message has been sent. I'll reply soon.",
    error: "Sorry, the message could not be sent. Please email me directly.",
    orEmail: "Or email me directly"
  },
  footer: {
    tagline: "DESIGNED TO SHOWCASE ENGINEERING & IDEAS.",
    backTop: "BACK TO TOP ↑"
  }
};

export type Content = typeof en;

const ru: Content = {
  nav: {
    about: "Обо мне",
    experience: "Опыт",
    education: "Образование",
    interests: "Исследования",
    volunteering: "Волонтёрство",
    journey: "Путь",
    projects: "Проекты",
    blog: "Блог",
    certificates: "Сертификаты",
    gallery: "Галерея",
    connect: "Связаться",
    contact: "Контакты",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    language: "Язык"
  },
  hero: {
    role: "Инженер-электроэнергетик · Университет ИТМО",
    taglineFirst: "Интеграция ВИЭ",
    taglineSecond: "в слабые и сельские сети.",
    description:
      "Магистрант ИТМО с опытом работы над солнечными электростанциями общей мощностью 45 МВт. Ищу возможность исследований в аспирантуре по интеграции ВИЭ и интеллектуальному управлению.",
    location: "САНКТ-ПЕТЕРБУРГ, РОССИЯ",
    basedIn: "",
    explore: "Проекты",
    viewExperience: "Опыт работы",
    downloadCv: "Скачать CV",
    photoCaption: "ИНЖЕНЕР",
    chipPower: "ЭНЕРГОСИСТЕМЫ",
    chipAutomation: "АВТОМАТИЗАЦИЯ",
    portraitAlt: "Фотография Шубхама Нираулы"
  },
  highlights: [
    { value: "02+", label: "Года в отрасли", href: "#experience" },
    { value: "45 МВт", label: "Крупные СЭС", href: "#solar-projects" },
    { value: "04", label: "Выступления на конференциях", href: "#presentations" },
    { value: "06", label: "Сертификатов", href: "#certificates" }
  ],
  about: {
    eyebrow: "НЕМНОГО ОБО МНЕ",
    title: "Инженерия с целью.",
    lead:
      "Я работаю на стыке возобновляемой энергетики, энергосистем и интеллектуального управления.",
    paragraphs: [
      "До ИТМО я проектировал и вводил в эксплуатацию солнечные электростанции общей мощностью 45 МВт в Непале, оценивал небольшие проекты и работал с трансформаторами и распределительным оборудованием до 33 кВ.",
      "Сейчас я готовлюсь к аспирантуре в области интеграции ВИЭ и интеллектуального управления — чтобы чистая энергия была надёжной там, где сети слабее всего."
    ]
  },
  experience: {
    eyebrow: "ГДЕ Я РАБОТАЛ",
    title: "Опыт работы.",
    solarTitle: "КРУПНЫЕ СОЛНЕЧНЫЕ ЭЛЕКТРОСТАНЦИИ",
    projectWebsite: "Сайт проекта",
    items: [
      {
        role: "Инженер-проектировщик",
        company: "REnergo Developers Pvt. Ltd.",
        companyUrl: "https://renergo.in",
        place: "Нойда, Индия (гибридный формат)",
        date: "ИЮЛ 2024 — СЕН 2025",
        description:
          "Электрические схемы и раскладка ФЭМ для СЭС Pashupati Renewables 10 МВт и 15 МВт; заземление подстанций (IEEE Std 80), спецификации; инспекция, испытания и пусконаладка; проектирование в AutoCAD и PVsyst."
      },
      {
        role: "Младший инженер",
        company: "Nepal Ekarat Engineering Co. Pvt. Ltd. (NEEK)",
        companyUrl: "https://neek-transformer.com",
        place: "Непал",
        date: "СЕН 2023 — ИЮН 2024",
        description:
          "Техническая поддержка и поиск неисправностей силовых трансформаторов, РПН и распределительного оборудования до 33 кВ."
      },
      {
        role: "Инженер-стажёр по эксплуатации и обслуживанию (O&M)",
        company: "Golyan Group (Pure Energy)",
        companyUrl: "",
        place: "Непалгандж, Банке, Непал",
        date: "ИЮЛ 2023 — СЕН 2023",
        description:
          "Стажировка по эксплуатации двух СЭС Pure Energy по 10 МВт в Хаджуре (Банке)."
      }
    ]
  },
  education: {
    eyebrow: "ОБРАЗОВАНИЕ",
    title: "Образование.",
    items: [
      {
        status: "01 / СЕЙЧАС",
        date: "2026 — 2028 (ОЖИДАЕТСЯ)",
        institution: "Университет ИТМО",
        url: "https://itmo.ru/",
        qualification: "Магистратура, «Электроэнергетика и электротехника»",
        description:
          "Санкт-Петербург. Энергосистемы, ВИЭ и управление.",
        watermark: "ИТМО",
        featured: true
      },
      {
        status: "02 / ЗАВЕРШЕНО",
        date: "2018 — 2023",
        institution: "Университет Катманду",
        url: "https://ku.edu.np/",
        qualification: "Бакалавриат, электротехника и электроника (энергетика и управление)",
        description:
          "Дхуликхел, Непал. Выпускная работа — домашняя автоматизация на ПЛК.",
        watermark: "KU",
        featured: false
      }
    ],
    recognition: "ДОСТИЖЕНИЯ",
    scholarshipTitle: "Стипендия Правительства РФ (квота)",
    scholarshipText:
      "Обучение в магистратуре Университета ИТМО.",
    scholarshipYear: "2025"
  },
  interests: {
    eyebrow: "ЧТО Я ХОЧУ ИССЛЕДОВАТЬ",
    title: "Научные интересы.",
    items: [
      {
        title: "Агровольтаика",
        description: "Агрофотоэлектрические системы: еда и чистая энергия на одной земле."
      },
      {
        title: "Интеграция ВИЭ",
        description: "Надёжное подключение солнечной и другой возобновляемой генерации к слабым и современным сетям."
      },
      {
        title: "Энергоэффективные автономные системы",
        description: "Автономные машины и системы с минимальным потреблением энергии."
      },
      {
        title: "Цифровые двойники",
        description: "Виртуальные модели энергетических и сельскохозяйственных систем для мониторинга и оптимизации."
      },
      {
        title: "Интеллектуальное управление и автоматизация",
        description: "Умные стратегии управления, ПЛК и автоматизация реальных систем."
      }
    ]
  },
  projects: {
    eyebrow: "ИЗБРАННЫЕ РАБОТЫ",
    title: "Проекты.",
    items: [
      {
        category: "ВЫПУСКНАЯ РАБОТА · 2022 — 2023",
        title: "Домашняя автоматизация на основе ПЛК",
        paragraphs: [
          "Промышленное управление для жилого дома: ПЛК управляет приборами, датчики следят за состоянием, а сенсорная панель HMI позволяет контролировать систему вручную."
        ],
        tags: ["ПЛК", "LADDER", "ДАТЧИКИ", "HMI", "IOT"]
      }
    ],
    presentationsTitle: "ДОКЛАДЫ И ВЫСТУПЛЕНИЯ",
    viewConference: "Сайт конференции",
    viewPaper: "Читать статью",
    speaker: "СПИКЕР",
    talk: "ДОКЛАД"
  },
  blog: {
    eyebrow: "ПУБЛИКАЦИИ",
    title: "Блог.",
    myPosts: "МОИ ЗАПИСИ",
    elsewhere: "ОПУБЛИКОВАНО НА ДРУГИХ САЙТАХ",
    read: "Читать",
    empty: "Скоро здесь появятся новые записи.",
    back: "Ко всем записям",
    postLanguage: "Язык записи:"
  },
  gallery: {
    eyebrow: "На объектах и мероприятиях",
    title: "Галерея.",
    open: "Открыть фото",
    close: "Закрыть",
    previous: "Предыдущее фото",
    next: "Следующее фото",
    pause: "Пауза",
    play: "Продолжить",
    viewAll: "Вся галерея",
    back: "На главную"
  },
  research: {
    eyebrow: "Наука",
    title: "Исследования.",
    interestsTitle: "Интересы",
    publicationsTitle: "Публикации",
    talksTitle: "Доклады на конференциях",
    readPaper: "Читать статью"
  },
  now: {
    title: "Сейчас",
    updated: "Обновлено"
  },
  volunteering: {
    eyebrow: "Не только инженерия",
    title: "Волонтёрство и лидерство.",
    readMore: "Подробнее"
  },
  journey: {
    eyebrow: "Места, которые меня сформировали",
    title: "Мой путь.",
    countries: "страны",
    places: "мест"
  },
  certificates: {
    eyebrow: "ДОСТИЖЕНИЯ",
    title: "Сертификаты.",
    view: "Открыть сертификат",
    pending: "Сертификат скоро появится"
  },
  skills: {
    eyebrow: "С ЧЕМ Я РАБОТАЮ",
    title: "Навыки.",
    items: [
      { name: "Проектирование СЭС", group: "ЭНЕРГЕТИКА" },
      { name: "Трансформаторы и РПН", group: "ЭНЕРГЕТИКА" },
      { name: "Заземление подстанций (IEEE Std 80)", group: "ЭНЕРГЕТИКА" },
      { name: "Оборудование ВН/НН, инспекция и пусконаладка", group: "ЭНЕРГЕТИКА" },
      { name: "AutoCAD, PVsyst", group: "ПРОЕКТИРОВАНИЕ" },
      { name: "ETAP, PSCAD, MATLAB/Simulink", group: "МОДЕЛИРОВАНИЕ" },
      { name: "Python, C/C++", group: "ПРОГРАММИРОВАНИЕ" },
      { name: "ПЛК, релейно-контактная логика", group: "УПРАВЛЕНИЕ" }
    ],
    languagesEyebrow: "ЯЗЫКИ",
    languagesTitle: "Общение",
    languages: [
      { name: "Непальский", level: "Родной", note: "Родной язык" },
      { name: "Английский", level: "Свободно", note: "Профессиональный" },
      { name: "Хинди", level: "Свободно", note: "Профессиональный" },
      { name: "Русский", level: "B1", note: "Учусь на русском" }
    ]
  },
  contact: {
    eyebrow: "Контакты",
    titleFirst: "Давайте работать",
    titleSecond: "вместе.",
    copy:
      "Научное сотрудничество, место в аспирантуре или проект в области ВИЭ? Буду рад вашему письму.",
    formTitle: "НАПИШИТЕ МНЕ",
    name: "Ваше имя",
    email: "Ваш e-mail",
    message: "Ваше сообщение",
    send: "Отправить",
    sending: "Отправка…",
    success: "Спасибо! Сообщение отправлено. Я скоро отвечу.",
    error: "К сожалению, отправить сообщение не удалось. Напишите мне на почту.",
    orEmail: "Или напишите напрямую"
  },
  footer: {
    tagline: "ИНЖЕНЕРИЯ И ИДЕИ.",
    backTop: "НАВЕРХ ↑"
  }
};

export const content: Record<Lang, Content> = { en, ru };
