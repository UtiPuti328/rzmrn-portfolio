"use client";

import { useRef, useEffect, useState } from "react";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const TERMINAL_TEXT =
  "// System Log: 298 projects deployed. 150+ 5-star ops verified.";

export default function TerminalProof() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [visible, setVisible] = useState(false);
  const hasTriggered = useRef(false);

  const { displayText, isScrambling, trigger } = useScrambleText({
    text: TERMINAL_TEXT,
    duration: 1200,
    delay: 0,
    autoStart: false,
  });

  // Show after scrolling past first viewport
  useEffect(() => {
    if (isMobile) return;

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5 && !hasTriggered.current) {
        hasTriggered.current = true;
        setVisible(true);
        trigger();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, trigger]);

  if (isMobile || !visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 max-w-sm cursor-default rounded border border-border bg-surface/90 px-4 py-3 font-mono text-[11px] leading-relaxed backdrop-blur-sm transition-opacity duration-500"
      onMouseEnter={trigger}
      role="complementary"
      aria-label="System status"
    >
      <div className="flex items-start gap-2">
        <span className="shrink-0 text-accent">$</span>
        <span className="text-text-secondary">
          {displayText}
          {isScrambling && (
            <span
              className="ml-0.5 inline-block w-[5px] animate-pulse bg-text-secondary align-middle"
              style={{ height: "0.9em" }}
            />
          )}
        </span>
      </div>
      <div className="mt-2 border-t border-border pt-2">
        <a
          href="https://www.fiverr.com/maksymbeiev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted transition-colors hover:text-accent"
        >
          [View raw data ↗]
        </a>
      </div>
    </div>
  );
}
