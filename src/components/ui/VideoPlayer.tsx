"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
}

export default function VideoPlayer({
  src,
  poster,
  className,
  loop = true,
  muted = true,
  autoPlay = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={cn("relative overflow-hidden bg-surface", className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        muted={muted}
        autoPlay={autoPlay}
        playsInline
        className="h-full w-full object-cover"
      />
    </div>
  );
}
