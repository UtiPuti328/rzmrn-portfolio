import { cn } from "@/lib/utils";
import type { ProjectTrack } from "@/types";

interface ProjectPlaceholderProps {
  title: string;
  track: ProjectTrack;
  diagramLabel?: string;
  className?: string;
  aspect?: "video" | "wide";
}

const trackGradients: Record<ProjectTrack, string> = {
  production:
    "from-blue-950/40 via-surface to-surface",
  systems:
    "from-emerald-950/40 via-surface to-surface",
  hybrid:
    "from-violet-950/40 via-surface to-surface",
};

export default function ProjectPlaceholder({
  title,
  track,
  diagramLabel,
  className,
  aspect = "video",
}: ProjectPlaceholderProps) {
  return (
    // <!-- TODO: replace with real asset -->
    <div
      className={cn(
        "relative overflow-hidden border border-border bg-surface",
        aspect === "video" ? "aspect-video" : "aspect-[21/9]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          trackGradients[track]
        )}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
          {diagramLabel ?? title}
        </span>
        {diagramLabel && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted/50">
            [{track}]
          </span>
        )}
      </div>
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
