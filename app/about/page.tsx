import Hero from "@/components/about/Hero";
import Clients from "@/components/home/Clients";
import VisionAndMission from "@/components/about/VisionAndMission";
import VisionVideo from "@/components/about/VisionVideo";
import Team from "@/components/about/Team";
import CTA from "@/components/shared/CTA";

export default function AboutPage() {
  return (
    <main className="bg-background-8">
      <Hero />
      <Clients className="pt-0!" />
      <VisionAndMission />
      <VisionVideo />
      <Team />
      <CTA />
    </main>
  );
}
