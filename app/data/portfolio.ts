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
  company: string;
  location: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  positions: {
    role: string;
    period: string;
    highlights: string[];
  }[];
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
      "Building a Windows diagnostics app for Nissan and Infiniti CONSULT-I ECUs with live telemetry and guarded fault-code workflows. Integrated an AI assistant with Zod-validated, user-approved tools; prototyped Retrieval-Augmented Generation (RAG) over 8,618 service-manual pages using PostgreSQL/pgvector hybrid search and page-level citations.",
    image: "/images/projects/zdash-webpage.png",
    imageAlt:
      "ZDash website showing a classic Nissan 300ZX, live vehicle telemetry, and automotive ownership features",
    tags: [
      "TypeScript",
      "React",
      "Electron",
      "SQLite",
      "PostgreSQL/pgvector",
      "OpenAI API",
      "AI Engineering",
      "RAG",
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
      "Built a real-time ASL alphabet recognizer that converts 21 MediaPipe hand landmarks into 63-feature prediction vectors. Served confidence-scored TensorFlow Lite inference through a Flask API with a live React webcam interface.",
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
      "Built a responsive Next.js site for a platform serving 20,000+ customers; the site reached 23.9K monthly visits within four months. Used reusable components and centralized content models for consistent product pages and API examples.",
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
      "Engineered a multithreaded Python app for searching and exporting metadata across approximately 420 TB of Azure enterprise data, cutting staff file-location searches from hours to seconds or minutes. Used Azure Blob Inventory, MongoDB, SQLite, and metadata refreshes that preserved the last valid database after failed updates.",
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
      "Architected a bilingual, modular, multithreaded Python tool integrating the Geographical Names Board of Canada API and geospatial matching to validate names, coordinates, languages, and authoritative records. Worked directly with DFO clients from requirements and demos through deployment, training, and support. CHS Atlantic separately reported that one process fell from two weeks to a few hours.",
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
    skills: ["MongoDB", "SQLite", "PostgreSQL/pgvector", "SQL", "Oracle", "Convex"],
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
    company: "Fisheries and Oceans Canada",
    location: "Ottawa, ON",
    image: "/images/brand/dfo-canada-mark.png",
    imageAlt: "Government of Canada logo",
    imageFit: "contain",
    positions: [
      {
        role: "Software Developer",
        period: "Aug 2024–Dec 2025",
        highlights: [
          "Built a bilingual Python geographic-name validator that replaced manual entry-by-entry checks with validation completed in minutes.",
          "Expanded it into the modular Name Manager; CHS Atlantic reported that one process fell from two weeks to a few hours.",
          "Led a three-person Agile team and worked directly with DFO clients from requirements and demos through deployment, training, and support.",
        ],
      },
      {
        role: "Programmer",
        period: "Sep 2023–Aug 2024",
        highlights: [
          "Built a multithreaded Python Storage Explorer for metadata across an approximately 420 TB Azure storage estate, cutting staff file-location searches from hours to seconds or minutes.",
          "Kept searches responsive during updates and preserved the last valid database when a refresh failed.",
        ],
      },
    ],
  },
  {
    company: "Floxy",
    location: "Remote",
    image: "/images/brand/floxy-logo.png",
    imageAlt: "Floxy logo",
    positions: [
      {
        role: "Freelance Frontend Developer",
        period: "Mar 2025 - May 2025",
        highlights: [
          "Built and shipped a responsive Next.js marketing site supporting 20,000+ customers and reaching 23.9K monthly visits within four months of launch.",
          "Implemented mobile navigation, a proxy-type selector, auto-scrolling testimonials, language-specific API examples with copy-to-clipboard, reusable components, and centralized content models.",
        ],
      },
    ],
  },
  {
    company: "Tahan Business Services Inc.",
    location: "Ottawa, ON",
    image: "/images/experience/tahan.svg",
    imageAlt: "Tahan Business Services branded visual",
    positions: [
      {
        role: "System Administrator Intern",
        period: "May 2023 - Aug 2023",
        highlights: [
          "Managed Microsoft Cloud infrastructure with automated real-time backups, on-site hardware/software support, and computer configuration.",
          "Tracked corporate financials using Excel (bank statements, payroll, taxes) and handled administrative operations including scheduling and client communications.",
        ],
      },
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
