"use client";

import Link from "next/link";
import Badge from "@/components/ui/Badge";
import ProjectPlaceholder from "@/components/ui/ProjectPlaceholder";
import { useParallaxTilt } from "@/hooks/useParallaxTilt";
import type { Project, CaseStudyData } from "@/types";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  project: Project;
  caseStudy: CaseStudyData;
}

const trackColors: Record<CaseStudyData["track"], string> = {
  production: "border-blue-500/60 text-blue-400",
  systems: "border-emerald-500/60 text-emerald-400",
  hybrid: "border-violet-500/60 text-violet-400",
};

const trackLabels: Record<CaseStudyData["track"], string> = {
  production: "PRODUCTION",
  systems: "SYSTEMS",
  hybrid: "SYSTEMS + PRODUCTION",
};

export default function CaseStudyCard({
  project,
  caseStudy,
}: CaseStudyCardProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useParallaxTilt({
    maxTilt: 4,
    maxShift: 6,
    smoothing: 0.05,
  });

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hero placeholder */}
        <ProjectPlaceholder
          title={caseStudy.headline}
          track={caseStudy.track}
          diagramLabel={
            caseStudy.track === "systems" || caseStudy.track === "hybrid"
              ? "Architecture Diagram"
              : undefined
          }
          className="transition-shadow duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
        />

        {/* Content */}
        <div className="mt-4">
          {/* Track badge */}
          <span
            className={cn(
              "inline-block border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest",
              trackColors[caseStudy.track]
            )}
          >
            {trackLabels[caseStudy.track]}
          </span>

          {/* Headline */}
          <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-accent">
            {caseStudy.headline}
          </h3>

          {/* Key metrics inline */}
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
            {caseStudy.metrics.slice(0, 3).map((m) => (
              <span
                key={m.label}
                className="font-mono text-sm text-text-secondary"
              >
                <span className="font-semibold text-text-primary">
                  {m.value}
                </span>{" "}
                {m.label}
              </span>
            ))}
          </div>

          {/* Stack tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {caseStudy.stackTags.slice(0, 5).map((tag) => (
              <Badge key={tag} className="text-[10px] px-1.5 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTA */}
          <span className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-text-muted transition-colors group-hover:text-accent">
            View Case Study &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
