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
  role: string;
  contribution: string;
  status: "Live" | "Live demo" | "In development" | "Completed" | "Internal";
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
  "Software developer focused on Python, AI-enabled automotive diagnostics, and full-stack applications. I have led production internal tools, built real-time machine learning interfaces, and shipped responsive Next.js products used by real customers.";

export const projects: Project[] = [
  {
    id: "gallery-web-app",
    title: "Atelier — Art & Community",
    summary:
      "An art community built for discovery, publishing, and social interaction. The rebuild makes data boundaries, private state, and recovery part of the product design.",
    role: "Full-stack developer",
    contribution:
      "Built the Angular frontend and Express API, including sessions, storage, caching, and background work.",
    status: "Live demo",
    outcome: {
      headline: "Recovery by design",
      detail: "Staged publication and durable notification jobs.",
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
    title: "ZDash — AI-Assisted Diagnostics",
    summary:
      "A Windows workspace for Nissan and Infiniti CONSULT-I diagnostics. Live ECU telemetry meets an AI assistant grounded in vehicle context and service-manual evidence.",
    role: "Desktop & AI developer",
    contribution:
      "Building the diagnostics app, guarded assistant tools, and retrieval pipeline for repair-manual references.",
    status: "In development",
    outcome: {
      headline: "8,618 pages",
      detail: "Indexed in the service-manual retrieval prototype.",
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
    ],
    featured: true,
    category: "personal",
  },
  {
    id: "tandem-insulin-pump-simulator",
    title: "Tandem t:slim X2 Insulin Pump Simulator",
    summary:
      "An educational insulin-pump simulator with manual and extended boluses, automated basal adjustments, glucose charts, and safety scenarios.",
    role: "C++ / Qt developer",
    contribution:
      "Owned bolus and automated-delivery logic within a four-person team, including limits, alerts, and suspend/resume behavior.",
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
      "Accepted LeetCode solutions, automatically saved to GitHub with a readable archive. Built around a simple constraint: access only the repository the user chooses.",
    role: "Extension developer",
    contribution:
      "Built the extension, GitHub authorization, resumable imports, generated documentation, and store release.",
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
      "A live ASL alphabet recognizer that turns hand landmarks into confidence-scored predictions, with a webcam studio for building a translated message.",
    role: "ML & full-stack developer",
    contribution:
      "Connected MediaPipe landmarks, TensorFlow Lite inference, a Flask API, and the React webcam interface.",
    status: "Live demo",
    outcome: {
      headline: "21 hand landmarks",
      detail: "Converted into 63-feature prediction vectors.",
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
      "A community board where posts, votes, and threaded conversations update in real time. Permissions and per-user vote state are enforced on the server.",
    role: "Full-stack developer",
    contribution:
      "Built and deployed the Next.js interface, reactive Convex backend, and Clerk authentication.",
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
      "A responsive marketing site for a proxy platform serving 20,000+ customers, with reusable product pages and language-specific API examples.",
    role: "Frontend developer",
    contribution:
      "Built and shipped the Next.js site, from mobile navigation to product selectors and API examples.",
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
      "A desktop search tool for a large Azure data estate. Indexed metadata replaces slow file-location searches while background refreshes keep the interface responsive.",
    role: "Software developer",
    contribution:
      "Engineered multithreaded search, metadata exports, and updates that preserve the last valid database after a failed refresh.",
    status: "Internal",
    outcome: {
      headline: "~420 TB of data",
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
      "A bilingual validation tool for geographic names and coordinates. API records and geospatial matching replace manual entry-by-entry checks.",
    role: "Lead developer",
    contribution:
      "Led a three-person team and worked with DFO clients from requirements and demos through deployment and training.",
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
        role: "Frontend Developer",
        period: "2025",
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
