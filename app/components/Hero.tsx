import { contact, socialLinks } from "../data/portfolio";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-24">
      <p className="mb-4 font-mono text-sm text-accent">Software Developer</p>

      <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
        Khalifeh Basiri
      </h1>

      <p className="mt-4 font-mono text-sm text-muted">
        {contact.location} · {contact.email}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          View Projects
        </a>
        <a
          href="/Khalifeh_Basiri_Resume.pdf"
          download
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Resume
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Email
        </a>
        <a
          href={socialLinks[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={socialLinks[1].href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
