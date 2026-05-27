import Hero from "@/components/home/Hero";
import Clients from "@/components/home/Clients";
import Solutions from "@/components/home/Solutions";
import ServicesOverview from "@/components/home/ServicesOverview";
import ApproachSteps from "@/components/home/ApproachSteps";
import TrackRecord from "@/components/home/TrackRecord";
import Experience from "@/components/home/Experience";
import ResultsMarquee from "@/components/home/ResultsMarquee";
import Pricing from "@/components/home/Pricing";
import Testimonial from "@/components/home/Testimonial";
import Blog from "@/components/home/Blog";
import CtaGrowSmarter from "@/components/home/CTAGrowSmarter";
import CTA from "@/components/shared/CTA";

export default function Home() {
  return (
    <main className="bg-background-8">
      <Hero />
      <Clients />
      <Solutions />
      <ServicesOverview />
      <ApproachSteps />
      <TrackRecord />
      <Experience />
      <ResultsMarquee />
      <Pricing />
      <Testimonial />
      <Blog />
      <CtaGrowSmarter />
      <CTA />
    </main>
  );
}
