"use client";

import { useRef, useCallback, useEffect, type MouseEvent } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface UseParallaxTiltOptions {
  maxTilt?: number;     // degrees
  maxShift?: number;    // pixels
  perspective?: number; // pixels
  smoothing?: number;   // 0-1, lower = smoother (default 0.06)
}

export function useParallaxTilt({
  maxTilt = 8,
  maxShift = 12,
  perspective = 600,
  smoothing = 0.06,
}: UseParallaxTiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const target = useRef({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
  const current = useRef({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
  const rafId = useRef<number>(0);
  const isHovering = useRef(false);
  const isAnimating = useRef(false);

  // Set initial transform on mount so perspective context is already established
  useEffect(() => {
    if (ref.current && !prefersReducedMotion && !isMobile) {
      ref.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translate(0px, 0px)`;
    }
  }, [perspective, prefersReducedMotion, isMobile]);

  const animate = useCallback(() => {
    const el = ref.current;
    if (!el) {
      isAnimating.current = false;
      return;
    }

    const c = current.current;
    const t = target.current;

    c.rotateX += (t.rotateX - c.rotateX) * smoothing;
    c.rotateY += (t.rotateY - c.rotateY) * smoothing;
    c.translateX += (t.translateX - c.translateX) * smoothing;
    c.translateY += (t.translateY - c.translateY) * smoothing;

    el.style.transform = `perspective(${perspective}px) rotateX(${c.rotateX}deg) rotateY(${c.rotateY}deg) translate(${c.translateX}px, ${c.translateY}px)`;

    const delta =
      Math.abs(t.rotateX - c.rotateX) +
      Math.abs(t.rotateY - c.rotateY) +
      Math.abs(t.translateX - c.translateX) +
      Math.abs(t.translateY - c.translateY);

    if (isHovering.current || delta > 0.01) {
      rafId.current = requestAnimationFrame(animate);
    } else {
      isAnimating.current = false;
      // Snap to exact rest position
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translate(0px, 0px)`;
    }
  }, [perspective, smoothing]);

  const startAnimation = useCallback(() => {
    if (!isAnimating.current) {
      isAnimating.current = true;
      rafId.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || isMobile || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      target.current = {
        rotateX: -y * maxTilt,
        rotateY: x * maxTilt,
        translateX: x * maxShift,
        translateY: y * maxShift,
      };

      isHovering.current = true;
      startAnimation();
    },
    [prefersReducedMotion, isMobile, maxTilt, maxShift, startAnimation]
  );

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    target.current = { rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 };
    startAnimation();
  }, [startAnimation]);

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
