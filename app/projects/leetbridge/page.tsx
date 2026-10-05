import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../components/Footer";
import { CaseStudyNav } from "../gallery-web-app/CaseStudyNav";
import { projects } from "../../data/portfolio";
import { getTechTagColors } from "../../lib/tech-stack-colors";
import styles from "../gallery-web-app/case-study.module.css";
import leetStyles from "./case-study.module.css";
const project = projects.find((entry) => entry.id === "leetbridge")!;

export const metadata: Metadata = {
  title: "LeetBridge Case Study | Khalifeh Basiri",
  description:
    "How Khalifeh Basiri built and published LeetBridge, a privacy-conscious Chrome extension that syncs accepted LeetCode solutions to GitHub.",
  alternates: {
    canonical: "/projects/leetbridge",
  },
  openGraph: {
    title: "LeetBridge Case Study | Khalifeh Basiri",
    description:
      "A privacy-conscious Chrome extension for syncing accepted LeetCode solutions to a user-selected GitHub repository.",
    url: "/projects/leetbridge",
    images: [
      {
        url: "/images/projects/leetbridge.png",
        width: 1254,
        height: 1254,
        alt: "LeetBridge logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeetBridge Case Study | Khalifeh Basiri",
    description:
      "How LeetBridge turns accepted LeetCode solutions into a documented GitHub archive.",
    images: ["/images/projects/leetbridge.png"],
  },
};

const decisions = [
  {
    title: "Least-privilege GitHub access",
    body: "LeetBridge uses a GitHub App so users choose which repositories it can access. GitHub host access is requested only when the user starts the connection flow.",
  },
  {
    title: "No developer-operated backend",
    body: "Accepted code moves directly from the browser to GitHub over HTTPS. Credentials and settings remain in Chrome's extension storage on the user's device.",
  },
  {
    title: "Resilient historical imports",
    body: "Pagination, request pacing, retry cooldowns, and durable checkpoints let large histories recover from tab closures, service-worker restarts, and upstream rate limits.",
  },
  {
    title: "Repository-ready output",
    body: "Solutions are organized into predictable folders with per-problem documentation and a generated repository index that summarizes difficulty and language usage.",
  },
];

const learnings = [
  {
    title: "How browser extensions work",
    body: "I learned how Manifest V3 connects content scripts, a background service worker, and a popup through message passing. Separating page access from privileged operations helped me understand the responsibilities and lifecycles of each part.",
  },
  {
    title: "Scraping and structured data extraction",
    body: "I practiced DOM-based scraping and parsing submission responses to capture problem details, programming languages, submitted code, and acceptance status. Working with a dynamic page taught me to validate the data rather than rely on a single UI element.",
  },
  {
    title: "Authentication and permission boundaries",
    body: "I explored GitHub App authorization, repository-level access, local token storage, and optional browser permissions. A key lesson was that permission to contact a website and authorization to modify a repository are separate controls.",
  },
  {
    title: "Reliable API workflows",
    body: "Historical imports gave me practical experience with pagination, rate limits, retry cooldowns, duplicate detection, and saved checkpoints. I learned to treat interruptions as expected conditions and preserve progress for recovery.",
  },
  {
    title: "Packaging, publishing, and updates",
    body: "I took the project beyond a locally loaded extension by preparing icons, versioned ZIP packages, privacy disclosures, permission explanations, and a Chrome Web Store listing. Publishing also introduced the review process and the work involved in delivering follow-up updates.",
  },
];

const chapters = [
  { id: "overview", label: "The idea" },
  { id: "workflow", label: "How it works" },
  { id: "decisions", label: "Design decisions" },
  { id: "learning", label: "What I learned" },
  { id: "release", label: "Release & outcome" },
];
const storeUrl = project.links.find(
  (link) => link.label === "Chrome Web Store",
)!.href;
const githubUrl = project.links.find((link) => link.label === "GitHub")!.href;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      className={styles.arrow}
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M5 12h14m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function ChapterHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.chapterHeading}>
      <p className={styles.eyebrow}>
        <span>{number}</span> / {label}
      </p>
      <h2>{title}</h2>
      <p className={styles.chapterIntro}>{children}</p>
    </div>
  );
}

