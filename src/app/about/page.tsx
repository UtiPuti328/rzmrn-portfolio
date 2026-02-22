import { createMetadata } from "@/lib/metadata";
import Bio from "@/components/sections/about/Bio";
import Skills from "@/components/sections/about/Skills";
import Philosophy from "@/components/sections/about/Philosophy";

export const metadata = createMetadata({
  title: "About",
  description:
    "Director of Post-Production & Motion Designer with a passion for cinematic storytelling and visual experimentation.",
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
