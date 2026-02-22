import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import MDXContent from "@/components/mdx/MDXContent";
import CaseContext from "@/components/sections/case-study/CaseContext";
import CaseResult from "@/components/sections/case-study/CaseResult";
import CaseNav from "@/components/sections/case-study/CaseNav";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/mdx";
import { getProjectBySlug, getAllSlugs, projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const mdxSlugs = getCaseStudySlugs();
  const dataSlugs = getAllSlugs();
  const allSlugs = [...new Set([...mdxSlugs, ...dataSlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  const project = getProjectBySlug(slug);

  const title = caseStudy?.frontmatter.title ?? project?.title ?? slug;
  const description =
    caseStudy?.frontmatter.description ?? project?.description;

  return createMetadata({ title, description });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  const project = getProjectBySlug(slug);

  if (!caseStudy && !project) notFound();

  const title = caseStudy?.frontmatter.title ?? project?.title ?? slug;
  const description =
    caseStudy?.frontmatter.description ?? project?.description;
  const client = caseStudy?.frontmatter.client ?? project?.client;
  const year = caseStudy?.frontmatter.year ?? project?.year;
  const tags = caseStudy?.frontmatter.tags ?? project?.tags ?? [];

  // Prev/next navigation
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const currentIndex = sorted.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? sorted[currentIndex - 1] : undefined;
  const next =
    currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : undefined;

  return (
    <article>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end pb-16 pt-32">
        {project?.thumbnail && (
          <div className="absolute inset-0 -z-10">
            <Image
              src={project.thumbnail}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          </div>
        )}
        <Container>
          <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
            {client && <span>{client}</span>}
            {client && year && <span>/</span>}
            {year && <span>{year}</span>}
          </div>
          <h1 className="mt-4 font-heading text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg text-text-secondary">
              {description}
            </p>
          )}
          {tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-3 py-1 text-xs uppercase tracking-wider text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Project details (for non-MDX projects) */}
      {!caseStudy && project && (
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {project.type === "visual" && (
                <>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                      Role
                    </span>
                    <p className="mt-2 text-text-primary">{project.role}</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                      Deliverable
                    </span>
                    <p className="mt-2 text-text-primary">
                      {project.deliverable}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                      Status
                    </span>
                    <p className="mt-2 capitalize text-text-primary">
                      {project.status}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Video or thumbnail */}
            <div className="mt-16 relative aspect-video overflow-hidden bg-surface">
              {project.videoLoop ? (
                <video
                  src={project.videoLoop}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={project.thumbnail}
                  alt={title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Context details */}
      {caseStudy && (
        <CaseContext
          role={caseStudy.frontmatter.role}
          duration={caseStudy.frontmatter.duration}
          tools={caseStudy.frontmatter.tools}
        />
      )}

      {/* MDX Content */}
      {caseStudy && (
        <section className="py-16">
          <Container>
            <MDXContent source={caseStudy.content} />
          </Container>
        </section>
      )}

      {/* Metrics */}
      {caseStudy?.frontmatter.metrics && (
        <CaseResult metrics={caseStudy.frontmatter.metrics} />
      )}

      {/* Prev/Next navigation */}
      <CaseNav prev={prev} next={next} />
    </article>
  );
}
