"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface LogEntry {
  time: string;
  agent: string;
  action: string;
}

const LOG_ENTRIES: LogEntry[] = [
  { time: "03:14:22", agent: "Dispatcher", action: "Routing task: market-analysis-daily" },
  { time: "03:14:25", agent: "MiniMax M2.5", action: "Executing market analysis..." },
  { time: "03:14:31", agent: "Gemini 3", action: "Cross-referencing 3 sources" },
  { time: "03:14:45", agent: "Claude Code", action: "Validating output schema" },
  { time: "03:14:52", agent: "Dispatcher", action: "Task complete → routing: content-digest" },
  { time: "03:15:01", agent: "MiniMax M2.5", action: "Scanning 60+ RSS feeds..." },
  { time: "03:15:18", agent: "mem0", action: "Loading cross-session context" },
  { time: "03:15:25", agent: "Gemini 3", action: "Adversarial review: confidence 0.94" },
  { time: "03:15:41", agent: "Telegram Bot", action: "Delivering digest to user" },
  { time: "03:15:55", agent: "Dispatcher", action: "Queue empty. Sleeping until next cron..." },
];

/** Minimum typing delay per character in ms */
const CHAR_DELAY_MIN = 40;
/** Maximum typing delay per character in ms */
const CHAR_DELAY_MAX = 60;
/** Pause between finishing one line and starting the next */
const LINE_PAUSE_MS = 300;
/** Pause after all entries before clearing and restarting */
const RESTART_PAUSE_MS = 3000;

function formatLine(entry: LogEntry): string {
  return `[${entry.time}] ${entry.agent} → ${entry.action}`;
}

/**
 * Returns the character indices where the agent name sits in the formatted line.
 * Format: `[HH:MM:SS] AgentName → action`
 * The prefix `[03:14:22] ` is always 12 characters.
 */
function getAgentRange(entry: LogEntry): { start: number; end: number } {
  const start = 12;
  const end = start + entry.agent.length;
  return { start, end };
}

interface TerminalLineProps {
  entry: LogEntry;
  text: string;
}

function TerminalLine({ entry, text }: TerminalLineProps) {
  const full = formatLine(entry);
  const { start, end } = getAgentRange(entry);

  const beforeAgent = text.slice(0, Math.min(text.length, start));
  const agentText = text.length > start ? text.slice(start, Math.min(text.length, end)) : "";
  const afterAgent = text.length > end ? text.slice(end) : "";

  const isComplete = text.length === full.length;

  return (
    <div
      className="whitespace-pre font-mono text-sm leading-relaxed md:text-[13px]"
      role="log"
      aria-live={isComplete ? "polite" : "off"}
    >
      <span style={{ color: "#00FFAA" }}>{beforeAgent}</span>
      <span style={{ color: "#EDEDED" }}>{agentText}</span>
      <span style={{ color: "#00FFAA" }}>{afterAgent}</span>
    </div>
  );
}

function CompletedLine({ entry }: { entry: LogEntry }) {
  const full = formatLine(entry);
  const { start, end } = getAgentRange(entry);

  return (
    <div className="whitespace-pre font-mono text-sm leading-relaxed md:text-[13px]">
      <span style={{ color: "#00FFAA" }}>{full.slice(0, start)}</span>
      <span style={{ color: "#EDEDED" }}>{full.slice(start, end)}</span>
      <span style={{ color: "#00FFAA" }}>{full.slice(end)}</span>
    </div>
  );
}

interface TypingTerminalProps {
  className?: string;
}

