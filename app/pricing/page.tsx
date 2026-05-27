import Pricing from "@/components/home/Pricing";
import ReviewCards from "@/components/pricing/ReviewCards";
import CTA from "@/components/shared/CTA";

export default function PricingPage() {
  return (
    <main className="bg-background-8">
      <div className="pt-28 md:pt-39">
        <Pricing />
      </div>
      <ReviewCards />
      <CTA />
    </main>
  );
}
