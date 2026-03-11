"use client";

import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Full animation cycle duration in seconds */
const CYCLE_S = 6;

/** Accent colour used across the diagram */
const ACCENT = "#00FFAA";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface ProductNode {
  label: string;
  url?: string;
  urlLabel?: string;
  techStack: string;
}

interface InputNode {
  label: string;
}

const PRODUCT_LEFT: ProductNode = {
  label: "rzmrn.com",
  techStack: "Next.js 16 · React 19 · Tailwind v4",
};

const PRODUCT_RIGHT: ProductNode = {
  label: "digest.rzmrn.com",
  url: "https://digest.rzmrn.com",
  urlLabel: "View Digest →",
  techStack: "MiniMax M2.5 · mem0 · Python",
};

const INPUTS_LEFT: InputNode[] = [{ label: "Claude Code" }];

const INPUTS_RIGHT: InputNode[] = [
  { label: "60+ RSS Feeds" },
  { label: "Cron" },
];

const INFRA_NODE = "Cloudflare Pages";

// ---------------------------------------------------------------------------
// EcosystemDiagram — main export
// ---------------------------------------------------------------------------

export function EcosystemDiagram() {
  return (
    <figure
      aria-label="Two-product ecosystem architecture diagram"
      className={cn(
        "relative w-full overflow-hidden rounded-2xl",
        "border border-[rgba(0,255,170,0.12)]",
        "bg-[#0a0a0a] px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14",
      )}
    >
      {/* Scoped keyframes */}
      <style>{keyframes()}</style>

      {/* ---- Desktop layout (md+): three-column horizontal ---- */}
      <div className="mx-auto hidden max-w-5xl md:block" aria-hidden="false">
        <DesktopLayout />
      </div>

      {/* ---- Mobile layout (<md): vertical stack ---- */}
      <div className="block md:hidden">
        <MobileLayout />
      </div>

      <p className="sr-only">
        Architecture diagram showing Claude Code feeding into rzmrn.com, RSS
        feeds and Cron feeding into digest.rzmrn.com, both connected by shared
        Cloudflare Pages infrastructure.
      </p>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Desktop layout
// ---------------------------------------------------------------------------

function DesktopLayout() {
  return (
    <div className="flex items-center justify-center gap-0">
      {/* Left column: inputs → product */}
      <div className="flex items-center">
        <div className="flex flex-col items-end gap-3">
          {INPUTS_LEFT.map((input) => (
            <SmallNode key={input.label} label={input.label} />
          ))}
        </div>

        <HorizontalConnection index={0} />

        <ProductCard product={PRODUCT_LEFT} index={0} />
      </div>

      {/* Center: infrastructure node connecting both products */}
      <div className="flex items-center">
        <HorizontalConnection index={1} />
        <InfraNode label={INFRA_NODE} />
        <HorizontalConnection index={2} />
      </div>

      {/* Right column: product ← inputs */}
      <div className="flex items-center">
        <ProductCard product={PRODUCT_RIGHT} index={1} />

        <HorizontalConnection index={3} reverse />

        <div className="flex flex-col items-start gap-3">
          {INPUTS_RIGHT.map((input) => (
            <SmallNode key={input.label} label={input.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile layout — vertical flow: inputs → products → infra
// ---------------------------------------------------------------------------

function MobileLayout() {
  return (
    <div className="mx-auto flex max-w-xs flex-col items-center gap-0">
      {/* Left-side inputs */}
      <div className="flex flex-col items-center gap-3">
        {INPUTS_LEFT.map((input) => (
          <SmallNode key={input.label} label={input.label} />
        ))}
      </div>

      <VerticalConnection index={0} />

      <ProductCard product={PRODUCT_LEFT} index={0} />

      <VerticalConnection index={1} />

      <InfraNode label={INFRA_NODE} />

      <VerticalConnection index={2} />

      <ProductCard product={PRODUCT_RIGHT} index={1} />

      <VerticalConnection index={3} />

      {/* Right-side inputs */}
      <div className="flex flex-col items-center gap-3">
        {INPUTS_RIGHT.map((input) => (
          <SmallNode key={input.label} label={input.label} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Node components
// ---------------------------------------------------------------------------

interface ProductCardProps {
  product: ProductNode;
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article
      className={cn(
        "relative z-10 flex shrink-0 flex-col items-center justify-center gap-1.5",
        "h-[100px] w-[180px] rounded-xl px-4 py-4 text-center",
        "border border-[rgba(0,255,170,0.2)]",
        "bg-[rgba(0,255,170,0.05)] backdrop-blur-sm",
        "transition-shadow duration-500",
        "hover:shadow-[0_0_24px_rgba(0,255,170,0.12)]",
      )}
      style={{
        animation: `eco-fade-in 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s both`,
      }}
    >
      {/* Product name */}
      <span
        className="font-mono text-sm font-semibold tracking-wide"
        style={{ color: ACCENT }}
      >
        {product.label}
      </span>

      {/* Tech stack */}
      <span
        className="font-mono text-[9px] leading-tight tracking-wide"
        style={{ color: "rgba(0,255,170,0.5)" }}
      >
        {product.techStack}
      </span>

      {/* Optional link */}
      {product.url && product.urlLabel && (
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-1 inline-block font-mono text-[10px] tracking-wide",
            "underline decoration-[rgba(0,255,170,0.3)] underline-offset-2",
            "transition-colors duration-200",
          )}
          style={{ color: "rgba(0,255,170,0.7)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = ACCENT;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(0,255,170,0.7)";
          }}
        >
          {product.urlLabel}
        </a>
      )}
    </article>
  );
}

interface SmallNodeProps {
  label: string;
}

function SmallNode({ label }: SmallNodeProps) {
  return (
    <span
      className={cn(
        "relative z-10 flex shrink-0 items-center justify-center",
        "h-[60px] w-[120px] rounded-lg px-3 text-center",
        "border border-[rgba(0,255,170,0.2)]",
        "bg-[rgba(0,255,170,0.05)] backdrop-blur-sm",
        "transition-shadow duration-500",
        "hover:shadow-[0_0_16px_rgba(0,255,170,0.1)]",
      )}
      style={{
        animation: "eco-fade-in 0.6s cubic-bezier(0.16,1,0.3,1) 0.05s both",
      }}
    >
      <span
        className="font-mono text-[11px] font-medium tracking-wide"
        style={{ color: ACCENT }}
      >
        {label}
      </span>
    </span>
  );
}

interface InfraNodeProps {
  label: string;
}

function InfraNode({ label }: InfraNodeProps) {
  return (
    <span
      className={cn(
        "relative z-10 flex shrink-0 items-center justify-center",
        "h-[60px] w-[140px] rounded-lg px-3 text-center",
        "border border-[rgba(0,255,170,0.25)]",
        "bg-[rgba(0,255,170,0.08)] backdrop-blur-sm",
        "transition-shadow duration-500",
        "hover:shadow-[0_0_20px_rgba(0,255,170,0.14)]",
      )}
      style={{
        animation: "eco-fade-in 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both",
      }}
    >
      <span
        className="font-mono text-[11px] font-semibold tracking-wide"
        style={{ color: ACCENT }}
      >
        {label}
      </span>
    </span>
  );
}

// ---------------------------------------------------------------------------
// Connection components
// ---------------------------------------------------------------------------

interface HorizontalConnectionProps {
  index: number;
  /** When true the dot travels right-to-left instead of left-to-right */
  reverse?: boolean;
}

function HorizontalConnection({ index, reverse = false }: HorizontalConnectionProps) {
  const segmentDuration = CYCLE_S / 4; // 4 connections total
  const delay = segmentDuration * index;

  return (
    <span
      className="relative flex h-px w-12 shrink-0 items-center lg:w-16"
      aria-hidden="true"
    >
      {/* Static line */}
      <span
        className="absolute h-px w-full"
        style={{ backgroundColor: "rgba(0,255,170,0.3)" }}
      />

      {/* Flowing dot */}
      <span
        className="absolute rounded-full"
        style={{
          width: 6,
          height: 6,
          backgroundColor: ACCENT,
          boxShadow:
            "0 0 6px 1px rgba(0,255,170,0.6), 0 0 16px 3px rgba(0,255,170,0.25)",
          animationName: reverse ? "eco-dot-h-reverse" : "eco-dot-h",
          animationDuration: `${CYCLE_S}s`,
          animationTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          animationDelay: `${delay}s`,
          animationIterationCount: "infinite",
        }}
      />
    </span>
  );
}

interface VerticalConnectionProps {
  index: number;
}

function VerticalConnection({ index }: VerticalConnectionProps) {
  const segmentDuration = CYCLE_S / 4;
  const delay = segmentDuration * index;

  return (
    <span
      className="relative flex h-8 w-px shrink-0 justify-center"
      aria-hidden="true"
    >
      {/* Static line */}
      <span
        className="absolute h-full w-px"
        style={{ backgroundColor: "rgba(0,255,170,0.3)" }}
      />

      {/* Flowing dot */}
      <span
        className="absolute rounded-full"
        style={{
          width: 6,
          height: 6,
          backgroundColor: ACCENT,
          boxShadow:
            "0 0 6px 1px rgba(0,255,170,0.6), 0 0 16px 3px rgba(0,255,170,0.25)",
          animationName: "eco-dot-v",
          animationDuration: `${CYCLE_S}s`,
          animationTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          animationDelay: `${delay}s`,
          animationIterationCount: "infinite",
        }}
      />
    </span>
  );
}

// ---------------------------------------------------------------------------
// Keyframes
// ---------------------------------------------------------------------------

function keyframes(): string {
  // Each connection segment occupies 25% of the cycle (4 connections).
  // The dot is visible for its segment, hidden the rest of the loop.
  const seg = 25;
  const travel = seg * 0.85;

  return `
    /* Mount fade-in */
    @keyframes eco-fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Horizontal dot — left to right */
    @keyframes eco-dot-h {
      0%                { opacity: 0; left: 0;    transform: translateX(-50%); }
      2%                { opacity: 1; left: 0;    transform: translateX(-50%); }
      ${travel}%        { opacity: 1; left: 100%; transform: translateX(-50%); }
      ${seg}%           { opacity: 0; left: 100%; transform: translateX(-50%); }
      100%              { opacity: 0; left: 100%; transform: translateX(-50%); }
    }

    /* Horizontal dot — right to left (for right-side inputs) */
    @keyframes eco-dot-h-reverse {
      0%                { opacity: 0; left: 100%; transform: translateX(-50%); }
      2%                { opacity: 1; left: 100%; transform: translateX(-50%); }
      ${travel}%        { opacity: 1; left: 0;    transform: translateX(-50%); }
      ${seg}%           { opacity: 0; left: 0;    transform: translateX(-50%); }
      100%              { opacity: 0; left: 0;    transform: translateX(-50%); }
    }

    /* Vertical dot — top to bottom */
    @keyframes eco-dot-v {
      0%                { opacity: 0; top: 0;    transform: translateY(-50%); }
      2%                { opacity: 1; top: 0;    transform: translateY(-50%); }
      ${travel}%        { opacity: 1; top: 100%; transform: translateY(-50%); }
      ${seg}%           { opacity: 0; top: 100%; transform: translateY(-50%); }
      100%              { opacity: 0; top: 100%; transform: translateY(-50%); }
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      [data-ecosystem] *,
      [data-ecosystem] *::before,
      [data-ecosystem] *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
      }
    }
  `;
}
