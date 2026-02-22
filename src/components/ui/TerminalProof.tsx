"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const STATS = [
  { value: "1,000+", label: "Projects Delivered" },
  { value: "298", label: "Fiverr Projects" },
  { value: "150+", label: "5-Star Reviews" },
  { value: "15+", label: "Years in Production" },
];

export default function TerminalProof() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-10 max-w-sm">
      <div className="border border-border bg-surface/60 backdrop-blur-sm">
        {/* Terminal header bar */}
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-500/50" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/50" />
          <span className="h-2 w-2 rounded-full bg-green-500/50" />
          <span className="ml-2 font-mono text-[10px] text-text-muted">
            system.log
          </span>
        </div>

        {/* Main stat line */}
        <div className="px-3 py-2.5">
          <div className="flex items-start gap-2 font-mono text-[11px] leading-relaxed">
            <span className="shrink-0 text-accent">$</span>
            <span className="text-text-secondary">
              // 1,000+ projects shipped. 298 on Fiverr. 150+ five-star ops.
            </span>
          </div>

          {/* Expand toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 font-mono text-[11px] text-text-muted transition-colors duration-300 hover:text-accent"
          >
            [{isExpanded ? "collapse" : "view raw data"} {isExpanded ? "↑" : "↗"}]
          </button>
        </div>

        {/* Expanded stats panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-border px-3 py-3">
                <div className="grid grid-cols-2 gap-3">
                  {STATS.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-mono text-lg font-bold text-text-primary">
                        {stat.value}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 border-t border-border pt-2">
                  <a
                    href="https://www.fiverr.com/maksbeiev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-text-muted transition-colors duration-300 hover:text-accent"
                  >
                    <span className="text-accent">→</span> fiverr.com/maksbeiev
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
