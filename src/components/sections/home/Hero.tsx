import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";
import FontWeightScroll from "@/components/motion/FontWeightScroll";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <Container>
        <div className="max-w-5xl">
          <FontWeightScroll
            as="h1"
            className="text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-tighter"
            weightFrom={100}
            weightTo={900}
          >
            RZMRN
          </FontWeightScroll>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-text-secondary md:text-2xl">
              Director of Post-Production &amp; Motion Designer.
              <br />
              Cinematic editing, motion graphics, and visual storytelling.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-12 flex items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wider text-text-primary transition-colors hover:bg-accent-hover"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium uppercase tracking-wider text-text-primary transition-colors hover:border-text-muted"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Scroll indicator */}
      <FadeIn delay={0.8} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-text-muted">
            Scroll
          </span>
          <div className="h-12 w-px bg-border" />
        </div>
      </FadeIn>
    </section>
  );
}
