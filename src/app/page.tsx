import Hero from "@/components/sections/home/Hero";
import ProjectsGrid from "@/components/sections/home/ProjectsGrid";
import AboutTeaser from "@/components/sections/home/AboutTeaser";
import HomeCTA from "@/components/sections/home/HomeCTA";
import Divider from "@/components/ui/Divider";
import TerminalProof from "@/components/ui/TerminalProof";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <ProjectsGrid />
      <Divider />
      <AboutTeaser />
      <Divider />
      <HomeCTA />
      <TerminalProof />
    </>
  );
}
