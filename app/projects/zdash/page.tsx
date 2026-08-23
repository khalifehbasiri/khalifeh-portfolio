import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZDash - Product Case Study | Khalifeh Basiri",
  description:
    "A public-safe look at ZDash, a desktop diagnostics and ownership workspace for classic Nissan and Infiniti vehicles.",
  alternates: {
    canonical: "/projects/zdash",
  },
  openGraph: {
    title: "ZDash - Automotive Software Case Study",
    description:
      "A desktop product exploration focused on making classic vehicle ownership easier to understand and organize.",
    url: "/projects/zdash",
    images: [
      {
        url: "/images/projects/z32-cartoon-orange.png",
        width: 1680,
        height: 945,
        alt: "Abstract automotive illustration for ZDash",
      },
    ],
  },
};

const productAreas = [
  {
    number: "01",
    title: "Live vehicle insight",
    description:
      "A focused view of useful vehicle diagnostics without making the ownership workflow feel like a specialist tool.",
  },
  {
    number: "02",
    title: "Saved sessions",
    description:
      "A durable record of past sessions so observations can be revisited instead of disappearing after a drive.",
  },
  {
    number: "03",
    title: "Maintenance history",
    description:
      "Service records, dates, mileage, and follow-up work kept alongside the vehicle they belong to.",
  },
  {
    number: "04",
    title: "Issue tracking",
    description:
      "A practical place to capture symptoms, status, and next steps while working through long-running problems.",
  },
  {
    number: "05",
    title: "Parts and cost notes",
    description:
      "Lightweight organization for parts research, purchases, and the real cost of keeping an older car healthy.",
  },
  {
    number: "06",
    title: "Diagnostic notes",
    description:
      "Context and observations preserved with the rest of the ownership record for easier future reference.",
  },
];

const roadmap = [
  {
    label: "Companion",
    title: "Mobile experiences",
    description:
      "Quick access to the ownership record and useful companion workflows away from the desktop.",
  },
  {
    label: "Display",
    title: "In-car support",
    description:
      "Purpose-built viewing experiences designed for appropriate in-vehicle display contexts.",
  },
  {
    label: "Modes",
    title: "Vehicle-friendly dashboards",
    description:
      "Clear, glanceable layouts that adapt the product experience to the car environment.",
  },
];

const strengths = [
  "Desktop app development",
  "Typed React UI",
  "Local data persistence",
  "Hardware-adjacent software",
  "Product thinking",
  "UX for technical workflows",
];

export default function ZDashPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            href="/#projects"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            &larr; Back to projects
          </Link>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            In progress
          </span>
        </div>
      </header>

      <section className="relative border-b border-border/70">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(110,231,183,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-5xl gap-14 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
              Flagship personal project · Commercial product exploration
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
              ZDash
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-foreground">
              A clearer way to understand, maintain, and organize a classic car.
            </p>
            <p className="mt-5 max-w-xl leading-7 text-muted">
              ZDash is a desktop diagnostics and ownership workspace for
              classic Nissan and Infiniti vehicles. It brings vehicle insight and
              the long-term ownership record into one focused product experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
              {[
                "TypeScript",
                "React",
                "Electron",
                "SQLite",
                "Automotive Software",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-accent/25 bg-surface shadow-[0_0_90px_rgba(110,231,183,0.08)]">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-xs font-semibold text-accent-foreground">
                    ZD
                  </span>
                  <div>
                    <p className="text-sm font-medium">Vehicle workspace</p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      Concept preview
                    </p>
                  </div>
                </div>
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
              </div>

              <div className="grid gap-3 p-5 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-background/60 p-5 sm:col-span-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    Garage
                  </p>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-lg font-medium">1990 Nissan 300ZX</p>
                      <p className="mt-1 text-sm text-muted">Ownership record in one place</p>
                    </div>
                    <div className="hidden items-end gap-1 sm:flex" aria-hidden="true">
                      {[42, 68, 52, 82, 58, 76, 48, 88, 70, 92].map(
                        (height, index) => (
                          <span
                            key={`${height}-${index}`}
                            className="w-1 rounded-full bg-accent/60"
                            style={{ height: `${height / 2}px` }}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {[
                  ["Sessions", "Saved for review"],
                  ["Maintenance", "History organized"],
                  ["Issues", "Tracked over time"],
                  ["Notes", "Context preserved"],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-border bg-background/60 p-4"
                  >
                    <span className="mb-5 block h-1.5 w-8 rounded-full bg-accent/70" />
                    <p className="text-sm font-medium">{title}</p>
                    <p className="mt-1 text-xs text-muted">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-20 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="font-mono text-sm text-accent">Origin</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Built from ownership, not abstraction.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-muted">
          <p>
            ZDash grew out of maintaining my own 1990 Nissan 300ZX. Working on
            the car made the everyday friction clear: useful vehicle context,
            service records, open issues, and diagnostic observations rarely
            live together.
          </p>
          <p>
            The goal is to make older Nissan and Infiniti vehicles easier to
            understand, maintain, and organize. The project turns that personal
            need into a focused product direction while staying grounded in the
            realities of long-term classic-car ownership.
          </p>
          <p className="border-l-2 border-accent pl-5 text-foreground">
            This product is in active development, so this case study focuses on
            the problem, experience, and engineering scope—not implementation details.
          </p>
        </div>
      </section>

      <section className="border-y border-border/70 bg-surface/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-accent">Product direction</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              One workspace for the life of the vehicle.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              ZDash is being shaped around the recurring jobs of understanding a
              car today and preserving useful context for tomorrow.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {productAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-xl border border-border bg-background/60 p-6"
              >
                <p className="font-mono text-xs text-accent">{area.number}</p>
                <h3 className="mt-5 text-lg font-medium">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm text-accent">Roadmap</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Beyond the desktop.
            </h2>
            <div className="mt-8 space-y-3">
              {roadmap.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-sm text-accent">Engineering signal</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              What the work demonstrates.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              The project combines product judgment with the engineering needed
              to make a technical workflow feel coherent, dependable, and useful.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="flex min-h-24 items-end rounded-xl border border-accent/20 bg-accent/[0.06] p-5"
                >
                  <p className="font-medium">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-surface/40 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Flagship personal project
            </p>
            <p className="mt-3 max-w-xl text-lg text-foreground">
              ZDash is in active development as a personal project and commercial
              product exploration.
            </p>
          </div>
          <Link
            href="/#projects"
            className="shrink-0 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            Explore other projects &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
