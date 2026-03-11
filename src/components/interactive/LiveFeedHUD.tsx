"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Timecode components at 25fps */
interface Timecode {
  hours: number;
  minutes: number;
  seconds: number;
  frames: number;
}

const INITIAL_TIMECODE: Timecode = {
  hours: 1,
  minutes: 24,
  seconds: 36,
  frames: 12,
};

const FPS = 25;
const TIMECODE_INTERVAL_MS = 1000 / FPS;
const BITRATE_INTERVAL_MS = 2000;
const BITRATE_MIN = 12.2;
const BITRATE_MAX = 12.8;

/** Pad a number to a given width with leading zeroes */
function pad(value: number, width: number = 2): string {
  return String(value).padStart(width, "0");
}

/** Format a Timecode object as HH:MM:SS:FF */
function formatTimecode(tc: Timecode): string {
  return `${pad(tc.hours)}:${pad(tc.minutes)}:${pad(tc.seconds)}:${pad(tc.frames)}`;
}

/** Advance timecode by one frame at 25fps */
function tickTimecode(tc: Timecode): Timecode {
  let { hours, minutes, seconds, frames } = tc;
  frames += 1;

  if (frames >= FPS) {
    frames = 0;
    seconds += 1;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours += 1;
  }
  if (hours >= 24) {
    hours = 0;
  }

  return { hours, minutes, seconds, frames };
}

/** Generate a random bitrate between min and max, rounded to 1 decimal */
function randomBitrate(): string {
  const value = BITRATE_MIN + Math.random() * (BITRATE_MAX - BITRATE_MIN);
  return value.toFixed(1);
}

/**
 * Broadcast-style live camera feed overlay for the Mazowsze case study.
 * Simulates a production monitor with REC indicator, running timecode,
 * fluctuating bitrate readout, and scanline overlay.
 */
export function LiveFeedHUD() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const [timecode, setTimecode] = useState<Timecode>(INITIAL_TIMECODE);
  const [bitrate, setBitrate] = useState<string>(randomBitrate);

  /* Timecode interval — ticks at ~25fps, only while visible */
  useEffect(() => {
    if (!isVisible) return;
    const id = setInterval(() => setTimecode(tickTimecode), TIMECODE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isVisible]);

  /* Bitrate interval — fluctuates every 2s, only while visible */
  useEffect(() => {
    if (!isVisible) return;
    const id = setInterval(() => setBitrate(randomBitrate()), BITRATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isVisible]);

  /* IntersectionObserver — start/stop intervals when visibility changes */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      ref={containerRef}
      role="img"
      aria-label="Broadcast monitor overlay showing live camera feed with timecode and recording indicator"
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-xl",
        "border border-white/10"
      )}
    >
      {/* Scoped keyframes */}
      <style>{`
        @keyframes hud-rec-blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hud-rec-dot {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      {/* Background gradient — placeholder for concert photo */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        }}
      />

      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)",
        }}
      />

      {/* HUD overlay layer */}
      <div className="pointer-events-none absolute inset-0 z-20 p-3 sm:p-4">
        {/* Top-left: REC + Camera label */}
        <div className="absolute left-3 top-3 flex flex-col gap-1 sm:left-4 sm:top-4">
          {/* REC indicator */}
          <span className="flex items-center gap-1.5 font-mono text-xs leading-none">
            <span
              className="hud-rec-dot inline-block size-2 rounded-full"
              style={{
                backgroundColor: "#FF0000",
                animation: "hud-rec-blink 1s ease-in-out infinite",
              }}
              aria-hidden="true"
            />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>REC</span>
          </span>

          {/* Camera label */}
          <span
            className="font-mono text-xs leading-none"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            [CAM 1: LIVE]
          </span>
        </div>

        {/* Bottom-left: Timecode */}
        <span
          className="absolute bottom-3 left-3 font-mono text-xs leading-none sm:bottom-4 sm:left-4"
          style={{ color: "rgba(255,255,255,0.8)" }}
          aria-label={`Timecode ${formatTimecode(timecode)}`}
        >
          TC: {formatTimecode(timecode)}
        </span>

        {/* Bottom-center: Format info */}
        <span
          className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs leading-none"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          1080p60 | AUDIO: SYNC OK
        </span>

        {/* Bottom-right: Bitrate */}
        <span
          className="absolute bottom-3 right-3 font-mono text-xs leading-none sm:bottom-4 sm:right-4"
          style={{ color: "rgba(255,255,255,0.8)" }}
          aria-label={`Bitrate ${bitrate} megabits per second`}
        >
          {bitrate} Mbps
        </span>
      </div>
    </figure>
  );
}
