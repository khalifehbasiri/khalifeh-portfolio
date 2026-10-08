import type { CaseStudyStory } from "./CaseStudy";

export const atelierStory: CaseStudyStory = {
  discipline: "System design",
  introduction:
    "An art community rebuilt to explore data ownership, Redis caching, secure sessions, and recovery across services.",
  preview: {
    src: "/images/projects/atelier-explore.jpg",
    alt: "Atelier Explore feed showing artwork shared by the community",
    caption:
      "The live gallery demo. Its design connects publishing, discovery, and social interactions.",
  },
  problem:
    "Sharing artwork looks simple until an upload fails, a cached response contains another person's state, or logout leaves a session active. I rebuilt Atelier to learn how system design handles those failures while keeping the app responsive.",
  built: [
    {
      title: "The full community workflow.",
      body: "An Angular interface and Express API for discovering artwork, publishing pieces, following artists, and saving favorites.",
    },
    {
      title: "A deliberate data split.",
      body: "MongoDB holds artwork documents; PostgreSQL owns accounts and relationships; object storage holds images. Redis caches derived reads and supplies queue hints.",
    },
    {
      title: "The infrastructure around those features.",
      body: "Revocable sessions, staged uploads, retryable cleanup, a SQL notification outbox, and CI checks for API, frontend, and database behavior.",
    },
  ],
  decisions: [
    {
      title: "Give each store a clear responsibility.",
      body: "Artwork documents and transactional relationships have different access patterns. Explicit ownership keeps a cache or search projection from becoming an accidental source of truth.",
    },
    {
      title: "Publish in stages.",
      body: "SQL, MongoDB, and storage cannot share one transaction. Posts move through pending, written, and published states. Public reads hide unfinished work; reconciliation handles ambiguous failures.",
    },
    {
      title: "Cache shared content, then add private state.",
      body: "Redis reuses artwork and discovery responses. Likes and ownership flags are added per viewer afterward. Generation checks stop an old read from refilling a newly invalidated cache.",
    },
    {
      title: "Make logout a server decision.",
      body: "Short-lived access tokens and rotating refresh secrets remain subject to session revocation. Server-side role, ownership, and CSRF checks enforce access beyond the interface.",
    },
    {
      title: "Save side effects with the transaction.",
      body: "A like and its notification job commit together in PostgreSQL. A worker claims leased jobs and retries failures; a lost Redis hint does not lose the durable work.",
    },
    {
      title: "Bound work and test failure paths.",
      body: "Small connection pools, indexed queries, signed feed cursors, and request limits fit serverless constraints. CI exercises revocation, cache races, publication recovery, and queue behavior.",
    },
  ],
  learned:
    "I learned system design principles by applying them: data ownership, consistency, cache invalidation, authorization, and at-least-once processing. The main lesson was to define what survives a failure. Adding another service is useful only when its responsibility and recovery path are clear.",
  evidence:
    "The live demo and automated checks demonstrate these workflows. Provider quotas still limit capacity; large-scale load testing, automated backups, and dedicated alerts remain future work. Public email delivery is disabled pending sender-domain and webhook setup.",
  facts: [
    {
      label: "Scope",
      value: "Frontend, API, data stores, and background work",
    },
  ],
  details: {
    title: "More on caching, security, and recovery",
    content: (
      <>
        <h3>Cache behavior</h3>
        <p>
          Public responses normally expire after 60 seconds. Writes change a
          shared generation; conditional fills reject stale in-flight reads.
          Concurrent misses share a source read within an API instance. Redis
          outages fall back to the databases, though failed invalidation can
          leave public counts stale until expiry.
        </p>
        <h3>Security boundaries</h3>
        <p>
          Ten-minute access JWTs and rotating refresh secrets use HttpOnly,
          Secure production, SameSite Strict cookies. SQL stores refresh hashes.
          Reused secrets revoke the session family. Revocation establishes a
          Redis fence before SQL writes; failure to establish that boundary
          returns 503. Parameterized SQL, salted scrypt, CSRF proofs, origin
          checks, and a restrictive CSP protect the API and browser.
        </p>
        <h3>Recoverable work</h3>
        <p>
          Signed uploads enter private staging before validation and public
          promotion. Deletion checkpoints cleanup across stores. SQL job leases,
          backoff, jitter, dead letters, and stable provider idempotency keys
          support retryable background work. Delivery is at least once with
          bounded deduplication; a sleeping worker can delay it.
        </p>
        <a
          href="https://github.com/khalifehbasiri/Gallery-web-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inspect the implementation on GitHub ↗
        </a>
      </>
    ),
  },
};

