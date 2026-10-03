'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { scrollToSection } from '../lib/navigation';

const navItems = [
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus({ preventScroll: true });
      }
    };
    const desktopViewport = window.matchMedia('(min-width: 640px)');
    const closeOnDesktop = () => {
      if (desktopViewport.matches) setMenuOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    desktopViewport.addEventListener('change', closeOnDesktop);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
      desktopViewport.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (menuOpen) {
      setMenuOpen(false);
      menuButtonRef.current?.focus({ preventScroll: true });
    }
    scrollToSection(href);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.history.pushState({}, '', '/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          kbasiri<span className="text-accent">.</span>com
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 sm:flex">
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

        <div className="flex items-center gap-2">
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round">
              {menuOpen ? (
                <path d="m6 6 12 12M6 18 18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full border-b border-border bg-background/95 px-6 py-3 shadow-lg backdrop-blur-md sm:hidden"
      >
        <div className="mx-auto grid max-w-5xl gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="flex min-h-11 items-center rounded-lg px-3 text-sm text-foreground transition-colors hover:bg-surface-raised hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
