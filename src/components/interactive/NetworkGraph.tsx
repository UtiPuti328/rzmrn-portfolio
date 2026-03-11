"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

/* ---------- Data ---------- */

const AGENT_NODES = [
  "Researcher",
  "Marketer",
  "Analyst",
  "Content Writer",
  "Code Reviewer",
  "Data Monitor",
  "Telegram Bot",
  "Cron Manager",
  "Prompt Engineer",
  "QA Validator",
  "Intel Collector",
  "Digest Builder",
] as const;

const NODE_COUNT = AGENT_NODES.length;

/* ---------- Layout geometry (SVG units) ---------- */

const SVG_SIZE = 500;
const CENTER = SVG_SIZE / 2;
const ORBIT_RADIUS = 180;
const DISPATCHER_R = 40;
const AGENT_R = 20;

/** Minimum time between pulses in ms */
const PULSE_INTERVAL_MIN = 3000;
/** Maximum time between pulses in ms */
const PULSE_INTERVAL_MAX = 4000;
/** How long the pulse dot travels in ms */
const PULSE_TRAVEL_MS = 800;
/** How long the target node stays bright after pulse arrives, in ms */
const NODE_BRIGHT_MS = 600;

/* ---------- Colors ---------- */

const COLOR_ACTIVE = "#00FFAA";
const COLOR_NODE_FILL = "#333333";
const COLOR_NODE_STROKE = "#555555";
const COLOR_LINE = "#1a1a2e";
const COLOR_LABEL = "#737373";

/* ---------- Helpers ---------- */

interface NodePosition {
  x: number;
  y: number;
}

function getNodePositions(): NodePosition[] {
  return AGENT_NODES.map((_, i) => {
    const angle = (2 * Math.PI * i) / NODE_COUNT - Math.PI / 2;
    return {
      x: CENTER + ORBIT_RADIUS * Math.cos(angle),
      y: CENTER + ORBIT_RADIUS * Math.sin(angle),
    };
  });
}

const NODE_POSITIONS = getNodePositions();

function randomInterval(): number {
  return (
    PULSE_INTERVAL_MIN +
    Math.random() * (PULSE_INTERVAL_MAX - PULSE_INTERVAL_MIN)
  );
}

/* ---------- Component ---------- */

