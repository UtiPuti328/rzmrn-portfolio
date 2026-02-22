"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import GlitchHover from "@/components/motion/GlitchHover";
import { getFeaturedProjects } from "@/data/projects";
import type { Project } from "@/types";

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

export default function ProjectsGrid() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-32">
      <Container>
        <FadeIn>
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="hidden font-mono text-sm text-text-muted transition-colors hover:text-text-primary md:block"
            >
              ls -la ./projects →
            </Link>
          </div>
        </FadeIn>

        <StaggerChildren className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <GlitchHover>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-video overflow-hidden bg-surface">
                    <div className="h-full w-full bg-gradient-to-br from-surface to-border/50 transition-transform duration-[--duration-slow] ease-[--ease-expo-out] group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-background/0 transition-colors duration-[--duration-normal] group-hover:bg-background/40" />

                    {/* Tags: top-left on hover */}
                    <div className="absolute top-4 left-4 flex gap-2 opacity-0 transition-all duration-[--duration-normal] group-hover:opacity-100">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    {/* Meta: bottom on hover */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 pt-8 opacity-0 transition-opacity duration-[--duration-normal] group-hover:opacity-100">
                      <ProjectMeta project={project} />
                    </div>
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
                    <h3 className="mt-1 font-heading text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </GlitchHover>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="font-mono text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            ls -la ./projects →
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
