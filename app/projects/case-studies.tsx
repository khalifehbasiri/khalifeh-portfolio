import type { CaseStudyStory } from "./CaseStudy";

export const tandemStory: CaseStudyStory = {
  discipline: "Object-oriented design & simulation",
  introduction:
    "A four-person C++/Qt course project that makes insulin-delivery workflows, glucose changes, and safety events visible in an educational desktop simulation.",
  preview: {
    src: "/images/projects/tandem-insulin-pump-simulator.jpg",
    alt: "Educational insulin pump simulator showing a glucose chart with an extended-delivery interval",
    caption:
      "A frame from the team's bolus demonstration. The highlighted interval shows extended delivery in the simulated glucose history.",
  },
  problem:
    "An insulin-pump simulation needs more than a familiar interface: inputs, delivery state, glucose trends, alerts, and history must agree. Our COMP 3004 team built an interactive Qt application to explore those workflows. My focus was the dosing logic and automated-control path.",
  built: [
    {
      title: "Bolus calculation and confirmation.",
      body: "I designed BolusManager for carbohydrate and correction components, detailed previews, manual delivery, input validation, and configurable limits, then connected delivery to the body/glucose simulator.",
    },
    {
      title: "Glucose-driven control.",
      body: "I developed ControlSystem to respond to simulated CGM readings, adjust the insulin rate, handle glucose trends, and manage suspension and resumption with safety checks.",
    },
    {
      title: "Alerts and shared integration.",
      body: "I implemented insulin- and glucose-related alert definitions and helped connect control results to the interface and history. Extended-bolus integration was shared with Julien Larivière-Chartier; profiles, charts, battery/cartridge management, and persistence were team contributions.",
    },
  ],
  decisions: [
    {
      title: "Separate a suggested dose from delivery.",
      body: "Calculation returns a breakdown for review before confirmation or override. Validation and limits belong in the domain component so interface actions follow the same rules.",
    },
    {
      title: "Treat suspension as a delivery state.",
      body: "Glucose control must respect whether delivery is available. Suspension stops adjustments; resumption checks the current conditions, including external battery and cartridge state, before delivery can continue.",
    },
    {
      title: "Connect components through Qt signals and slots.",
      body: "Readings, delivery decisions, alerts, chart updates, and history cooperate through events. Keeping responsibilities separate made it possible to integrate work across four contributors.",
    },
    {
      title: "Make long-running behavior observable.",
      body: "The team accelerated time to five simulated minutes per real second. Charts and recorded events make dosing intervals, glucose trends, and safety scenarios visible within a short demonstration.",
    },
  ],
  learned:
    "I practiced object-oriented domain design, event-driven Qt integration, and reasoning about state transitions. A calculation is only one part of a workflow: confirmation, invalid input, interruption, and recovery need equally clear behavior. Integrating shared components also taught me to make ownership and event contracts explicit.",
  evidence:
    "Four recorded walkthroughs cover profiles and automatic delivery, bolus behavior, battery shutdown, and cartridge alerts. The public repository contains documentation, UML diagrams, and demonstrations; the course implementation remains private. This is an educational simulation without clinical validation.",
  facts: [
    { label: "Team", value: "Four contributors · COMP 3004 · Carleton University" },
    { label: "My focus", value: "BolusManager, ControlSystem, and dosing alerts" },
    { label: "Simulation clock", value: "Five simulated minutes per real second" },
  ],
  details: {
    title: "Watch the scenarios and explore the design",
    content: (
      <>
        <ul className="list-disc pl-5">
          <li><a href="https://youtu.be/dCezgP-P2d4" target="_blank" rel="noopener noreferrer">Profiles and automatic delivery ↗</a></li>
          <li><a href="https://youtu.be/tJMpMrLWkEg" target="_blank" rel="noopener noreferrer">Manual, extended, and automatic bolus delivery ↗</a></li>
          <li><a href="https://youtu.be/DuQRoASgmRc" target="_blank" rel="noopener noreferrer">Battery alerts, shutdown, and restart ↗</a></li>
          <li><a href="https://youtu.be/sf8nXzPyNlg" target="_blank" rel="noopener noreferrer">Empty cartridge and stopped delivery ↗</a></li>
        </ul>
        <p>
          <a href="https://github.com/khalifehbasiri/Tandem-t-slim-Insulin-Pump-Simulator/blob/main/docs/architecture.md" target="_blank" rel="noopener noreferrer">Architecture and UML diagrams ↗</a>
          {" · "}
          <a href="https://github.com/khalifehbasiri/Tandem-t-slim-Insulin-Pump-Simulator/blob/main/CONTRIBUTIONS.md" target="_blank" rel="noopener noreferrer">Team contribution breakdown ↗</a>
        </p>
      </>
    ),
  },
};

