"use client";

import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

const directionTransform = {
  up: "translateY(30px)",
  down: "translateY(-30px)",
  left: "translateX(30px)",
  right: "translateX(-30px)",
  none: "none",
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial state
    el.style.opacity = "0";
    el.style.transform = directionTransform[direction];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay, then animate
          const timer = setTimeout(() => {
            el.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`;
            el.style.opacity = "1";
            el.style.transform = "translateY(0) translateX(0)";
          }, delay * 1000);

          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { rootMargin: "-80px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
