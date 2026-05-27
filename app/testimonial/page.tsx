import Testimonial from "@/components/home/Testimonial";
import ReviewCards from "@/components/pricing/ReviewCards";
import CTA from "@/components/shared/CTA";

export default function TestimonialPage() {
  return (
    <main className="bg-background-8">
      <div className="pt-28 md:pt-39">
        <section className="py-28 md:py-39">
          <div className="main-container">
            <div className="space-y-14">
              <h2
                data-text-reveal
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
              >
                Numbers speak louder than words
              </h2>

              <div className="grid grid-cols-12 items-center gap-x-2 gap-y-2 lg:gap-y-0">
                <div
                  data-opai-animate
                  data-delay="0.2"
                  className="col-span-12 space-y-2.5 rounded-3xl bg-white px-8 py-14 text-center md:col-span-6 lg:col-span-4"
                >
                  <h3 className="font-sora text-sora-heading-5 text-background-13/90 font-normal xl:text-nowrap">
                    Delivered 120+ ai projects
                  </h3>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                    From Neural Networks models to intelligent automation systems, we’ve successfully completed
                  </p>
                </div>
                <div
                  data-opai-animate
                  data-delay="0.3"
                  className="col-span-12 space-y-2.5 rounded-3xl bg-white px-8 py-14 text-center md:col-span-6 lg:col-span-4"
                >
                  <h3 className="font-sora text-sora-heading-5 text-background-13/90 font-normal xl:text-nowrap">
                    98% client satisfaction rate
                  </h3>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                    Our focus on quality, communication, and performance has earned us one of the highest
                  </p>
                </div>
                <div
                  data-opai-animate
                  data-delay="0.4"
                  className="col-span-12 space-y-2.5 rounded-3xl bg-white px-8 py-14 text-center md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-9"
                >
                  <h3 className="font-sora text-sora-heading-5 text-background-13/90 font-normal xl:text-nowrap">
                    Trusted by clients in 15+ countries
                  </h3>
                  <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                    Businesses across the US, UK, Europe, Middle East, and Asia rely on our AI-driven solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ReviewCards />
      <CTA />
    </main>
  );
}
