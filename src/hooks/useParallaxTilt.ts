"use client";

import { useRef, useCallback, type MouseEvent } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface UseParallaxTiltOptions {
  maxTilt?: number;     // degrees
  maxShift?: number;    // pixels
  perspective?: number; // pixels
}

export function useParallaxTilt({
  maxTilt = 8,
  maxShift = 12,
  perspective = 600,
}: UseParallaxTiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || isMobile || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateX = -y * maxTilt;
      const rotateY = x * maxTilt;
      const translateX = x * maxShift;
      const translateY = y * maxShift;

      ref.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${translateX}px, ${translateY}px)`;
    },
    [prefersReducedMotion, isMobile, maxTilt, maxShift, perspective]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translate(0px, 0px)";
    ref.current.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 400);
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
