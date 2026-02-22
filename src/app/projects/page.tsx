import Link from "next/link";
import Container from "@/components/ui/Container";
import { createMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Selected works in cinematic editing, motion design, and visual storytelling.",
});

export default function ProjectsPage() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <h1 className="font-heading text-5xl font-bold tracking-tight md:text-7xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          A curated selection of commercial, music video, and motion design
          work.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="aspect-video overflow-hidden bg-surface">
                  <div className="h-full w-full bg-border/30 transition-transform duration-[--duration-slow] ease-[--ease-expo-out] group-hover:scale-105" />
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
            ))}
        </div>
      </Container>
    </section>
  );
}
