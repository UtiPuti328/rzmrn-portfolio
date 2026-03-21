import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Parent-level lockfiles confuse Next's root inference in this workspace.
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
