"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import AnimatedText from "@/components/motion/AnimatedText";
import { useI18n } from "@/i18n/provider";

export default function HomeCTA() {
  const { dict, locale } = useI18n();
  return (
    <section className="py-32">
      <Container className="text-center">
        <AnimatedText
          as="h2"
          animation="words"
          className="font-heading text-4xl font-semibold tracking-tight md:text-6xl"
        >
          {dict.cta.title}
        </AnimatedText>
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-text-secondary">
            {dict.cta.subtitle}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10">
            <Button href={`/${locale}/contact`}>{dict.cta.button}</Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
