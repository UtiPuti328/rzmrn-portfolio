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
              I don&apos;t just cut video. I build systems.
            </AnimatedText>
          </div>
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-text-secondary">
                Director of Post-Production and Motion Designer, engineering
                high-end visual stories and the technical workflows behind them.
                From EdTech course productions to automotive commercials for
                Mazda and Lotus.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Custom AI and automation pipelines integrated into
                post-production — eliminating routine bottlenecks so the focus
                stays entirely on the creative work.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Based in Poland, available for remote commercial projects, brand
                films, and motion design commissions globally.
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