export const signLanguageStory: CaseStudyStory = {
  discipline: "Computer vision & ML inference",
  introduction:
    "A React webcam interface and Flask inference API that turn MediaPipe hand landmarks into confidence-scored ASL alphabet predictions.",
  preview: {
    src: "/images/projects/sign-language-translator.png",
    alt: "SignTranslate landing page with a hand-landmark illustration",
    caption:
      "The project introduction. The translation studio below shows the camera and message interface awaiting input.",
  },
  problem:
    "A live alphabet recognizer has to connect camera tracking, model input, inference, and readable feedback. I built this project to take a TensorFlow classifier beyond a training script and make its predictions usable in a browser.",
  built: [
    {
      title: "The camera and translation interface.",
      body: "React displays the webcam feed and tracked hand landmarks, sends prediction requests, and presents the returned letter and confidence in a translation console.",
    },
    {
      title: "A landmark-based training pipeline.",
      body: "MediaPipe supplies 21 hand points, each with x, y, and z coordinates. Those 63 features form the input to the TensorFlow classifier and its converted TensorFlow Lite model.",
    },
    {
      title: "A focused inference API.",
      body: "Flask serves the lightweight model and returns a prediction with its confidence score. Training and conversion remain separate from the deployed inference runtime.",
    },
  ],
  decisions: [
    {
      title: "Use hand geometry as the model input.",
      body: "Landmarks give the browser and API an explicit feature contract: 21 points become one 63-value vector per prediction.",
    },
    {
      title: "Keep inference separate from training.",
      body: "A converted TensorFlow Lite model serves predictions while the extraction and training scripts remain available for improving the dataset and classifier.",
    },
    {
      title: "Show confidence and withhold weak predictions.",
      body: "The interface gates low-confidence results rather than always displaying a letter. Similar hand shapes still need better data and temporal modeling.",
    },
  ],
  learned:
    "I practiced the complete ML application path: extracting features, training and converting a model, serving inference, and connecting it to a live interface. Consistent input features and clear feedback matter as much as a working prediction endpoint.",
  evidence:
    "The demo and source are public. The current classifier uses one hand and one frame at a time; motion-based J and Z are unsupported. Similar letters, unfamiliar hand positions, and lighting can reduce accuracy. The project demonstrates alphabet recognition rather than full conversational translation.",
  facts: [
    { label: "Model input", value: "21 hand landmarks × 3 coordinates = 63 features" },
    { label: "Inference path", value: "Webcam → MediaPipe → Flask → TensorFlow Lite" },
  ],
};

export const collaborativeBoardStory: CaseStudyStory = {
  discipline: "Full-stack development & reactive data",
  introduction:
    "A Next.js community board with live posts, votes, and threaded discussions backed by Convex and Clerk authentication.",
  preview: {
    src: "/images/projects/collaborative-board-feed.jpg",
    alt: "Collab Board dashboard showing community posts, voting controls, filters, and comment buttons",
    caption: "The working community feed, with post filters and voting controls.",
  },
  problem:
    "A shared board quickly becomes more than CRUD: several people can post, vote, and reply at once, while each action has its own identity and ownership rules. I built the application to connect those interactions to a live feed and enforce permissions at the backend.",
  built: [
    {
      title: "The community workflow.",
      body: "A responsive Next.js interface takes visitors from the introduction to authentication, the feed, post creation, voting, and threaded comments.",
    },
    {
      title: "Reactive data and related records.",
      body: "Convex queries keep the interface synchronized with changes to posts, comments, and votes. Separate entities preserve authorship and each member's vote state.",
    },
    {
      title: "Authenticated changes.",
      body: "Clerk supplies identity; backend mutations enforce permissions and author ownership. Post deletion also cleans up related records.",
    },
  ],
  decisions: [
    {
      title: "Subscribe to the shared data.",
      body: "Reactive queries let updates reach the feed without adding manual refresh logic to every interaction.",
    },
    {
      title: "Keep authorization at the write boundary.",
      body: "A signed-in interface is only the start. Server functions check who is changing a record and whether that user owns it.",
    },
    {
      title: "Represent votes as user state.",
      body: "Individual vote records let the application distinguish a user's current choice from the aggregate count and handle toggling or switching votes consistently.",
    },
  ],
  learned:
    "I practiced modeling related data, connecting authentication to server permissions, and shipping complete interactions across frontend and backend. Live updates make relationships and ownership rules visible immediately, so cleanup and per-user state need to be designed alongside the feed.",
  evidence:
    "The live demo and repository are public. Search, pagination, notification preferences, and a broader automated permissions test suite remain follow-up work. The current release demonstrates the community flow rather than large-scale usage.",
  facts: [
    { label: "Data flow", value: "Next.js → Clerk identity → Convex queries and mutations" },
    { label: "Core records", value: "Users, posts, comments, and votes" },
  ],
};

