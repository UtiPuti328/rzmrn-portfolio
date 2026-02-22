import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Philosophy() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-3xl font-light leading-snug text-text-primary md:text-4xl">
            &ldquo;The best post-production is invisible. You feel the story,
            not the technique.&rdquo;
          </blockquote>
          <div className="mt-12">
            <Button href="/contact" variant="secondary">
              Work With Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
