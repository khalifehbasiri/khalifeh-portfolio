import { contact, socialLinks } from "../data/portfolio";
import { ContactForm } from "./ContactForm";
import { EmailCopyButton } from "./EmailCopyButton";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border/60 bg-surface/40 py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-2 font-mono text-sm text-accent">Get in Touch</p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Let&apos;s connect
        </h2>
        <p className="mt-3 max-w-md text-muted">
          Open to software engineering roles. Reach out by email or LinkedIn.
        </p>
        <div className="mt-4 flex items-center gap-2 font-mono text-sm text-foreground">
          <span>{contact.email}</span>
          <EmailCopyButton email={contact.email} />
        </div>
        <ContactForm />

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/resume"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            View Resume
          </a>
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
