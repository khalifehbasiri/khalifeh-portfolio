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
  imageBackground?: "white";
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
  "Software developer focused on Python, AI-enabled automotive diagnostics, and full-stack applications. I have led production internal tools, built real-time machine learning interfaces, and shipped responsive Next.js products used by real customers.";

export const projects: Project[] = [
  {
    id: "zdash",
    title: "ZDash",
    description:
      "Engineered a Windows diagnostics platform for Nissan and Infiniti CONSULT-I ECUs with 9600-baud serial handshakes, framed-stream decoding for up to 22 channels, guarded fault-code workflows, and SQLite/WAL session recording. Integrated OpenAI Responses with complete vehicle context, Zod-validated human-approved tools, and grounded RAG workflows for service documentation.",
    image: "/images/projects/zdash-webpage.png",
    imageAlt:
      "ZDash website showing a classic Nissan 300ZX, live vehicle telemetry, and automotive ownership features",
    tags: [
      "TypeScript",
      "React",
      "Electron",
      "SQLite",
      "OpenAI API",
      "Zod",
      "Automotive Diagnostics",
      "AI Engineering",
    ],
    links: [
      {
        label: "Product Site",
        href: "https://www.zdash.app/",
      },
    ],
    featured: true,
    category: "personal",
  },
  {
    id: "leetbridge",
    title: "LeetBridge",
    description:
      "Published a Manifest V3 Chrome extension that captures accepted LeetCode submissions and saves source code with generated documentation to a user-selected GitHub repository. Built privacy-first GitHub authorization, duplicate prevention, resumable historical imports, and guided repository onboarding without a developer-operated backend.",
    image: "/images/projects/leetbridge.png",
    imageAlt: "LeetBridge logo with code brackets, sync arrows, and a bridge",
    imageFit: "cover",
    imageBackground: "white",
    tags: [
      "JavaScript",
      "Chrome Extensions",
      "Manifest V3",
      "GitHub API",
      "REST APIs",
    ],
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/gbaehcgejpbkdpmihkhapjkinclpajko",
      },
      {
        label: "GitHub",
        href: "https://github.com/khalifehbasiri/leetbridge",
      },
      {
        label: "Case Study",
        href: "/projects/leetbridge",
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
      "Built and deployed a real-time community platform with Next.js, Convex, and Clerk, implementing reactive updates, server-side authorization, threaded comments, per-user vote state, ownership checks, and cascade deletion.",
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
    id: "tandem-insulin-pump-simulator",
    title: "Tandem t:slim X2 Insulin Pump Simulator",
    description:
      "Engineered bolus and automated insulin-delivery logic within a four-person C++/Qt team, including carbohydrate and correction calculations, manual and extended dosing, CGM-driven basal adjustments, safety limits, suspend/resume behavior, and alerts.",
    image: "/images/projects/tandem-insulin-pump-simulator.jpg",
    imageAlt:
      "Tandem t:slim X2 insulin pump simulator showing a glucose chart and an extended insulin-delivery interval",
    tags: ["C++", "Qt", "Qt Charts", "SQLite", "UML"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/khalifehbasiri/Tandem-t-slim-Insulin-Pump-Simulator",
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
      "SQL",
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
      "Qt",
      "Qt Charts",
      "TensorFlow",
      "TensorFlow Lite",
      "MediaPipe",
      "Electron",
      "OpenAI API",
      "Zod",
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
      "AI Engineering",
      "Prompt Engineering",
      "Retrieval-Augmented Generation",
      "Automotive Software",
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
      "Engineered a multithreaded Python data explorer indexing and exporting metadata across 420 TB of Microsoft Azure Storage using Azure Blob Inventory, MongoDB, and SQLite while preserving UI responsiveness and the last valid database during failed refreshes.",
      "Reduced geographic-name validation time by 80% by building a bilingual, multithreaded Python application integrating the GNBC REST API and geospatial matching.",
      "Led a three-person Agile team through the design, implementation, and integration of a user-requested Name Manager module; collaborated with GNBC stakeholders to improve API usability.",
      "Performed defect reproduction, root-cause analysis, regression testing, and user-acceptance testing across multithreading, REST API, database, and geospatial workflows; validated staged releases with users across DFO's five regions and the Canadian Coast Guard.",
    ],
  },
  {
    role: "Freelance Frontend Developer",
    company: "Floxy",
    location: "Remote",
    period: "Apr 2025 - May 2025",
    image: "/images/brand/floxy-logo.png",
    imageAlt: "Floxy logo",
    highlights: [
      "Built and shipped a responsive Next.js marketing site supporting 20,000+ customers and reaching 23.9K monthly visits within four months of launch.",
      "Implemented mobile navigation, a proxy-type selector, auto-scrolling testimonials, language-specific API examples with copy-to-clipboard, reusable components, and centralized content models.",
    ],
  },
  {
    role: "System Administrator Intern",
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
    degree: "Bachelor of Computer Science - GPA: 3.5/4.0",
    school: "Carleton University",
    location: "Ottawa, ON",
    period: "2026",
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
