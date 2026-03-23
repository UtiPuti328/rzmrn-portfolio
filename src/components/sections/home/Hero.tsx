"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";
import TerminalProof from "@/components/ui/TerminalProof";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useI18n } from "@/i18n/provider";

export default function Hero() {
  const { dict, locale } = useI18n();
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );

  const headline = useScrambleText({
    text: "RZMRN",
    duration: 350,
    delay: 50,
    autoStart: !prefersReducedMotion,
  });

  const subtitle = useScrambleText({
    text: dict.hero.subtitle,
    duration: 300,
    delay: 150,
    autoStart: !prefersReducedMotion,
  });

  const showCta = prefersReducedMotion || subtitle.hasCompleted;

  return (
    <section className="relative flex min-h-[70vh] items-center border-b border-border pb-24">
      <Container>
        {/* Desktop: side-by-side | Mobile: stacked */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
          {/* Left column: headline + subtitle + CTA */}
          <div className="min-w-0 flex-1">
            <div className="hidden md:flex items-baseline gap-4">
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

            <div className="mt-24 md:mt-8 max-w-2xl">
              <p className="text-xl leading-relaxed text-text-secondary md:text-2xl">
                {prefersReducedMotion ? dict.hero.subtitle : subtitle.displayText}
                {subtitle.isScrambling && (
                  <span className="ml-1 inline-block w-[2px] animate-pulse bg-accent align-middle" style={{ height: "1em" }} />
                )}
              </p>
            </div>

            <FadeIn delay={0.3}>
              <p className="mt-4 font-mono text-sm text-text-muted">
                {dict.hero.trackLabels}
              </p>
            </FadeIn>

            <div
              className="mt-12 flex flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 transition-opacity duration-500 w-full sm:w-auto"
              style={{ opacity: showCta ? 1 : 0 }}
            >
              <Link
                href={`/${locale}#work`}
                className="inline-flex flex-1 sm:flex-none items-center justify-center bg-accent px-4 py-3 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-primary transition-colors hover:bg-accent-hover text-center leading-tight"
              >
                {dict.hero.viewWork}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex flex-1 sm:flex-none items-center justify-center border border-border px-4 py-3 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-primary transition-colors hover:border-text-muted text-center leading-tight whitespace-pre-wrap sm:whitespace-nowrap"
              >
                {dict.hero.getInTouch}
              </Link>
              <a
                href="https://www.fiverr.com/maksbeiev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-[#1DBF73]/25 sm:border-border px-4 py-3 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1DBF73]/70 sm:text-text-primary transition-colors hover:border-[#1DBF73]/50 sm:hover:border-text-muted hover:text-[#1DBF73] sm:hover:text-text-primary text-center leading-tight"
              >
                <span className="flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-[2px] bg-[#1DBF73] font-sans text-[7px] font-black leading-none text-white">fi</span>
                <span className="sm:hidden">fiverr.com/maksbeiev</span>
                <span className="hidden sm:inline">Fiverr</span>
                <span className="sm:hidden ml-auto opacity-40">↗</span>
              </a>
            </div>
          </div>

          {/* Right column (desktop) / Below CTA (mobile): terminal */}
          <FadeIn delay={0.4} className="w-full shrink-0 md:w-auto">
            <TerminalProof />
          </FadeIn>
        </div>
      </Container>

      <FadeIn delay={0.6} className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-text-muted">
            {dict.hero.scroll}
          </span>
          <div className="h-10 w-px bg-border" />
        </div>
      </FadeIn>
    </section>
  );
}
