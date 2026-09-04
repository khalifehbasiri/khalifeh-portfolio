import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../components/Footer";

const chromeStoreUrl =
  "https://chromewebstore.google.com/detail/gbaehcgejpbkdpmihkhapjkinclpajko";
const githubUrl = "https://github.com/khalifehbasiri/leetbridge";

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

const flow = [
  ["01", "Detect", "Observe an accepted result on a LeetCode problem page."],
  ["02", "Validate", "Extract the problem, language, code, and submission ID."],
  ["03", "Authorize", "Use the GitHub App's user-selected repository scope."],
  ["04", "Publish", "Write the solution and refresh generated documentation."],
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

export default function LeetBridgeCaseStudy() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-tight text-foreground"
          >
            kbasiri<span className="text-accent">.</span>com
          </Link>
          <Link
            href="/projects"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Back to projects
          </Link>
        </div>
      </header>

      <main>
        <section className="border-b border-border/60">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.25fr_0.75fr] md:items-center">
            <div>
              <p className="mb-4 font-mono text-sm text-accent">
                Chrome extension case study
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Turning accepted solutions into a portfolio-ready GitHub archive
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                LeetBridge automatically captures accepted LeetCode submissions
                and saves them to a repository selected by the user, including
                organized source files, problem documentation, and a browsable
                solution index.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-85"
                >
                  Install extension
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  View source
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-2xl shadow-black/20">
              <Image
                src="/images/projects/leetbridge.png"
                alt="LeetBridge logo"
                width={1254}
                height={1254}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Platform", "Chrome, Manifest V3"],
              ["Integration", "GitHub App and REST API"],
              ["Architecture", "Client-side extension"],
              ["Release", "Chrome Web Store"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {label}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border/60 bg-surface/40">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2">
            <div>
              <p className="font-mono text-sm text-accent">Why I built it</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                Useful automation, with less access
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                I found existing Chrome extensions that synced LeetCode
                solutions to GitHub. I liked the convenience, but I was not
                comfortable giving a solution-syncing tool broad read and write
                access across my GitHub repositories when it only needed to
                save code in one place.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                That led to the question behind LeetBridge: could I build the
                same workflow while letting users grant access to just one
                dedicated solutions repository?
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                I also wanted to understand how browser extensions are built.
                This was a chance to learn the full process, from extracting
                data from a live page to packaging and publishing something
                other people could install.
              </p>
            </div>
            <div>
              <p className="font-mono text-sm text-accent">The solution</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                Make repository scope a design requirement
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                I chose a GitHub App so users can select only the repository
                they want to use, rather than needing to grant access to every
                repository. Keeping that scope narrow was a way to reduce
                unnecessary exposure, not a claim that any integration is
                risk-free.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                LeetBridge listens for an accepted result, validates the
                submission, checks for duplicates, and writes the solution to
                the selected repository. It also generates documentation and
                supports resumable historical imports, keeping the convenience
                that drew me to the idea in the first place.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="font-mono text-sm text-accent">System flow</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            From accepted submission to documented repository
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {flow.map(([number, title, body]) => (
              <div
                key={number}
                className="relative rounded-xl border border-border bg-surface p-5"
              >
                <span className="font-mono text-xs text-accent">{number}</span>
                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border/60 bg-surface/40">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="font-mono text-sm text-accent">
              Engineering decisions
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-foreground">
              Designed for trust, recovery, and maintainable output
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {decisions.map((decision) => (
                <article
                  key={decision.title}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <h3 className="font-semibold text-foreground">
                    {decision.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {decision.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="font-mono text-sm text-accent">What I learned</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            From a personal security concern to a shipped product
          </h2>
          <dl className="mt-8 divide-y divide-border/60">
            {learnings.map((learning) => (
              <div
                key={learning.title}
                className="grid gap-3 py-6 first:pt-0 last:pb-0 md:grid-cols-[1fr_2fr] md:gap-8"
              >
                <dt className="font-semibold text-foreground">
                  {learning.title}
                </dt>
                <dd className="text-sm leading-relaxed text-muted">
                  {learning.body}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-2xl border border-accent/30 bg-surface p-8 sm:p-10">
            <p className="font-mono text-sm text-accent">Outcome</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground">
              Shipped as a public Chrome extension with a complete onboarding
              and repository workflow
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              The finished product combines browser integration, authenticated
              third-party APIs, durable import state, generated documentation,
              privacy disclosures, and store-ready packaging in one focused
              user experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-85"
              >
                Install LeetBridge
              </a>
              <Link
                href="/projects"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Explore more projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
