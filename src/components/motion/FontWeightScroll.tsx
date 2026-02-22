"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface FontWeightScrollProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
  weightFrom?: number;
  weightTo?: number;
}

export default function FontWeightScroll({
  children,
  className,
  as: Tag = "h1",
  weightFrom = 100,
  weightTo = 900,
}: FontWeightScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current.querySelector("[data-weight-target]");
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { fontVariationSettings: `'wght' ${weightFrom}` },
        {
          fontVariationSettings: `'wght' ${weightTo}`,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }, ref.current);

    return () => ctx.revert();
  }, [weightFrom, weightTo]);

  void ScrollTrigger;

  return (
    <div ref={ref}>
      <Tag
        data-weight-target
        className={cn("font-heading", className)}
        style={{ fontVariationSettings: `'wght' ${weightFrom}` }}
      >
        {children}
      </Tag>
    </div>
  );
}