export default function LeetBridgeCaseStudy() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#overview">
        Skip to case study
      </a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            kbasiri<span>.</span>com
          </Link>
          <span className={styles.headerLabel}>PROJECT NOTES / LEETBRIDGE</span>
          <Link href="/projects" className={styles.backLink}>
            <span aria-hidden="true">←</span> All projects
          </Link>
        </div>
      </header>
      <main>
        <section className={styles.hero} aria-labelledby="case-study-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.dot} /> LeetBridge · Browser-extension
              case study
            </p>
            <h1 id="case-study-title">
              Accepted solutions.
              <br />
              <em>A lasting archive.</em>
            </h1>
            <p className={styles.heroIntro}>
              LeetCode solutions, safely synced to GitHub. Built around a simple
              constraint: an extension that saves code should only have access
              to the repository it needs.
            </p>
            <div className={styles.heroActions}>
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLink}
              >
                Get the extension <Arrow diagonal />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceLink}
              >
                View source <Arrow diagonal />
              </a>
            </div>
            <dl className={styles.projectMeta}>
              <div>
                <dt>Platform</dt>
                <dd>Chrome · Manifest V3</dd>
              </div>
              <div>
                <dt>Integration</dt>
                <dd>GitHub App · GitHub API</dd>
              </div>
            </dl>
          </div>
          <figure className={styles.heroVisual}>
            <div className={styles.previewFrame}>
              <div className={styles.previewBar}>
                <span aria-hidden="true">● ● ●</span>
                <span>leetbridge / solution archive</span>
                <Arrow diagonal />
              </div>
              <div
                className={`${styles.previewImage} ${leetStyles.archivePreview}`}
              >
                <Image
                  src="/images/projects/leetbridge-archive.png"
                  alt="Generated GitHub solution archive with progress, languages, and difficulty breakdowns"
                  fill
                  sizes="(min-width: 1200px) 560px, (min-width: 900px) 48vw, 100vw"
                  priority
                  className={styles.screenshot}
                />
              </div>
            </div>
            <div className={styles.visualCaption}>
              <span className={styles.dot} /> Solve a problem. Keep the work.
            </div>
            <figcaption>
              Generated solution archive · screenshot from the Chrome Web Store
              listing.
            </figcaption>
          </figure>
        </section>
        <div className={styles.quickTake} aria-label="Three design principles">
          {[
            [
              "01",
              "Scope access to one repository.",
              "Let the user choose where accepted code goes.",
            ],
            [
              "02",
              "Keep the path direct.",
              "Browser → GitHub, with no developer-operated backend.",
            ],
            [
              "03",
              "Expect interrupted imports.",
              "Save checkpoints and recover progress.",
            ],
          ].map(([number, heading, body]) => (
            <div key={number}>
              <span>{number}</span>
              <div>
                <h2>{heading}</h2>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.readingLayout}>
          <CaseStudyNav
            chapters={chapters}
            liveUrl={storeUrl}
            liveLabel="View on Chrome Web Store"
          />
          <div className={styles.chapters}>
            <section id="overview" className={styles.chapter}>
              <ChapterHeading
                number="01"
                label="The idea"
                title="Useful automation. A smaller permission boundary."
              >
                Saving accepted solutions should be convenient without asking
                for broad access to unrelated repositories.
              </ChapterHeading>
              <p className={styles.prose}>
                I liked the convenience of extensions that saved accepted
                LeetCode solutions to GitHub, but I was not comfortable giving a
                solution-syncing tool broad read and write access across my
                repositories. It only needed one place to save code.
              </p>
              <blockquote className={styles.pullQuote}>
                “Give the tool the access its job requires.”
              </blockquote>
              <p className={styles.prose}>
                That became the design constraint for LeetBridge: keep the
                useful automation while letting the user choose exactly which
                repository it can access. It was also a chance to learn the full
                browser-extension lifecycle, from data extraction to a published
                release.
              </p>
              <details className={`${styles.details} ${styles.stackDetails}`}>
                <summary>
                  The full stack <span aria-hidden="true">+</span>
                </summary>
                <div className={leetStyles.tags}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md border px-2 py-1 font-mono text-xs ${getTechTagColors(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </details>
            </section>
            <section id="workflow" className={styles.chapter}>
              <ChapterHeading
                number="02"
                label="How it works"
                title="From an accepted submission to a useful archive."
              >
                The extension separates page data, privileged API work, and user
                controls. Each part has a specific responsibility.
              </ChapterHeading>
              <figure className={styles.timeline}>
                <div className={styles.timelinePhase}>
                  <span className={styles.phaseLabel}>Inside the browser</span>
                  <ol>
                    <li>
                      <span>01</span>
                      <div>
                        <h3>Detect and validate</h3>
                        <p>
                          Capture acceptance status, problem details, language,
                          code, and submission ID. Check for duplicates.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span>02</span>
                      <div>
                        <h3>Use the selected repository</h3>
                        <p>
                          Guided GitHub App authorization connects the extension
                          to the repository the user chooses.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span>03</span>
                      <div>
                        <h3>Publish organized output</h3>
                        <p>
                          Send code directly to GitHub with predictable solution
                          folders, per-problem documentation, and a generated
                          index.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className={styles.timelineAsync}>
                  <span className={styles.phaseLabel}>
                    For previous solutions
                  </span>
                  <div className={styles.asyncStep}>
                    <span>04</span>
                    <h3>Import with recovery</h3>
                    <p>
                      Paginate history, pace requests, respect retry cooldowns,
                      and save durable checkpoints so interruptions preserve
                      progress.
                    </p>
                    <div className={styles.asyncPath}>
                      Saved checkpoint <Arrow /> Resume import
                    </div>
                  </div>
                </div>
                <figcaption>
                  Manifest V3 content scripts, the background service worker,
                  and popup communicate through message passing.
                </figcaption>
              </figure>
              <div className={leetStyles.screens}>
                <figure>
                  <Image
                    src="/images/projects/leetbridge-popup.png"
                    alt="LeetBridge popup with connected accounts and sync settings"
                    width={1280}
                    height={800}
                    sizes="(min-width: 900px) 420px, 100vw"
                  />
                  <figcaption>Connected accounts and sync settings.</figcaption>
                </figure>
                <figure>
                  <Image
                    src="/images/projects/leetbridge-setup.png"
                    alt="LeetBridge GitHub repository setup showing a verified connection"
                    width={1280}
                    height={800}
                    sizes="(min-width: 900px) 420px, 100vw"
                  />
                  <figcaption>
                    Repository access verified during onboarding.
                  </figcaption>
                </figure>
              </div>
            </section>
            <section id="decisions" className={styles.chapter}>
              <ChapterHeading
                number="03"
                label="Design decisions"
                title="Trust comes from explicit boundaries."
              >
                Repository access, credential storage, and interrupted work all
                affect whether an automatic sync feels safe to use.
              </ChapterHeading>
              <div className={styles.securityNote}>
                <span aria-hidden="true">↳</span>
                <p>
                  <strong>Two separate controls</strong>Browser permission to
                  contact GitHub is different from GitHub authorization to
                  modify a repository. Both need deliberate boundaries.
                </p>
              </div>
              <div className={styles.decisions}>
                {decisions.map((decision, index) => (
                  <article key={decision.title} className={styles.decision}>
                    <p className={styles.decisionLabel}>
                      Decision {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3>{decision.title}</h3>
                      <p>{decision.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <section id="learning" className={styles.chapter}>
              <ChapterHeading
                number="04"
                label="What I learned"
                title="A browser extension is a system of lifecycles."
              >
                Building it taught me to separate page access from privileged
                operations, validate extracted data, and treat interrupted API
                work as an expected condition.
              </ChapterHeading>
              <div className={styles.decisions}>
                {learnings.map((learning, index) => (
                  <article key={learning.title} className={styles.decision}>
                    <p className={styles.decisionLabel}>
                      Lesson {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3>{learning.title}</h3>
                      <p>{learning.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <section id="release" className={styles.chapter}>
              <ChapterHeading
                number="05"
                label="Release & outcome"
                title="Beyond a locally loaded extension."
              >
                LeetBridge is published on the Chrome Web Store. The result is a
                complete workflow: connect a repository, sync accepted work,
                import older solutions, and keep the archive readable.
              </ChapterHeading>
              <p className={styles.prose}>
                Shipping meant preparing versioned packages, privacy
                disclosures, permission explanations, and the store listing.
                Review and follow-up updates became part of the project,
                alongside the implementation.
              </p>
              <div className={styles.closing}>
                <p className={styles.eyebrow}>What I’ll carry forward</p>
                <h3>
                  Convenience works best when users can understand the trust
                  behind it.
                </h3>
                <p>
                  Narrow access, visible connection state, and recoverable
                  imports are part of the product experience. Designing those
                  boundaries was as valuable as building the sync itself.
                </p>
                <div className={styles.closingLinks}>
                  <a href={storeUrl} target="_blank" rel="noopener noreferrer">
                    View on Chrome Web Store <Arrow diagonal />
                  </a>
                  <Link href="/projects">
                    More projects <Arrow />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
