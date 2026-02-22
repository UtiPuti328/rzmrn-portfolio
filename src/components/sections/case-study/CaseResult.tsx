import Container from "@/components/ui/Container";
import type { CaseStudyMetric } from "@/types";

interface CaseResultProps {
  metrics?: CaseStudyMetric[];
}

export default function CaseResult({ metrics = [] }: CaseResultProps) {
  if (metrics.length === 0) return null;

  return (
    <section className="border-t border-border py-16">
      <Container>
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          Results
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-heading text-4xl font-bold text-accent">
                {metric.value}
              </p>
              <span className="mt-2 block text-sm text-text-muted">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
