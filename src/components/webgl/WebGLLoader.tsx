"use client";

import dynamic from "next/dynamic";

const WebGLCanvas = dynamic(() => import("./WebGLCanvas"), { ssr: false });

export default function WebGLLoader() {
  return <WebGLCanvas />;
}
