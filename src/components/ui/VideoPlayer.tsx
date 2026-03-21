"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  alt: string;
  poster?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  priority?: boolean;
  sizes?: string;
  mobileAutoplayOnly?: boolean;
  threshold?: number;
  resetOnExit?: boolean;
}

export default function VideoPlayer({
  src,
  alt,
  poster,
  className,
  loop = true,
  muted = true,
  autoPlay = true,
  controls = false,
  priority = false,
  sizes = "100vw",
  mobileAutoplayOnly = true,
  threshold = 0.35,
  resetOnExit = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const supportsHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const [videoReady, setVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const shouldAutoplayInView =
    autoPlay &&
    !prefersReducedMotion &&
    (mobileAutoplayOnly ? !supportsHover : true);
  const shouldUseNativeAutoplay = autoPlay && !mobileAutoplayOnly;
  const showVideo = !poster || (videoReady && isPlaying);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldAutoplayInView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay blocked */
          });
          return;
        }

        video.pause();
        if (resetOnExit) {
          video.currentTime = 0;
        }
      },
      { threshold }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
      if (resetOnExit) {
        video.currentTime = 0;
      }
    };
  }, [resetOnExit, shouldAutoplayInView, threshold]);

  return (
    <div className={cn("relative overflow-hidden bg-surface", className)}>
      {poster ? (
        <Image
          src={poster}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover transition-opacity duration-500",
            showVideo ? "opacity-0" : "opacity-100"
          )}
        />
      ) : null}

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        muted={muted}
        autoPlay={shouldUseNativeAutoplay}
        controls={controls}
        playsInline
        preload={autoPlay ? "metadata" : "none"}
        onCanPlay={() => setVideoReady(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          poster ? "absolute inset-0" : "",
          showVideo ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
