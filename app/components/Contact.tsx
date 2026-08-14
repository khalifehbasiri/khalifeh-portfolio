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
        <ContactForm actionLinks={socialLinks} />
      </div>
    </section>
  );
}
