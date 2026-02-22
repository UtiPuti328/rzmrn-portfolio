import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import AnimatedText from "@/components/motion/AnimatedText";

export default function HomeCTA() {
  return (
    <section className="py-32">
      <Container className="text-center">
        <AnimatedText
          as="h2"
          animation="words"
          className="font-heading text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Let&apos;s make something together
        </AnimatedText>
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-text-secondary">
            Available for commercial projects, music videos, brand films, and
            motion design commissions.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10">
            <Button href="/contact">Start a Conversation</Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