export const floxyStory: CaseStudyStory = {
  discipline: "Frontend development & product communication",
  introduction:
    "A responsive Next.js marketing site that helps customers explore proxy products and move from product information to usable API examples.",
  preview: {
    src: "/images/projects/floxy-marketing-site.png",
    alt: "Floxy marketing website introducing its proxy products",
    caption: "The public marketing site built for Floxy's proxy platform.",
  },
  problem:
    "A platform with several proxy products needs a clear way to explain options, guide navigation, and help technical customers get started. I built Floxy's marketing frontend around reusable product content and practical integration examples.",
  built: [
    {
      title: "The responsive marketing site.",
      body: "I shipped the Next.js frontend with responsive navigation and product pages for a platform serving more than 20,000 customers.",
    },
    {
      title: "Reusable product presentation.",
      body: "Shared React components and centralized content models keep product information and selectors consistent across pages.",
    },
    {
      title: "Copyable integration examples.",
      body: "Language-specific API examples connect product explanations to the next action a developer needs to take.",
    },
  ],
  decisions: [
    {
      title: "Model repeated content once.",
      body: "Product pages share patterns. Reusable components and centralized content make changes easier to apply consistently as the offering grows.",
    },
    {
      title: "Connect selection to integration.",
      body: "Navigation and product selectors help customers explore the offering; copyable examples reduce the work between choosing a product and trying its API.",
    },
    {
      title: "Build for mobile and discovery.",
      body: "Responsive layouts and SEO were part of delivering a public Next.js product site to customers arriving from different devices and entry points.",
    },
  ],
  learned:
    "I learned to organize a commercial frontend around both customer questions and maintainable content. Reusable components are most useful when they preserve a clear path through the product, from first visit to a concrete integration example.",
  evidence:
    "The site reached 23.9K monthly visits within four months of launch. That is a traffic outcome, not an attributed conversion improvement. The public site shows the delivered frontend; this case study covers my marketing-site work.",
  facts: [
    { label: "Platform context", value: "20,000+ customers" },
    { label: "Reported reach", value: "23.9K monthly visits within four months" },
  ],
};

export const storageExplorerStory: CaseStudyStory = {
  discipline: "Data tooling & background processing",
  introduction:
    "An internal Python application that makes file-location searches across approximately 420 TB of Azure data practical through indexed metadata and background refreshes.",
  preview: {
    src: "/images/brand/dfo-project-sharp.webp",
    alt: "Fisheries and Oceans Canada organization mark",
    caption: "Built for Fisheries and Oceans Canada. Internal interface screenshots are not published.",
  },
  problem:
    "Staff needed to locate files across a large Azure data estate, where manual searches could take hours. The tool needed to search metadata efficiently, export useful results, and stay responsive while its index was refreshed.",
  built: [
    {
      title: "Indexed file discovery.",
      body: "I engineered a Python application using Azure Blob Inventory, MongoDB, and SQLite to search metadata across approximately 420 TB of enterprise data.",
    },
    {
      title: "Responsive search and export.",
      body: "Multithreaded work supports file-location queries, result exports, and background metadata refreshes without making the interface wait for all processing to finish.",
    },
    {
      title: "Refreshes that preserve usable data.",
      body: "Failed updates retain the last valid database so staff can keep searching while a refresh issue is resolved.",
    },
  ],
  decisions: [
    {
      title: "Search metadata rather than file contents.",
      body: "The immediate problem was finding where files lived. An indexed inventory targets that task without requiring every search to traverse the full data estate.",
    },
    {
      title: "Move long-running work off the interface.",
      body: "Inventory processing and refreshes need time. Background work keeps searches and result handling usable during those operations.",
    },
    {
      title: "Keep the last valid index available.",
      body: "An unsuccessful refresh should not turn a data-maintenance problem into a complete search outage. Preserving the valid database maintains a useful recovery point.",
    },
  ],
  learned:
    "I practiced designing tools around the scale and workflow of an enterprise data estate. Indexing solves the search problem only when refreshes, exports, responsiveness, and failure recovery also fit the way staff work.",
  evidence:
    "Staff file-location searches were reduced from hours to seconds or minutes. The 420 TB figure describes the underlying data estate, not the size of the metadata database. The application and operational data are internal to DFO; public source and interface screenshots are unavailable.",
  facts: [
    { label: "Organization", value: "Fisheries and Oceans Canada" },
    { label: "Search scope", value: "Metadata for approximately 420 TB of Azure data" },
  ],
};

