"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

type ContactFormProps = {
  actionLinks?: {
    label: string;
    href: string;
  }[];
};

export function ContactForm({ actionLinks = [] }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send message.");
      }

      form.reset();
      setStatus("sent");
      setMessage(result.message || "Message sent. I will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send message right now.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-foreground">
            Name
          </span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-foreground">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="hidden">
        Company
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-foreground">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
          placeholder="Tell me what you would like to build or discuss."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {message ? (
            <p
              className={`text-sm ${
                status === "sent" ? "text-accent" : "text-muted"
              }`}
              role="status"
            >
              {message}
            </p>
          ) : null}
        </div>

        {actionLinks.length > 0 ? (
          <div className="flex flex-wrap gap-3 sm:justify-end">
            {actionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </form>
  );
}
