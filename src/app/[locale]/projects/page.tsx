import Container from "@/components/ui/Container";
import ProjectsPageContent from "@/components/sections/projects/ProjectsPageContent";
import { createMetadata } from "@/lib/metadata";
import { getValidatedLocale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = getValidatedLocale(locale);
  return createMetadata({
    title: validLocale === "pl" ? "Projekty" : "Projects",
    description: validLocale === "pl" ? "Studia przypadk\u00f3w, pipeline'y, i storytelling wizualny." : "Case studies in AI systems, content production pipelines, and visual storytelling.",
    path: `/${validLocale}/projects`,
    ogImage: "/og/projects.jpg",
  });
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = getValidatedLocale(locale);

  return (
    <section className="pt-32 pb-24">
      <Container>
        <h1 className="font-heading text-5xl font-bold tracking-tight md:text-7xl">
          {validLocale === "pl" ? "Projekty" : "Projects"}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          {validLocale === "pl" ? "Systemy AI, pipeline produkcyjny i prace wizualne \u2014 case studies i portfolio." : "AI systems, production pipelines, and visual work \u2014 case studies and portfolio."}
        </p>

        <ProjectsPageContent />
      </Container>
    </section>
  );
}
