import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "mazowsze-cultural-legacy",
    title: "Mazowsze: A Cultural Legacy",
    client: "PZLPIT Mazowsze",
    category: "documentary",
    type: "visual",
    year: 2021,
    thumbnail: "/images/projects/mazowsze.webp",
    description:
      "Directed and produced a 60-second cultural film showcasing Poland's renowned Mazowsze ensemble. A year-long collaboration spanning concerts, commercials, and live broadcasts — from concept through final delivery.",
    tags: ["Directing", "Editing", "Live Production", "Color"],
    role: "Director / Editor / Colorist",
    deliverable: "Cultural film, live broadcasts, promotional content",
    featured: true,
    order: 1,
    status: "completed",
  },
  {
    slug: "mazda-drivetogether",
    title: "Mazda DriveTogether MX-5",
    client: "Mazda",
    category: "commercial",
    type: "visual",
    year: 2023,
    thumbnail: "/images/projects/mazda.webp",
    description:
      "TV commercial for Mazda MX-5 DriveTogether campaign. Full post-production pipeline: editing, color grading, sound design, and motion graphics integration.",
    tags: ["TV Commercial", "Post-Production", "Color Grading"],
    role: "Editor / Colorist",
    deliverable: "TV spot, social cuts",
    featured: true,
    order: 2,
    status: "completed",
  },
  {
    slug: "lotus-car-commercial",
    title: "Lotus Car Commercial",
    client: "Daytona Motorsport",
    category: "commercial",
    type: "visual",
    year: 2023,
    thumbnail: "/images/projects/lotus.webp",
    description:
      "Full-cycle commercial production for a Lotus car dealership. Sketching, scripting, shooting direction, editing, sound design, and color correction — concept to final master.",
    tags: ["Full Production", "Directing", "Editing", "Sound Design"],
    role: "Director / Editor / Colorist / Sound Designer",
    deliverable: "Car commercial, dealer promo",
    featured: true,
    order: 3,
    status: "completed",
  },
  {
    slug: "heineken-presentation",
    title: "Heineken Presentation Animation",
    client: "Heineken",
    category: "motion-design",
    type: "visual",
    year: 2023,
    thumbnail: "/images/projects/heineken.webp",
    description:
      "Animated presentation for Heineken corporate event. Complex motion graphics with brand-consistent design, data visualization, and kinetic typography.",
    tags: ["Motion Graphics", "Animation", "Brand Design"],
    role: "Motion Designer / Animator",
    deliverable: "Animated presentation, brand assets",
    featured: true,
    order: 4,
    status: "completed",
  },
  {
    slug: "automotive-reels",
    title: "Automotive Reels Collection",
    client: "Multiple Clients",
    category: "commercial",
    type: "visual",
    year: 2024,
    thumbnail: "/images/projects/lambo.webp",
    description:
      "Dynamic short-form content for luxury automotive brands. High-energy editing, cinematic color grading, and precision sound design for Lamborghini, Ferrari SF90, Ford Raptor, and more.",
    tags: ["Short-Form", "Dynamic Editing", "Color Grading"],
    role: "Editor / Motion Designer / Colorist",
    deliverable: "Reels, social cuts, dealer content",
    featured: true,
    order: 5,
    status: "ongoing",
  },
  {
    slug: "art-gallery-cinematic",
    title: "Art Gallery Cinematic Tour",
    client: "Private Gallery",
    category: "commercial",
    type: "visual",
    year: 2024,
    thumbnail: "/images/projects/art-gallery.webp",
    description:
      "Cinematic walkthrough of an art gallery space. Smooth camera movement, atmospheric grading, and architectural storytelling through precise editing and pacing.",
    tags: ["Cinematic", "Real Estate", "Architectural"],
    role: "Editor / Colorist",
    deliverable: "Cinematic tour, social content",
    featured: true,
    order: 6,
    status: "completed",
  },
  {
    slug: "kurish-gorod-music-video",
    title: 'Music Video — Kurish "Gorod"',
    client: "Kurish",
    category: "music-video",
    type: "visual",
    year: 2022,
    thumbnail: "/images/projects/kurish.webp",
    description:
      "Full production music video from concept through delivery. Directing, cinematography planning, editing, color grading, and VFX compositing.",
    tags: ["Music Video", "Full Production", "VFX", "Color"],
    role: "Director / Editor / Colorist / VFX",
    deliverable: "Music video, BTS content",
    featured: true,
    order: 7,
    status: "completed",
  },
  {
    slug: "animated-event-promos",
    title: "Animated Event Promos",
    client: "Various",
    category: "motion-design",
    type: "visual",
    year: 2024,
    thumbnail: "/images/projects/party-promo.webp",
    description:
      "Animated promotional flyers and social content for events, music releases, and brands. Eye-catching motion design optimized for Instagram and TikTok engagement.",
    tags: ["Motion Design", "Animation", "Social Media"],
    role: "Motion Designer / Animator",
    deliverable: "Animated promos, social assets",
    featured: true,
    order: 8,
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
