"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import ExpandableCard from "@/components/ui/ExpandableCard";
import { getFeaturedProjects } from "@/data/projects";

export default function ProjectsGrid() {
  const featured = getFeaturedProjects();
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <section className="py-20">
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
              <ExpandableCard
                project={project}
                isExpanded={expandedSlug === project.slug}
                onToggle={setExpandedSlug}
              />
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
