import type { Project } from "@/types";

export const projects: Project[] = [
  // ── Case Study Projects ──────────────────────────────────────────
  {
    slug: "ai-content-pipeline",
    title: "40% Faster Releases at 5,000-Client Scale",
    client: "Major Education Platform",
    category: "content-pipeline",
    type: "system",
    year: 2024,
    thumbnail: "/images/projects/kce-thumbnail.webp",
    videoLoop: "/images/projects/kce-thumbnail.webm",
    description:
      "AI-augmented production pipeline for a major education platform.",
    tags: ["AI Pipeline", "Production", "Automation"],
    architecture: "AI-augmented batch processing pipeline",
    metrics: "40% faster release cycles",
    featured: true,
    order: 1,
    status: "completed",
    caseStudy: {
      track: "hybrid",
      headline: "40% Faster Releases at 5,000-Client Scale",
      subtitle:
        "AI-augmented production pipeline for a major education platform.",
      metrics: [
        { value: "5,000+", label: "Active clients" },
        { value: "221", label: "Lectures produced" },
        { value: "22", label: "Courses delivered" },
        { value: "40%", label: "Faster release cycle" },
      ],
      challenge:
        "A major education platform needed to scale course production without scaling the team. Each course required weeks of manual work: multi-cam shoots, graphics generation, b-roll creation, quality control, file management. Everything done by hand.\n\nThe bottleneck wasn't creative — it was operational. One person was responsible for the entire production pipeline serving 5,000+ clients. The question wasn't whether to automate — it was how deep the automation could go without sacrificing quality.",
      approach:
        "Built a multi-layer automation pipeline that addressed each production bottleneck:\n\nLayer 1 — Shoot optimization: AI-generated thematic green screen backgrounds that change per course, eliminating physical set changes entirely.\n\nLayer 2 — B-roll pipeline: n8n workflow analyzes each lecture transcript, extracts 6-10 key visual concepts, generates images via AI, animates through Hailuo video model, and outputs ready-to-edit animated b-roll inserts.\n\nLayer 3 — Post-production: ExtendScript batch processing in Premiere Pro for repetitive timeline operations across hundreds of lectures.\n\nLayer 4 — Quality & delivery: Structured QC checklist maintaining ISO 9001 compliance, templated export presets for consistent output.",
      result:
        "Release cycles shortened by 40%. 221 lectures across 22 courses delivered with consistent quality. One person — full production coverage for an entire platform serving 5,000+ clients. The pipeline turned a manual bottleneck into a scalable system.",
      role: "Head of Content Production",
      stackTags: [
        "Premiere Pro",
        "After Effects",
        "ExtendScript",
        "Claude API",
        "Midjourney",
        "n8n",
        "Hailuo",
        "Multi-cam",
        "ISO 9001",
      ],
    },
  },
  {
    slug: "production-studio",
    title: "250+ Projects. 120 US Clients. One Person.",
    client: "Independent",
    category: "commercial",
    type: "visual",
    year: 2024,
    thumbnail: "/images/projects/production-studio.png",
    description:
      "A one-person production studio that scaled to $50/hr through systems, not headcount.",
    tags: ["Production", "Freelance", "Scale"],
    role: "Independent Producer",
    deliverable: "250+ video projects across all formats",
    featured: true,
    order: 2,
    status: "completed",
    caseStudy: {
      track: "production",
      headline: "250+ Projects. 120 US Clients. One Person.",
      subtitle:
        "A one-person production studio that scaled to $50/hr through systems, not headcount.",
      metrics: [
        { value: "250+", label: "Completed projects" },
        { value: "120", label: "US clients" },
        { value: "$50/hr", label: "Premium tier" },
        { value: "5★", label: "Client rating" },
      ],
      challenge:
        "Fiverr is a race to the bottom. Thousands of editors competing on price. The question wasn't how to get more gigs — it was how to build a sustainable production operation that scales without a team and commands premium rates.\n\nMost freelancers burn out or stagnate at low rates. The challenge: scale output and raise rates without hiring anyone, while maintaining quality that earns repeat business from US market clients.",
      approach:
        "Built a systemized solo operation from the ground up:\n\nCategorized all incoming work into repeatable project types — commercial, automotive, event, motion graphics. Each category got its own template-based workflow with standardized timelines, preset libraries, and delivery specs.\n\nPackaged services into tiers: from basic editing to full-cycle production (brief → creative consulting → editing → delivery → platform adaptation). Scaled from entry-level rates to $50/hr premium tier through consistent quality and systematic upselling.\n\nEvery project refined the system. SOPs became sharper, turnaround faster, client communication more structured.",
      result:
        "250+ completed projects. 120 US clients. 5-star rating maintained across the entire portfolio. One person, full production capability — proof that systems beat headcount.",
      role: "Independent Producer",
      stackTags: [
        "Premiere Pro",
        "After Effects",
        "DaVinci Resolve",
        "Photoshop",
        "Cinema 4D",
        "Sound Design",
      ],
    },
  },
  {
    slug: "programmatic-video",
    title: "Parametric Motion — Where Code Replaces the Timeline",
    client: "RZMRN",
    category: "motion-design",
    type: "system",
    year: 2025,
    thumbnail: "/images/projects/remotion.png",
    description:
      "React components that render to video. Where creative meets programmatic.",
    tags: ["Remotion", "React", "Programmatic Video"],
    architecture: "Remotion component pipeline",
    metrics: "<1min per render, infinite variations",
    featured: true,
    order: 3,
    status: "ongoing",
    caseStudy: {
      track: "hybrid",
      headline: "Parametric Motion — Where Code Replaces the Timeline",
      subtitle:
        "React components that render to video. Where creative meets programmatic.",
      metrics: [
        { value: "< 1 min", label: "Per render" },
        { value: "∞", label: "Parametric variations" },
        { value: "0", label: "Manual keyframes" },
      ],
      challenge:
        "Traditional motion design is manual. Every change means reopening After Effects, adjusting keyframes, re-rendering. For data-driven content or variations at scale, this doesn't work. The timeline becomes the bottleneck.\n\nThe answer isn't faster hands — it's a programmatic approach where code replaces the timeline entirely.",
      approach:
        "Remotion — React-based programmatic video. Each composition is a React component. Parameters in, video out. Change a variable, get a new render. No timeline, no keyframes.\n\nThe animations are mathematically computed, not AI-hallucinated. A lidar visualization computes actual point-cloud geometry. A telemetry HUD reads real data structures. Precision motion design through code.\n\nCompositions range from abstract data visualizations to branded identity pieces to experimental explorations — all version-controlled, all parametrically adjustable.",
      result:
        "A production toolkit for parametric motion content. Any composition re-renders with different parameters in under a minute. Same codebase, infinite variations. This is what content production at scale looks like when code meets craft.",
      role: "Creative Technologist",
      stackTags: ["Remotion", "React", "TypeScript", "Node.js", "FFmpeg"],
    },
  },
  {
    slug: "multi-agent-system",
    title: "12 AI Agents Running Autonomously, 24/7",
    client: "Internal",
    category: "ai-automation",
    type: "system",
    year: 2025,
    thumbnail: "/images/projects/multi-agent-thumb.jpg",
    videoLoop: "/images/projects/multi-agent-loop-v2.webm",
    description:
      "Multi-model agent architecture for automated research, content generation, and monitoring.",
    tags: ["Multi-Agent", "AI", "Automation"],
    architecture: "Multi-model orchestrated agent system",
    metrics: "30+ daily automated tasks",
    featured: true,
    order: 4,
    status: "ongoing",
    caseStudy: {
      track: "systems",
      headline: "12 AI Agents Running Autonomously, 24/7",
      subtitle:
        "Multi-model agent architecture for automated research, content generation, and monitoring.",
      metrics: [
        { value: "12", label: "Specialized agents" },
        { value: "3", label: "LLM providers" },
        { value: "30+", label: "Daily automated tasks" },
        { value: "24/7", label: "Autonomous operation" },
      ],
      challenge:
        "Off-the-shelf AI tools solve generic problems. Scaling content production, research, and workflow automation requires specialized AI workers that understand your domain, communicate with each other, and operate without supervision.\n\nOne person can't simultaneously search for jobs, monitor market trends, generate content, manage communications, and build a portfolio. The bottleneck isn't skill — it's attention.",
      approach:
        "Custom multi-agent system built from scratch:\n\nDispatcher routes tasks to specialized agents by type and complexity. 12 specialized agents, each with its own model, prompt architecture, and domain expertise.\n\n3 LLM providers — Claude, MiniMax M2.5, Gemini — chosen per task for cost/capability balance. Cron orchestration runs agents on schedule, 24/7, no human intervention.\n\nCross-model validation ensures outputs are verified by a different model (adversarial synthesis). mem0 persistent memory provides cross-session context. Telegram interface delivers results directly to messenger.\n\nThe system evolved through multiple architectural iterations, each informed by production experience.",
      result:
        "30+ daily automated tasks. Market analysis, content research, competitive intelligence, code review — all running autonomously. The human reviews and decides; the system researches and prepares.",
      role: "AI Systems Architect",
      stackTags: [
        "Claude Code",
        "MiniMax M2.5",
        "Gemini",
        "Python",
        "Telegram API",
        "mem0",
        "MCP",
        "Cron",
      ],
    },
  },
  {
    slug: "archive-automation",
    title: "221 Lectures Rescued in 5 Automated Phases",
    client: "Internal",
    category: "ai-automation",
    type: "system",
    year: 2025,
    thumbnail: "/images/projects/archive.png",
    description:
      "Automated archive audit and cloud migration for a terabyte-scale media library.",
    tags: ["Automation", "Archive", "Cloud Migration"],
    architecture: "5-phase automated pipeline",
    metrics: "221 lectures, 22 courses, zero data loss",
    featured: true,
    order: 5,
    status: "completed",
    caseStudy: {
      track: "systems",
      headline: "221 Lectures Rescued in 5 Automated Phases",
      subtitle:
        "Automated archive audit and cloud migration for a terabyte-scale media library.",
      metrics: [
        { value: "221", label: "Lectures processed" },
        { value: "22", label: "Courses sorted" },
        { value: "5", label: "Automation phases" },
        { value: "0", label: "Data loss" },
      ],
      challenge:
        "221 lectures across 22 courses. Scattered across drives, inconsistent naming, missing files, broken folder structures. No inventory, no verification. A legacy content archive at risk of being lost.\n\nManual sorting would take weeks and be error-prone at this volume. Any drive failure means permanent content loss.",
      approach:
        "Designed a 5-phase systematic pipeline:\n\nPhase 1 — Discovery: Python scripts crawl all storage, build complete inventory, identify duplicates and gaps.\n\nPhase 2 — Sorting: Automated categorization by course, type, sequence via filename parsing and metadata extraction.\n\nPhase 3 — Audit: Cross-reference against course manifests. Flag missing lectures, corrupt files, version conflicts.\n\nPhase 4 — Verification: Automated integrity checks — codec, resolution, duration, audio sync.\n\nPhase 5 — Cloud Sync: GoodSync deployment to OneDrive with verified mirroring and change tracking.",
      result:
        "221 lectures, 22 courses — fully sorted, audited, verified, cloud-synced. Zero data loss. Process documented and repeatable for future archive operations.",
      role: "Systems Architect",
      stackTags: [
        "Claude Code",
        "Python",
        "Bash",
        "GoodSync",
        "OneDrive",
        "Final Cut Pro",
      ],
    },
  },
  {
    slug: "live-production",
    title: "Full-Service Production for a National Cultural Institution",
    client: "PZLPIT Mazowsze",
    category: "live-production",
    type: "visual",
    year: 2021,
    thumbnail: "/images/projects/mazowsze.webp",
    description:
      "Comprehensive production for Poland's national folk ensemble — from hero video to metro advertising.",
    tags: ["Live Production", "Multi-cam", "Broadcast", "Advertising"],
    role: "Lead Camera / Editor",
    deliverable: "Live broadcasts, hero video, metro advertising, promotional content",
    featured: true,
    order: 6,
    status: "completed",
    caseStudy: {
      track: "production",
      headline: "Full-Service Production for a National Cultural Institution",
      subtitle:
        "Comprehensive production for Poland's national folk ensemble — from hero video to metro advertising.",
      metrics: [
        { value: "540-seat", label: "Concert hall" },
        { value: "150+", label: "Performers" },
        { value: "Multi-cam", label: "Live production" },
        { value: "Zero errors", label: "Tolerance" },
      ],
      challenge:
        "Państwowy Zespół Ludowy Pieśni i Tańca \"Mazowsze\" — Poland's national folk song and dance ensemble. A 540-seat hall, 150+ performers, state-level cultural institution.\n\nLive production for a state cultural institution. No second takes, no \"fix it in post.\" The stakes are reputational as much as technical — every delivery represents a national ensemble.",
      approach:
        "Full-service production partnership spanning multiple formats:\n\nHero promotional video — currently featured on the organization's homepage. Multi-camera live concert production with zero-error tolerance for state events.\n\nAnimated advertising for Warsaw metro displays and central railway station digital screens. Full-cycle promotional content across all platforms. Ballet-derived animations for digital use.\n\nWorking with performers who operate at the highest level of their craft demands the same from the production team.",
      result:
        "Comprehensive production for a national institution. The hero video remains their primary digital representation. Live broadcasts delivered flawlessly under zero-error conditions. Metro and railway station advertising running on Warsaw's busiest screens.",
      role: "Lead Camera / Editor / Motion Designer",
      stackTags: [
        "Multi-cam",
        "Live Switching",
        "DaVinci Resolve",
        "After Effects",
        "Audio Sync",
        "Broadcast",
      ],
    },
  },
  {
    slug: "rzmrn-platform",
    title: "The Portfolio You're Reading — Built on Live AI",
    client: "RZMRN",
    category: "infrastructure",
    type: "system",
    year: 2025,
    thumbnail: "/images/projects/rzmrn-platform.png",
    description:
      "AI-first ecosystem: portfolio site + autonomous intelligence platform.",
    tags: ["AI Platform", "Web", "Automation"],
    architecture: "Dual-product AI-first ecosystem",
    metrics: "60+ sources, 15+ categories, 2 live products",
    featured: true,
    order: 7,
    status: "ongoing",
    caseStudy: {
      track: "hybrid",
      headline: "The Portfolio You're Reading — Built on Live AI",
      subtitle:
        "AI-first ecosystem: portfolio site + autonomous intelligence platform.",
      metrics: [
        { value: "60+", label: "Sources" },
        { value: "15+", label: "Categories" },
        { value: "2", label: "Live products" },
        { value: "1 day", label: "Digest build time" },
      ],
      challenge:
        "Build a professional portfolio and a live intelligence platform simultaneously, as a one-person operation. No CMS, no templates — pure code. The answer: build the infrastructure to build itself.\n\nTwo products with different requirements — a static portfolio site and a real-time intelligence digest — both needing to deploy autonomously to the edge.",
      approach:
        "Two interconnected products, one architectural philosophy:\n\nRZMRN.com (this site): Next.js 16, React 19, Tailwind v4. Static export to Cloudflare Pages. Built collaboratively with Claude Code CLI agents — architecture, components, content, deployment. No CMS, no templates — pure code.\n\nRZMRN Digest (digest.rzmrn.com): Autonomous OSINT intelligence pipeline. 60+ RSS sources across 15+ categories. MiniMax M2.5 multi-threaded analysis with adversarial critique and synthesis. mem0 persistent memory. Bilingual RU/UA output. Cyberpunk terminal UI. Auto-deploy to Cloudflare Pages. Built in one day.\n\nBoth products demonstrate the thesis: one person + AI-first architecture = output that looks like a team.",
      result:
        "Two live products running on edge infrastructure. The portfolio showcases the work; the digest proves the methodology. Both built, deployed, and maintained by one person with AI as a force multiplier.",
      role: "Architect / Builder",
      stackTags: [
        "Next.js 16",
        "React 19",
        "Tailwind v4",
        "Claude Code",
        "MiniMax M2.5",
        "mem0",
        "Python",
        "Cloudflare Pages",
      ],
    },
  },
  {
    slug: "short-form-reels",
    title: "Years of After Effects Obsession — Distilled Into Seconds",
    client: "Various",
    category: "motion-design",
    type: "visual",
    year: 2024,
    thumbnail: "/images/projects/short-form.png",
    description:
      "Short-form content where production craft meets attention economy.",
    tags: ["Short-Form", "Motion Design", "After Effects"],
    role: "Motion Designer / Editor",
    deliverable: "Short-form reels and motion content",
    featured: true,
    order: 8,
    status: "ongoing",
    caseStudy: {
      track: "production",
      headline: "Years of After Effects Obsession — Distilled Into Seconds",
      subtitle:
        "Short-form content where production craft meets attention economy.",
      metrics: [],
      challenge:
        "Short-form content is the hardest format. 3-15 seconds to communicate quality. Every frame matters. Every transition is a decision. Every beat sync is deliberate.\n\nThe question isn't how to make more content faster — it's how to compress years of production craft into moments that demand attention.",
      approach:
        "Years of After Effects work — automotive, travel, fashion, motion graphics — where technical obsession meets instant impact. Dozens of hours per composition, complex layer stacks, precise timing.\n\nEach category with its own visual language: automotive reels demand kinetic energy and metal textures. Travel content needs atmosphere and scale. Fashion requires rhythm and elegance. Pure motion design experiments push technique without client constraints.\n\nAll unified by the same production standard — the work speaks for itself.",
      result:
        "Short-form isn't lesser production. It's production compressed to its essence. The range speaks to versatility; the quality speaks to craft.",
      role: "Motion Designer / Editor",
      stackTags: [
        "After Effects",
        "Premiere Pro",
        "Cinema 4D",
        "Photoshop",
        "Motion Design",
      ],
    },
  },

  // ── Visual Portfolio Projects (cards only, no case study) ────────
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
    featured: false,
    order: 10,
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
    featured: false,
    order: 11,
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
    featured: false,
    order: 12,
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
    featured: false,
    order: 13,
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
    featured: false,
    order: 14,
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
    featured: false,
    order: 15,
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
    featured: false,
    order: 16,
    status: "ongoing",
  },
];

export function getCaseStudyProjects(): Project[] {
  return projects
    .filter((p) => p.caseStudy)
    .sort((a, b) => a.order - b.order);
}

export function getVisualPortfolioProjects(): Project[] {
  return projects
    .filter((p) => !p.caseStudy)
    .sort((a, b) => a.order - b.order);
}

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
