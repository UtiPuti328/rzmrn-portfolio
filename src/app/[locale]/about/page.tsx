import { createMetadata } from "@/lib/metadata";
import Bio from "@/components/sections/about/Bio";
import Skills from "@/components/sections/about/Skills";
import Philosophy from "@/components/sections/about/Philosophy";

export const metadata = createMetadata({
  title: "About",
  description:
    "Director of Post-Production & Motion Designer. Building systems, not just cutting video — from EdTech productions to automotive commercials, with AI-driven workflows.",
  path: "/about",
  ogImage: "/og/about.jpg",
});

export default function AboutPage() {
  return (
    <>
      <Bio />
      <Skills />
      <Philosophy />
    </>
  );
}
