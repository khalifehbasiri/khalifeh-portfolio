'use client';

import Link from 'next/link';
import { scrollToSection } from '../lib/navigation';

const navItems = [
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

export function Header() {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          kbasiri<span className="text-accent">.</span>com
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={"/resume"}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
