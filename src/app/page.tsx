import Hero from "@/components/sections/home/Hero";
import ProjectsGrid from "@/components/sections/home/ProjectsGrid";
import Stats from "@/components/sections/home/Stats";
import AboutTeaser from "@/components/sections/home/AboutTeaser";
import HomeCTA from "@/components/sections/home/HomeCTA";
import Divider from "@/components/ui/Divider";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <ProjectsGrid />
      <Divider />
      <Stats />
      <Divider />
      <AboutTeaser />
      <Divider />
      <HomeCTA />
    </>
  );
}
