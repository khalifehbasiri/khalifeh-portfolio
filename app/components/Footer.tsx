export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-5xl justify-center px-6">
        <p className="text-center font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} Khalifeh Basiri
        </p>
      </div>
    </footer>
  );
}
