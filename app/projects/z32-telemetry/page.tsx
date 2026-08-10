import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "300ZX Telemetry System - Khalifeh Basiri",
  description:
    "Follow the build of a Python and Raspberry Pi-powered CONSULT-I telemetry and diagnostics system for a 1990 Nissan 300ZX.",
};

const parts = [
  { name: "Nissan CONSULT-I to USB cable", detail: "TAOTT interface", owned: true },
  { name: "Raspberry Pi Zero 2 W", detail: "With GPIO header", owned: false },
  { name: "3.5-inch touchscreen", detail: "Waveshare RPi LCD", owned: false },
  { name: "64 GB microSD card", detail: "High Endurance", owned: false },
  { name: "Micro-USB OTG adapter", detail: "USB-A female", owned: false },
  { name: "Prototype power setup", detail: "Quality 5 V car charger", owned: false },
];

type StageStatus = "completed" | "current" | "upcoming";

type Stage = {
  number: string;
  title: string;
  date: string;
  status: StageStatus;
  description: string;
  deliverable: string;
};

const stages: Stage[] = [
  {
    number: "01",
    title: "Parts & prototype setup",
    date: "Started Aug 2026",
    status: "current",
    description:
      "Gather the Version 1 hardware and verify each component before anything is permanently installed in the car.",
    deliverable: "A complete, bench-ready prototype kit",
  },
  {
    number: "02",
    title: "First ECU connection",
    date: "Date TBD",
    status: "upcoming",
    description:
      "Connect the CONSULT cable to a laptop and prove that the 300ZX ECU can stream a reliable live RPM reading.",
    deliverable: "Live RPM from the car in Python",
  },
  {
    number: "03",
    title: "Python CONSULT library",
    date: "Date TBD",
    status: "upcoming",
    description:
      "Turn the protocol work into a clean Python library that decodes coolant, TPS, MAF, battery, timing, and other ECU values.",
    deliverable: "Reusable, tested vehicle-data layer",
  },
  {
    number: "04",
    title: "Drive data logger",
    date: "Date TBD",
    status: "upcoming",
    description:
      "Record timestamped sensor data to SQLite so drives can be reviewed and intermittent problems can be diagnosed later.",
    deliverable: "Searchable trip and sensor history",
  },
  {
    number: "05",
    title: "Live web dashboard",
    date: "Date TBD",
    status: "upcoming",
    description:
      "Build a FastAPI and WebSocket dashboard with live gauges, warning thresholds, diagnostics, and trip summaries.",
    deliverable: "A responsive real-time dashboard",
  },
  {
    number: "06",
    title: "Raspberry Pi integration",
    date: "Date TBD",
    status: "upcoming",
    description:
      "Move the software onto the Pi, launch it automatically at startup, and make the dashboard available over local Wi-Fi.",
    deliverable: "A self-contained telemetry computer",
  },
  {
    number: "07",
    title: "In-car installation",
    date: "Date TBD",
    status: "upcoming",
    description:
      "Install the screen, enclosure, fused automotive power, and safe shutdown hardware for a clean and reliable finish.",
    deliverable: "A finished system built into the 300ZX",
  },
];

const currentStageIndex = stages.findIndex((stage) => stage.status === "current");
const progress = Math.round(((currentStageIndex + 1) / stages.length) * 100);
const ownedPartCount = parts.filter((part) => part.owned).length;

