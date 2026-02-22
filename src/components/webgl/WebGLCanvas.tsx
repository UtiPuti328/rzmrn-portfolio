"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function WebGLCanvas() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const dotPosRef = useRef({ x: 0, y: 0 });
  const glowPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let raf: number;
    const animate = () => {
      const dot = dotRef.current;
      const glow = glowRef.current;
      if (!dot || !glow) {
        raf = requestAnimationFrame(animate);
        return;
      }

      // Dot follows tightly (lerp 0.15)
      dotPosRef.current.x += (mouseRef.current.x - dotPosRef.current.x) * 0.15;
      dotPosRef.current.y += (mouseRef.current.y - dotPosRef.current.y) * 0.15;

      // Glow trails behind (lerp 0.08)
      glowPosRef.current.x += (mouseRef.current.x - glowPosRef.current.x) * 0.08;
      glowPosRef.current.y += (mouseRef.current.y - glowPosRef.current.y) * 0.08;

      dot.style.transform = `translate(${dotPosRef.current.x - 4}px, ${dotPosRef.current.y - 4}px)`;
      glow.style.transform = `translate(${glowPosRef.current.x - 20}px, ${glowPosRef.current.y - 20}px)`;

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30" aria-hidden="true">
      {/* Glow trail */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 h-10 w-10 rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 h-2 w-2 rounded-full bg-accent/80 will-change-transform"
        style={{
          boxShadow: "0 0 6px 1px rgba(59,130,246,0.4)",
        }}
      />
    </div>
  );
}
