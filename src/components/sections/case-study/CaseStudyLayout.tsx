"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import ProjectPlaceholder from "@/components/ui/ProjectPlaceholder";
import VideoPlayer from "@/components/ui/VideoPlayer";
import CaseNav from "@/components/sections/case-study/CaseNav";
import type { Project, CaseStudyData } from "@/types";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/provider";

interface CaseStudyLayoutProps {
  project: Project;
  caseStudy: CaseStudyData;
  prev?: Project;
  next?: Project;
  interactiveComponent?: React.ReactNode;
  tagline?: string;
}

const trackColors: Record<CaseStudyData["track"], string> = {
  production: "border-blue-500/60 text-blue-400",
  systems: "border-emerald-500/60 text-emerald-400",
  hybrid: "border-violet-500/60 text-violet-400",
};

function MultiParagraph({ text, className }: { text: string; className?: string }) {
  const paragraphs = text.split("\n\n").filter(Boolean);
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} className={cn(className, i > 0 && "mt-4")}>
          {p}
        </p>
      ))}
    </>
  );
}

export default function CaseStudyLayout({
  project,
  caseStudy,
  prev,
  next,
  interactiveComponent,
  tagline,
}: CaseStudyLayoutProps) {
  const { dict, locale } = useI18n();
  const hasMetrics = caseStudy.metrics.length > 0;

  return (
    <article>
      {/* Hero */}
      <section className="pb-16 pt-32">
        <Container>
          {/* Back link */}
          <Link
            href={`/${locale}/projects`}
            className="mb-8 inline-block font-mono text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            {dict.caseStudy.back}
          </Link>

          {/* Track badge */}
          <span
            className={cn(
              "inline-block border px-2.5 py-1 font-mono text-xs uppercase tracking-widest",
              trackColors[caseStudy.track]
            )}
          >
            {dict.projects.tracksLabel[caseStudy.track]}
          </span>

          {/* H1 headline */}
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            {caseStudy.headline[locale]}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            {caseStudy.subtitle[locale]}
          </p>

          {/* Hero visual */}
          <div className="mt-10">
            {project.videoLoop ? (
              <div className="relative aspect-[21/9] overflow-hidden border border-border bg-surface">
                <VideoPlayer
                  src={project.videoLoop}
                  poster={project.thumbnail}
                  alt={caseStudy.headline[locale]}
                  className="h-full w-full"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority
                  mobileAutoplayOnly={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            ) : project.thumbnail && !project.thumbnail.includes("placeholder") ? (
              <div className="relative aspect-[21/9] overflow-hidden border border-border bg-surface">
                <Image
                  src={project.thumbnail}
                  alt={caseStudy.headline[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            ) : (
              <ProjectPlaceholder
                title={caseStudy.headline[locale]}
                track={caseStudy.track}
                diagramLabel={
                  caseStudy.track === "systems" || caseStudy.track === "hybrid"
                    ? "Pipeline Diagram"
                    : undefined
                }
                aspect="wide"
              />
            )}
          </div>

          {/* Stack tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {caseStudy.stackTags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* Metrics Bar or Tagline */}
      {hasMetrics ? (
        <section className="border-y border-border py-12">
          <Container>
            <div className={cn(
              "grid gap-8",
              caseStudy.metrics.length <= 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-2 md:grid-cols-4"
            )}>
              {caseStudy.metrics.map((metric) => (
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
      ) : tagline ? (
        <section className="border-y border-border py-12">
          <Container>
            <p className="font-mono text-sm italic text-text-secondary">
              {tagline}
            </p>
          </Container>
        </section>
      ) : null}

      {/* The Challenge */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-mono text-xs uppercase tracking-widest text-text-muted">
              {dict.caseStudy.challenge}
            </h2>
            <div className="mt-4">
              <MultiParagraph
                text={caseStudy.challenge[locale]}
                className="text-lg leading-relaxed text-text-secondary"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* The Approach */}
      <section className="border-t border-border py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-mono text-xs uppercase tracking-widest text-text-muted">
              {dict.caseStudy.approach}
            </h2>
            <div className="mt-4">
              <MultiParagraph
                text={caseStudy.approach[locale]}
                className="text-lg leading-relaxed text-text-secondary"
              />
            </div>
          </div>

          {/* Interactive component or fallback placeholder */}
          <div className="mx-auto mt-10 max-w-4xl">
            {interactiveComponent ?? (
              <ProjectPlaceholder
                title={project.title[locale]}
                track={caseStudy.track}
                diagramLabel={
                  caseStudy.track === "production"
                    ? "Work Gallery"
                    : "System Architecture"
                }
              />
            )}
          </div>
        </Container>
      </section>

      {/* The Result */}
      <section className="border-t border-border py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-mono text-xs uppercase tracking-widest text-text-muted">
              {dict.caseStudy.result}
            </h2>
            <div className="mt-4">
              <MultiParagraph
                text={caseStudy.result[locale]}
                className="text-lg leading-relaxed text-text-secondary"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Role */}
      <section className="border-t border-border py-8">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              {dict.caseStudy.role}:{" "}
            </span>
            <span className="font-mono text-sm text-text-primary">
              {caseStudy.role[locale]}
            </span>
          </div>
        </Container>
      </section>

      {/* Prev/Next navigation */}
      <CaseNav prev={prev} next={next} />
    </article>
  );
}
