// ASSET MANIFEST — active V1 runtime inventory for Chronicle/runtime summaries.
// This file is not used by the app directly. Keep only assets that exist in production.
// Non-blocking post-V1 polish belongs in roadmap/status docs, not here.

export const assetManifest = {
  "ai-content-pipeline": {
    thumbnail: "/images/projects/ai-content-pipeline-poster.jpg",
    hero: "/videos/covers/loop-ai-content-pipeline.mp4",
    pipeline_demo: "/videos/covers/loop-ai-content-pipeline.mp4",
  },
  "production-studio": {
    thumbnail: "/images/projects/production-studio-poster.jpg",
    hero: "/videos/covers/loop-production-studio.mp4",
    work_samples: ["/images/projects/production-studio.png"] as string[],
  },
  "programmatic-video": {
    thumbnail: "/images/projects/programmatic-video-poster.jpg",
    hero: "/videos/covers/loop-programmatic-video.mp4",
    live_embed: "/videos/covers/loop-programmatic-video.mp4",
  },
  "multi-agent-system": {
    thumbnail: "/images/projects/multi-agent-thumb.jpg",
    hero: "/images/projects/multi-agent.png",
  },
  "archive-automation": {
    thumbnail: "/images/projects/archive.png",
    hero: "/images/projects/archive.png",
  },
  "live-production": {
    thumbnail: "/images/projects/live-production-poster.jpg",
    hero_video: "/videos/covers/loop-live-production.mp4",
    gallery: ["/images/projects/mazowsze.jpg"] as string[],
  },
  "rzmrn-platform": {
    thumbnail: "/images/projects/rzmrn-platform.png",
    hero: "/images/projects/rzmrn-platform.png",
  },
  "short-form-reels": {
    thumbnail: "/images/projects/short-form-reels-poster.jpg",
    videos: [
      "/videos/content/yarik-edit.mp4",
      "/videos/content/motocross-reel.mp4",
      "/videos/content/maveric-ride-reel.mp4",
      "/videos/content/lambo-reel.mp4",
      "/videos/content/insta-bakalova.mp4",
      "/videos/content/ferrari-sf90.mp4",
    ] as string[],
  },
} as const;

// Dedicated custom OG artwork is a post-V1 enhancement, not a release blocker.
