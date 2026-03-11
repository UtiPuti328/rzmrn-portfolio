import Container from "@/components/ui/Container";
import ProjectsPageContent from "@/components/sections/projects/ProjectsPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Case studies in AI systems, content production pipelines, and visual storytelling.",
  path: "/projects",
  ogImage: "/og/projects.jpg",
});

export default function ProjectsPage() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <h1 className="font-heading text-5xl font-bold tracking-tight md:text-7xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          AI systems, production pipelines, and visual work — case studies and
          portfolio.
        </p>

        <ProjectsPageContent />
      </Container>
    </section>
  );
}
