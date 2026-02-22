import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { CaseStudy, CaseStudyFrontmatter } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "content/projects");

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    frontmatter: data as CaseStudyFrontmatter,
    content,
    slug,
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  return getCaseStudySlugs()
    .map(getCaseStudy)
    .filter((cs): cs is CaseStudy => cs !== null);
}
