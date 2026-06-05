import { socialLinks } from "../data/portfolio";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          KBasiri<span className="text-accent">.</span>dev
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={socialLinks[1].href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Connect
        </a>
      </div>
    </header>
  );
}