export const jobTrackerStory: CaseStudyStory = {
  discipline: "AI engineering",
  introduction:
    "A desktop job tracker that uses GPT-6 Luna to classify hiring emails and GPT-5.4 mini to extract application details.",
  preview: {
    src: "/images/projects/job-tracker-ai-dashboard.png",
    alt: "Job Tracker AI dashboard with application records and hiring stages",
    caption: "The Windows dashboard, shown with fictional application data.",
  },
  problem:
    "Application updates get buried in Gmail and Outlook. Automatically tracking them requires more than finding keywords: the app must distinguish hiring events, extract stated facts, and avoid changing the wrong application.",
  built: [
    {
      title: "GPT-6 Luna for classification.",
      body: "OpenAI Decisions checks whether an email concerns a specific application, then classifies its event as an application, assessment, interview, offer, rejection, or other update.",
    },
    {
      title: "GPT-5.4 mini for extraction.",
      body: "Responses with Structured Outputs returns company, role, requisition, explicit dates, and a source excerpt in a strict Pydantic-derived schema.",
    },
    {
      title: "A validation and review layer.",
      body: "Python checks evidence, identity, and chronology before updating SQLite. Ambiguous proposals go to human review; missing facts remain empty.",
    },
    {
      title: "A usable desktop release.",
      body: "A PySide6 app with Gmail and Outlook imports, application history, background workers, resumable scans, cached inference, and user-selected spending limits.",
    },
  ],
  decisions: [
    {
      title: "Separate classification from extraction.",
      body: "Relevance and event type are bounded Decisions questions; extracted fields need a custom schema. Separating the tasks avoids extraction for clearly unrelated mail and makes each stage easier to inspect.",
    },
    {
      title: "Treat valid JSON as a starting point.",
      body: "A schema checks structure. Evidence checks, record matching, and chronological rules decide whether the proposed update belongs in the application history. Neither model writes to the database.",
    },
    {
      title: "Keep uncertainty visible.",
      body: "Low confidence, refusals, missing evidence, or unclear identities lead to review. Email is untrusted input; the models have no tools for following links, executing code, or modifying the mailbox.",
    },
    {
      title: "Reserve cost before dispatch.",
      body: "SQLite records spending reservations and scan progress before model calls. Completed outputs can be reused; interrupted scans resume explicitly. A billed request whose response was lost can still cost money again.",
    },
  ],
  learned:
    "I practiced prompt engineering, model routing, Structured Outputs, and human-in-the-loop design. The useful engineering happens after a response arrives: validating evidence, handling uncertainty, preserving corrections, and making cost and recovery understandable to the user.",
  evidence:
    "A Windows installer and portable release are available. Fixture tests cover schemas, matching, review, budgets, and recovery; they do not establish model accuracy. Users currently supply their own OpenAI key and Google or Microsoft OAuth registration. Broader email evaluation and code signing remain future work.",
  facts: [
    { label: "Classification", value: "GPT-6 Luna · OpenAI Decisions" },
    {
      label: "Extraction",
      value: "GPT-5.4 mini · Responses + Structured Outputs",
    },
  ],
  details: {
    title: "How I used Decisions and Structured Outputs",
    content: (
      <>
        <p>
          One Decisions request has three parts: <code>model</code> is
          <code> gpt-6-luna</code>; <code>input</code> contains the sender,
          subject, timestamp, and body; <code>questions</code> defines two named
          evaluations over that shared evidence.
        </p>
        <ul>
          <li>
            <strong>job_related · predicate:</strong> estimates from 0 to 1
            whether the message concerns a specific application.
          </li>
          <li>
            <strong>event · choice:</strong> selects one of the six allowed
            hiring-event categories and returns confidence.
          </li>
        </ul>
        <p>
          I map the returned <code>answers</code> by their echoed
          <code> name</code>, then read <code>probability</code>,
          <code> choice</code>, and <code>confidence</code>. Relevance below 0.1
          skips extraction; refusals go to review. These thresholds are routing
          rules, not measured accuracy. The API also supports ordered
          <code> score</code> questions; this app uses predicates and choices.
        </p>
        <p>
          The extraction stage needs a custom object, so GPT-5.4 mini uses
          Responses with a strict JSON schema, a 1,024-token output cap, and
          <code> store=False</code>. Prompts focus on the latest message, leave
          absent fields null, and require an exact evidence excerpt. Python
          checks that excerpt, explicit timestamps, identity, and event order.
          Neither stage uses function-calling tools.
        </p>
        <p>
          <a
            href="https://github.com/khalifehbasiri/Job-Tracker-AI/blob/main/docs/ai-engineering.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the implementation walkthrough ↗
          </a>
          {" · "}
          <a
            href="https://developers.openai.com/api/docs/guides/decisions"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenAI Decisions guide ↗
          </a>
        </p>
      </>
    ),
  },
};

