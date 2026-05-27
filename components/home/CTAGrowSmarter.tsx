import React from "react";
import LinkPrimary from "../shared/LinkPrimary";

const CTAGrowSmarter = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[112px] xl:pt-[100px] border-t border-stroke-4 dark:border-stroke-6 dark:bg-background-5">
      <div className="main-container">
        <div className="text-center max-w-[649px] mx-auto">
          <span data-opai-animate data-delay="0.1" className="badge badge-cyan mb-5">
            {" "}
            Let's start
          </span>
          <h2
            data-opai-animate
            data-delay="0.2"
            className="font-sora text-sora-heading-3 md:text-sora-heading-2 text-background-13/90 dark:text-white/90 font-normal mb-3"
          >
            Ready to grow smarter?
          </h2>
          <p
            data-opai-animate
            data-delay="0.3"
            className="font-inter-tight text-tagline-2 text-background-13/60 dark:text-white/60 font-normal mb-6"
          >
            Let’s make your marketing budget work harder—not bigger. Book your strategy call today
            and take the first step toward predictable growth.
          </p>

          <div data-opai-animate data-delay="0.4" className="flex justify-center">
            <LinkPrimary buttonText="Book your free strategy call" href="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAGrowSmarter;
