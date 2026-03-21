"use client";

import Container from "@/components/ui/Container";
import type { CaseStudyMetric } from "@/types";
import { useI18n } from "@/i18n/provider";

interface CaseResultProps {
  metrics?: CaseStudyMetric[];
}

export default function CaseResult({ metrics = [] }: CaseResultProps) {
  const { dict, locale } = useI18n();

  if (metrics.length === 0) return null;

  return (
    <section className="border-t border-border py-16">
      <Container>
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          {dict.caseStudy.result}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label.en}>
              <p className="font-heading text-3xl font-bold text-accent md:text-4xl">
                {metric.value}
              </p>
              <span className="mt-1 block font-mono text-xs uppercase tracking-wider text-text-muted">
                {metric.label[locale]}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
