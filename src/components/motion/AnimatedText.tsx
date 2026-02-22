"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface AnimatedTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  animation?: "fade-up" | "chars" | "words";
  delay?: number;
}

export default function AnimatedText({
  children,
  className,
  as: Tag = "p",
  animation = "fade-up",
  delay = 0,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const ctx = gsap.context(() => {
      if (animation === "fade-up") {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      } else if (animation === "words") {
        const words = children.split(" ");
        el.innerHTML = words
          .map((w) => `<span class="inline-block overflow-hidden"><span class="animated-word inline-block">${w}</span></span>`)
          .join(" ");

        gsap.fromTo(
          el.querySelectorAll(".animated-word"),
          { y: "100%" },
          {
            y: "0%",
            duration: 0.6,
            stagger: 0.04,
            delay,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      } else if (animation === "chars") {
        const chars = children.split("");
        el.innerHTML = chars
          .map((c) =>
            c === " "
              ? " "
              : `<span class="inline-block overflow-hidden"><span class="animated-char inline-block">${c}</span></span>`
          )
          .join("");

        gsap.fromTo(
          el.querySelectorAll(".animated-char"),
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.4,
            stagger: 0.02,
            delay,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [children, animation, delay]);

  void ScrollTrigger;

  return (
    <div ref={containerRef}>
      <Tag className={className}>{children}</Tag>
    </div>
  );
}
