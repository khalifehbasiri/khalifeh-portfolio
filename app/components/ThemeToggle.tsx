"use client";

import { useSyncExternalStore } from "react";
import { themeStorageKey } from "../lib/theme";

const systemDark = "(prefers-color-scheme: dark)";
const themeChange = "portfolio-theme-change";

function isLight() {
  const theme = document.documentElement.dataset.theme;
  return theme ? theme === "light" : !window.matchMedia(systemDark).matches;
}

function subscribe(onChange: () => void) {
  const preference = window.matchMedia(systemDark);
  const syncStorage = (event: StorageEvent) => {
    if (event.key !== themeStorageKey && event.key !== null) return;
    if (event.newValue === "light" || event.newValue === "dark") {
      document.documentElement.dataset.theme = event.newValue;
    } else {
      delete document.documentElement.dataset.theme;
    }
    onChange();
  };

  preference.addEventListener("change", onChange);
  window.addEventListener(themeChange, onChange);
  window.addEventListener("storage", syncStorage);
  return () => {
    preference.removeEventListener("change", onChange);
    window.removeEventListener(themeChange, onChange);
    window.removeEventListener("storage", syncStorage);
  };
}

export function ThemeToggle() {
  const light = useSyncExternalStore(subscribe, isLight, () => false);

  function toggle() {
    const theme = isLight() ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch {
      // The current page can still switch themes when storage is unavailable.
    }
    window.dispatchEvent(new Event(themeChange));
  }

  return (
    <button
      type="button"
      aria-label="Light mode"
      aria-pressed={light}
      title="Toggle light mode"
      onClick={toggle}
      className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-raised hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="hidden size-5 fill-none stroke-current dark:block" strokeWidth="1.7" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current dark:hidden" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.9 13.3A9 9 0 0 1 10.7 3.1a9 9 0 1 0 10.2 10.2Z" />
      </svg>
    </button>
  );
}
