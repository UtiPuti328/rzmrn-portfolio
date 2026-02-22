import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "404 — Page Not Found — RZMRN",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center">
      <Container className="text-center">
        <h1 className="font-heading text-7xl font-bold tracking-tight md:text-9xl">
          404
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Page not found.
        </p>
        <div className="mt-8">
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
