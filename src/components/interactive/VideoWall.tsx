"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface VideoItem {
  src?: string;
  label: string;
}

interface VideoWallProps {
  videos?: VideoItem[];
}

// ---------------------------------------------------------------------------
// Default data (fallback placeholders when no real videos provided)
// ---------------------------------------------------------------------------

const DEFAULT_VIDEOS: VideoItem[] = [
  { label: "AUTOMOTIVE" },
  { label: "TRAVEL" },
  { label: "FASHION" },
  { label: "MOTION DESIGN" },
  { label: "LIFESTYLE" },
  { label: "EXPERIMENTAL" },
];


// ---------------------------------------------------------------------------
// Hook: useReducedMotion
// ---------------------------------------------------------------------------

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onStoreChange: () => void): () => void {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", onStoreChange);
  return () => mql.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot(): boolean {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

// ---------------------------------------------------------------------------
// Hook: useInViewport — plays/pauses video based on intersection
// ---------------------------------------------------------------------------

function useInViewport(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  hasSrc: boolean,
): void {
  const observe = useCallback(() => {
    const el = videoRef.current;
    if (!el || !hasSrc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            /* autoplay blocked — silently ignore */
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [videoRef, hasSrc]);

  useEffect(() => {
    return observe();
  }, [observe]);
}

// ---------------------------------------------------------------------------
// PhoneFrame — individual phone mockup
// ---------------------------------------------------------------------------

interface PhoneFrameProps {
  video: VideoItem;
  prefersReducedMotion: boolean;
}

function PhoneFrame({ video, prefersReducedMotion }: PhoneFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasSrc = Boolean(video.src);

  useInViewport(videoRef, hasSrc);

  const hoverTransition = prefersReducedMotion
    ? undefined
    : "transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <figure className="flex flex-col items-center gap-3">
      {/* Phone bezel */}
      <div
        className={cn(
          "phone-bezel",
          "relative overflow-hidden w-full max-w-[280px]",
          "border-4 border-[#1a1a1a]",
          "rounded-[24px]",
        )}
        style={{
          boxShadow:
            "0 4px 24px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04)",
          transition: hoverTransition,
        }}
      >
        {/* Notch */}
        <span
          className="absolute top-2 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#1a1a1a]"
          style={{ width: 40, height: 4 }}
          aria-hidden="true"
        />

        {/* Inner area — 9:16 aspect ratio */}
        <div className="relative aspect-[9/16] w-full bg-gradient-to-b from-[#0a0a0a] to-[#111]">
          {hasSrc ? (
            <video
              ref={videoRef}
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            /* Placeholder */
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              {/* Play icon — triangle inside a circle */}
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#333]"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                }}
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M15 8.134a1 1 0 0 1 0 1.732l-13.5 7.794A1 1 0 0 1 0 16.794V1.206A1 1 0 0 1 1.5.34L15 8.134Z"
                    fill="#737373"
                  />
                </svg>
              </span>
              <span
                className="select-none text-xs"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  color: "#737373",
                }}
              >
                Video
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Category label */}
      <figcaption
        className="select-none text-xs uppercase tracking-wider"
        style={{
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          color: "var(--color-text-muted)",
        }}
      >
        {video.label}
      </figcaption>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Hover handlers — mutate inline styles to avoid re-renders
// ---------------------------------------------------------------------------

function handleHoverEnter(e: React.MouseEvent<HTMLElement>) {
  const bezel = e.currentTarget.querySelector<HTMLElement>(".phone-bezel");
  if (bezel) {
    bezel.style.transform = "scale(1.03)";
    bezel.style.boxShadow =
      "0 8px 40px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.06)";
  }
}

function handleHoverLeave(e: React.MouseEvent<HTMLElement>) {
  const bezel = e.currentTarget.querySelector<HTMLElement>(".phone-bezel");
  if (bezel) {
    bezel.style.transform = "scale(1)";
    bezel.style.boxShadow =
      "0 4px 24px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04)";
  }
}

// ---------------------------------------------------------------------------
// VideoWall — main component
// ---------------------------------------------------------------------------

export function VideoWall({ videos = DEFAULT_VIDEOS }: VideoWallProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Short-form video showcase"
      className={cn(
        "grid gap-8",
        /* 1 col on small mobile, 2 cols on larger mobile (>425px), 2 on tablet, 3 on desktop */
        "grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {videos.map((video, index) => (
        <div
          key={`${video.label}-${index}`}
          onMouseEnter={prefersReducedMotion ? undefined : handleHoverEnter}
          onMouseLeave={prefersReducedMotion ? undefined : handleHoverLeave}
        >
          <PhoneFrame
            video={video}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>
      ))}
    </section>
  );
}
