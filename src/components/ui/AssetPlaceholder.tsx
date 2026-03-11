"use client";

import { cn } from "@/lib/utils";

interface AssetPlaceholderProps {
  label?: string;
  aspect?: "video" | "phone" | "square";
  className?: string;
}

export default function AssetPlaceholder({
  label = "Visual coming soon",
  aspect = "video",
  className,
}: AssetPlaceholderProps) {
  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "phone"
        ? "aspect-[9/16]"
        : "aspect-square";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg",
        aspectClass,
        className
      )}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#111]" />

      {/* Pulsing border */}
      <div className="absolute inset-0 rounded-lg border border-[rgba(0,255,170,0.15)] animate-[pulse-border_4s_ease-in-out_infinite]" />

      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-xs tracking-wider text-[#444]">
          {label}
        </span>
      </div>

      <style jsx>{`
        @keyframes pulse-border {
          0%,
          100% {
            border-color: rgba(0, 255, 170, 0.1);
          }
          50% {
            border-color: rgba(0, 255, 170, 0.25);
          }
        }
      `}</style>
    </div>
  );
}
