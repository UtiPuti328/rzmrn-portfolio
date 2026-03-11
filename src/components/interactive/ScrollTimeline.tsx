"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/utils";

/* ---------- Data ---------- */

interface TimelinePhase {
  id: number;
  title: string;
  description: string;
  metric: string;
}

const PHASES: TimelinePhase[] = [
  {
    id: 1,
    title: "Discovery",
    description: "Crawl all storage, build inventory",
    metric: "221 files found",
  },
  {
    id: 2,
    title: "Sorting",
    description: "Categorize by course, type, sequence",
    metric: "22 courses identified",
  },
  {
    id: 3,
    title: "Audit",
    description: "Cross-reference manifests, flag gaps",
    metric: "0 missing files",
  },
  {
    id: 4,
    title: "Verification",
    description: "Integrity checks: codec, resolution, sync",
    metric: "100% validated",
  },
  {
    id: 5,
    title: "Cloud Sync",
    description: "GoodSync \u2192 OneDrive, verified mirroring",
    metric: "Fully synced",
  },
];

const PHASE_COUNT = PHASES.length;

/* ---------- Hook: reduced motion ---------- */

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void): () => void {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

/* ---------- Main component ---------- */

export function ScrollTimeline() {
  const [activePhases, setActivePhases] = useState<Set<number>>(new Set());
  const phaseRefs = useRef<(HTMLLIElement | null)[]>([]);
  const reducedMotion = usePrefersReducedMotion();

  const setPhaseRef = useCallback(
    (index: number) => (el: HTMLLIElement | null) => {
      phaseRefs.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const elements = phaseRefs.current.filter(Boolean) as HTMLLIElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setActivePhases((prev) => {
          const next = new Set(prev);
          for (const entry of entries) {
            const index = Number(
              (entry.target as HTMLElement).dataset.phaseIndex
            );
            if (entry.isIntersecting) {
              next.add(index);
            }
          }
          return next;
        });
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.3,
      }
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const transitionStyle = reducedMotion
    ? "none"
    : "color 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <section
      aria-label="Archive automation timeline"
      className={cn(
        "relative w-full rounded-2xl",
        "border border-[var(--color-border)]",
        "bg-[var(--color-surface)] px-6 py-10 md:px-10 md:py-14"
      )}
    >
      <ol
        className="relative mx-auto flex max-w-xl flex-col"
        aria-label="Automation phases"
      >
        {/* Vertical connecting line (behind everything) */}
        <div
          className="absolute left-[19px] top-0 bottom-0 w-[2px] md:left-[23px]"
          aria-hidden="true"
          style={{ backgroundColor: "#333" }}
        >
          {/* Glow overlay segments for each connection */}
          {PHASES.slice(0, PHASE_COUNT - 1).map((_, i) => {
            const isActive =
              activePhases.has(i) && activePhases.has(i + 1);
            return (
              <span
                key={i}
                className="absolute left-0 w-full"
                style={{
                  top: `${(i / (PHASE_COUNT - 1)) * 100}%`,
                  height: `${(1 / (PHASE_COUNT - 1)) * 100}%`,
                  backgroundColor: isActive ? "#00FFAA" : "transparent",
                  boxShadow: isActive
                    ? "0 0 8px rgba(0, 255, 170, 0.4)"
                    : "none",
                  transition: transitionStyle,
                }}
              />
            );
          })}
        </div>

        {PHASES.map((phase, index) => {
          const isActive = activePhases.has(index);
          return (
            <li
              key={phase.id}
              ref={setPhaseRef(index)}
              data-phase-index={index}
              className="relative flex items-start gap-4 md:gap-5"
              style={{
                paddingBottom:
                  index < PHASE_COUNT - 1 ? "80px" : "0px",
              }}
            >
              {/* Numbered circle */}
              <PhaseIcon
                number={phase.id}
                isActive={isActive}
                transition={transitionStyle}
              />

              {/* Text content */}
              <div className="flex flex-1 flex-col gap-2 pt-1">
                <h3
                  className="font-heading text-base font-semibold tracking-tight md:text-lg"
                  style={{
                    color: isActive ? "#EDEDED" : "#444",
                    transition: transitionStyle,
                  }}
                >
                  {phase.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed md:text-[15px]"
                  style={{
                    color: isActive ? "#999" : "#444",
                    transition: transitionStyle,
                  }}
                >
                  {phase.description}
                </p>
                <MetricBadge
                  metric={phase.metric}
                  isActive={isActive}
                  transition={transitionStyle}
                />
              </div>
            </li>
          );
        })}
      </ol>

      {/* Accessibility fallback */}
      <p className="sr-only">
        Timeline showing 5 automation phases: Discovery, Sorting, Audit,
        Verification, and Cloud Sync.
      </p>
    </section>
  );
}

/* ---------- Sub-components ---------- */

interface PhaseIconProps {
  number: number;
  isActive: boolean;
  transition: string;
}

function PhaseIcon({ number, isActive, transition }: PhaseIconProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex shrink-0 items-center justify-center",
        "size-10 rounded-full md:size-12",
        "font-mono text-sm font-bold md:text-base"
      )}
      style={{
        backgroundColor: isActive ? "#00FFAA" : "#222",
        color: isActive ? "#050505" : "#555",
        boxShadow: isActive
          ? "0 0 16px rgba(0, 255, 170, 0.35), 0 0 4px rgba(0, 255, 170, 0.5)"
          : "none",
        transition,
      }}
      aria-hidden="true"
    >
      {number}
    </div>
  );
}

interface MetricBadgeProps {
  metric: string;
  isActive: boolean;
  transition: string;
}

function MetricBadge({ metric, isActive, transition }: MetricBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full",
        "px-3 py-1 font-mono text-xs tracking-wide"
      )}
      style={{
        color: isActive ? "#00FFAA" : "#444",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: isActive
          ? "rgba(0, 255, 170, 0.4)"
          : "rgba(68, 68, 68, 0.3)",
        backgroundColor: isActive
          ? "rgba(0, 255, 170, 0.08)"
          : "transparent",
        transition,
      }}
    >
      {metric}
    </span>
  );
}
