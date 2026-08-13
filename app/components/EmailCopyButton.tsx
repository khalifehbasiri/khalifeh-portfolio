"use client";

import { useState } from "react";

type CopyStatus = "idle" | "copied" | "error";

export function EmailCopyButton({ email }: { email: string }) {
  const [status, setStatus] = useState<CopyStatus>("idle");

  async function copyEmail() {
    let didCopy = false;

    try {
      await navigator.clipboard.writeText(email);
      didCopy = true;
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      didCopy = document.execCommand("copy");
      textArea.remove();
    }

    setStatus(didCopy ? "copied" : "error");
    window.setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-flex size-7 items-center justify-center rounded-md border border-border bg-background text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      aria-label={
        status === "copied"
          ? `${email} copied`
          : status === "error"
            ? `Unable to copy ${email}`
            : `Copy ${email} to clipboard`
      }
      aria-live="polite"
      title={`Copy ${email}`}
    >
      {status === "copied" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="size-4 fill-none stroke-current"
          strokeWidth="1.8"
        >
          <path d="m4 10 4 4 8-9" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="size-4 fill-none stroke-current"
          strokeWidth="1.6"
        >
          <rect x="7" y="3" width="9" height="11" rx="2" />
          <path d="M13 14v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" />
        </svg>
      )}
    </button>
  );
}
