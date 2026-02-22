"use client";

import { useRef, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface GlitchHoverProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlitchHover({
  children,
  className = "",
}: GlitchHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );

  const handleMouseEnter = useCallback(() => {
    if (isMobile || prefersReducedMotion || !containerRef.current) return;

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const el = containerRef.current;
    const content = el.querySelector("[data-glitch-content]") as HTMLElement;
    const scanlines = el.querySelector(
      "[data-glitch-scanlines]"
    ) as HTMLElement;

    const tl = gsap.timeline();
    timelineRef.current = tl;

    // Layer 1 (0-80ms): clip-path horizontal slice shift
    if (content) {
      tl.to(
        content,
        {
          clipPath: "inset(10% 0 30% 0)",
          duration: 0.04,
          ease: "none",
        },
        0
      );
      tl.to(
        content,
        {
          clipPath: "inset(50% 0 10% 0)",
          duration: 0.02,
          ease: "none",
        },
        0.04
      );
      tl.to(
        content,
        {
          clipPath: "inset(0 0 0 0)",
          duration: 0.02,
          ease: "expo.out",
        },
        0.06
      );
    }

    // Layer 2 (20-150ms): chromatic aberration text-shadow
    tl.to(
      el,
      {
        textShadow: "2px 0 #3B82F6, -2px 0 #EF4444",
        duration: 0.06,
        ease: "none",
      },
      0.02
    );
    tl.to(
      el,
      {
        textShadow: "1px 0 #3B82F6, -1px 0 #EF4444",
        duration: 0.04,
        ease: "none",
      },
      0.08
    );
    tl.to(
      el,
      {
        textShadow: "none",
        duration: 0.05,
        ease: "expo.out",
      },
      0.12
    );

    // Layer 3 (0-200ms): scanline overlay opacity pulse
    if (scanlines) {
      tl.fromTo(
        scanlines,
        { opacity: 0 },
        { opacity: 0.15, duration: 0.05, ease: "none" },
        0
      );
      tl.to(
        scanlines,
        { opacity: 0.08, duration: 0.06, ease: "none" },
        0.05
      );
      tl.to(
        scanlines,
        { opacity: 0, duration: 0.09, ease: "expo.out" },
        0.11
      );
    }

    // Layer 4 (10-160ms): skewX + translateX → reset
    tl.to(
      el,
      {
        skewX: -1,
        x: 4,
        duration: 0.06,
        ease: "none",
      },
      0.01
    );
    tl.to(
      el,
      {
        skewX: 0,
        x: 0,
        duration: 0.1,
        ease: "expo.out",
      },
      0.07
    );
  }, [isMobile, prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    if (containerRef.current) {
      gsap.set(containerRef.current, {
        textShadow: "none",
        skewX: 0,
        x: 0,
        clearProps: "all",
      });

      const content = containerRef.current.querySelector(
        "[data-glitch-content]"
      ) as HTMLElement;
      const scanlines = containerRef.current.querySelector(
        "[data-glitch-scanlines]"
      ) as HTMLElement;

      if (content) gsap.set(content, { clipPath: "inset(0 0 0 0)" });
      if (scanlines) gsap.set(scanlines, { opacity: 0 });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`glitch-hover relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div data-glitch-content>{children}</div>
      <div
        data-glitch-scanlines
        className="glitch-scanline pointer-events-none absolute inset-0 opacity-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />
    </div>
  );
}
