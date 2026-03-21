"use client";

import { AnimatedPipeline } from "@/components/interactive/AnimatedPipeline";
import { BentoGrid } from "@/components/interactive/BentoGrid";
import { TypingTerminal } from "@/components/interactive/TypingTerminal";
import { NetworkGraph } from "@/components/interactive/NetworkGraph";
import { ScrollTimeline } from "@/components/interactive/ScrollTimeline";
import { LiveFeedHUD } from "@/components/interactive/LiveFeedHUD";
import { EcosystemDiagram } from "@/components/interactive/EcosystemDiagram";
import { VideoWall } from "@/components/interactive/VideoWall";
import type { Project } from "@/types";

interface InteractiveSlotProps {
  slug: string;
  project?: Project;
}

export default function InteractiveSlot({ slug, project }: InteractiveSlotProps) {
  switch (slug) {
    case "ai-content-pipeline":
      return <AnimatedPipeline />;
    case "production-studio":
      return <BentoGrid />;
    case "multi-agent-system":
      return (
        <div className="space-y-10">
          <TypingTerminal />
          <NetworkGraph />
        </div>
      );
    case "archive-automation":
      return <ScrollTimeline />;
    case "live-production":
      return <LiveFeedHUD />;
    case "rzmrn-platform":
      return <EcosystemDiagram />;
    case "short-form-reels":
      return <VideoWall videos={project?.videos} />;
    default:
      return null;
  }
}
