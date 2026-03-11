export type ProjectType = "visual" | "system";

export type ProjectCategory =
  | "commercial"
  | "music-video"
  | "motion-design"
  | "documentary"
  | "social"
  | "branding"
  | "ai-automation"
  | "content-pipeline"
  | "live-production"
  | "bot-system"
  | "infrastructure";

export type ProjectTrack = "production" | "systems" | "hybrid";

interface ProjectBase {
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
  stack?: string[];
  status?: "completed" | "ongoing" | "archived";
}

export interface VisualProject extends ProjectBase {
  type: "visual";
  role: string;
  deliverable: string;
  caseStudy?: CaseStudyData;
}

export interface SystemProject extends ProjectBase {
  type: "system";
  architecture: string;
  metrics: string;
  repo?: string;
  caseStudy?: CaseStudyData;
}

export type Project = VisualProject | SystemProject;

export interface CaseStudyData {
  track: ProjectTrack;
  headline: string;
  subtitle: string;
  metrics: CaseStudyMetric[];
  challenge: string;
  approach: string;
  result: string;
  role: string;
  stackTags: string[];
}

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
