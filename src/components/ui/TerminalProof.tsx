"use client";

import { useState, useRef, useEffect } from "react";

const STATS = [
  { value: "1,000+", label: "Projects Shipped" },
  { value: "298", label: "Fiverr Deliveries" },
  { value: "150+", label: "5-Star Reviews" },
  { value: "15+", label: "Years Active" },
];

export default function TerminalProof() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const toggle = () => setIsExpanded((prev) => !prev);

  return (
    <div className="w-full md:w-[420px]">
      <div className="overflow-hidden rounded-lg border border-border/60 bg-[#0d0d0d]">
        {/* macOS title bar */}
        <button
          onClick={toggle}
          className="group flex w-full cursor-pointer items-center gap-2 border-b border-border/40 bg-[#1a1a1a] px-4 py-2.5 transition-colors hover:bg-[#222]"
          aria-label="Toggle details"
        >
          <span className="h-3 w-3 rounded-full bg-[#ff5f57] transition group-hover:brightness-125" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e] transition group-hover:brightness-125" />
          <span className="h-3 w-3 rounded-full bg-[#28c840] transition group-hover:brightness-125" />
          <span className="ml-3 font-mono text-[11px] text-text-muted/50">
            system.log
          </span>
          <span className="ml-auto font-mono text-[11px] text-text-muted/30 transition-colors group-hover:text-accent/60">
            {isExpanded ? "▲" : "▼"}
          </span>
        </button>

        {/* Terminal body — compact stats */}
        <div className="px-4 py-3">
          <div className="space-y-1 font-mono text-[12px] leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="shrink-0 select-none text-accent">$</span>
              <span className="text-text-primary">cat stats.json</span>
            </div>
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-start gap-2">
                <span className="shrink-0 select-none text-accent/40">{">"}</span>
                <span className="text-text-muted">
                  {stat.label.toLowerCase().replace(/ /g, "_")}:{" "}
                  <span className="text-text-secondary">{stat.value}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Toggle link */}
          <button
            onClick={toggle}
            className="mt-3 flex items-center gap-2 font-mono text-[12px] text-accent/70 transition-colors duration-200 hover:text-accent"
          >
            <span>$</span>
            <span className="underline decoration-accent/30 underline-offset-2">
              {isExpanded ? "exit" : "./details.sh"}
            </span>
            <span className="text-text-muted/40">
              {isExpanded ? "↑" : "↗"}
            </span>
          </button>
        </div>

        {/* Expandable detail panel */}
        <div
          className="overflow-hidden transition-[height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ height: isExpanded ? contentHeight : 0 }}
        >
          <div ref={contentRef}>
            <div className="border-t border-border/30 px-4 py-4">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-xl font-bold tracking-tight text-text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-text-muted/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 border-t border-border/20 pt-2.5">
                <a
                  href="https://www.fiverr.com/maksbeiev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] text-text-muted/60 transition-colors duration-200 hover:text-accent"
                >
                  <span className="text-accent">→</span> fiverr.com/maksbeiev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
