"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import AnimatedText from "@/components/motion/AnimatedText";
import { useI18n } from "@/i18n/provider";

export default function AboutTeaser() {
  const { dict, locale } = useI18n();
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
              {dict.aboutTeaser.title}
            </AnimatedText>
          </div>
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-text-secondary">
                {dict.aboutTeaser.p1}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                {dict.aboutTeaser.p2}
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                {dict.aboutTeaser.p3}
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="mt-8">
                <Button href={`/${locale}/about`} variant="ghost">
                  {dict.aboutTeaser.link}
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
