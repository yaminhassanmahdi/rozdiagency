import Hero from "@/components/blog/Hero";
import FamousBlog from "@/components/blog/FamousBlog";
import CTA from "@/components/shared/CTA";

export default function BlogPage() {
  return (
    <main className="bg-background-8">
      <Hero />
      <FamousBlog />
      <CTA />
    </main>
  );
}
