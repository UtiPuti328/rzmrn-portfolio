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
      return (
        <div className="space-y-6">
          <BentoGrid cells={productionCells} />
          <a
            href="https://www.fiverr.com/maksbeiev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-md border border-[#1DBF73]/20 bg-[#1DBF73]/5 px-4 py-3 font-mono text-sm text-[#1DBF73]/70 transition-all duration-200 hover:border-[#1DBF73]/50 hover:bg-[#1DBF73]/10 hover:text-[#1DBF73]"
          >
            <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[3px] bg-[#1DBF73] font-sans text-[10px] font-black leading-none text-white">fi</span>
            <span>View full portfolio on Fiverr</span>
            <span className="font-normal text-[#1DBF73]/40">— fiverr.com/maksbeiev</span>
            <span className="ml-auto opacity-50 transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      );
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
