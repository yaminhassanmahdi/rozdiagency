import Hero from "@/components/team/Hero";
import CoreValues from "@/components/team/CoreValues";
import CTA from "@/components/shared/CTA";

export default function TeamPage() {
  return (
    <main className="bg-background-8">
      <Hero />
      <CoreValues />
      <CTA />
    </main>
  );
}
