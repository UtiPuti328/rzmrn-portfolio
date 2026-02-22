"use client";

import { useState, type FormEvent } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const PROJECT_TYPES = [
  "Commercial / TV Spot",
  "Music Video",
  "Motion Design",
  "Brand Film",
  "Event / Live Production",
  "AI / Automation",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/hello@rzmrn.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="pt-32 pb-24">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h1 className="font-heading text-5xl font-bold tracking-tight md:text-7xl">
              Contact
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Available for commercial projects, music videos, brand films, and
              motion design commissions. Let&apos;s talk about your next
              project.
            </p>
            <div className="mt-12 space-y-4">
              <div>
                <span className="text-sm uppercase tracking-wider text-text-muted">
                  Email
                </span>
                <p className="mt-1 text-text-primary">hello@rzmrn.com</p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wider text-text-muted">
                  Location
                </span>
                <p className="mt-1 text-text-primary">Warsaw, Poland</p>
              </div>
            </div>
          </div>

          <div>
            {/* Terminal header */}
            <div className="mb-6 border border-border bg-surface/50 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 font-mono text-xs text-text-muted">
                  ~/contact — new-inquiry
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot — hidden from humans, catches bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="_gotcha">Don&apos;t fill this out</label>
                <input
                  id="_gotcha"
                  name="_gotcha"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm uppercase tracking-wider text-text-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-border bg-transparent px-4 py-3 text-text-primary transition-colors focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm uppercase tracking-wider text-text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-border bg-transparent px-4 py-3 text-text-primary transition-colors focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="project-type"
                  className="mb-2 block text-sm uppercase tracking-wider text-text-muted"
                >
                  Project Type
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  className="w-full appearance-none border border-border bg-transparent px-4 py-3 text-text-primary transition-colors focus:border-accent focus:outline-none"
                >
                  <option value="" className="bg-surface text-text-muted">
                    Select project type...
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-surface">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm uppercase tracking-wider text-text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none border border-border bg-transparent px-4 py-3 text-text-primary transition-colors focus:border-accent focus:outline-none"
                />
              </div>
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Sent!"
                    : "Send Message"}
              </Button>
              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