export const geoNamesStory: CaseStudyStory = {
  discipline: "API integration & geospatial validation",
  introduction:
    "An internal bilingual Python tool that validates geographic names and coordinates against authoritative records, developed with DFO clients from requirements through training.",
  preview: {
    src: "/images/brand/dfo-project-sharp.webp",
    alt: "Fisheries and Oceans Canada organization mark",
    caption: "Built for Fisheries and Oceans Canada. Internal interface screenshots are not published.",
  },
  problem:
    "Geographic-name validation requires more than a text match: a record's coordinates, language, and authoritative identity matter too. DFO clients needed a repeatable way to check that information while reducing manual work.",
  built: [
    {
      title: "Authoritative record checks.",
      body: "I architected a modular Python tool integrating the Geographical Names Board of Canada API with bilingual validation and geospatial matching.",
    },
    {
      title: "Concurrent validation workflows.",
      body: "Multithreaded processing supports checks across names, coordinates, languages, and source records.",
    },
    {
      title: "Delivery with a three-person team.",
      body: "I led requirements discussions, client demonstrations, deployment, training, and support so the validation tool could become part of the team's working process.",
    },
  ],
  decisions: [
    {
      title: "Combine names with location and language.",
      body: "Text alone is insufficient for geographic records. Geospatial matching and bilingual rules give validation the context needed to distinguish candidates.",
    },
    {
      title: "Use an authoritative reference.",
      body: "The API integration anchors checks to recognized geographic-name records, making the reference behind each validation explicit.",
    },
    {
      title: "Refine the workflow with clients.",
      body: "Requirements, demonstrations, and training were part of development. Direct feedback helped align the tool with the records and processes staff actually needed to validate.",
    },
  ],
  learned:
    "I practiced leading a small team, integrating a public-record API, and translating client requirements into a usable validation workflow. Delivery includes helping people adopt the tool and supporting the process after deployment.",
  evidence:
    "CHS Atlantic reported that one process fell from two weeks to a few hours. That report applies to that workflow rather than every validation task. Source, operational records, and interface screenshots remain internal to DFO.",
  facts: [
    { label: "Team", value: "Lead developer · three-person team" },
    { label: "Reference", value: "Geographical Names Board of Canada API" },
    { label: "Reported outcome", value: "CHS Atlantic: one process reduced from two weeks to hours" },
  ],
};

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
  discipline: "AI engineering, agent workflows & RAG",
  origin:
    "ZDash started with my own car. I was using an outdated diagnostics program to read ECU data, then feeding those readings into ChatGPT to help me understand the problem and work through repairs. Moving information between the two tools gave me the idea: build a diagnostics app that connects directly to the ECU and includes an AI agent that can investigate the data.",
  introduction:
    "That became ZDash, a Windows diagnostics app for Nissan and Infiniti CONSULT-I vehicles. I built an OpenAI-powered diagnostic agent with hybrid service-manual retrieval, schema-defined LangChain tools, LangGraph investigation control, and browser-based parts research.",
  preview: {
    src: "/images/projects/zdash-ai-chatbot.jpg",
    alt: "ZDash AI chatbot with vehicle context and a sample diagnostic conversation",
    caption:
      "Local chatbot preview with simulated vehicle context. Manual retrieval is a development prototype.",
  },
  problem:
    "A useful diagnostic assistant needs more than a fault code and a generated explanation. It needs relevant vehicle history, fresh ECU observations, applicable service-manual evidence, and follow-up checks from the driver. I built ZDash’s AI workflow to gather that information through controlled tools, validate the evidence behind its answers, and preserve investigation progress across messages and application restarts.",
  built: [
    {
      title: "Hybrid RAG over factory service manuals.",
      body: "Prepared 83 Z32 manuals covering 8,618 pages. OpenAI’s text-embedding-3-small and PostgreSQL/pgvector combine semantic retrieval with full-text search. Retrieved passages retain manual year, section, and page metadata for citations.",
    },
    {
      title: "A tool-using diagnostic agent.",
      body: "Integrated GPT-5.4 mini through OpenAI Responses with selective access to vehicle details, fault codes, telemetry, recordings, maintenance, and other ownership records. LangChain’s schema-defined tools execute diagnostic retrieval, giving the model access to relevant information without sending the entire workspace upfront.",
    },
    {
      title: "Fresh ECU evidence.",
      body: "Added controlled access to one fresh, read-only engine fault scan and up to four telemetry snapshots per message. Results expose timestamps, units, freshness, channel support, missing values, and simulator labels. Application code checks the active vehicle and connection before and after operations.",
    },
    {
      title: "Browser-based parts research.",
      body: "Integrated OpenAI Decisions to select actions from observed browser controls, with Electron validating and executing those actions. LangChain’s structured-output parser processes extracted product data before grounding and fitment checks. Saved product cards retain inspected links, source quotes, available prices and part numbers, and missing application details.",
    },
    {
      title: "Persistent LangGraph investigations.",
      body: "Implemented preparation, assessment, tool execution, answer, and waiting stages. A driver-check tool saves a specific question and pauses the investigation; the next reply resumes it with fresh permissions and runtime checks. SQLite checkpoints survive restarts and encrypted backup/restore.",
    },
  ],
  decisions: [
    {
      title: "Combine semantic and exact-term retrieval.",
      body: "Symptom descriptions benefit from semantic matching, while fault codes and component names need exact terms. Reciprocal-rank fusion combines both rankings, with full-text fallback when embeddings are unavailable.",
    },
    {
      title: "Give LangChain and LangGraph distinct responsibilities.",
      body: "LangChain handles diagnostic tool schemas and structured product parsing. LangGraph controls execution stages, saved state, and pause/resume behavior. Grounding, permissions, and fitment remain application-enforced checks.",
    },
    {
      title: "Enforce permissions outside the model.",
      body: "Tool availability depends on the request: diagnostics, shopping, records, or a combination. Shopping-only requests cannot access ECU tools. Explicit exclusions and permissions are checked again before execution. Browser research blocks purchasing, sign-in, uploads, and downloads.",
    },
    {
      title: "Validate evidence beyond its schema.",
      body: "Structured output establishes a usable shape; it does not establish factual support. Manual citation checks reject invented references, including references written in prose. Product grounding preserves inspected evidence, while local fitment rules check year, chassis, exact engine, and applicable restrictions.",
    },
    {
      title: "Bound execution and define recovery.",
      body: "Investigations allow eight tool rounds, sixteen executions, and four manual searches, with request deadlines. Interrupted ECU and browser operations are not automatically replayed. Unsaved results remain unknown, while completed checkpoints support continuation. A deterministic local fallback remains available when cloud AI fails.",
    },
  ],
  learned:
    "I learned to build an AI workflow around explicit evidence and state. Retrieval relevance, citation validity, and factual support require separate checks. Tool schemas define inputs, while application code controls access and validates results. Persistent investigations also require clear recovery rules: saving a conversation does not guarantee that every interrupted operation produced a durable result.",
  evidence:
    "Verified 122 tests, 17 UI workflows, build/typecheck, persistence, encrypted backup/restore, and browser behavior. These checks demonstrate implemented workflows; they do not establish diagnostic accuracy or physical-car reliability. Physical-car and packaged-Windows acceptance remain open. Supplier coverage is incomplete, and a process crash during browser research can lose listings collected before the tool returns. Manual retrieval remains a development prototype; the Z32 corpus does not establish coverage for other vehicles.",
  nextSteps:
    "Moving forward, I’m working on adding mobile and Apple CarPlay support to bring ZDash’s diagnostics and AI-assisted workflows into more accessible, in-car experiences.",
  facts: [
    { label: "Generation", value: "GPT-5.4 mini · OpenAI Responses" },
    { label: "Browser decisions", value: "OpenAI Decisions · Electron execution" },
    { label: "Tooling", value: "LangChain tools and structured-output parsing" },
    { label: "Orchestration", value: "LangGraph · SQLite checkpoints" },
    {
      label: "Retrieval",
      value: "text-embedding-3-small · PostgreSQL/pgvector · hybrid search",
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
