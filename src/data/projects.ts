import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "neon-pulse",
    title: "Neon Pulse",
    client: "Aurora Records",
    category: "music-video",
    year: 2025,
    thumbnail: "/images/projects/neon-pulse-thumb.jpg",
    hero: "/images/projects/neon-pulse-hero.jpg",
    videoLoop: "/videos/neon-pulse-loop.mp4",
    description:
      "Music video blending analog grain with digital glitch. 35mm film scans composited with real-time particle systems.",
    tags: ["Editing", "Color Grade", "VFX"],
    featured: true,
    order: 1,
  },
  {
    slug: "concrete-flow",
    title: "Concrete Flow",
    client: "Vostok Streetwear",
    category: "commercial",
    year: 2025,
    thumbnail: "/images/projects/concrete-flow-thumb.jpg",
    hero: "/images/projects/concrete-flow-hero.jpg",
    description:
      "Brand film for an Eastern European streetwear label. Raw urbanism meets precise motion graphics.",
    tags: ["Directing", "Editing", "Motion Design"],
    featured: true,
    order: 2,
  },
  {
    slug: "signal-lost",
    title: "Signal Lost",
    client: "Hybrid Theatre",
    category: "motion-design",
    year: 2024,
    thumbnail: "/images/projects/signal-lost-thumb.jpg",
    hero: "/images/projects/signal-lost-hero.jpg",
    videoLoop: "/videos/signal-lost-loop.mp4",
    description:
      "Title sequence and visual identity for an experimental theatre production. Typography as architecture.",
    tags: ["Motion Design", "Typography", "Branding"],
    featured: true,
    order: 3,
  },
  {
    slug: "depth-charge",
    title: "Depth Charge",
    client: "Subsonic Agency",
    category: "commercial",
    year: 2024,
    thumbnail: "/images/projects/depth-charge-thumb.jpg",
    description:
      "Product launch campaign for an audio equipment brand. Sound visualized as physical force.",
    tags: ["Editing", "Sound Design", "VFX"],
    featured: true,
    order: 4,
  },
  {
    slug: "raw-material",
    title: "Raw Material",
    client: "Independent",
    category: "documentary",
    year: 2024,
    thumbnail: "/images/projects/raw-material-thumb.jpg",
    hero: "/images/projects/raw-material-hero.jpg",
    description:
      "Short documentary exploring the tension between handcraft and digital production in modern design.",
    tags: ["Directing", "Editing", "Color Grade"],
    featured: false,
    order: 5,
  },
  {
    slug: "static-bloom",
    title: "Static Bloom",
    client: "Botanica Gallery",
    category: "motion-design",
    year: 2023,
    thumbnail: "/images/projects/static-bloom-thumb.jpg",
    description:
      "Generative motion piece for a digital art exhibition. Organic forms emerging from procedural noise.",
    tags: ["Motion Design", "Generative", "Installation"],
    featured: false,
    order: 6,
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
