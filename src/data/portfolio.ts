export type NavigationItem = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  group: string;
};

export const profile = {
  name: "SHUBHAM NIRAULA",
  initials: "SN",
  role: "ELECTRICAL & POWER ENGINEER · MS STUDENT AT ITMO",
  tagline: {
    firstLine: "Powering systems.",
    secondLine: "Designing a sustainable tomorrow."
  },
  description:
    "Master's student in Electrical and Power Engineering at ITMO University, with hands-on experience in utility-scale solar PV and power equipment. Seeking Ph.D. research opportunities in renewable energy integration and intelligent control.",
  location: "SAINT PETERSBURG, RUSSIA",
  image: "/profile.jpg",
  email: "shubhamniraula47@gmail.com",
  academicEmail: "shubhamniraula@niuitmo.ru",
  // CV file in the public folder. Replace public/Shubham_Niraula_CV.pdf to update it.
  cv: "/Shubham_Niraula_CV.pdf",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-niraula/" }
  ] as { label: string; href: string }[]
};

export const navigation: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Interests", href: "#interests" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" }
];

export const highlights = [
  { value: "02+", label: "YEARS OF INDUSTRY EXPERIENCE" },
  { value: "25 MW", label: "UTILITY-SCALE SOLAR PV" },
  { value: "03", label: "CONFERENCE PRESENTATIONS" },
  { value: "04", label: "LANGUAGES" }
];

export const about = {
  lead:
    "I'm Shubham — an electrical and power engineer working where renewable energy, power systems and intelligent control meet.",
  paragraphs: [
    "I'm a Master's student in Electrical and Power Engineering at ITMO University, building on a foundation in power systems, renewable energy and control engineering from Kathmandu University.",
    "Before ITMO, I worked on the electrical design, documentation and commissioning support of 10 MW and 15 MW solar PV plants, and on power transformers and distribution equipment up to 33 kV.",
    "I'm looking for Ph.D. research opportunities in renewable energy integration, intelligent control and automation — building energy-efficient, sustainable technologies for real-world use."
  ]
};

export const experiences = [
  {
    role: "Design Engineer",
    company: "Renergo Developers Pvt. Ltd. — Noida, India (Hybrid)",
    date: "JUL 2024 — SEP 2025",
    description:
      "Designed electrical layouts and PV table arrangements for utility-scale solar plants, including the 10 MW and 15 MW Pashupati Renewables projects. Performed substation earthing calculations (IEEE Std 80), prepared BOMs and specifications, took part in inspection, testing and commissioning, and used AutoCAD and PVsyst for design and energy forecasting.",
    number: "01"
  },
  {
    role: "Assistant Engineer",
    company: "Nepal Ekarat Engineering Co. Pvt. Ltd. — Nepal",
    date: "SEP 2023 — JUN 2024",
    description:
      "Provided technical support for power transformers, on-load tap changers (OLTCs) and distribution equipment, and helped troubleshoot transformer issues in systems up to 33 kV.",
    number: "02"
  }
];

export const education = [
  {
    status: "01 / CURRENT",
    date: "2026 — 2028 (EXPECTED)",
    institution: "ITMO University",
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
    qualification: "BE, Electrical and Electronics Engineering (Power & Control)",
    description:
      "School of Engineering, Dhulikhel, Nepal. Undergraduate thesis on PLC-based home automation.",
    watermark: "KU",
    featured: false
  }
];

export const scholarship = {
  title: "Russian Government Quota Scholarship",
  description:
    "Studying at ITMO University as a recipient of the Russian Government Quota Scholarship.",
  year: "2025"
};

export const interests = [
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
];

export const projects = [
  {
    category: "UNDERGRADUATE THESIS · 2022 — 2023",
    title: "Home Automation Using PLC",
    paragraphs: [
      "Undergraduate thesis at Kathmandu University applying industrial control concepts to the automated operation of a residential system, with a Programmable Logic Controller (PLC) as the central processor.",
      "Sensors monitor conditions in the home, ladder logic controls the appliances, and a touch-panel Human Machine Interface (HMI) supports monitoring and manual control."
    ],
    tags: ["PLC", "LADDER LOGIC", "SENSORS", "HMI", "IOT"]
  }
];

export const presentations = [
  {
    title:
      "IoT Based Home Automation System Using Programmable Logic Controller (PLC) and Human Machine Interface (HMI)",
    venue: "Kathmandu University Communication Automation and Power, Kathmandu University",
    year: "2024"
  },
  {
    title:
      "Influence of Personal Factors on Learning Russian: Research and Findings",
    venue: "XV Congress of Young Scientists, ITMO University",
    year: "2026"
  },
  {
    title:
      "Research on the Influence of Personality Factors on Russian Language Learning",
    venue:
      "XVIII International Student Scientific-Practical Conference, Herzen State Pedagogical University of Russia",
    year: "2026"
  }
];

export const skills: Skill[] = [
  { name: "Solar PV Plant Design", group: "POWER & ENERGY" },
  { name: "Transformers & OLTCs", group: "POWER & ENERGY" },
  { name: "Substation Grounding (IEEE Std 80)", group: "POWER & ENERGY" },
  { name: "HV/LV Equipment, Inspection & Commissioning", group: "POWER & ENERGY" },
  { name: "AutoCAD, PVsyst", group: "DESIGN" },
  { name: "ETAP, PSCAD, MATLAB/Simulink", group: "SIMULATION" },
  { name: "Python, C/C++", group: "PROGRAMMING" },
  { name: "PLC Ladder Logic", group: "CONTROLS" }
];

export const languages = [
  { name: "Nepali", level: "Native", note: "Mother tongue" },
  { name: "English", level: "Fluent", note: "Professional" },
  { name: "Hindi", level: "Fluent", note: "Professional" },
  { name: "Russian", level: "B1", note: "Studying in Russian" }
];
