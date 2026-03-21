"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";
import ProjectPlaceholder from "@/components/ui/ProjectPlaceholder";
import { useParallaxTilt } from "@/hooks/useParallaxTilt";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { Project, CaseStudyData } from "@/types";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/provider";

interface CaseStudyCardProps {
  project: Project;
  caseStudy: CaseStudyData;
}

const trackColors: Record<CaseStudyData["track"], string> = {
  production: "border-blue-500/60 text-blue-400",
  systems: "border-emerald-500/60 text-emerald-400",
  hybrid: "border-violet-500/60 text-violet-400",
};

export default function CaseStudyCard({
  project,
  caseStudy,
}: CaseStudyCardProps) {
  const { dict, locale } = useI18n();
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const supportsHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const { ref, handleMouseMove, handleMouseLeave } = useParallaxTilt({
    maxTilt: 4,
    maxShift: 6,
    smoothing: 0.05,
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const hasRealThumbnail =
    !!project.thumbnail && !project.thumbnail.includes("placeholder");
  const hasVideo = !!project.videoLoop;
  const shouldAutoplayInView =
    hasVideo && !supportsHover && !prefersReducedMotion;

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldAutoplayInView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay blocked */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [shouldAutoplayInView]);

  function handleCardMouseEnter() {
    if (videoRef.current && hasVideo && supportsHover) {
      videoRef.current.play().catch(() => {});
    }
  }

  function handleCardMouseLeave() {
    handleMouseLeave();
    if (videoRef.current && supportsHover) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <Link href={`/${locale}/projects/${project.slug}`} className="group flex flex-col h-full">
      <div
        ref={ref}
        onMouseMove={supportsHover ? handleMouseMove : undefined}
        onMouseLeave={supportsHover ? handleCardMouseLeave : undefined}
        onMouseEnter={supportsHover ? handleCardMouseEnter : undefined}
        className="flex flex-col flex-1"
      >
        {/* Hero media */}
        {hasRealThumbnail ? (
          <div className="relative aspect-video overflow-hidden border border-border bg-surface transition-shadow duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]">
            {/* Static thumbnail */}
            <Image
                src={project.thumbnail}
                alt={caseStudy.headline[locale]}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={cn(
                  "object-cover transition-opacity duration-500",
                  videoReady && hasVideo ? "opacity-0" : "opacity-100"
                )}
              />

            {/* Hover preview on desktop, viewport autoplay on touch devices */}
            {hasVideo && (
              <video
                ref={videoRef}
                src={project.videoLoop}
                muted
                loop
                playsInline
                preload={shouldAutoplayInView ? "metadata" : "none"}
                onCanPlay={() => setVideoReady(true)}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                  videoReady ? "opacity-100" : "opacity-0"
                )}
              />
            )}

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ) : (
          <ProjectPlaceholder
            title={caseStudy.headline[locale]}
            track={caseStudy.track}
            diagramLabel={
              caseStudy.track === "systems" || caseStudy.track === "hybrid"
                ? "Architecture Diagram"
                : undefined
            }
            className="transition-shadow duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
          />
        )}

        {/* Content */}
        <div className="mt-4 flex flex-col flex-1">
          {/* Track badge */}
          <span
            className={cn(
              "self-start inline-block border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest",
              trackColors[caseStudy.track]
            )}
          >
            {dict.projects.tracksLabel[caseStudy.track]}
          </span>

          {/* Headline */}
          <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-accent">
            {caseStudy.headline[locale]}
          </h3>

          {/* Key metrics inline */}
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
            {caseStudy.metrics.slice(0, 3).map((m) => (
              <span
                key={m.label.en}
                className="font-mono text-sm text-text-secondary"
              >
                <span className="font-semibold text-text-primary">
                  {m.value}
                </span>{" "}
                {m.label[locale]}
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
          <span className="self-start mt-auto pt-4 inline-block font-mono text-xs uppercase tracking-wider text-text-muted transition-colors group-hover:text-accent">
            {dict.projects.viewCaseStudy}
          </span>
        </div>
      </div>
    </Link>
  );
}
