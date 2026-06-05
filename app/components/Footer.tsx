export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Khalifeh Basiri
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