export function TypingTerminal({ className }: TypingTerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  // Animation state
  const [completedLines, setCompletedLines] = useState<LogEntry[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs for animation control (avoid stale closures in setTimeout chains)
  const isVisibleRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animatingRef = useRef(false);

  // Store the typing function in a ref so setTimeout callbacks always
  // call the latest version without a self-referencing useCallback.
  const typeCharRef = useRef<(entryIndex: number, charIndex: number) => void>(
    () => undefined
  );

  const clearPendingTimeout = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const resetState = useCallback(() => {
    setCompletedLines([]);
    setCurrentLineIndex(0);
    setCurrentText("");
  }, []);

  // Auto-scroll to bottom whenever content changes
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [completedLines, currentText]);

  // Keep the typing function ref in sync.
  // This runs on every render so the closure is always fresh.
  useEffect(() => {
    typeCharRef.current = (entryIndex: number, charIndex: number) => {
      if (!isVisibleRef.current) {
        animatingRef.current = false;
        return;
      }

      const entry = LOG_ENTRIES[entryIndex];
      if (!entry) return;

      const fullLine = formatLine(entry);

      if (charIndex > fullLine.length) return;

      setCurrentText(fullLine.slice(0, charIndex));

      if (charIndex < fullLine.length) {
        // Type next character with randomized delay
        const delay =
          CHAR_DELAY_MIN + Math.random() * (CHAR_DELAY_MAX - CHAR_DELAY_MIN);
        timeoutRef.current = setTimeout(() => {
          typeCharRef.current(entryIndex, charIndex + 1);
        }, delay);
      } else {
        // Line complete — brief pause then advance
        timeoutRef.current = setTimeout(() => {
          setCompletedLines((prev) => [...prev, entry]);
          setCurrentText("");

          const nextIndex = entryIndex + 1;

          if (nextIndex < LOG_ENTRIES.length) {
            setCurrentLineIndex(nextIndex);
            typeCharRef.current(nextIndex, 0);
          } else {
            // All entries done — pause, clear, restart
            timeoutRef.current = setTimeout(() => {
              setCompletedLines([]);
              setCurrentLineIndex(0);
              setCurrentText("");
              typeCharRef.current(0, 0);
            }, RESTART_PAUSE_MS);
          }
        }, LINE_PAUSE_MS);
      }
    };
  });

  const startAnimation = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setIsAnimating(true);
    resetState();
    // Kick off via the ref — always points to the latest closure
    typeCharRef.current(0, 0);
  }, [resetState]);

  const stopAnimation = useCallback(() => {
    animatingRef.current = false;
    setIsAnimating(false);
    clearPendingTimeout();
  }, [clearPendingTimeout]);

  // IntersectionObserver: start when visible, stop when hidden
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([observerEntry]) => {
        isVisibleRef.current = observerEntry.isIntersecting;

        if (observerEntry.isIntersecting) {
          if (!animatingRef.current) {
            startAnimation();
          }
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearPendingTimeout();
    };
  }, [startAnimation, stopAnimation, clearPendingTimeout]);

  // Reduced motion: show all lines instantly, skip animation
  if (prefersReducedMotion) {
    return (
      <section
        ref={containerRef}
        className={cn(
          "relative overflow-hidden rounded-lg border font-mono",
          className
        )}
        style={{
          backgroundColor: "#000000",
          borderColor: "rgba(0, 255, 170, 0.3)",
        }}
        aria-label="Agent system log"
      >
        <TitleBar />
        <div
          className="h-[250px] overflow-y-auto px-4 py-3 md:h-[300px]"
          style={{ color: "#00FFAA" }}
        >
          {LOG_ENTRIES.map((entry, i) => (
            <CompletedLine key={i} entry={entry} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-lg border font-mono",
        className
      )}
      style={{
        backgroundColor: "#000000",
        borderColor: "rgba(0, 255, 170, 0.3)",
      }}
      aria-label="Agent system log"
    >
      <TitleBar />
      <div
        ref={scrollRef}
        className="h-[250px] overflow-y-hidden px-4 py-3 md:h-[300px]"
        style={{ color: "#00FFAA" }}
      >
        {completedLines.map((entry, i) => (
          <CompletedLine key={`${entry.time}-${i}`} entry={entry} />
        ))}
        {isAnimating && currentText.length > 0 && (
          <TerminalLine
            entry={LOG_ENTRIES[currentLineIndex]!}
            text={currentText}
          />
        )}
        {isAnimating && <BlinkingCursor />}
      </div>
    </section>
  );
}

function TitleBar() {
  return (
    <header
      className="flex items-center gap-2 border-b px-4 py-2.5"
      style={{ borderColor: "rgba(0, 255, 170, 0.3)" }}
    >
      <div className="flex gap-1.5">
        <span
          className="block size-2 rounded-full"
          style={{ backgroundColor: "#FF5F56" }}
          aria-hidden="true"
        />
        <span
          className="block size-2 rounded-full"
          style={{ backgroundColor: "#FFBD2E" }}
          aria-hidden="true"
        />
        <span
          className="block size-2 rounded-full"
          style={{ backgroundColor: "#27C93F" }}
          aria-hidden="true"
        />
      </div>
      <span
        className="ml-2 text-xs tracking-wide"
        style={{ color: "#737373" }}
      >
        system.log
      </span>
    </header>
  );
}

function BlinkingCursor() {
  return (
    <span
      className="inline-block font-mono text-sm"
      style={{
        color: "#00FFAA",
        animation: "terminal-blink 1s step-end infinite",
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes terminal-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      _
    </span>
  );
}
