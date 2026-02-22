import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import AnimatedText from "@/components/motion/AnimatedText";

export default function AboutTeaser() {
  return (
    <section className="py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <AnimatedText
              as="h2"
              animation="words"
              className="font-heading text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Conflict of physics and digital
            </AnimatedText>
          </div>
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-text-secondary">
                I work at the intersection of cinematic craft and digital
                experimentation. Every project starts with a question: what
                happens when you push physical media through a digital pipeline —
                or vice versa?
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                15+ years of editing, motion design, and post-production across
                commercials, music videos, documentaries, and brand films.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Now building AI-driven content pipelines — automating
                research, production workflows, and multi-agent systems that
                turn creative ideas into delivered assets faster.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="mt-8">
                <Button href="/about" variant="ghost">
                  More About Me &rarr;
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
