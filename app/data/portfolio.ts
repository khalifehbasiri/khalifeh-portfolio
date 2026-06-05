export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
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
  highlights: string[];
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  details: string[];
};

export const contact = {
  email: "khalifa7k@gmail.com",
  location: "Ottawa, ON",
};

export const projects: Project[] = [
  {
    id: "sign-language-translator",
    title: "Real-Time Sign Language Translator",
    description:
      "Built a real-time ASL translation system using TensorFlow and MediaPipe for gesture recognition, integrated with a React frontend for live webcam processing. Flask backend for inference, containerized with Docker and deployed on AWS EC2.",
    tags: [
      "TensorFlow",
      "MediaPipe",
      "React",
      "Flask",
      "Docker",
      "AWS EC2",
    ],
    links: [],
    featured: true,
    category: "personal",
    note: "Coming soon",
  },
  {
    id: "collaborative-board",
    title: "Collaborative Board",
    description:
      "Full-stack social board app with real-time post feeds, voting, comment threads, and light/dark theme. Clerk authentication with protected actions, Convex real-time queries/mutations, per-user vote tracking, and cascade deletes - deployed on Vercel with Bun pipelines.",
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
      "Built and shipped Floxy's marketing landing page serving 20,000+ customers, growing to 23.9K monthly visits within 4 months. Implemented conversion-focused UI with mobile nav, proxy-type selector, auto-scrolling testimonials, and language-based API code snippets.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
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
      "Built an internal Storage Explorer app to navigate 420 TB of Azure data for DFO employees - streamlining access for habitat protection, species management, and scientific research teams.",
    tags: ["Python", "Microsoft Azure", "MongoDB", "SQLite"],
    links: [],
    category: "work",
    note: "Internal · DFO",
  },
  {
    id: "geo-names-validator",
    title: "Geographical Names Validator",
    description:
      "Bilingual Python tool that validates departmental geographic names against GNBC records, flagging discrepancies and Indigenous language variants using geospatial libraries.",
    tags: ["Python", "Geospatial", "Bilingual", "Data Validation"],
    links: [],
    category: "work",
    note: "Internal · DFO",
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
      "Tailwind CSS",
      "TensorFlow",
      "MediaPipe",
      "Flask",
      "Docker",
      "AWS",
      "Clerk",
      "Vercel",
      "Bun",
      "Git",
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
    ],
  },
];

export const workExperience: WorkExperience[] = [
  {
    role: "Programmer - Internship",
    company: "Department of Fisheries and Oceans Canada",
    location: "Ottawa, ON",
    period: "Oct 2023 – Dec 2025",
    highlights: [
      "Built a Storage Explorer app to navigate 420 TB of Azure data and a bilingual Python tool to validate departmental geographic names against GNBC records.",
      "Engineered a data management solution using Python, MongoDB, and SQLite with real-time Azure sync and advanced search; maintained bilingual user manuals and presented at multisector meetings.",
      "Maintained and supported enterprise cloud-based systems handling large-scale departmental data, including troubleshooting, synchronization workflows, and secure data management.",
    ],
  },
  {
    role: "Frontend Developer - Contract",
    company: "Floxy",
    location: "Remote",
    period: "2025",
    highlights: [
      "Built and shipped Floxy's marketing landing page using Next.js, React, TypeScript, and Tailwind CSS - serving 20,000+ customers and growing to 23.9K monthly visits within 4 months.",
      "Implemented conversion-focused UI including mobile nav, proxy-type selector, auto-scrolling testimonials, language-based API code snippets with copy-to-clipboard, and SEO metadata.",
      "Structured codebase with reusable section components and centralized data models.",
    ],
  },
  {
    role: "System Administrator - Internship",
    company: "Tahan Business Services Inc.",
    location: "Ottawa, ON",
    period: "May 2023 – Aug 2023",
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