export const zdashStory: CaseStudyStory = {
  discipline: "AI engineering & RAG",
  introduction:
    "A CONSULT-I diagnostics workspace with an AI assistant that connects vehicle context to cited service-manual evidence.",
  preview: {
    src: "/images/projects/zdash-ai-chatbot.jpg",
    alt: "ZDash AI chatbot with vehicle context and a sample diagnostic conversation",
    caption:
      "Local chatbot preview with simulated vehicle context. Manual retrieval is a development prototype.",
  },
  problem:
    "A fault code alone rarely explains what to inspect next. Useful diagnostics need live observations, vehicle history, and the right service-manual pages. I’m building ZDash to bring those sources into one workspace without giving an AI model unrestricted control.",
  built: [
    {
      title: "The desktop diagnostics workspace.",
      body: "Electron, React, and TypeScript connect CONSULT-I telemetry, recordings, maintenance history, and vehicle-specific conversations. SQLite keeps the local records durable.",
    },
    {
      title: "An OpenAI assistant grounded in context.",
      body: "GPT-5.4 mini through Responses receives the question, vehicle profile, recent observations, and retrieved excerpts instead of answering from the question alone.",
    },
    {
      title: "A hybrid RAG prototype.",
      body: "Prepared 83 Z32 manuals covering 8,618 pages. text-embedding-3-small and PostgreSQL/pgvector combine semantic search with full-text search; passages retain year, section, and page citations.",
    },
  ],
  decisions: [
    {
      title: "Use two retrieval signals.",
      body: "Symptoms need semantic matching; fault codes and component names need exact terms. Reciprocal-rank fusion combines both result sets, keeping full-text fallback available if embeddings fail.",
    },
    {
      title: "Keep applicability visible.",
      body: "Exact-year evidence comes first. Adjacent-year fallback carries a warning. Citation checks reject invented reference numbers, while flagged and unreviewed pages stay outside retrieval.",
    },
    {
      title: "Validate proposals before writes.",
      body: "Zod validates structured vehicle-data and expense proposals. The user reviews supported changes before application code applies them. The assistant has no unrestricted database or ECU command access.",
    },
    {
      title: "Keep the workspace useful without cloud AI.",
      body: "A deterministic local fallback uses captured observations when provider access fails. Local records, recordings, and telemetry remain usable independently of the assistant.",
    },
  ],
  learned:
    "I learned that RAG quality starts with data preparation and source metadata. Retrieval relevance, citation validity, and factual support are separate checks. Tool schemas help describe a change; permissions and user review control whether it happens.",
  evidence:
    "Retrieval tests cover rank fusion, year preference, fallback, and page exclusions. The corpus size is not an accuracy benchmark, and a valid citation does not prove an answer correct. Approved public sources, grounding evaluation, gateway authentication, and representative physical ECU testing remain release work.",
  facts: [
    { label: "Assistant default", value: "GPT-5.4 mini · OpenAI Responses" },
    {
      label: "Retrieval",
      value: "text-embedding-3-small · PostgreSQL/pgvector",
    },
  ],
  details: {
    title: "More on the retrieval pipeline",
    content: (
      <>
        <p>
          Offline extraction preserves the manual year, section, and PDF page
          when splitting text into chunks. The documented corpus contains 8,861
          chunks, of which 7,795 are embedded. The corpus has 1,052 flagged
          pages; OCR and diagram-only material need review.
        </p>
        <p>
          Online retrieval embeds the question, runs vector and full-text
          searches, and fuses their rankings into up to eight passages.
          Exact-year results precede adjacent-year fallback. Numbered excerpts
          accompany vehicle context through generation and citation validation.
        </p>
        <p>
          A reference matching a retrieved passage is a structural check.
          Whether the passage supports the answer needs a labeled grounding
          evaluation. The current corpus and loopback gateway are for private
          development; other catalog vehicles do not inherit Z32 coverage.
        </p>
      </>
    ),
  },
};

