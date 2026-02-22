"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Hero() {
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );

  const headline = useScrambleText({
    text: "RZMRN",
    duration: 1000,
    delay: 200,
    autoStart: !prefersReducedMotion,
  });

  const subtitle = useScrambleText({
    text: "Creative Technologist. Motion Director. Systems Architect.",
    duration: 800,
    delay: 1200,
    autoStart: !prefersReducedMotion,
  });

  const showCta = prefersReducedMotion || subtitle.hasCompleted;

  return (
    <section className="relative flex min-h-screen items-center border-b border-border">
      <Container>
        <div className="max-w-5xl">
          {/* IDE comment prefix + headline */}
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-lg text-text-muted select-none md:text-2xl">
              {"//"}
            </span>
            <h1 className="font-heading text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-tighter">
              {prefersReducedMotion ? "RZMRN" : headline.displayText}
              {headline.isScrambling && (
                <span className="ml-1 inline-block w-[3px] animate-pulse bg-accent align-middle" style={{ height: "0.8em" }} />
              )}
            </h1>
          </div>

          {/* Subtitle with scramble */}
          <div className="mt-8 max-w-xl">
            <p className="text-xl leading-relaxed text-text-secondary md:text-2xl">
              {prefersReducedMotion
                ? "Creative Technologist. Motion Director. Systems Architect."
                : subtitle.displayText}
              {subtitle.isScrambling && (
                <span className="ml-1 inline-block w-[2px] animate-pulse bg-accent align-middle" style={{ height: "1em" }} />
              )}
            </p>
          </div>

          {/* CTA buttons — fade in after scramble completes */}
          <div
            className="mt-12 flex items-center gap-4 transition-opacity duration-500"
            style={{ opacity: showCta ? 1 : 0 }}
          >
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
        </div>
      </Container>

      {/* Scroll indicator */}
      <FadeIn delay={2.5} className="absolute bottom-10 left-1/2 -translate-x-1/2">
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
