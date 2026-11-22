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
    interests: "Interests",
    projects: "Projects",
    blog: "Blog",
    certificates: "Certificates",
    connect: "Let's connect",
    contact: "Contact",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    language: "Language"
  },
  hero: {
    role: "ELECTRICAL & POWER ENGINEER · MS STUDENT AT ITMO",
    taglineFirst: "Powering systems.",
    taglineSecond: "Designing a sustainable tomorrow.",
    description:
      "Master's student in Electrical and Power Engineering at ITMO University, with hands-on experience in utility-scale solar PV and power equipment. Seeking Ph.D. research opportunities in renewable energy integration and intelligent control.",
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
    { value: "02+", label: "YEARS OF INDUSTRY EXPERIENCE", href: "#experience" },
    { value: "45 MW", label: "UTILITY-SCALE SOLAR PV", href: "#solar-projects" },
    { value: "04", label: "CONFERENCE TALKS", href: "#presentations" },
    { value: "06", label: "CERTIFICATES", href: "#certificates" }
  ],
  about: {
    eyebrow: "A LITTLE ABOUT ME",
    title: "Engineering with purpose.",
    lead:
      "I'm Shubham — an electrical and power engineer working where renewable energy, power systems and intelligent control meet.",
    paragraphs: [
      "I'm a Master's student in Electrical and Power Engineering at ITMO University, building on a foundation in power systems, renewable energy and control engineering from Kathmandu University.",
      "Before ITMO, I worked on utility-scale solar PV plants totalling 45 MW in Nepal — design, documentation and commissioning support — took part in initial assessments of smaller projects, and worked with power transformers and distribution equipment up to 33 kV.",
      "I'm looking for Ph.D. research opportunities in renewable energy integration, intelligent control and automation — building energy-efficient, sustainable technologies for real-world use."
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
          "Designed electrical layouts and PV table arrangements for utility-scale solar plants, including the 10 MW and 15 MW Pashupati Renewables projects, and took part in initial assessments of smaller projects. Performed substation earthing calculations (IEEE Std 80), prepared BOMs and specifications, took part in inspection, testing and commissioning, and used AutoCAD and PVsyst for design and energy forecasting."
      },
      {
        role: "Assistant Engineer",
        company: "Nepal Ekarat Engineering Co. Pvt. Ltd. (NEEK)",
        companyUrl: "https://neek-transformer.com",
        place: "Nepal",
        date: "SEP 2023 — JUN 2024",
        description:
          "Provided technical support for power transformers, on-load tap changers (OLTCs) and distribution equipment, and helped troubleshoot transformer issues in systems up to 33 kV."
      },
      {
        role: "Graduate Engineer Trainee — O&M",
        company: "Golyan Group (Pure Energy)",
        companyUrl: "",
        place: "Nepalgunj, Banke, Nepal",
        date: "JUL 2023 — SEP 2023",
        description:
          "Operation and maintenance (O&M) trainee at Pure Energy's two 10 MW utility-scale solar PV plants in Khajura, Banke — Golyan Group's 20 MW solar power facility."
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
          "Saint Petersburg, Russia. Master's program focused on electrical power systems, renewable energy and control engineering.",
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
          "School of Engineering, Dhulikhel, Nepal. Undergraduate thesis on PLC-based home automation.",
        watermark: "KU",
        featured: false
      }
    ],
    recognition: "RECOGNITION",
    scholarshipTitle: "Russian Government Quota Scholarship",
    scholarshipText:
      "Studying at ITMO University as a recipient of the Russian Government Quota Scholarship.",
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
    title: "Projects & talks.",
    items: [
      {
        category: "UNDERGRADUATE THESIS · 2022 — 2023",
        title: "Home Automation Using PLC",
        paragraphs: [
          "Undergraduate thesis at Kathmandu University applying industrial control concepts to the automated operation of a residential system, with a Programmable Logic Controller (PLC) as the central processor.",
          "Sensors monitor conditions in the home, ladder logic controls the appliances, and a touch-panel Human Machine Interface (HMI) supports monitoring and manual control."
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
    eyebrow: "HAVE A PROJECT OR AN OPPORTUNITY?",
    titleFirst: "Let's build",
    titleSecond: "something meaningful.",
    copy:
      "Interested in renewable energy, power systems or a research collaboration? Write to me. I'd be glad to connect.",
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
    interests: "Интересы",
    projects: "Проекты",
    blog: "Блог",
    certificates: "Сертификаты",
    connect: "Связаться",
    contact: "Контакты",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    language: "Язык"
  },
  hero: {
    role: "ИНЖЕНЕР-ЭЛЕКТРОЭНЕРГЕТИК · МАГИСТРАНТ ИТМО",
    taglineFirst: "Энергия для систем.",
    taglineSecond: "Проектирую устойчивое будущее.",
    description:
      "Магистрант направления «Электроэнергетика и электротехника» Университета ИТМО с практическим опытом в крупных солнечных электростанциях и силовом оборудовании. Ищу возможности для исследований в аспирантуре в области интеграции ВИЭ и интеллектуального управления.",
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
    { value: "02+", label: "ГОДА ОПЫТА В ОТРАСЛИ", href: "#experience" },
    { value: "45 МВт", label: "КРУПНЫЕ СЭС", href: "#solar-projects" },
    { value: "04", label: "ВЫСТУПЛЕНИЯ НА КОНФЕРЕНЦИЯХ", href: "#presentations" },
    { value: "06", label: "СЕРТИФИКАТОВ", href: "#certificates" }
  ],
  about: {
    eyebrow: "НЕМНОГО ОБО МНЕ",
    title: "Инженерия с целью.",
    lead:
      "Я Шубхам — инженер-электроэнергетик. Меня интересует то, где встречаются возобновляемая энергетика, энергосистемы и интеллектуальное управление.",
    paragraphs: [
      "Я учусь в магистратуре Университета ИТМО по направлению «Электроэнергетика и электротехника». Базу в энергосистемах, возобновляемой энергетике и теории управления я получил в Университете Катманду.",
      "До ИТМО я работал над крупными солнечными электростанциями общей мощностью 45 МВт в Непале — проектирование, документация и пусконаладка, — участвовал в предварительной оценке небольших проектов, а также работал с силовыми трансформаторами и распределительным оборудованием до 33 кВ.",
      "Я ищу возможности для исследований в аспирантуре в области интеграции ВИЭ, интеллектуального управления и автоматизации — чтобы создавать энергоэффективные и устойчивые технологии для реальной жизни."
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
          "Проектировал электрические схемы и раскладку столов ФЭМ для крупных солнечных электростанций, в том числе для проектов Pashupati Renewables мощностью 10 МВт и 15 МВт, участвовал в предварительной оценке небольших проектов. Выполнял расчёты заземления подстанций (IEEE Std 80), готовил спецификации и ведомости материалов, участвовал в инспекциях, испытаниях и пусконаладке, работал в AutoCAD и PVsyst."
      },
      {
        role: "Младший инженер",
        company: "Nepal Ekarat Engineering Co. Pvt. Ltd. (NEEK)",
        companyUrl: "https://neek-transformer.com",
        place: "Непал",
        date: "СЕН 2023 — ИЮН 2024",
        description:
          "Оказывал техническую поддержку по силовым трансформаторам, устройствам РПН и распределительному оборудованию, помогал устранять неисправности трансформаторов в сетях до 33 кВ."
      },
      {
        role: "Инженер-стажёр по эксплуатации и обслуживанию (O&M)",
        company: "Golyan Group (Pure Energy)",
        companyUrl: "",
        place: "Непалгандж, Банке, Непал",
        date: "ИЮЛ 2023 — СЕН 2023",
        description:
          "Стажировка в службе эксплуатации и технического обслуживания двух солнечных электростанций Pure Energy мощностью по 10 МВт в Хаджуре (Банке) — СЭС Golyan Group общей мощностью 20 МВт."
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
          "Санкт-Петербург, Россия. Программа с фокусом на электроэнергетические системы, возобновляемую энергетику и теорию управления.",
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
          "Инженерная школа, Дхуликхел, Непал. Выпускная работа — домашняя автоматизация на основе ПЛК.",
        watermark: "KU",
        featured: false
      }
    ],
    recognition: "ДОСТИЖЕНИЯ",
    scholarshipTitle: "Стипендия Правительства РФ (квота)",
    scholarshipText:
      "Обучаюсь в Университете ИТМО по квоте Правительства Российской Федерации.",
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
    title: "Проекты и доклады.",
    items: [
      {
        category: "ВЫПУСКНАЯ РАБОТА · 2022 — 2023",
        title: "Домашняя автоматизация на основе ПЛК",
        paragraphs: [
          "Выпускная работа в Университете Катманду: применение принципов промышленного управления для автоматизации жилого дома, где центральным процессором служит программируемый логический контроллер (ПЛК).",
          "Датчики следят за состоянием дома, релейно-контактная логика управляет приборами, а сенсорная панель HMI позволяет контролировать систему и управлять ею вручную."
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
    eyebrow: "ЕСТЬ ПРОЕКТ ИЛИ ПРЕДЛОЖЕНИЕ?",
    titleFirst: "Давайте создадим",
    titleSecond: "что-то значимое.",
    copy:
      "Интересуетесь возобновляемой энергетикой, энергосистемами или научным сотрудничеством? Напишите мне — буду рад знакомству.",
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
