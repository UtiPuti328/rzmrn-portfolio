// ASSET MANIFEST — Status of visual assets per case study
// Max: update paths as you provide files. Place in /public/images/projects/

export const assetManifest = {
  "ai-content-pipeline": {
    thumbnail: "/images/projects/kce-thumbnail.webm", // STATUS: Max providing Kling animation
    hero: null, // STATUS: Same as thumbnail, larger
    pipeline_demo: null, // STATUS: Max recreating n8n b-roll output
  },
  "production-studio": {
    thumbnail: "/images/projects/fiverr-thumbnail.webm", // STATUS: Max providing Kling animation (video wall)
    hero: null,
    work_samples: [] as string[], // STATUS: Max selecting best Fiverr work
  },
  "programmatic-video": {
    thumbnail: null, // STATUS: Max rendering + Kling processing
    hero: null,
    live_embed: null, // STATUS: Agent investigating standalone React potential
  },
  "multi-agent-system": {
    thumbnail: null, // STATUS: Midjourney neural network render OR static network graph
    hero: null,
  },
  "archive-automation": {
    thumbnail: null, // STATUS: Max creating Kling "chaos → order" animation
    hero: null,
  },
  "live-production": {
    thumbnail: null, // STATUS: Max providing real concert photo from local disk
    hero_video: null, // STATUS: Max providing Mazowsze hero video
    gallery: [] as string[], // STATUS: Max providing metro animation, station screen, concert photos
  },
  "rzmrn-platform": {
    thumbnail: null, // STATUS: Agent can generate from screenshots
    hero: null,
  },
  "short-form-reels": {
    thumbnail: null, // STATUS: Assembled from reel frames once provided
    videos: [] as string[], // STATUS: Max collecting 4-6 best reels
  },
} as const;

// TODO: OG images needed for each page:
// - /public/og/home.jpg (1200x630)
// - /public/og/ai-content-pipeline.jpg
// - /public/og/production-studio.jpg
// - /public/og/programmatic-video.jpg
// - /public/og/multi-agent-system.jpg
// - /public/og/archive-automation.jpg
// - /public/og/live-production.jpg
// - /public/og/rzmrn-platform.jpg
// - /public/og/short-form-reels.jpg
// - /public/og/about.jpg
// - /public/og/contact.jpg
// - /public/og/projects.jpg
