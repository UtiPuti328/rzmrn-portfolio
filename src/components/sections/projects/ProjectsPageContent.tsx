"use client";

import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import { useParallaxTilt } from "@/hooks/useParallaxTilt";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  const { ref, handleMouseMove, handleMouseLeave } = useParallaxTilt({
    maxTilt: 6,
    maxShift: 10,
  });

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-video overflow-hidden bg-surface will-change-transform transition-shadow duration-[--duration-normal] hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[--duration-slow] ease-[--ease-expo-out] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 transition-colors duration-[--duration-normal] group-hover:bg-background/50" />

        {/* Tags on hover */}
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 transition-all duration-[--duration-normal] group-hover:opacity-100">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-3 text-sm text-text-muted">
          <span>{project.client}</span>
          <span>/</span>
          <span>{project.year}</span>
        </div>
        <h2 className="mt-1 font-heading text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
          {project.title}
        </h2>
        <p className="mt-2 text-sm text-text-secondary line-clamp-2">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

export default function ProjectsPageContent() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
      {sorted.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
