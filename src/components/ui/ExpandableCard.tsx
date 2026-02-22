"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { useParallaxTilt } from "@/hooks/useParallaxTilt";
import type { Project } from "@/types";

interface ExpandableCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: (slug: string | null) => void;
}

function ProjectMeta({ project }: { project: Project }) {
  if (project.type === "visual") {
    return (
      <div className="font-mono text-xs leading-relaxed text-text-muted">
        <span className="text-text-secondary">role:</span> {project.role}
        <br />
        <span className="text-text-secondary">deliverable:</span>{" "}
        {project.deliverable}
      </div>
    );
  }

  return (
    <div className="font-mono text-xs leading-relaxed text-text-muted">
      {project.stack && (
        <>
          <span className="text-text-secondary">stack:</span>{" "}
          {project.stack.join(", ")}
          <br />
        </>
      )}
      <span className="text-text-secondary">arch:</span>{" "}
      {project.architecture}
      <br />
      <span className="text-text-secondary">metrics:</span> {project.metrics}
    </div>
  );
}

export default function ExpandableCard({
  project,
  isExpanded,
  onToggle,
}: ExpandableCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const { ref: tiltRef, handleMouseMove, handleMouseLeave } = useParallaxTilt({
    maxTilt: 5,
    maxShift: 8,
    smoothing: 0.05,
  });

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }, [isExpanded]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        onToggle(null);
      }
    },
    [isExpanded, onToggle]
  );

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded, handleKeyDown]);

  return (
    <div ref={cardRef}>
      <button
        onClick={() => onToggle(isExpanded ? null : project.slug)}
        className="group block w-full cursor-pointer text-left"
        aria-expanded={isExpanded}
      >
        <div
          ref={tiltRef}
          onMouseMove={isExpanded ? undefined : handleMouseMove}
          onMouseLeave={isExpanded ? undefined : handleMouseLeave}
          className="relative aspect-video overflow-hidden bg-surface transition-shadow duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-background/0 transition-[background-color] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-background/35" />

          <div className="absolute top-4 left-4 flex gap-2 opacity-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 pt-8 opacity-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100">
              <ProjectMeta project={project} />
            </div>
          )}
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-3 text-sm text-text-muted">
            <span>{project.client}</span>
            <span>/</span>
            <span>{project.year}</span>
            <span>/</span>
            <span className="capitalize">
              {project.category.replace("-", " ")}
            </span>
          </div>
          <h3 className="mt-1 font-heading text-2xl font-semibold tracking-tight transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-accent">
            {project.title}
          </h3>
        </div>
      </button>

      {/* Expandable detail panel — CSS transition */}
      <div
        className="overflow-hidden transition-[height,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          height: isExpanded ? contentHeight : 0,
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div ref={contentRef}>
          <div className="mt-4 border border-border bg-surface/50 p-6">
            <p className="text-text-secondary leading-relaxed">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            {project.type === "visual" && (
              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Role
                  </span>
                  <p className="mt-1 text-sm text-text-primary">
                    {project.role}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Deliverable
                  </span>
                  <p className="mt-1 text-sm text-text-primary">
                    {project.deliverable}
                  </p>
                </div>
              </div>
            )}

            {project.type === "system" && (
              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Architecture
                  </span>
                  <p className="mt-1 text-sm text-text-primary">
                    {project.architecture}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Metrics
                  </span>
                  <p className="mt-1 text-sm text-text-primary">
                    {project.metrics}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center gap-4">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-text-primary transition-colors hover:bg-accent-hover"
              >
                View Full Project
              </Link>
              <button
                onClick={() => onToggle(null)}
                className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-text-muted transition-colors hover:text-text-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
