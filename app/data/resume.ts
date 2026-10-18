// Generated from public/Khalifeh_Basiri_Resume.pdf. Run npm run resume:sync; do not edit.
export const resume = {
  "name": "Khalifeh Basiri",
  "location": "Ottawa, ON",
  "phone": "(613) 413-9403",
  "email": "khalifa7k@gmail.com",
  "profiles": [
    {
      "label": "linkedin.com/in/khalifeh-basiri",
      "href": "https://www.linkedin.com/in/khalifeh-basiri"
    },
    {
      "label": "github.com/khalifehbasiri",
      "href": "https://github.com/khalifehbasiri"
    },
    {
      "label": "kbasiri.com",
      "href": "https://kbasiri.com/"
    }
  ],
  "education": [
    {
      "school": "Carleton University",
      "location": "Ottawa, ON",
      "degree": "Bachelor of Computer Science, GPA: 3.5/4.0",
      "year": "2026"
    }
  ],
  "experience": [
    {
      "company": "Fisheries and Oceans Canada (DFO) | Government of Canada",
      "location": "Ottawa, ON",
      "positions": [
        {
          "role": "Software Developer (internship)",
          "period": "Aug. 2024 – Dec. 2025",
          "highlights": [
            "Built a bilingual Python geographic-name validator using the GNBC REST API and geospatial matching, replacing manual entry-by-entry file checks with validation completed in minutes.",
            "Expanded the validator into a modular Name Manager with comparison, GNBC search, and geospatial helper workflows; CHS Atlantic reported one process fell from two weeks to a few hours.",
            "Led a three-person Agile team and worked directly with DFO clients through requirements, design, development, demos, deployment, and user training for the Name Manager.",
            "Performed integration, regression, and user-acceptance testing (UAT) across API, database, threading, and geospatial workflows; validated releases with users in five DFO regions and the Canadian Coast Guard and supported production."
          ]
        },
        {
          "role": "Programmer (internship)",
          "period": "Sep. 2023 – Aug. 2024",
          "highlights": [
            "Engineered a multithreaded Python Storage Explorer using Azure Blob Inventory, MongoDB, and SQLite to search and export metadata across a 420 TB+ Azure storage estate; cut DFO staff’s file-location searches from hours to seconds or minutes.",
            "Implemented metadata refresh handling that kept searches responsive and preserved the last valid database after failed updates, allowing staff to continue using the Explorer."
          ]
        }
      ]
    },
    {
      "company": "Floxy",
      "location": "Remote",
      "href": "https://www.floxy.io/",
      "positions": [
        {
          "role": "Frontend Developer",
          "period": "Mar. 2025 – May 2025",
          "highlights": [
            "Built Floxy’s responsive Next.js site with React, TypeScript, and Tailwind CSS for a platform with 20,000+ customers; the site reached 23.9K monthly visits within four months.",
            "Organized the site into reusable components and centralized content models, keeping product pages and language-specific API examples consistent and easy to update."
          ]
        }
      ]
    }
  ],
  "projects": [
    {
      "name": "ZDash",
      "technologies": "TypeScript, React, Electron, SQLite, OpenAI API, LangChain, LangGraph",
      "links": [
        {
          "label": "Product Site",
          "href": "https://www.zdash.app/"
        }
      ],
      "highlights": [
        "Engineered a Windows vehicle diagnostics app for Nissan and Infiniti CONSULT-I ECUs with live telemetry, fault-code diagnostics, and SQLite/WAL session recording.",
        "Built a diagnostic agent using LangChain tools and LangGraph orchestration, with scoped tool permissions and SQLite checkpoints for resumable investigations; prototyped RAG over 8,618 service-manual pages using PostgreSQL/pgvector hybrid search and page-level citations."
      ]
    },
    {
      "name": "Atelier – Art Community",
      "technologies": "Angular, Express, PostgreSQL, MongoDB, Redis",
      "links": [
        {
          "label": "GitHub",
          "href": "https://github.com/khalifehbasiri/Gallery-web-app"
        },
        {
          "label": "Live Demo",
          "href": "https://gallery-web-app-two.vercel.app/"
        }
      ],
      "highlights": [
        "Built and deployed an Angular/Express art community with PostgreSQL relationships, MongoDB artwork storage, Redis caching, and signed cursor pagination; handled interrupted publication through reconciliation and compensating writes.",
        "Implemented rotating refresh tokens, replay detection, CSRF protection, and session revocation; built a GitHub Actions CI/CD pipeline with automated security testing and staged deployments."
      ]
    },
    {
      "name": "Job-Tracker-AI",
      "technologies": "Python, PySide6, OpenAI API, SQLite, Pydantic",
      "links": [
        {
          "label": "GitHub",
          "href": "https://github.com/khalifehbasiri/Job-Tracker-AI"
        },
        {
          "label": "Download",
          "href": "https://github.com/khalifehbasiri/Job-Tracker-AI/releases"
        }
      ],
      "highlights": [
        "Built a Python desktop job tracker with Gmail/Outlook OAuth integration and a two-stage AI pipeline using the OpenAI Decisions API for email classification and the Responses API for structured extraction."
      ]
    },
    {
      "name": "Tandem t:slim X2 Insulin Pump Simulator",
      "technologies": "C++, Qt, SQLite, UML",
      "links": [
        {
          "label": "GitHub",
          "href": "https://github.com/khalifehbasiri/Tandem-t-slim-Insulin-Pump-Simulator"
        }
      ],
      "highlights": [
        "Designed bolus calculations and CGM-driven insulin-control logic in a four-person C++/Qt team, adding safety limits, suspend/resume behavior, alerts, and SQLite-backed event history."
      ]
    }
  ],
  "skills": [
    {
      "label": "Languages",
      "value": "Python, TypeScript, JavaScript, Java, C++, C, SQL, HTML, CSS"
    },
    {
      "label": "Frameworks and libraries",
      "value": "React, Next.js, Angular, Express, Node.js, Electron, Flask, Qt, Qt Charts, TensorFlow, TensorFlow Lite, MediaPipe, Tailwind CSS, pytest, LangChain, LangGraph"
    },
    {
      "label": "Cloud, APIs, and tools",
      "value": "Microsoft Azure, Azure Blob Storage, QGIS, Docker, Git, Linux, REST APIs, OpenAI API, OAuth"
    },
    {
      "label": "Databases and caching",
      "value": "PostgreSQL, pgvector, MongoDB, SQLite, Redis, Oracle, Convex"
    }
  ]
};
