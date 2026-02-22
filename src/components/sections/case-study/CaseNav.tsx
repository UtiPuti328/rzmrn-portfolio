import Link from "next/link";
import Container from "@/components/ui/Container";
import type { Project } from "@/types";

interface CaseNavProps {
  prev?: Project;
  next?: Project;
}

export default function CaseNav({ prev, next }: CaseNavProps) {
  return (
    <section className="border-t border-border py-16">
      <Container>
        <div className="flex items-center justify-between">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group text-left"
            >
              <span className="text-sm text-text-muted">&larr; Previous</span>
              <p className="mt-1 font-heading text-xl font-semibold transition-colors group-hover:text-accent">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group text-right"
            >
              <span className="text-sm text-text-muted">Next &rarr;</span>
              <p className="mt-1 font-heading text-xl font-semibold transition-colors group-hover:text-accent">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </section>
  );
}
