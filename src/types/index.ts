export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: number;
  thumbnail: string;
  hero?: string;
  videoLoop?: string;
  description: string;
  tags: string[];
  featured: boolean;
  order: number;
}

export type ProjectCategory =
  | "commercial"
  | "music-video"
  | "motion-design"
  | "documentary"
  | "social"
  | "branding";

export interface CaseStudyFrontmatter {
  title: string;
  client: string;
  category: ProjectCategory;
  year: number;
  hero: string;
  description: string;
  tags: string[];
  role: string;
  duration: string;
  tools: string[];
  metrics?: CaseStudyMetric[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  frontmatter: CaseStudyFrontmatter;
  content: string;
  slug: string;
}

export interface NavLink {
  label: string;
  href: string;
}
