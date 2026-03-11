"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface BentoMetricCell {
  /** Target number to animate toward (e.g. 250, 50, 5) */
  value: number;
  /** Static text rendered before the number (e.g. "$") */
  prefix?: string;
  /** Static text rendered after the number (e.g. "+", "/hr", "★") */
  suffix?: string;
  /** Human-readable label shown below the number */
  label: string;
  /** Category tag displayed in the top-right corner */
  category: string;
  /** Optional background image URL for the cell */
  thumbnailSrc?: string;
}

interface BentoGridProps {
  cells?: BentoMetricCell[];
  /** Animation duration in milliseconds */
  duration?: number;
  className?: string;
}

// ---------------------------------------------------------------------------
// Default data
// ---------------------------------------------------------------------------

const DEFAULT_CELLS: BentoMetricCell[] = [
  { value: 250, suffix: "+", label: "Projects completed", category: "COMMERCIAL" },
  { value: 120, label: "US clients", category: "AUTOMOTIVE" },
  { value: 50, prefix: "$", suffix: "/hr", label: "Premium tier", category: "EVENT" },
  { value: 5, suffix: "★", label: "Rating maintained", category: "MOTION" },
];

// ---------------------------------------------------------------------------
// Easing: easeOutExpo — fast start, asymptotic finish
// ---------------------------------------------------------------------------

function easeOutExpo(t: number): number {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// ---------------------------------------------------------------------------
// Hook: usePrefersReducedMotion (via useSyncExternalStore)
// ---------------------------------------------------------------------------

function subscribeToReducedMotion(callback: () => void): () => void {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

// ---------------------------------------------------------------------------
// Hook: useCountUp
// Uses a ref + rAF to avoid calling setState synchronously inside effects.
// Only calls setState via rAF callbacks (async, browser-scheduled).
// ---------------------------------------------------------------------------

function useCountUp(
  target: number,
  shouldAnimate: boolean,
  duration: number,
  prefersReducedMotion: boolean,
): number {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef<number>(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!shouldAnimate || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    // For reduced motion: jump to target via rAF to stay async
    if (prefersReducedMotion) {
      rafRef.current = requestAnimationFrame(() => {
        setCurrent(target);
      });
      return () => cancelAnimationFrame(rafRef.current);
    }

    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCurrent(Math.round(easedProgress * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [target, shouldAnimate, duration, prefersReducedMotion]);

  return current;
}

// ---------------------------------------------------------------------------
// Cell component
// ---------------------------------------------------------------------------

interface BentoCellProps {
  cell: BentoMetricCell;
  isVisible: boolean;
  duration: number;
  index: number;
  prefersReducedMotion: boolean;
}

function BentoCell({ cell, isVisible, duration, index, prefersReducedMotion }: BentoCellProps) {
  const animatedValue = useCountUp(cell.value, isVisible, duration, prefersReducedMotion);

  // Stagger the reveal by cell index
  const staggerDelay = prefersReducedMotion ? 0 : index * 120;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 sm:p-8",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:scale-[1.02]",
      )}
      style={{
        background: cell.thumbnailSrc
          ? `url(${cell.thumbnailSrc}) center / cover no-repeat`
          : "rgba(0, 255, 170, 0.05)",
        border: "1px solid rgba(0, 255, 170, 0.2)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "inset 0 1px 0 rgba(0, 255, 170, 0.06)",
        transitionDelay: `${staggerDelay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
      }}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      data-bento-cell
    >
      {/* Hover glow overlay */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: "inset 0 0 40px rgba(0, 255, 170, 0.08), 0 0 20px rgba(0, 255, 170, 0.06)",
        }}
        aria-hidden="true"
      />

      {/* Thumbnail overlay for readability when image is present */}
      {cell.thumbnailSrc && (
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: "rgba(0, 0, 0, 0.6)" }}
          aria-hidden="true"
        />
      )}

      {/* Category tag */}
      <span
        className="absolute top-4 right-4 text-xs tracking-widest select-none"
        style={{ color: "rgba(0, 255, 170, 0.35)" }}
        aria-label={`Category: ${cell.category}`}
      >
        {cell.category}
      </span>

      {/* Metric number */}
      <p
        className="relative mt-6 text-5xl font-medium leading-none sm:text-6xl"
        style={{
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          color: "#00FFAA",
        }}
      >
        {cell.prefix && <span>{cell.prefix}</span>}
        <span>{animatedValue}</span>
        {cell.suffix && <span>{cell.suffix}</span>}
      </p>

      {/* Label */}
      <p
        className="relative mt-3 text-sm sm:text-base"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {cell.label}
      </p>
    </article>
  );
}

// Hover border glow handlers — mutate border-color directly to avoid re-renders
function handleHoverEnter(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.borderColor = "rgba(0, 255, 170, 0.45)";
}

function handleHoverLeave(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.borderColor = "rgba(0, 255, 170, 0.2)";
}

// ---------------------------------------------------------------------------
// Main BentoGrid component
// ---------------------------------------------------------------------------

export function BentoGrid({
  cells = DEFAULT_CELLS,
  duration = 2000,
  className,
}: BentoGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // IntersectionObserver — trigger once
  const onIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: "-80px",
      threshold: 0.15,
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [onIntersect]);

  return (
    <section
      ref={gridRef}
      className={cn(
        "grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2",
        className,
      )}
      aria-label="Key metrics"
    >
      {cells.map((cell, index) => (
        <BentoCell
          key={`${cell.category}-${cell.value}`}
          cell={cell}
          isVisible={isVisible}
          duration={duration}
          index={index}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </section>
  );
}
