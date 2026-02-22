"use client";

import { useState, type FormEvent } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
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

          <form onSubmit={handleSubmit} className="space-y-6">
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
      </Container>
    </section>
  );
}
