import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center">
      <Container className="text-center">
        <h1 className="font-heading text-8xl font-bold tracking-tight md:text-[12rem]">
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
