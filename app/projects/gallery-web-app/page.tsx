import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../components/Footer";
import { projects } from "../../data/portfolio";
import { CaseStudyNav } from "./CaseStudyNav";
import styles from "./case-study.module.css";

const project = projects.find((entry) => entry.id === "gallery-web-app")!;
const githubUrl = "https://github.com/khalifehbasiri/Gallery-web-app";
const liveUrl = "https://gallery-web-app-two.vercel.app/";
const title = "Atelier Case Study | Khalifeh Basiri";
const description =
  "The design behind Atelier: Angular and Express, MongoDB and PostgreSQL data boundaries, Redis caching, revocable sessions, and recoverable background work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/gallery-web-app" },
  openGraph: {
    title,
    description,
    url: "/projects/gallery-web-app",
    images: [{ url: project.image, alt: project.imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [project.image],
  },
};

const chapters = [
  { id: "overview", label: "The idea" },
  { id: "architecture", label: "Architecture" },
  { id: "security", label: "Security" },
  { id: "reliability", label: "Reliability" },
  { id: "reflection", label: "Tradeoffs & lessons" },
];

const stores = [
  {
    name: "MongoDB",
    type: "Documents",
    purpose: "Artwork & full descriptions",
    color: "mint",
  },
  {
    name: "PostgreSQL",
    type: "Relationships",
    purpose: "Accounts, social & security state",
    color: "blue",
  },
  {
    name: "Storage",
    type: "Image bytes",
    purpose: "Private staging → public images",
    color: "violet",
  },
  {
    name: "Redis",
    type: "Derived data",
    purpose: "Expiring reads & queue hints",
    color: "amber",
  },
];

const securityDecisions = [
  {
    label: "Sessions",
    title: "Short-lived credentials. Logout that takes effect.",
    summary:
      "A signed token proves identity, but the server still checks whether that session is allowed to continue.",
    detail:
      "Ten-minute access JWTs and separate rotating refresh secrets use HttpOnly, Secure production, SameSite Strict cookies. PostgreSQL stores refresh hashes, never plaintext secrets. Reusing a consumed refresh secret revokes its session family. Authorization checks use a short-lived Redis proof or a durable SQL fallback.",
  },
  {
    label: "Revocation",
    title: "An old cache entry cannot undo a security change.",
    summary:
      "Security mutations establish a shared boundary before changing the database, so stale requests cannot restore old authorization.",
    detail:
      "Revocation and refresh acquire a Redis fence before SQL writes. Epoch checks reject outdated cached proofs and stale fills. When configured Redis cannot establish the fence, the mutation returns 503. Authorization reads can still fall back to SQL; losing the cache does not restore a revoked session.",
  },
  {
    label: "API boundary",
    title: "Every request has to earn its access.",
    summary:
      "Roles, ownership, input bounds, and request origin are checked on the server, alongside safe rendering in the browser.",
    detail:
      "Express validates requests, checks roles and ownership, uses parameterized SQL, and hashes passwords with salted scrypt. Signed session-bound CSRF proofs, Origin checks, and Fetch Metadata complement strict cookies. Plain-text rendering, escaped output, and a restrictive content security policy reduce XSS exposure.",
  },
  {
    label: "Account lifecycle",
    title: "Access ends before cleanup begins.",
    summary:
      "Account deletion retires access immediately, then performs recoverable cleanup across the separate stores.",
    detail:
      "Password-confirmed export and deletion give users control. Deletion checkpoints MongoDB, Storage, and SQL cleanup for retry. Recovery uses hashed, expiring, single-use challenges and revokes sessions. The mail processor has its own restricted SQL role and separate secrets.",
  },
];

const reliabilityDecisions = [
  {
    label: "Background work",
    title: "A stopped processor should leave recoverable work.",
    summary:
      "SQL jobs survive lost queue hints. Leases let another processor recover unfinished work after a crash.",
    detail:
      "The Render processor claims bounded batches with SQL row locks and expiring leases. Transient failures retry with backoff and jitter; permanent failures become dead letters. Frozen encrypted payloads and stable Resend idempotency keys constrain duplicate delivery within the provider's deduplication window.",
  },
  {
    label: "Resource limits",
    title: "Keep each request's cost predictable.",
    summary:
      "Small connection pools, indexed queries, and bounded responses suit the constraints of serverless hosting.",
    detail:
      "Warm API instances reuse database clients with small pools and timeouts. Throttling bounds request traffic. Signed feed cursors avoid increasingly deep offset scans. Vercel's CDN serves frontend assets; Supabase Storage handles image delivery. Provider quotas still define capacity.",
  },
  {
    label: "Delivery",
    title: "Test the dependencies before shipping the revision.",
    summary:
      "Releases move through automated checks, staging, smoke tests, and promotion of the tested output.",
    detail:
      "GitHub Actions checks formatting, API and Angular tests, production builds, and runtime dependencies before Vercel promotion and the Render deployment hook. Docker supplies disposable Redis integration tests alongside isolated SQL and MongoDB tests. Pull-request jobs do not receive production credentials.",
  },
];

type Decision = {
  label: string;
  title: string;
  summary: string;
  detail: string;
};

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

function DecisionList({ items }: { items: Decision[] }) {
  return (
    <div className={styles.decisions}>
      {items.map((item) => (
        <article key={item.label} className={styles.decision}>
          <p className={styles.decisionLabel}>{item.label}</p>
          <div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <details className={styles.details}>
              <summary>
                Technical detail <span aria-hidden="true">+</span>
              </summary>
              <p>{item.detail}</p>
            </details>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function GalleryCaseStudy() {
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
          <span className={styles.headerLabel}>PROJECT NOTES / ATELIER</span>
          <Link href="/projects" className={styles.backLink}>
            <span aria-hidden="true">←</span> All projects
          </Link>
        </div>
      </header>
      <main>
        <section className={styles.hero} aria-labelledby="case-study-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.dot} /> Atelier · Full-stack case study
            </p>
            <h1 id="case-study-title">
              The design behind
              <br />
              an <em>art community.</em>
            </h1>
            <p className={styles.heroIntro}>
              A gallery for discovering art and connecting with its people.
              Built around a simple question: what should happen when things go
              wrong?
            </p>
            <div className={styles.heroActions}>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLink}
              >
                Explore the app <Arrow diagonal />
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
                <dt>Frontend</dt>
                <dd>Angular · TypeScript</dd>
              </div>
              <div>
                <dt>Backend</dt>
                <dd>Node.js · Express</dd>
              </div>
            </dl>
          </div>
          <figure className={styles.heroVisual}>
            <div className={styles.previewFrame}>
              <div className={styles.previewBar}>
                <span aria-hidden="true">● ● ●</span>
                <span>atelier / discover</span>
                <Arrow diagonal />
              </div>
              <div className={styles.previewImage}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1200px) 560px, (min-width: 900px) 48vw, 100vw"
                  priority
                  className={styles.screenshot}
                />
              </div>
            </div>
            <div className={styles.visualCaption}>
              <span className={styles.dot} /> A working app. A deliberate
              system.
            </div>
            <figcaption>
              Isolated demo · public-domain art from The Met · labeled sample
              community activity.
            </figcaption>
          </figure>
        </section>
        <div className={styles.quickTake} aria-label="Three design principles">
          {[
            [
              "01",
              "Give data a clear home.",
              "Each store has one defined responsibility.",
            ],
            [
              "02",
              "Make fast reads safe.",
              "Cache shared content; isolate personal state.",
            ],
            [
              "03",
              "Plan for interrupted work.",
              "Save durably, then recover what comes next.",
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
          <CaseStudyNav chapters={chapters} />
          <div className={styles.chapters}>
            <section id="overview" className={styles.chapter}>
              <ChapterHeading
                number="01"
                label="The idea"
                title="The interesting part is beneath the interface."
              >
                Discover artwork. Save a favorite. Follow an artist. Publish a
                piece. Each simple interaction has a less simple engineering
                question behind it.
              </ChapterHeading>
              <p className={styles.prose}>
                I rebuilt Atelier to explore those questions: where content
                belongs, when a write is truly saved, how logout affects cached
                sessions, and how a failed background task finds its way back.
              </p>
              <blockquote className={styles.pullQuote}>
                “A fast interface needs a clear model of failure.”
              </blockquote>
              <p className={styles.prose}>
                The goal was to connect the user experience to explicit rules
                for consistency, trust, and recovery. That thinking shaped the
                stack as much as the features did.
              </p>
              <details className={`${styles.details} ${styles.stackDetails}`}>
                <summary>
                  The full stack <span aria-hidden="true">+</span>
                </summary>
                <dl className={styles.stackGrid}>
                  <div>
                    <dt>Interface</dt>
                    <dd>Angular 21, TypeScript, RxJS, NgRx SignalStore</dd>
                  </div>
                  <div>
                    <dt>API</dt>
                    <dd>Node.js 22, Express 5, shared typed contracts</dd>
                  </div>
                  <div>
                    <dt>Data & assets</dt>
                    <dd>
                      MongoDB Atlas, Supabase PostgreSQL & Storage, Upstash
                      Redis
                    </dd>
                  </div>
                  <div>
                    <dt>Delivery</dt>
                    <dd>
                      Vercel, Render, Resend, GitHub Actions, Docker for CI
                      Redis
                    </dd>
                  </div>
                </dl>
                <p>
                  Lazy routes and cancelled, debounced searches keep the UI
                  responsive. Shared contracts connect the frontend and API;
                  server-side validation enforces the actual rules.
                </p>
              </details>
            </section>
            <section id="architecture" className={styles.chapter}>
              <ChapterHeading
                number="02"
                label="Architecture"
                title="Different data. Different responsibilities."
              >
                Documents, relationships, files, and cached reads have different
                needs. The storage split follows those needs, with a clear
                source of truth for each.
              </ChapterHeading>
              <figure className={styles.architecture}>
                <div className={styles.archTop}>
                  <span className={styles.archClient}>Angular browser</span>
                  <span aria-hidden="true">↓</span>
                  <div className={styles.archApi}>
                    <span className={styles.dot} />
                    <strong>Express API</strong>
                    <span>Same origin · Vercel</span>
                  </div>
                </div>
                <div className={styles.archConnector} aria-hidden="true" />
                <div className={styles.storeGrid}>
                  {stores.map((store) => (
                    <div
                      key={store.name}
                      className={`${styles.store} ${styles[store.color]}`}
                    >
                      <span className={styles.storeType}>{store.type}</span>
                      <strong>{store.name}</strong>
                      <p>{store.purpose}</p>
                    </div>
                  ))}
                </div>
                <figcaption>
                  API data access. Image bytes use a separate signed upload
                  directly to private Storage.
                </figcaption>
              </figure>
              <div className={styles.archExplanation}>
                <div>
                  <h3>The durable layer</h3>
                  <p>
                    MongoDB holds validated artwork documents. PostgreSQL owns
                    accounts, relationships, security records, and jobs. Its
                    indexed artwork projection makes search and gallery cards
                    efficient without loading every full document.
                  </p>
                </div>
                <div>
                  <h3>The delivery layer</h3>
                  <p>
                    Supabase Storage keeps image bytes. Redis accelerates
                    derived reads and scheduling. Losing Redis can slow the app,
                    but it cannot erase a saved like or notification intent.
                  </p>
                </div>
              </div>
              <article className={styles.featurePanel}>
                <p className={styles.eyebrow}>Consistency / Publication</p>
                <h3>Don’t show a post before it’s ready.</h3>
                <p>
                  SQL, MongoDB, and Storage cannot share one transaction.
                  Publication moves through explicit states.
                </p>
                <ol className={styles.publicationFlow}>
                  <li>
                    <span className={styles.statePending}>Pending</span>
                    <p>Reserve the SQL record</p>
                  </li>
                  <li>
                    <span className={styles.stateWritten}>Written</span>
                    <p>Save the MongoDB document</p>
                  </li>
                  <li>
                    <span className={styles.statePublished}>Published</span>
                    <p>Expose the search projection</p>
                  </li>
                </ol>
                <details className={styles.details}>
                  <summary>
                    What happens if a step fails?{" "}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>
                    Public queries show only published records. Ambiguous
                    timeouts preserve resources for reconciliation instead of
                    deleting a write that may have succeeded. MongoDB writes
                    request majority acknowledgement. Stable IDs and repeatable
                    migration tooling preserve records and surface conflicts.
                    Signed uploads enter private staging; ownership, expiry,
                    size, MIME type, and file signatures are checked before
                    immutable public promotion.
                  </p>
                </details>
              </article>
              <article
                className={`${styles.featurePanel} ${styles.cachePanel}`}
              >
                <p className={styles.eyebrow}>Performance / Redis</p>
                <h3>Share the content. Keep the person separate.</h3>
                <div className={styles.cacheSplit}>
                  <div>
                    <span className={styles.cacheLabel}>Shared · Redis</span>
                    <h4>Artwork, discovery & counts</h4>
                    <p>
                      Reusable public responses with a default 60-second
                      lifetime.
                    </p>
                  </div>
                  <span className={styles.cachePlus} aria-hidden="true">
                    +
                  </span>
                  <div>
                    <span className={styles.cacheLabel}>Per viewer · SQL</span>
                    <h4>Likes & ownership flags</h4>
                    <p>Personal state added after the shared cache read.</p>
                  </div>
                </div>
                <p className={styles.takeaway}>
                  <span aria-hidden="true">↳</span> A faster read must still
                  belong to the right person.
                </p>
                <details className={styles.details}>
                  <summary>
                    Invalidation, feeds & outage behavior{" "}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>
                    A shared generation changes on writes. Conditional fills
                    prevent an old in-flight read from repopulating the current
                    cache; concurrent misses share one source read within an API
                    instance. Feeds reuse up to 256 public summaries, with
                    viewer-scoped selections and indexed fallback for older
                    posts. Redis failures fall back to the databases. Failed
                    public invalidation can leave counts stale until expiry.
                  </p>
                </details>
              </article>
            </section>
            <section id="security" className={styles.chapter}>
              <ChapterHeading
                number="03"
                label="Security"
                title="Trust is a request-by-request decision."
              >
                Authentication is only the beginning. Permissions, revocation,
                recovery, and deletion all need consistent behavior across
                services.
              </ChapterHeading>
              <div className={styles.securityNote}>
                <span aria-hidden="true">◎</span>
                <p>
                  <strong>The principle</strong> Keep authority on the server.
                  Keep secrets out of shared caches. Make security changes
                  durable.
                </p>
              </div>
              <DecisionList items={securityDecisions} />
            </section>
            <section id="reliability" className={styles.chapter}>
              <ChapterHeading
                number="04"
                label="Reliability"
                title="One click. Two timelines."
              >
                The heart should feel immediate. Saving it must be durable.
                Delivering an email can happen later.
              </ChapterHeading>
              <figure className={styles.timeline}>
                <div className={styles.timelinePhase}>
                  <span className={styles.phaseLabel}>During the request</span>
                  <ol>
                    <li>
                      <span>01</span>
                      <div>
                        <h3>Show the heart</h3>
                        <p>
                          Angular updates optimistically and rolls back on API
                          failure.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span>02</span>
                      <div>
                        <h3>Commit together</h3>
                        <p>
                          SQL saves the like, count, and eligible notification
                          job in one transaction.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span>03</span>
                      <div>
                        <h3>Confirm the save</h3>
                        <p>
                          The API invalidates public cache and acknowledges the
                          durable commit.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className={styles.timelineAsync}>
                  <span className={styles.phaseLabel}>After the response</span>
                  <div className={styles.asyncStep}>
                    <span>04</span>
                    <h3>Deliver the notification</h3>
                    <p>
                      Redis hints wake the Render processor. The SQL outbox
                      remains discoverable if those hints disappear.
                    </p>
                    <div className={styles.asyncPath}>
                      SQL outbox <Arrow /> Processor <Arrow /> Resend
                    </div>
                  </div>
                </div>
                <figcaption>
                  The outbox closes the gap between saving an interaction and
                  scheduling its follow-up work.
                </figcaption>
              </figure>
              <DecisionList items={reliabilityDecisions} />
            </section>
            <section id="reflection" className={styles.chapter}>
              <ChapterHeading
                number="05"
                label="Tradeoffs & lessons"
                title="Know what the design promises."
              >
                Every extra service adds a failure mode. The useful part is
                being precise about which guarantees survive it.
              </ChapterHeading>
              <div className={styles.tradeoffs}>
                <article>
                  <span className={styles.tradeoffNumber}>01</span>
                  <h3>Simplicity costs cache hits.</h3>
                  <p>
                    Global generation invalidation is easy to reason about, but
                    can evict unrelated pages. Measure hit rates and query
                    latency before adding narrower invalidation.
                  </p>
                </article>
                <article>
                  <span className={styles.tradeoffNumber}>02</span>
                  <h3>Recoverable doesn’t mean instant.</h3>
                  <p>
                    The free Render processor can sleep. Jobs survive, but email
                    timing is best effort, with at-least-once processing and
                    bounded provider deduplication.
                  </p>
                </article>
                <article>
                  <span className={styles.tradeoffNumber}>03</span>
                  <h3>Evidence before scale claims.</h3>
                  <p>
                    Tests exercise security, publication recovery, cache races,
                    and queue behavior. Large-scale load tests, automated
                    backups, and dedicated alerts remain future work.
                  </p>
                </article>
              </div>
              <p className={styles.statusNote}>
                <span className={styles.statusDot} /> Public email sending
                remains disabled pending sender-domain and webhook setup.
              </p>
              <div className={styles.closing}>
                <p className={styles.eyebrow}>What I’ll carry forward</p>
                <h3>
                  Good design connects the visible interaction to the invisible
                  guarantee.
                </h3>
                <p>
                  An optimistic heart to a transaction. A fast feed to cache
                  isolation. Logout to distributed revocation. A successful
                  upload to publication recovery. Those connections were the
                  most valuable part of building Atelier.
                </p>
                <div className={styles.closingLinks}>
                  <a
                    href={`${githubUrl}/blob/main/docs/ARCHITECTURE.md`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the architecture notes <Arrow diagonal />
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
