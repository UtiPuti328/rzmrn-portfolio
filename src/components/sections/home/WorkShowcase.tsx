"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { getCaseStudyProjects } from "@/data/projects";

export default function WorkShowcase() {
  const caseStudies = getCaseStudyProjects();

  return (
    <section id="work" className="py-20">
      <Container>
        {/* Section header with two tracks */}
        <FadeIn>
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="hidden font-mono text-sm text-text-muted transition-colors hover:text-text-primary md:block"
            >
              ls -la ./projects &rarr;
            </Link>
          </div>
        </FadeIn>

        {/* Track labels */}
        <FadeIn delay={0.1}>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs uppercase tracking-widest text-blue-400/70">
                Content Production
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400/70">
                AI Systems
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </div>
          <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2">
            <p className="text-center font-mono text-[10px] uppercase tracking-wider text-text-muted">
              Video &middot; Motion &middot; Live &middot; Post-Production
            </p>
            <p className="text-center font-mono text-[10px] uppercase tracking-wider text-text-muted">
              Automation &middot; Multi-Agent &middot; Programmatic Video &middot; Pipeline
            </p>
          </div>
        </FadeIn>

        {/* Bridge line */}
        <FadeIn delay={0.2}>
          <p className="mt-8 text-center font-mono text-sm text-text-secondary">
            I produce content and build AI systems to scale it 10x
          </p>
        </FadeIn>

        {/* Case study cards grid */}
        <StaggerChildren className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {caseStudies.map((project) => (
            <StaggerItem key={project.slug}>
              {project.caseStudy && (
                <CaseStudyCard
                  project={project}
                  caseStudy={project.caseStudy}
                />
              )}
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Mobile link */}
        <FadeIn className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="font-mono text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            ls -la ./projects &rarr;
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
