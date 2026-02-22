"use client";

import { useEffect, useRef } from "react";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export default function StaggerChildren({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = container.querySelectorAll("[data-stagger-item]");
          items.forEach((item, i) => {
            const el = item as HTMLElement;
            const itemDelay = delay + i * stagger;
            setTimeout(() => {
              el.style.transition =
                "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, itemDelay * 1000);
          });
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [stagger, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-stagger-item
      className={className}
      style={{ opacity: 0, transform: "translateY(30px)" }}
    >
      {children}
    </div>
  );
}