export const leetbridgeStory: CaseStudyStory = {
  discipline: "Browser extensions & API integration",
  introduction:
    "A published Chrome extension that turns accepted LeetCode solutions into an organized GitHub archive.",
  preview: {
    src: "/images/projects/leetbridge-archive.png",
    alt: "GitHub solution archive generated by LeetBridge, with progress and difficulty summaries",
    caption: "The generated archive, shown with Chrome Web Store demo data.",
  },
  problem:
    "Saving solved problems by hand interrupts practice and produces an inconsistent archive. I built LeetBridge to capture accepted solutions, document them, and sync them to a repository the user chooses.",
  built: [
    {
      title: "A Manifest V3 extension.",
      body: "Content scripts detect accepted submissions; a background service worker validates the captured problem, language, and code before syncing.",
    },
    {
      title: "The GitHub workflow.",
      body: "Guided authorization and repository setup, predictable solution folders, per-problem READMEs, and a generated progress index.",
    },
    {
      title: "Historical imports and the store release.",
      body: "Pagination, duplicate checks, pacing, retry cooldowns, and saved checkpoints support larger histories. I packaged and published the extension on Chrome Web Store.",
    },
  ],
  decisions: [
    {
      title: "Let users choose the repository boundary.",
      body: "A GitHub App grants access to selected repositories. Optional GitHub host permission is requested during connection, keeping browser permission separate from repository authorization.",
    },
    {
      title: "Send code directly to GitHub.",
      body: "The browser talks to GitHub over HTTPS without a developer-operated backend. Credentials and settings stay in extension storage on the user's device.",
    },
    {
      title: "Expect the worker to stop.",
      body: "Manifest V3 service workers are temporary. Durable checkpoints let imports recover from restarts, closed tabs, and upstream rate limits instead of relying on in-memory progress.",
    },
  ],
  learned:
    "I learned extension message passing, dynamic-page data extraction, GitHub App authorization, and reliable API workflows. Shipping the store release also taught me to explain permissions, document data handling, and package updates beyond a locally loaded prototype.",
  evidence:
    "The extension is published and its source is public. Sync and import behavior still depend on LeetCode page changes, GitHub availability, and upstream rate limits.",
  facts: [
    {
      label: "Delivery",
      value: "Extension, onboarding, imports, and Chrome Web Store release",
    },
  ],
  details: {
    title: "More on extension and import boundaries",
    content: (
      <>
        <p>
          Content scripts handle page access; the service worker handles
          privileged API calls; the popup displays connection and sync state.
          Message passing separates their lifecycles. Submission data is
          validated rather than trusted from a single dynamic UI element.
        </p>
        <p>
          Import pagination and checkpoints survive worker restarts. Request
          pacing, cooldowns, and duplicate detection constrain repeat work,
          while predictable paths and generated READMEs keep the resulting
          repository readable.
        </p>
      </>
    ),
  },
};
