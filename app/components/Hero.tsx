'use client';

import Link from 'next/link';
import { scrollToSection } from '../lib/navigation';
import { contact, profileSummary, socialLinks } from "../data/portfolio";

export function Hero() {
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-24">
      <p className="mb-4 font-mono text-sm text-accent">Software Developer</p>

      <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
        Khalifeh Basiri
      </h1>

      <p className="mt-4 font-mono text-sm text-muted">
        {contact.location} | {contact.email}
      </p>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
        {profileSummary}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/projects"
          onClick={(e) => handleNavClick(e, "projects")}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          View Projects
        </Link>
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
        <Link
          href="/contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
