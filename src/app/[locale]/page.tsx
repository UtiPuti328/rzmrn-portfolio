import Hero from "@/components/sections/home/Hero";
import WorkShowcase from "@/components/sections/home/WorkShowcase";
import Stats from "@/components/sections/home/Stats";
import AboutTeaser from "@/components/sections/home/AboutTeaser";
import HomeCTA from "@/components/sections/home/HomeCTA";
import Divider from "@/components/ui/Divider";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <WorkShowcase />
      <Divider />
      <Stats />
      <Divider />
      <AboutTeaser />
      <Divider />
      <HomeCTA />
    </>
  );
}
