import Image from "next/image";
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
        <div className="flex items-center justify-between gap-8">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex items-center gap-4 text-left"
            >
              <div className="relative hidden h-16 w-24 flex-shrink-0 overflow-hidden bg-surface sm:block">
                <Image
                  src={prev.thumbnail}
                  alt={prev.title}
                  fill
                  sizes="96px"
                  className="object-cover transition-transform duration-[--duration-slow] ease-[--ease-expo-out] group-hover:scale-110"
                />
              </div>
              <div>
                <span className="text-sm text-text-muted">&larr; Previous</span>
                <p className="mt-1 font-heading text-xl font-semibold transition-colors group-hover:text-accent">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center gap-4 text-right"
            >
              <div>
                <span className="text-sm text-text-muted">Next &rarr;</span>
                <p className="mt-1 font-heading text-xl font-semibold transition-colors group-hover:text-accent">
                  {next.title}
                </p>
              </div>
              <div className="relative hidden h-16 w-24 flex-shrink-0 overflow-hidden bg-surface sm:block">
                <Image
                  src={next.thumbnail}
                  alt={next.title}
                  fill
                  sizes="96px"
                  className="object-cover transition-transform duration-[--duration-slow] ease-[--ease-expo-out] group-hover:scale-110"
                />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </section>
  );
}