export function NetworkGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);
  const rafRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const brightTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const prefersReducedMotion = useRef(false);

  const [activeNodeIndex, setActiveNodeIndex] = useState<number | null>(null);
  const [pulse, setPulse] = useState<{
    targetIndex: number;
    progress: number;
  } | null>(null);
  const [tooltip, setTooltip] = useState<{
    label: string;
    x: number;
    y: number;
  } | null>(null);

  /* IntersectionObserver + pulse scheduling */
  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    /* Pulse animation via requestAnimationFrame */
    function startPulse() {
      if (prefersReducedMotion.current) return;

      const targetIndex = Math.floor(Math.random() * NODE_COUNT);
      const startTime = performance.now();

      const animate = (now: number) => {
        if (cancelled) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / PULSE_TRAVEL_MS, 1);

        setPulse({ targetIndex, progress });

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          /* Pulse arrived — brighten target node */
          setPulse(null);
          setActiveNodeIndex(targetIndex);
          brightTimerRef.current = setTimeout(() => {
            setActiveNodeIndex((current) =>
              current === targetIndex ? null : current
            );
          }, NODE_BRIGHT_MS);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }

    /* Recursive scheduling via setTimeout */
    function schedulePulse() {
      timerRef.current = setTimeout(() => {
        if (cancelled) return;
        if (isVisibleRef.current) {
          startPulse();
        }
        schedulePulse();
      }, randomInterval());
    }

    schedulePulse();

    return () => {
      cancelled = true;
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (brightTimerRef.current) clearTimeout(brightTimerRef.current);
    };
  }, []);

  /* Tooltip positioning from SVG coords to container-relative px */
  const handleNodeHover = useCallback(
    (
      event: React.MouseEvent<SVGGElement>,
      label: string
    ) => {
      const svg = (event.currentTarget as SVGElement).closest("svg");
      if (!svg || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const svgRect = svg.getBoundingClientRect();

      /* Convert the pointer position relative to the container */
      const x = event.clientX - containerRect.left;
      const y = svgRect.top - containerRect.top + event.clientY - svgRect.top - 36;

      setTooltip({ label, x, y });
    },
    []
  );

  const handleNodeLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  /* Compute pulse dot position */
  let pulseDot: { cx: number; cy: number } | null = null;
  if (pulse) {
    const target = NODE_POSITIONS[pulse.targetIndex];
    /* Ease out cubic for smoother feel */
    const t = 1 - Math.pow(1 - pulse.progress, 3);
    pulseDot = {
      cx: CENTER + (target.x - CENTER) * t,
      cy: CENTER + (target.y - CENTER) * t,
    };
  }

  return (
    <figure
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl",
        "border border-[var(--color-border)]",
        "bg-[#0a0a0a]"
      )}
      aria-label="Multi-agent system network graph: Dispatcher connected to 12 agent nodes"
    >
      {/* Tooltip (HTML overlay, positioned via state) */}
      {tooltip && (
        <div
          className={cn(
            "pointer-events-none absolute z-20",
            "rounded-md bg-[rgba(0,255,170,0.1)] px-2.5 py-1",
            "font-mono text-xs text-[#00FFAA]",
            "border border-[rgba(0,255,170,0.2)]",
            "whitespace-nowrap backdrop-blur-sm"
          )}
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, 0)",
          }}
        >
          {tooltip.label}
        </div>
      )}

      <svg
        viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
        className="block w-full h-auto"
        role="img"
        aria-label="Network graph visualization"
      >
        {/* Connection lines: Dispatcher -> each node */}
        {NODE_POSITIONS.map((pos, i) => (
          <line
            key={`line-${i}`}
            x1={CENTER}
            y1={CENTER}
            x2={pos.x}
            y2={pos.y}
            stroke={COLOR_LINE}
            strokeWidth={1}
          />
        ))}

        {/* Agent nodes */}
        {AGENT_NODES.map((name, i) => {
          const pos = NODE_POSITIONS[i];
          const isActive = activeNodeIndex === i;

          return (
            <g
              key={name}
              onMouseEnter={(e) => handleNodeHover(e, name)}
              onMouseLeave={handleNodeLeave}
              style={{ cursor: "default" }}
            >
              {/* Active glow */}
              {isActive && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={AGENT_R + 8}
                  fill="none"
                  stroke={COLOR_ACTIVE}
                  strokeWidth={2}
                  opacity={0.3}
                />
              )}

              {/* Node circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={AGENT_R}
                fill={isActive ? COLOR_ACTIVE : COLOR_NODE_FILL}
                stroke={isActive ? COLOR_ACTIVE : COLOR_NODE_STROKE}
                strokeWidth={1.5}
                style={{
                  transition: "fill 0.3s ease, stroke 0.3s ease",
                }}
              />

              {/* Label below node */}
              <text
                x={pos.x}
                y={pos.y + AGENT_R + 14}
                textAnchor="middle"
                fill={COLOR_LABEL}
                fontSize={10}
                fontFamily="var(--font-mono), monospace"
              >
                {name}
              </text>
            </g>
          );
        })}

        {/* Dispatcher (central node) — rendered last so it sits on top */}
        <g>
          {/* Subtle ambient glow */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={DISPATCHER_R + 10}
            fill="none"
            stroke={COLOR_ACTIVE}
            strokeWidth={1.5}
            opacity={0.15}
          />

          {/* Dispatcher circle */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={DISPATCHER_R}
            fill={COLOR_ACTIVE}
            stroke={COLOR_ACTIVE}
            strokeWidth={2}
            opacity={0.9}
          />

          {/* Dispatcher label */}
          <text
            x={CENTER}
            y={CENTER + 4}
            textAnchor="middle"
            fill="white"
            fontSize={12}
            fontWeight="bold"
            fontFamily="var(--font-mono), monospace"
          >
            Dispatcher
          </text>
        </g>

        {/* Pulse dot (traveling from center to target) */}
        {pulseDot && (
          <circle
            cx={pulseDot.cx}
            cy={pulseDot.cy}
            r={5}
            fill={COLOR_ACTIVE}
            style={{
              filter: `drop-shadow(0 0 6px ${COLOR_ACTIVE}) drop-shadow(0 0 12px rgba(0,255,170,0.4))`,
            }}
          />
        )}
      </svg>

      {/* Accessible description */}
      <p className="sr-only">
        Animated network graph showing a central Dispatcher node connected to 12
        specialized agent nodes. Pulses periodically travel from the Dispatcher
        to random agents, illustrating the multi-agent coordination pattern.
      </p>
    </figure>
  );
}
