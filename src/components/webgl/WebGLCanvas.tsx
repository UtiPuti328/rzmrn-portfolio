"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const FluidCursor = dynamic(() => import("./FluidCursor"), { ssr: false });

export default function WebGLCanvas() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  if (!isDesktop) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden="true"
    >
      <Canvas
        style={{ pointerEvents: "auto" }}
        gl={{ antialias: false, alpha: true }}
        camera={{ position: [0, 0, 1] }}
      >
        <FluidCursor />
      </Canvas>
    </div>
  );
}
