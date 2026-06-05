import { contact, socialLinks } from "../data/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border/60 bg-surface/40 py-20"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-2 font-mono text-sm text-accent">Get in Touch</p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Open to software engineering roles. Reach out by email or LinkedIn.
        </p>

        <div className="mt-6 space-y-1 font-mono text-sm text-muted">
          <p>
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-accent"
            >
              {contact.email}
            </a>
          </p>
          <p>{contact.location}</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
