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
  role: "ELECTRICAL & ELECTRONICS ENGINEER",
  tagline: {
    firstLine: "Engineering systems.",
    secondLine: "Designing tomorrow."
  },
  description:
    "Electrical and Electronics Engineer interested in power systems, engineering design and automation.",
  location: "SAINT PETERSBURG, RUSSIA",
  image: "/profile-placeholder.svg",
  // Add a public professional email before publishing. No address was supplied in the archive.
  email: "",
  // Add only public profile URLs you want displayed on the website.
  socialLinks: [] as { label: string; href: string }[]
};

export const navigation: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" }
];

export const highlights = [
  { value: "02+", label: "YEARS OF EXPERIENCE" },
  { value: "08", label: "CORE TECHNICAL SKILLS" },
  { value: "01", label: "FEATURED ACADEMIC PROJECT" },
  { value: "2025", label: "GOVERNMENT SCHOLARSHIP" }
];

export const about = {
  lead:
    "I'm Shubham — an Electrical and Electronics Engineer with a foundation in engineering design, power systems and automation.",
  paragraphs: [
    "My professional experience includes working on Solar PV plant design and power and distribution transformers. I'm currently continuing my academic journey at ITMO University in Saint Petersburg, Russia.",
    "I enjoy understanding how systems work, connecting theory with practical engineering, and exploring technologies that make everyday systems more intelligent."
  ]
};

export const experiences = [
  {
    role: "Design Engineer",
    company: "Renergo Developers",
    date: "AUG 2024 — SEP 2025",
    description: "Worked on the design of Solar PV plants in Nepal.",
    number: "01"
  },
  {
    role: "Assistant Engineer",
    company: "Nepal Ekarat Engineering Company Pvt. Ltd.",
    date: "SEP 2023 — JUN 2024",
    description: "Worked with power and distribution transformers.",
    number: "02"
  }
];

export const education = [
  {
    status: "01 / CURRENT",
    date: "OCT 2025 — PRESENT",
    institution: "ITMO University",
    qualification: "Foundation Program",
    description:
      "Preparatory studies in Saint Petersburg, Russia. The CV states a planned progression to a master's program in Electric Power Engineering and Electrical Engineering (04.13.02) after the preparatory faculty.",
    watermark: "ITMO",
    featured: true
  },
  {
    status: "02 / COMPLETED",
    date: "AUG 2018 — JUN 2023",
    institution: "Kathmandu University",
    qualification: "Bachelor of Engineering",
    description:
      "Electrical and Electronics Engineering — School of Engineering, Dhulikhel, Nepal.",
    watermark: "KU",
    featured: false
  }
];

export const scholarship = {
  title: "Russian Government Quota Scholarship — 2025",
  description:
    "Recipient of the Russian Government Quota Scholarship for 2025 from Nepal.",
  year: "2025"
};

export const projects = [
  {
    category: "ACADEMIC PROJECT",
    title: "Home Automation System Using PLC",
    paragraphs: [
      "A home automation concept using a Programmable Logic Controller (PLC) as its central processor. Sensors monitor temperature, light, gas, occupancy and water levels.",
      "Ladder logic controls appliances such as lights, a pump and a fan, while alarms respond to gas or intrusion signals. A touch panel Human Machine Interface (HMI) supports monitoring and manual control."
    ],
    tags: ["PLC", "LADDER LOGIC", "SENSORS", "HMI"]
  }
];

export const skills: Skill[] = [
  { name: "PLC Programming (Ladder Logic)", group: "AUTOMATION" },
  { name: "Sensor Integration", group: "AUTOMATION" },
  { name: "System Prototyping", group: "ENGINEERING" },
  { name: "AutoCAD", group: "DESIGN" },
  { name: "OOP & Procedural Principles", group: "PROGRAMMING" },
  { name: "Experimental Methodology", group: "RESEARCH" },
  { name: "Technical Documentation", group: "RESEARCH" },
  { name: "Data Analysis", group: "RESEARCH" }
];

export const languages = [
  { name: "English", level: "C1", note: "Tested in 2023" },
  { name: "Russian", level: "A1", note: "As listed in CV" }
];