export default function Z32TelemetryPage() {
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
            Build in progress
          </span>
        </div>
      </header>

      <section className="relative border-b border-border/70">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(110,231,183,0.1),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-28">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-accent">
              1990 Nissan 300ZX · Personal build
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Giving my dream car a modern way to speak.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              A Raspberry Pi and Python-powered telemetry system that reads the
              300ZX&apos;s CONSULT-I port, logs its health, and turns difficult ECU
              data into a clear live dashboard in the car or on my phone.
            </p>
          </div>

          <div className="rounded-2xl border border-accent/25 bg-surface p-6 shadow-[0_0_80px_rgba(110,231,183,0.06)]">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  Overall progress
                </p>
                <p className="mt-2 text-4xl font-semibold tracking-tight">{progress}%</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-accent">Stage 1 of 7</p>
                <p className="mt-1 text-xs text-muted">Parts & setup</p>
              </div>
            </div>
            <div
              className="mt-6 h-2 overflow-hidden rounded-full bg-surface-raised"
              role="progressbar"
              aria-label="Project progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <div
                className="h-full rounded-full bg-accent shadow-[0_0_18px_rgba(110,231,183,0.45)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
              <div>
                <p className="font-mono text-lg text-foreground">01</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">Part owned</p>
              </div>
              <div className="border-x border-border">
                <p className="font-mono text-lg text-foreground">07</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">Stages</p>
              </div>
              <div>
                <p className="font-mono text-lg text-foreground">V1</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">Prototype</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="font-mono text-sm text-accent">Why I&apos;m building it</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">The story behind the system</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-muted">
          <p>
            The Nissan 300ZX has been my dream car for as long as I can remember.
            I finally bought one in 2024, and owning it taught me something quickly:
            old cars will always have problems, and perfecting my dream means learning
            how to work on it myself.
          </p>
          <p>
            That realization started my journey as a car enthusiast. As I learned to
            maintain and understand the Z, its aging computer system kept getting in
            the way. The CONSULT-I port contains valuable information, but accessing
            and interpreting it is far harder than it should be.
          </p>
          <p className="border-l-2 border-accent pl-5 text-foreground">
            I&apos;m building this system to make the car easier to understand, diagnose,
            and preserve, combining my love for the 300ZX with the Python and software
            skills I already use every day.
          </p>
        </div>
      </section>

      <section className="border-y border-border/70 bg-surface/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-sm text-accent">Current stage</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Building the prototype kit</h2>
            </div>
            <p className="font-mono text-sm text-muted">
              {ownedPartCount} of {parts.length} parts acquired
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {parts.map((part) => (
              <article
                key={part.name}
                className={`rounded-xl border p-5 ${
                  part.owned
                    ? "border-accent/40 bg-accent/10"
                    : "border-border bg-background/50"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border font-mono text-xs ${
                      part.owned
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-muted"
                    }`}
                    aria-hidden="true"
                  >
                    {part.owned ? "✓" : "·"}
                  </span>
                  <span className={`font-mono text-[11px] uppercase tracking-wider ${part.owned ? "text-accent" : "text-muted"}`}>
                    {part.owned ? "Owned" : "To buy"}
                  </span>
                </div>
                <h3 className={`mt-5 font-medium ${part.owned ? "text-foreground" : "text-muted"}`}>
                  {part.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{part.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-accent">Build roadmap</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">From first part to finished install</h2>
          <p className="mt-4 leading-7 text-muted">
            Dates will be added as each milestone is completed. Finished and active
            stages will light up; future work stays muted until I reach it.
          </p>
        </div>

        <ol className="mt-12 space-y-4">
          {stages.map((stage) => {
            const isCurrent = stage.status === "current";
            const isCompleted = stage.status === "completed";
            const isHighlighted = isCurrent || isCompleted;

            return (
              <li
                key={stage.number}
                className={`grid gap-5 rounded-2xl border p-6 sm:grid-cols-[4rem_1fr_auto] sm:items-start ${
                  isHighlighted
                    ? "border-accent/40 bg-accent/[0.07] shadow-[0_0_50px_rgba(110,231,183,0.04)]"
                    : "border-border/70 bg-surface/50 opacity-60"
                }`}
              >
                <div className={`font-mono text-2xl ${isHighlighted ? "text-accent" : "text-muted"}`}>
                  {stage.number}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-medium">{stage.title}</h3>
                    {isCurrent ? (
                      <span className="rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                        In progress
                      </span>
                    ) : isCompleted ? (
                      <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-foreground">
                        Completed
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{stage.description}</p>
                  <p className="mt-4 text-sm">
                    <span className="text-muted">Outcome:</span> {stage.deliverable}
                  </p>
                </div>
                <time className={`font-mono text-xs sm:text-right ${isHighlighted ? "text-accent" : "text-muted"}`}>
                  {stage.date}
                </time>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="border-t border-border/70 bg-surface/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-accent">System direction</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">One data source, two dashboards</h2>
          </div>
          <div className="mt-10 grid gap-3 font-mono text-sm md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            <div className="rounded-xl border border-border bg-background p-5">
              <p className="text-xs uppercase tracking-wider text-muted">Input</p>
              <p className="mt-4 text-base text-foreground">300ZX ECU</p>
              <p className="mt-2 text-xs leading-5 text-muted">CONSULT-I vehicle data</p>
            </div>
            <div className="flex items-center justify-center text-accent" aria-hidden="true">→</div>
            <div className="rounded-xl border border-accent/30 bg-accent/10 p-5">
              <p className="text-xs uppercase tracking-wider text-accent">Brain</p>
              <p className="mt-4 text-base text-foreground">Pi + Python</p>
              <p className="mt-2 text-xs leading-5 text-muted">Decode, log, serve</p>
            </div>
            <div className="flex items-center justify-center text-accent" aria-hidden="true">→</div>
            <div className="rounded-xl border border-border bg-background p-5">
              <p className="text-xs uppercase tracking-wider text-muted">Output</p>
              <p className="mt-4 text-base text-foreground">Screen + phone</p>
              <p className="mt-2 text-xs leading-5 text-muted">Live gauges and diagnostics</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/70 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Built to understand and preserve my 1990 Nissan 300ZX.</p>
          <Link href="/#projects" className="font-medium text-accent transition-opacity hover:opacity-80">
            Explore other projects &rarr;
          </Link>
        </div>
      </footer>
    </main>
  );
}
