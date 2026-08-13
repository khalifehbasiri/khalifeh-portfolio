export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
  category: "work" | "personal";
  /** Shown when there are no links (e.g. internal work projects). */
  note?: string;
};

export type WorkExperience = {
  role: string;
  company: string;
  location: string;
  period: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  highlights: string[];
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  details: string[];
};

export const contact = {
  email: "khalifa7k@gmail.com",
  location: "Ottawa, ON",
};

export const profileSummary =
  "Software developer focused on Python, cloud data tools, and full-stack web apps. I have led production internal tools, built real-time machine learning interfaces, and shipped responsive Next.js products used by real customers.";

export const projects: Project[] = [
  {
    id: "z32-telemetry",
    title: "300ZX Telemetry System",
    description:
      "Building a Raspberry Pi and Python-powered CONSULT-I system for my 1990 Nissan 300ZX, with live diagnostics, trip logging, an in-car display, and a phone-friendly dashboard.",
    image: "/images/projects/z32-cartoon-orange.png",
    imageAlt: "Cartoon-style orange Nissan 300ZX Z32 with telemetry graphics",
    tags: [
      "Python",
      "Raspberry Pi",
      "FastAPI",
      "WebSockets",
      "Embedded Systems",
    ],
    links: [
      {
        label: "Coming Soon - View Progress",
        href: "/projects/z32-telemetry",
      },
    ],
    featured: true,
    category: "personal",
  },
  {
    id: "sign-language-translator",
    title: "Real-Time Sign Language Translator",
    description:
      "Built a real-time ASL translation system that converts 21 MediaPipe hand landmarks into 63-feature prediction vectors. Served confidence-scored TensorFlow Lite inference through a Flask API with a live React webcam interface.",
    image: "/images/projects/sign-language-translator.png",
    imageAlt: "SignTranslate AI project website",
    tags: [
      "Python",
      "TensorFlow",
      "TensorFlow Lite",
      "MediaPipe",
      "React",
      "Flask",
    ],
    links: [
      {
        label: "Live Site",
        href: "https://real-time-sign-language-translator-woad.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/khalifehbasiri/Real-Time-Sign-Language-Translator",
      },
    ],
    featured: true,
    category: "personal",
  },
  {
    id: "collaborative-board",
    title: "Collaborative Board",
    description:
      "Built and deployed a real-time community board with authenticated posts, voting, threaded comments, live updates, protected actions, per-user vote tracking, ownership checks, and cascade deletion using Next.js, Convex, and Clerk.",
    image: "/images/projects/collaborative-board.png",
    imageAlt: "Collaborative Board project website",
    tags: ["Next.js", "TypeScript", "Convex", "Clerk", "Tailwind CSS"],
    links: [
      {
        label: "Live Site",
        href: "https://collaborative-board-psi.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/khalifehbasiri/collaborative-board",
      },
    ],
    featured: true,
    category: "personal",
  },
  {
    id: "floxy-landing-page",
    title: "Floxy Marketing Site",
    description:
      "Built and shipped Floxy's production marketing website supporting 20,000+ customers and reaching 23.9K monthly visits within four months. Implemented responsive, SEO-focused UI with mobile nav, proxy selectors, testimonials, API examples, and reusable content models.",
    image: "/images/projects/floxy-marketing-site.png",
    imageAlt: "Floxy marketing website",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "Vercel"],
    links: [
      {
        label: "Live Site",
        href: "https://www.floxy.io/",
      },
    ],
    category: "work",
  },
  {
    id: "storage-explorer",
    title: "Azure Storage Explorer",
    description:
      "Engineered a multithreaded internal app for searching and exporting records across approximately 420 TB of Azure enterprise data. Used Azure Blob Inventory, MongoDB, SQLite, and a fault-tolerant daily refresh that preserved the active database after failed updates.",
    image: "/images/brand/dfo-project-sharp.webp",
    imageAlt: "Fisheries and Oceans Canada logo",
    imageFit: "cover",
    tags: [
      "Python",
      "Microsoft Azure",
      "Azure Blob Storage",
      "MongoDB",
      "SQLite",
      "Multithreading",
    ],
    links: [],
    category: "work",
    note: "Internal - DFO",
  },
  {
    id: "geo-names-validator",
    title: "Bilingual Name Manager",
    description:
      "Architected a bilingual, modular, multithreaded Python tool integrating the Geographical Names Board of Canada API and geospatial matching to validate names, coordinates, languages, and authoritative records.",
    image: "/images/brand/dfo-project-sharp.webp",
    imageAlt: "Fisheries and Oceans Canada logo",
    imageFit: "cover",
    tags: [
      "Python",
      "REST APIs",
      "Geospatial",
      "Bilingual",
      "Data Validation",
      "Multithreading",
    ],
    links: [],
    category: "work",
    note: "Internal - DFO",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "C",
      "C++",
      "Java",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "Frameworks & Tools",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Flask",
      "TensorFlow",
      "TensorFlow Lite",
      "MediaPipe",
      "Docker",
      "AWS",
      "Microsoft Azure",
      "Azure Blob Storage",
      "Clerk",
      "Vercel",
      "Bun",
      "Git",
      "GitHub",
      "Linux/Unix",
      "REST APIs",
    ],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "SQLite", "SQL", "Oracle", "Convex"],
  },
  {
    label: "Domains",
    skills: [
      "Web Development",
      "Machine Learning & AI",
      "Computer Vision",
      "Cloud & Containers",
      "Database Management",
      "Geospatial Data",
      "Testing & Release Management",
      "Stakeholder Collaboration",
    ],
  },
];

