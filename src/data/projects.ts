import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "kemp-center-pipeline",
    title: "Content Pipeline",
    client: "Kemp Center for the Arts",
    category: "content-pipeline",
    type: "system",
    year: 2024,
    thumbnail: "/images/projects/kemp-center-thumb.jpg",
    description:
      "End-to-end content production pipeline: 4K multi-camera capture, edit, color, graphics, and distribution across 12+ platforms. Scaled from ad-hoc to 298 published pieces.",
    tags: ["Pipeline Design", "Multi-cam", "Post-Production"],
    stack: ["DaVinci Resolve", "After Effects", "Premiere Pro", "StreamYard"],
    architecture: "Capture → Ingest → Edit → Color → Graphics → QC → Distribute",
    metrics: "298 projects delivered, 12+ distribution channels",
    featured: true,
    order: 1,
    status: "completed",
  },
  {
    slug: "fiverr-portfolio",
    title: "Freelance Operations",
    client: "Fiverr — 150+ Clients",
    category: "commercial",
    type: "visual",
    year: 2025,
    thumbnail: "/images/projects/fiverr-thumb.jpg",
    description:
      "150+ completed projects across video editing, motion design, and color grading. Consistent 5-star rating. Clients from US, EU, and MENA markets.",
    tags: ["Video Editing", "Motion Design", "Color Grading"],
    role: "Editor / Motion Designer / Colorist",
    deliverable: "150+ completed projects, 5-star rating",
    featured: true,
    order: 2,
    status: "ongoing",
  },
  {
    slug: "enterprise-automation",
    title: "AI Automation Suite",
    client: "Multiple Clients",
    category: "ai-automation",
    type: "system",
    year: 2025,
    thumbnail: "/images/projects/automation-thumb.jpg",
    description:
      "Custom AI-powered automation systems: multi-agent orchestration, content generation pipelines, monitoring dashboards, and cron-driven workflows.",
    tags: ["AI/ML", "Automation", "Multi-Agent"],
    stack: ["Node.js", "Python", "LLM APIs", "Docker"],
    architecture: "Gateway → Dispatcher → Specialized Agents → Output",
    metrics: "5 agents, 11 cron jobs, 24/7 autonomous operation",
    featured: true,
    order: 3,
    status: "ongoing",
  },
  {
    slug: "cinematic-brands",
    title: "Cinematic Brand Films",
    client: "Agency & Direct",
    category: "commercial",
    type: "visual",
    year: 2024,
    thumbnail: "/images/projects/brands-thumb.jpg",
    description:
      "Brand films and commercial content combining cinematic production with precise motion graphics. From concept through final delivery.",
    tags: ["Directing", "Editing", "Motion Design", "Color"],
    role: "Director / Editor / Motion Designer",
    deliverable: "Brand films, commercial spots, social cuts",
    featured: true,
    order: 4,
    status: "completed",
  },
  {
    slug: "mazowsze-live",
    title: "Live Production",
    client: "Mazowsze Ensemble",
    category: "live-production",
    type: "visual",
    year: 2023,
    thumbnail: "/images/projects/mazowsze-thumb.jpg",
    description:
      "Multi-camera live production for Poland's national folk ensemble. Real-time switching, replay systems, and broadcast-quality output.",
    tags: ["Live Switching", "Multi-cam", "Broadcast"],
    role: "Technical Director / Vision Mixer",
    deliverable: "Live broadcast, VOD packages",
    featured: false,
    order: 5,
    status: "completed",
  },
  {
    slug: "openclaw-bot",
    title: "OpenClaw Bot System",
    client: "Personal",
    category: "bot-system",
    type: "system",
    year: 2025,
    thumbnail: "/images/projects/openclaw-thumb.jpg",
    description:
      "Multi-agent Telegram bot with 5 specialized AI agents, skill-based architecture, and autonomous cron scheduling. Built for personal productivity and content ops.",
    tags: ["Multi-Agent", "Telegram", "Node.js"],
    stack: ["Node.js", "MiniMax", "Gemini", "Docker"],
    architecture: "Gateway → Dispatcher → 5 Agents → Skills → Cron",
    metrics: "5 agents, 11 cron jobs, 1M+ context per agent",
    repo: "private",
    featured: false,
    order: 6,
    status: "ongoing",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
