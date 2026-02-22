"use client";

import { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useScrollProgress(options?: {
  start?: string;
  end?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: options?.start ?? "top bottom",
      end: options?.end ?? "bottom top",
      onUpdate: (self) => setProgress(self.progress),
    });

    return () => {
      trigger.kill();
    };
  }, [options?.start, options?.end]);

  // suppress unused var warning — gsap is imported for side effects
  void gsap;

  return { ref, progress };
}
