"use client";

import { cn } from "@/lib/utils";

const PIPELINE_NODES = [
  { icon: "\uD83C\uDFAC", label: "Lecture Video", description: "Raw multi-cam footage" },
  { icon: "\u26A1", label: "n8n Analysis", description: "Transcript extraction & concepts" },
  { icon: "\uD83C\uDFA8", label: "AI Image Gen", description: "Visual concepts to images" },
  { icon: "\uD83C\uDF9E\uFE0F", label: "Hailuo Animation", description: "Static to animated b-roll" },
  { icon: "\u2702\uFE0F", label: "Premiere Insert", description: "Timeline-ready inserts" },
] as const;

const TOTAL_NODES = PIPELINE_NODES.length;
const CONNECTIONS = TOTAL_NODES - 1;

/** Duration for the full data-packet loop in seconds */
const CYCLE_DURATION_S = 8;

/**
 * Horizontal pipeline flow diagram for the KCE (ai-content-pipeline) case study.
 * Pure CSS keyframe animations — no external animation libraries.
 *
 * Desktop: horizontal left-to-right flow (flex-row).
 * Mobile: vertical top-to-bottom flow (flex-col).
 */
export function AnimatedPipeline() {
  return (
    <section
      data-pipeline
      aria-label="AI content pipeline flow"
      className={cn(
        "relative w-full overflow-hidden rounded-2xl",
        "border border-[rgba(0,255,170,0.12)]",
        "bg-[#0a0a0a] px-6 py-10 md:px-10 md:py-14"
      )}
    >
      {/* Scoped keyframes + responsive overrides */}
      <style>{buildStyles()}</style>

      {/* Pipeline row / column */}
      <ol
        className={cn(
          "relative mx-auto flex max-w-6xl items-center justify-center",
          "flex-col md:flex-row"
        )}
        aria-label="Pipeline stages"
      >
        {PIPELINE_NODES.map((node, index) => (
          <li
            key={node.label}
            className="flex flex-col items-center md:flex-row md:items-center"
          >
            <PipelineNode
              icon={node.icon}
              label={node.label}
              description={node.description}
              index={index}
            />

            {index < CONNECTIONS && (
              <ConnectionSegment index={index} />
            )}
          </li>
        ))}
      </ol>

      <p className="sr-only">
        Animated diagram showing data flowing through five pipeline stages:
        Lecture Video, n8n Analysis, AI Image Gen, Hailuo Animation, Premiere Insert.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

interface PipelineNodeProps {
  icon: string;
  label: string;
  description: string;
  index: number;
}

function PipelineNode({ icon, label, description, index }: PipelineNodeProps) {
  return (
    <figure
      className={cn(
        "group relative z-10 flex shrink-0 flex-col items-center gap-2",
        "w-36 rounded-xl px-4 py-5 text-center",
        "border border-[rgba(0,255,170,0.2)]",
        "bg-[rgba(0,255,170,0.05)] backdrop-blur-sm",
        "transition-shadow duration-500",
        "hover:shadow-[0_0_24px_rgba(0,255,170,0.12)]"
      )}
      style={{
        animation: `pipeline-fade-in 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s both`,
      }}
    >
      <span className="text-2xl leading-none" aria-hidden="true">
        {icon}
      </span>

      <figcaption className="font-mono text-xs font-medium tracking-wide text-[#00FFAA]">
        {label}
      </figcaption>

      {/* Description — appears on hover / focus-within */}
      <p
        className={cn(
          "absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",
          "rounded-md bg-[rgba(0,255,170,0.08)] px-2.5 py-1",
          "font-mono text-[10px] text-[rgba(0,255,170,0.7)]",
          "opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100 group-focus-within:opacity-100",
          "pointer-events-none select-none"
        )}
      >
        {description}
      </p>
    </figure>
  );
}

interface ConnectionSegmentProps {
  index: number;
}

function ConnectionSegment({ index }: ConnectionSegmentProps) {
  const segmentDelay = (CYCLE_DURATION_S / CONNECTIONS) * index;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        "h-10 w-px md:h-px md:w-16 lg:w-20"
      )}
      aria-hidden="true"
    >
      {/* Static connector line */}
      <span
        className={cn(
          "absolute bg-[rgba(0,255,170,0.18)]",
          "h-full w-px md:h-px md:w-full"
        )}
      />

      {/* Glowing data packet */}
      <span
        data-packet={index}
        className="pipeline-packet absolute block rounded-full bg-[#00FFAA]"
        style={{
          width: 7,
          height: 7,
          boxShadow:
            "0 0 8px 2px rgba(0,255,170,0.6), 0 0 20px 4px rgba(0,255,170,0.25)",
          animationDelay: `${segmentDelay}s`,
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Keyframes & responsive styles                                      */
/* ------------------------------------------------------------------ */

function buildStyles(): string {
  const segmentPct = 100 / CONNECTIONS;
  const travelEnd = segmentPct * 0.85;
  const fadeOutEnd = segmentPct;

  return `
    /* Mount fade-in */
    @keyframes pipeline-fade-in {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Vertical packet (mobile default) — travels top to bottom */
    @keyframes pipeline-packet-v {
      0%                      { opacity: 0; transform: translateY(-50%); }
      2%                      { opacity: 1; transform: translateY(-50%); }
      ${travelEnd.toFixed(1)}%  { opacity: 1; transform: translateY(50%);  }
      ${fadeOutEnd.toFixed(1)}% { opacity: 0; transform: translateY(50%);  }
      100%                    { opacity: 0; transform: translateY(50%);  }
    }

    /* Horizontal packet (desktop) — travels left to right */
    @keyframes pipeline-packet-h {
      0%                      { opacity: 0; transform: translateX(-50%); }
      2%                      { opacity: 1; transform: translateX(-50%); }
      ${travelEnd.toFixed(1)}%  { opacity: 1; transform: translateX(50%);  }
      ${fadeOutEnd.toFixed(1)}% { opacity: 0; transform: translateX(50%);  }
      100%                    { opacity: 0; transform: translateX(50%);  }
    }

    /* Mobile-first: vertical animation */
    .pipeline-packet {
      animation: pipeline-packet-v ${CYCLE_DURATION_S}s cubic-bezier(0.16,1,0.3,1) infinite;
    }

    /* Desktop override: horizontal animation */
    @media (min-width: 768px) {
      .pipeline-packet {
        animation-name: pipeline-packet-h;
      }
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      [data-pipeline] *,
      [data-pipeline] *::before,
      [data-pipeline] *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;
}
