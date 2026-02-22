import Container from "@/components/ui/Container";
import ProjectsPageContent from "@/components/sections/projects/ProjectsPageContent";
import { createMetadata } from "@/lib/metadata";

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

        <ProjectsPageContent />
      </Container>
    </section>
  );
}