export const workExperience: WorkExperience[] = [
  {
    role: "Software Developer Intern",
    company: "Department of Fisheries and Oceans Canada",
    location: "Ottawa, ON",
    period: "Sep 2023 - Dec 2025",
    image: "/images/brand/dfo-canada-mark.png",
    imageAlt: "Government of Canada logo",
    imageFit: "contain",
    highlights: [
      "Led end-to-end delivery of two production Python applications and coordinated a cross-departmental team through requirements, architecture, testing, staged deployment, and support.",
      "Engineered a multithreaded Azure Storage Explorer using Python, Azure Blob Inventory, MongoDB, and SQLite to search and export records across approximately 420 TB of enterprise data.",
      "Architected a bilingual, modular Name Manager integrating the GNBC API and geospatial matching to validate names, coordinates, languages, and authoritative records.",
      "Managed Git-based version control, integration, regression, and user-acceptance testing with stakeholder feedback from DFO's five administrative regions and the Canadian Coast Guard.",
    ],
  },
  {
    role: "Frontend Developer - Contract",
    company: "Floxy",
    location: "Remote",
    period: "2025",
    image: "/images/brand/floxy-logo.png",
    imageAlt: "Floxy logo",
    highlights: [
      "Built and shipped a production marketing website supporting 20,000+ customers and reaching 23.9K monthly visits within four months.",
      "Used Next.js, React, TypeScript, and Tailwind CSS to deliver a responsive, SEO-focused user experience.",
      "Implemented mobile navigation, a proxy-type selector, auto-scrolling testimonials, language-specific API examples with copy-to-clipboard, reusable components, and centralized content models.",
    ],
  },
  {
    role: "System Administrator - Internship",
    company: "Tahan Business Services Inc.",
    location: "Ottawa, ON",
    period: "May 2023 - Aug 2023",
    image: "/images/experience/tahan.svg",
    imageAlt: "Tahan Business Services branded visual",
    highlights: [
      "Managed Microsoft Cloud infrastructure with automated real-time backups, on-site hardware/software support, and computer configuration.",
      "Tracked corporate financials using Excel (bank statements, payroll, taxes) and handled administrative operations including scheduling and client communications.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science - GPA: 3.7",
    school: "Carleton University",
    location: "Ottawa, ON",
    period: "Graduated 2026",
    image: "/images/brand/carleton-logo-red.png",
    imageAlt: "Carleton University crest",
    imageFit: "cover",
    details: [
      "Coursework in algorithms, databases, software engineering, systems programming, and machine learning.",
    ],
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/khalifehbasiri",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khalifeh-basiri/",
  },
];
