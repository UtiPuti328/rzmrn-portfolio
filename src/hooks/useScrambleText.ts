"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const CHARSET = "!<>-_\\/[]{}—=+*^?#_01";
const FRAME_INTERVAL = 1000 / 30; // 30fps throttle

function expoOut(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

interface UseScrambleTextOptions {
  text: string;
  duration?: number;
  delay?: number;
  autoStart?: boolean;
}

interface UseScrambleTextReturn {
  displayText: string;
  isScrambling: boolean;
  trigger: () => void;
  hasCompleted: boolean;
}

export function useScrambleText({
  text,
  duration = 1000,
  delay = 0,
  autoStart = true,
}: UseScrambleTextOptions): UseScrambleTextReturn {
  const [displayText, setDisplayText] = useState(autoStart ? "" : text);
  const [isScrambling, setIsScrambling] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(!autoStart);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const lastFrameRef = useRef<number>(0);
  const hasStartedRef = useRef(false);

  const scramble = useCallback(() => {
    if (hasStartedRef.current && !autoStart) return;
    hasStartedRef.current = true;
    setIsScrambling(true);
    setHasCompleted(false);

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;

      // Throttle to 30fps
      if (timestamp - lastFrameRef.current < FRAME_INTERVAL) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameRef.current = timestamp;

      if (elapsed >= duration) {
        setDisplayText(text);
        setIsScrambling(false);
        setHasCompleted(true);
        return;
      }

      const progress = expoOut(elapsed / duration);
      const revealedCount = Math.floor(progress * text.length);

      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          result += " ";
        } else if (i < revealedCount) {
          result += text[i];
        } else {
          result += CHARSET[Math.floor(Math.random() * CHARSET.length)];
        }
      }

      setDisplayText(result);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [text, duration, autoStart]);

  const trigger = useCallback(() => {
    // Reset state for re-trigger
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startTimeRef.current = 0;
    lastFrameRef.current = 0;
    hasStartedRef.current = false;
    scramble();
  }, [scramble]);

  useEffect(() => {
    if (!autoStart) return;

    const timeoutId = setTimeout(() => {
      scramble();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [autoStart, delay, scramble]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { displayText, isScrambling, trigger, hasCompleted };
}
