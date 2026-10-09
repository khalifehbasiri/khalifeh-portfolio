export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
  fit?: "cover" | "contain";
  background?: "white" | "dark";
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  summaryHighlights?: string[];
  role: string;
  contribution: string;
  status:
    | "Live"
    | "Live demo"
    | "Released"
    | "In development"
    | "Completed"
    | "Internal";
  outcome: { headline: string; detail: string };
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  imageBackground?: "white";
  images?: ProjectImage[];
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
  "Software developer building focused on Python and TypeScript applications across desktop, full-stack, and applied AI. I’ve delivered government tools, shipped responsive Next.js products used by real customers, and built AI workflows with validation, human review, and recovery.";

export const projects: Project[] = [
  {
    id: "job-tracker-ai",
    title: "Job Tracker AI",
    summary:
      "An AI job tracker for Gmail and Outlook. GPT-6 Luna classifies hiring updates; GPT-5.4 mini extracts application details.",
    summaryHighlights: ["AI job tracker"],
    role: "AI & desktop developer",
    contribution:
      "Built the desktop app, evidence checks, human review, and resumable imports.",
    status: "Released",
    outcome: {
      headline: "Two-stage AI pipeline",
      detail: "OpenAI Decisions + Responses with Structured Outputs.",
    },
    description:
      "Built a Windows-first AI job tracker using OpenAI Decisions for email relevance and event classification, Responses for schema-constrained extraction, and Python validation before application updates. Exact evidence checks, identity matching, chronological event history, and human review connect probabilistic outputs to durable SQLite records. Resumable imports, cached inference results, and spending reservations control recovery and API costs.",
    image: "/images/projects/job-tracker-ai-dashboard.png",
    imageAlt:
      "Job Tracker AI desktop dashboard with fictional applications and hiring-stage summaries",
    images: [
      {
        src: "/images/projects/job-tracker-ai-dashboard.png",
        alt: "Job Tracker AI dark dashboard showing fictional applications, interview counts, and hiring stages",
        label: "Application dashboard",
        fit: "contain",
      },
      {
        src: "/images/projects/job-tracker-ai-review.png",
        alt: "Job Tracker AI review inbox showing uncertain email classifications that need human confirmation",
        label: "AI review inbox",
        fit: "contain",
        background: "white",
      },
      {
        src: "/images/projects/job-tracker-ai-imports.png",
        alt: "Job Tracker AI historical email import page with a date range and persisted import history",
        label: "Email import history",
        fit: "contain",
        background: "white",
      },
    ],
    tags: [
      "Python",
      "OpenAI API",
      "PySide6",
      "Pydantic",
      "SQLite",
      "AI Engineering",
      "Prompt Engineering",
      "Structured Outputs",
    ],
    links: [
      {
        label: "Download",
        href: "https://github.com/khalifehbasiri/Job-Tracker-AI/releases/latest",
      },
      {
        label: "GitHub",
        href: "https://github.com/khalifehbasiri/Job-Tracker-AI",
      },
      { label: "Case Study", href: "/projects/job-tracker-ai" },
    ],
    featured: true,
    category: "personal",
  },
  {
    id: "gallery-web-app",
    title: "Atelier: Art & Community",
    summary:
      "An art community for sharing work and discovering artists. A system design rebuild added Redis caching, secure sessions, and recoverable publishing.",
    summaryHighlights: ["system design", "Redis caching"],
    role: "Full-stack developer",
    contribution:
      "Built the Angular app, Express API, and workflows across MongoDB and PostgreSQL.",
    status: "Live demo",
    outcome: {
      headline: "System design in practice",
      detail: "Data boundaries, caching, security, and recovery.",
    },
    description:
      "Rebuilt a full-stack art community around deliberate data and failure boundaries: MongoDB artwork documents, transactional PostgreSQL relationships, and Redis caching with private viewer state kept separate. Designed staged image publication, revocable sessions, and a durable notification outbox so speed does not come at the cost of correctness.",
    image: "/images/projects/atelier.png",
    imageAlt:
      "Atelier gallery demo displaying credited public-domain artwork from The Met",
    images: [
      {
        src: "/images/projects/atelier-discover.jpg",
        alt: "Atelier discovery page with artwork and collection search",
        label: "Discover art",
        fit: "contain",
        background: "white",
      },
      {
        src: "/images/projects/atelier-explore.jpg",
        alt: "Atelier Explore feed displaying artwork from the community",
        label: "Explore feed",
        fit: "contain",
        background: "white",
      },
      {
        src: "/images/projects/atelier-artwork.jpg",
        alt: "Atelier artwork detail page for Irises with artist credits and appreciation count",
        label: "Artwork details",
        fit: "contain",
        background: "white",
      },
    ],
    tags: [
      "Angular",
      "TypeScript",
      "RxJS",
      "NgRx SignalStore",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "System Design",
    ],
    links: [
      {
        label: "Live Site",
        href: "https://gallery-web-app-two.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/khalifehbasiri/Gallery-web-app",
      },
      {
        label: "Case Study",
        href: "/projects/gallery-web-app",
      },
    ],
    featured: true,
    category: "personal",
  },
  {
    id: "zdash",
    title: "ZDash: AI-Assisted Diagnostics",
    summary:
      "Live CONSULT-I diagnostics with an AI assistant. OpenAI and pgvector power RAG over service manuals, grounded in vehicle context.",
    summaryHighlights: ["AI assistant", "RAG"],
    role: "Desktop & AI developer",
    contribution:
      "Building telemetry, hybrid retrieval, citations, and user-approved AI tools.",
    status: "In development",
    outcome: {
      headline: "RAG over 8,618 manual pages",
      detail: "Hybrid-search prototype with page-level citations.",
    },
    description:
      "Building a Windows diagnostics app for Nissan and Infiniti CONSULT-I ECUs with live telemetry and guarded fault-code workflows. Integrated an AI assistant with Zod-validated, user-approved tools; prototyped Retrieval-Augmented Generation (RAG) over 8,618 service-manual pages using PostgreSQL/pgvector hybrid search and page-level citations.",
    image: "/images/projects/zdash-webpage.png",
    imageAlt:
      "ZDash website showing a classic Nissan 300ZX, live vehicle telemetry, and automotive ownership features",
    images: [
      {
        src: "/images/projects/zdash-webpage.png",
        alt: "ZDash product website featuring a Nissan 300ZX",
        label: "Product site",
      },
      {
        src: "/images/projects/zdash-overview.jpg",
        alt: "ZDash application overview showing simulated ECU telemetry and engine activity",
        label: "Overview · simulator",
        fit: "contain",
      },
      {
        src: "/images/projects/zdash-ai-chatbot.jpg",
        alt: "ZDash diagnostic chatbot in local preview mode with a sample conversation and simulated vehicle evidence",
        label: "AI chatbot · preview",
        fit: "contain",
      },
    ],
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
      { label: "Case Study", href: "/projects/zdash" },
    ],
    featured: true,
    category: "personal",
  },
  {
    id: "tandem-insulin-pump-simulator",
    title: "Tandem t:slim X2 Insulin Pump Simulator",
    summary:
      "An educational C++/Qt simulation of insulin delivery and glucose changes, with boluses, basal adjustments, and safety constraints.",
    summaryHighlights: ["simulation", "safety constraints"],
    role: "C++ / Qt developer",
    contribution:
      "Owned dosing logic, limits, alerts, and suspend/resume behavior in a four-person team.",
    status: "Completed",
    outcome: {
      headline: "4 scenario walkthroughs",
      detail: "Dosing, profiles, battery safety, and cartridge alerts.",
    },
    description:
      "Engineered bolus and automated insulin-delivery logic within a four-person C++/Qt team, including carbohydrate and correction calculations, manual and extended dosing, CGM-driven basal adjustments, safety limits, suspend/resume behavior, and alerts.",
    image: "/images/projects/tandem-insulin-pump-simulator.jpg",
    imageAlt:
      "Tandem t:slim X2 insulin pump simulator showing a glucose chart and an extended insulin-delivery interval",
    images: [
      {
        src: "/images/projects/tandem-insulin-pump-simulator.jpg",
        alt: "Educational insulin pump simulator showing extended bolus delivery on a glucose chart",
        label: "Bolus & glucose",
        fit: "contain",
      },
      {
        src: "/images/projects/tandem-profile.jpg",
        alt: "Educational insulin pump simulator validating the time slot of a personal profile",
        label: "Profile validation",
        fit: "contain",
      },
      {
        src: "/images/projects/tandem-battery.jpg",
        alt: "Educational insulin pump simulator dashboard showing the low battery scenario",
        label: "Battery safety",
        fit: "contain",
      },
      {
        src: "/images/projects/tandem-cartridge.jpg",
        alt: "Educational insulin pump simulator showing a cartridge warning and highlighted glucose alert region",
        label: "Cartridge & alerts",
        fit: "contain",
      },
    ],
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
    id: "leetbridge",
    title: "LeetBridge",
    summary:
      "Accepted LeetCode solutions synced through the GitHub API, with generated READMEs, least-privilege authorization, and resumable imports.",
    summaryHighlights: ["GitHub API", "least-privilege authorization"],
    role: "Extension developer",
    contribution:
      "Built and published the extension, from repository setup to historical imports.",
    status: "Live",
    outcome: {
      headline: "Published on Chrome",
      detail: "A complete onboarding, sync, and import workflow.",
    },
    description:
      "Published a Manifest V3 Chrome extension that captures accepted LeetCode submissions and saves source code with generated documentation to a user-selected GitHub repository. Built privacy-first GitHub authorization, duplicate prevention, resumable historical imports, and guided repository onboarding without a developer-operated backend.",
    image: "/images/projects/leetbridge.png",
    imageAlt: "LeetBridge logo with code brackets, sync arrows, and a bridge",
    imageFit: "cover",
    imageBackground: "white",
    images: [
      {
        src: "/images/projects/leetbridge.png",
        alt: "LeetBridge logo with code brackets, sync arrows, and a bridge",
        label: "LeetBridge",
        fit: "cover",
        background: "white",
      },
      {
        src: "/images/projects/leetbridge-popup.png",
        alt: "LeetBridge Chrome listing screenshot showing connected accounts, sync settings, and last accepted submission",
        label: "Sync dashboard",
        fit: "contain",
        background: "white",
      },
      {
        src: "/images/projects/leetbridge-archive.png",
        alt: "LeetBridge Chrome listing screenshot showing a generated GitHub solution archive with progress and difficulty charts",
        label: "GitHub archive",
        fit: "contain",
      },
      {
        src: "/images/projects/leetbridge-setup.png",
        alt: "LeetBridge Chrome listing screenshot showing completed GitHub repository onboarding",
        label: "Repository setup",
        fit: "contain",
        background: "white",
      },
    ],
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
    summary:
      "AI-powered computer vision for ASL alphabet recognition. MediaPipe hand landmarks feed a TensorFlow Lite classifier that returns letters and confidence.",
    summaryHighlights: ["computer vision", "TensorFlow Lite"],
    role: "ML & full-stack developer",
    contribution:
      "Built the React camera interface, Flask API, and TensorFlow training pipeline.",
    status: "Live demo",
    outcome: {
      headline: "Landmark-based ML inference",
      detail: "21 hand landmarks → 63 features per prediction.",
    },
    description:
      "Built a real-time ASL alphabet recognizer that converts 21 MediaPipe hand landmarks into 63-feature prediction vectors. Served confidence-scored TensorFlow Lite inference through a Flask API with a live React webcam interface.",
    image: "/images/projects/sign-language-translator.png",
    imageAlt: "SignTranslate AI project website",
    images: [
      {
        src: "/images/projects/sign-language-translator.png",
        alt: "SignTranslate landing page with a hand-landmark illustration",
        label: "Project introduction",
      },
      {
        src: "/images/projects/sign-language-studio.jpg",
        alt: "SignTranslate translation studio showing camera and message panels awaiting input",
        label: "Translation studio",
        fit: "contain",
        background: "white",
      },
    ],
    tags: [
      "Python",
      "TensorFlow",
      "TensorFlow Lite",
      "MediaPipe",
      "Computer Vision",
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
    summary:
      "Posts, votes, and threaded comments update in real time through a Convex reactive backend, with Clerk authentication and server-enforced permissions.",
    summaryHighlights: ["reactive backend", "server-enforced permissions"],
    role: "Full-stack developer",
    contribution:
      "Built and deployed the Next.js app, authentication, and ownership checks.",
    status: "Live demo",
    outcome: {
      headline: "Live, reactive updates",
      detail: "Posts, votes, and comments share one community feed.",
    },
    description:
      "Built and deployed a real-time community platform with Next.js, Convex, and Clerk, implementing reactive updates, server-side authorization, threaded comments, per-user vote state, ownership checks, and cascade deletion.",
    image: "/images/projects/collaborative-board.png",
    imageAlt: "Collaborative Board project website",
    images: [
      {
        src: "/images/projects/collaborative-board.png",
        alt: "Collab Board landing page introducing the community platform",
        label: "Project introduction",
      },
      {
        src: "/images/projects/collaborative-board-feed.jpg",
        alt: "Collab Board working dashboard showing community posts, voting controls, filters, and comment buttons",
        label: "Live community board",
        fit: "contain",
        background: "white",
      },
    ],
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
    summary:
      "A marketing site for a proxy platform serving 20,000+ customers, with reusable product pages and language-specific API examples.",
    summaryHighlights: ["reusable product pages", "API examples"],
    role: "Frontend developer",
    contribution:
      "Shipped the responsive Next.js site, navigation, product selectors, and copyable API examples.",
    status: "Live",
    outcome: {
      headline: "23.9K monthly visits",
      detail: "Reached within four months of launch.",
    },
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
    summary:
      "Find files across a large Azure data estate using indexed metadata. Background refreshes keep searches responsive.",
    summaryHighlights: ["indexed metadata", "Background refreshes"],
    role: "Software developer",
    contribution:
      "Built multithreaded search, exports, and refreshes that preserve the last valid database.",
    status: "Internal",
    outcome: {
      headline: "420TB+ of data",
      detail: "File-location searches reduced to seconds or minutes.",
    },
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
    summary:
      "Validate geographic names and coordinates against authoritative API records, using bilingual rules and geospatial matching.",
    summaryHighlights: ["API records", "geospatial matching"],
    role: "Lead developer",
    contribution:
      "Led a three-person team through requirements, client demos, deployment, and training.",
    status: "Internal",
    outcome: {
      headline: "Weeks → hours",
      detail: "CHS Atlantic reported this improvement for one process.",
    },
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
      "Angular",
      "RxJS",
      "NgRx SignalStore",
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
      "Supabase Storage",
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
    skills: [
      "MongoDB",
      "SQLite",
      "PostgreSQL",
      "PostgreSQL/pgvector",
      "Redis",
      "SQL",
      "Oracle",
      "Convex",
    ],
  },
  {
    label: "Domains",
    skills: [
      "Web Development",
      "System Design",
      "Web Security",
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
          "Built bilingual Python geographic-name tools using the GNBC REST API and geospatial matching; CHS Atlantic reported one workflow fell from two weeks to a few hours.",
          "Led a three-person Agile team and worked directly with clients through requirements, demos, deployment, training, and production support.",
          "Tested API, database, threading, and geospatial workflows; validated releases with users across five DFO regions and the Canadian Coast Guard.",
        ],
      },
      {
        role: "Programmer",
        period: "Sep 2023–Aug 2024",
        highlights: [
          "Built a multithreaded Python Storage Explorer using Azure Blob Inventory, MongoDB, and SQLite to search metadata across an approximately 420 TB storage estate, reducing file-location searches from hours to seconds or minutes.",
          "Kept searches responsive during metadata refreshes and preserved the last valid database after failed updates.",
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
        role: "Frontend Developer",
        period: "Mar 2025 - May 2025",
        highlights: [
          "Shipped a responsive Next.js site with React, TypeScript, and Tailwind CSS for Floxy, a platform serving 20,000+ customers; the site reached 23.9K monthly visits within four months.",
          "Built reusable components and centralized content models for product pages, mobile navigation, proxy selection, and copyable API examples.",
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
          "Configured Microsoft cloud backups for business files and supported day-to-day IT operations.",
          "Built and configured employee computers and resolved on-site hardware, software, and connectivity issues.",
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
