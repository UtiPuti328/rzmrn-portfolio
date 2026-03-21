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
import { useI18n } from "@/i18n/provider";

interface InteractiveSlotProps {
  slug: string;
  project?: Project;
}

export default function InteractiveSlot({ slug, project }: InteractiveSlotProps) {
  const { dict } = useI18n();

  switch (slug) {
    case "ai-content-pipeline":
      return <AnimatedPipeline />;
    case "production-studio":
      const productionCells = [
        { value: 250, suffix: "+", label: dict.bentoGrid.commercial, category: "COMMERCIAL" },
        { value: 120, label: dict.bentoGrid.automotive, category: "AUTOMOTIVE" },
        { value: 50, prefix: "$", suffix: "/hr", label: dict.bentoGrid.event, category: "EVENT" },
        { value: 5, suffix: "★", label: dict.bentoGrid.motion, category: "MOTION" },
      ];
      return <BentoGrid cells={productionCells} />;
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
