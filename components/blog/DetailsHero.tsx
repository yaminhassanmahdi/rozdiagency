import React from "react";
import SocialIconsBlack from "../shared/SocialIconsBlack";

const DetailsHero: React.FC = () => {
  return (
    <section className="pt-28 pb-13 md:pt-39 md:pb-[70px]">
      <div className="main-container">
        <div
          data-opai-animate
          data-delay="0.1"
          className="flex flex-col items-center justify-center gap-x-12.5 gap-y-12.5 overflow-hidden rounded-2xl bg-white p-4 sm:rounded-3xl sm:p-6 lg:flex-row lg:gap-y-0 xl:gap-x-[72px]"
        >
          <div
            data-opai-animate
            data-delay="0.2"
            data-direction="left"
            data-offset="100"
            className="flex h-[700px] w-full flex-col justify-between md:h-[500px] lg:h-[650px] xl:h-[582px]"
          >
            <div className="space-y-3">
              <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal">
                How Neural Networks mimic the human brain
              </h2>

              <div className="space-y-6">
                <p className="text-tagline-2 text-background-13/60 font-inter-tight font-normal">
                  Neural Networks, a cornerstone of modern artificial intelligence, are designed to
                  replicate the way the human brain processes information. Just as neurons in our
                  brain communicate through complex networks of synapses, artificial Neural Networks
                  consist of interconnected nodes that transmit signals and learn patterns from vast
                  amounts of data. These networks excel at recognizing patterns, making predictions,
                  and solving problems that traditional algorithms struggle with.
                </p>

                <p className="text-tagline-2 text-background-13/60 font-inter-tight font-normal">
                  By mimicking the human brain’s ability to learn and adapt, Neural Networks can
                  improve over time, refining their outputs with experience.
                </p>
              </div>
            </div>

            {/* user info */}
            <div className="space-y-4">
              <div className="flex items-center gap-x-3">
                <figure className="size-12 overflow-hidden rounded-full">
                  <img
                    src="/images/opai-avatar-img-05.png"
                    alt="user-img"
                    className="size-full object-cover"
                  />
                </figure>

                <div>
                  <p className="font-inter-tight text-tagline-3 text-background-13 font-normal">
                    Noah Brown
                  </p>
                  <p className="text-tagline-3 text-background-13/60 font-inter-tight flex items-center gap-x-[5px] font-normal">
                    <span>30 November 2025</span> <span>.</span> <span>5 min read</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-inter-tight text-tagline-2 text-background-13/90 font-medium">
                  Share this post
                </h3>

                <div>
                  <SocialIconsBlack />
                </div>
              </div>
            </div>
          </div>

          <figure
            data-opai-animate
            data-delay="0.3"
            data-direction="right"
            data-offset="100"
            className="h-[450px] w-full overflow-hidden rounded-xl md:h-[500px] lg:h-[650px] xl:h-[582px]"
          >
            <img
              src="/images/opai-img-21.png"
              alt="blog-details-hero-img"
              className="size-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default DetailsHero;
