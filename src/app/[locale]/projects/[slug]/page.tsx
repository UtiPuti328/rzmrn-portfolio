import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import MDXContent from "@/components/mdx/MDXContent";
import CaseContext from "@/components/sections/case-study/CaseContext";
import CaseResult from "@/components/sections/case-study/CaseResult";
import CaseNav from "@/components/sections/case-study/CaseNav";
import CaseStudyLayout from "@/components/sections/case-study/CaseStudyLayout";
import InteractiveSlot from "@/components/interactive/InteractiveSlot";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/mdx";
import {
  getProjectBySlug,
  getAllSlugs,
  getCaseStudyProjects,
  projects,
} from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

import { getValidatedLocale } from "@/i18n/config";

const SLUG_TAGLINES: Record<string, string> = {
  "short-form-reels": "The work speaks for itself",
};

interface CaseStudyPageProps {
  params: Promise<{ slug: string; locale: string }>;
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
  const { slug, locale } = await params;
  const validLocale = getValidatedLocale(locale);
  const caseStudy = getCaseStudy(slug);
  const project = getProjectBySlug(slug);

  const title =
    project?.caseStudy?.headline[validLocale] ??
    caseStudy?.frontmatter.title ??
    project?.title[validLocale] ??
    slug;
  const description =
    project?.caseStudy?.subtitle[validLocale] ??
    caseStudy?.frontmatter.description ??
    project?.description[validLocale];

  return createMetadata({
    title,
    description,
    path: `/${validLocale}/projects/${slug}`,
    ogImage: `/og/${slug}.jpg`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug, locale } = await params;
  const validLocale = getValidatedLocale(locale);
  const mdxCaseStudy = getCaseStudy(slug);
  const project = getProjectBySlug(slug);

  if (!mdxCaseStudy && !project) notFound();

  // Case study from TypeScript data — new layout
  if (project?.caseStudy) {
    const caseStudies = getCaseStudyProjects();
    const currentIndex = caseStudies.findIndex((p) => p.slug === slug);
    const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : undefined;
    const next =
      currentIndex < caseStudies.length - 1
        ? caseStudies[currentIndex + 1]
        : undefined;

    return (
      <CaseStudyLayout
        project={project}
        caseStudy={project.caseStudy}
        prev={prev}
        next={next}
        interactiveComponent={<InteractiveSlot slug={slug} project={project} />}
        tagline={SLUG_TAGLINES[slug]}
      />
    );
  }

  // Legacy: MDX case study or visual project
  const title = mdxCaseStudy?.frontmatter.title ?? project?.title[validLocale] ?? slug;
  const description =
    mdxCaseStudy?.frontmatter.description ?? project?.description[validLocale];
  const client = mdxCaseStudy?.frontmatter.client ?? project?.client;
  const year = mdxCaseStudy?.frontmatter.year ?? project?.year;
  const tags = mdxCaseStudy?.frontmatter.tags ?? project?.tags ?? [];

  // Prev/next navigation for non-case-study projects
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const currentIndex = sorted.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? sorted[currentIndex - 1] : undefined;
  const next =
    currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : undefined;

  return (
    <article>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end pb-16 pt-32">
        {project?.videoLoop ? (
          <div className="absolute inset-0 -z-10">
            <VideoPlayer
              src={project.videoLoop}
              poster={project.thumbnail}
              alt={title}
              className="h-full w-full"
              sizes="100vw"
              priority
              mobileAutoplayOnly={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          </div>
        ) : project?.thumbnail && (
          <div className="absolute inset-0 -z-10">
            <Image
              src={project.thumbnail}
              alt={title}
              fill
              sizes="100vw"
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
      {!mdxCaseStudy && project && (
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

            {/* Videos or fallback */}
            {project.videos && project.videos.length > 0 ? (
              <div className="mt-16 space-y-6">
                {project.videos.map((vid, i) => (
                  <div key={i} className="relative aspect-video overflow-hidden bg-surface">
                    <video
                      src={vid.src}
                      autoPlay={i === 0}
                      loop
                      muted
                      playsInline
                      controls
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
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
            )}

          </Container>
        </section>
      )}

      {/* Context details */}
      {mdxCaseStudy && (
        <CaseContext
          role={mdxCaseStudy.frontmatter.role}
          duration={mdxCaseStudy.frontmatter.duration}
          tools={mdxCaseStudy.frontmatter.tools}
        />
      )}

      {/* MDX Content */}
      {mdxCaseStudy && (
        <section className="py-16">
          <Container>
            <MDXContent source={mdxCaseStudy.content} />
          </Container>
        </section>
      )}

      {/* Metrics */}
      {mdxCaseStudy?.frontmatter.metrics && (
        <CaseResult metrics={mdxCaseStudy.frontmatter.metrics} />
      )}

      {/* Prev/Next navigation */}
      <CaseNav prev={prev} next={next} />
    </article>
  );
}
