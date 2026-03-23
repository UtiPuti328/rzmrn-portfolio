"use client";

import { useState, useRef, useEffect } from "react";



import { useI18n } from "@/i18n/provider";

export default function TerminalProof() {
  const { dict } = useI18n();
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const STATS = [
    { value: "1,000+", label: dict.terminal.projectsShipped, key: "projects_shipped" },
    { value: "298", label: dict.terminal.fiverrDeliveries, key: "fiverr_deliveries" },
    { value: "150+", label: dict.terminal.fiveStarReviews, key: "five_star_reviews" },
    { value: "15+", label: dict.terminal.yearsActive, key: "years_active" },
  ];

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
              <span className="text-text-primary">cat {dict.terminal.file || "stats.json"}</span>
            </div>
            {STATS.map((stat) => (
              <div key={stat.key} className="flex items-start gap-2">
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
              {isExpanded ? "exit" : `./${dict.terminal.details}`}
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
                  <div key={stat.key}>
                    <p className="font-mono text-xl font-bold tracking-tight text-text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-text-muted/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 border-t border-border/20 pt-3">
                <a
                  href="https://www.fiverr.com/maksbeiev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center gap-2.5 rounded-md border border-[#1DBF73]/20 bg-[#1DBF73]/5 px-3 py-2 font-mono text-[12px] text-[#1DBF73]/70 transition-all duration-200 hover:border-[#1DBF73]/50 hover:bg-[#1DBF73]/10 hover:text-[#1DBF73]"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.427c-.639 0-1.064.242-1.427.806V12h-1.387v7.547h1.427v-4.02c0-1.145.49-1.773 1.468-1.773h1.346V11.883zm-5.42 0h-1.394v-.589c0-.605.243-.847.847-.847h.588V9h-.75c-1.387 0-2.132.71-2.132 2.05v.832h-.83v1.351h.83v6.314h1.427v-6.314h1.414v-1.35zM9.662 13.27c.589 0 1.024.31 1.197.918H8.465c.173-.608.657-.918 1.197-.918zm2.49 2.077c0-.104.007-.208.007-.311 0-1.9-1.094-3.134-2.76-3.134-1.657 0-2.77 1.262-2.77 3.148 0 1.935 1.14 3.134 2.911 3.134.97 0 1.768-.311 2.398-.953l-.839-.88c-.45.45-.935.658-1.558.658-.952 0-1.54-.554-1.643-1.51l.003-.152h4.251zm-10.65 4.2h1.427V9.967H1.502v9.58zM.507 8.4a.995.995 0 1 0 .001-1.99A.995.995 0 0 0 .507 8.4z"/>
                  </svg>
                  <span>fiverr.com/maksbeiev</span>
                  <span className="ml-auto transition-transform duration-200 group-hover:translate-x-0.5 opacity-50">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
