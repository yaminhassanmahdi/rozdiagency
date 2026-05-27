import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="lp:pb-44! pt-28 pb-20 md:pt-39 md:pb-25 lg:pb-30">
      <div className="main-container">
        <div className="space-y-[72px]">
          <div className="space-y-3 text-center">
            <h2
              data-text-reveal
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
            >
              How Rozdi Agency began
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[490px] font-normal"
            >
              Rozdi Agency was founded to turn AI into practical solutions for real business challenges,
              intuitive tools that make a lasting impact.
            </p>
          </div>

          <div
            className="lp:gap-x-22.5! flex flex-col justify-center gap-x-8 gap-y-8 lg:flex-row lg:gap-y-0 xl:gap-x-14"
          >
            {/* img */}
            <figure
              data-opai-animate
              data-delay="0.3"
              data-instant
              className="relative mx-auto h-[500px] overflow-hidden rounded-lg lg:mx-0 lg:h-[564px] lg:w-full lg:max-w-[380px] xl:h-[500px]"
            >
              {/* left gradient */}
              <figure
                data-opai-animate
                data-delay="0.4"
                data-instant
                data-direction="left"
                data-offset="100"
                className="pointer-events-none absolute top-[-292px] left-[-162px] size-[468px] rotate-353 select-none"
              >
                <img src="/images/opai-6.png" alt="about-hero-img" className="size-full object-cover" />
              </figure>

              <img src="/images/opai-img-25.png" alt="about-hero-img" className="size-full object-cover" />

              {/* bottom blur */}
              <div
                data-progressive-blur-effect
                data-intensity="250"
                data-position="bottom"
                className="h-[150px] rounded-b-lg bg-[linear-gradient(180deg,rgba(17,20,29,0.04)_0%,rgba(17,20,29,0.04)_100%)]"
              ></div>
            </figure>

            <div
              className="lp:gap-x-22.5! flex flex-col items-end gap-x-8 gap-y-8 overflow-hidden md:flex-row md:gap-y-0 lg:flex-col lg:items-start lg:gap-y-4 xl:w-full xl:flex-row xl:items-end xl:gap-x-14 xl:gap-y-0"
            >
              {/* text */}
              <div data-opai-animate data-delay="0.4" className="space-y-8">
                <h3
                  className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
                >
                  Awards
                </h3>

                <ul className="space-y-4">
                  <li
                    className="font-inter-tight text-tagline-1 text-background-13/60 flex items-center gap-x-1 font-normal lg:text-nowrap"
                  >
                    <span className="bg-background-13 inline-block size-1.5 rounded-full"></span> AI
                    Excellence Awards
                  </li>
                  <li
                    className="font-inter-tight text-tagline-1 text-background-13/60 flex items-center gap-x-1 font-normal lg:text-nowrap"
                  >
                    <span className="bg-background-13 inline-block size-1.5 rounded-full"></span> Innovative
                    UI Design Awards for AI Creatives
                  </li>
                  <li
                    className="font-inter-tight text-tagline-1 text-background-13/60 flex items-center gap-x-1 font-normal lg:text-nowrap"
                  >
                    <span className="bg-background-13 inline-block size-1.5 rounded-full"></span> Award for
                    Minimalist AI Design
                  </li>
                  <li
                    className="font-inter-tight text-tagline-1 text-background-13/60 flex items-center gap-x-1 font-normal lg:text-nowrap"
                  >
                    <span className="bg-background-13 inline-block size-1.5 rounded-full"></span> Adobe AI
                    Design Achievement Awards
                  </li>
                </ul>
              </div>

              {/* success card */}
              <div
                data-opai-animate
                data-delay="0.5"
                className="bg-background-5 relative w-full space-y-13 overflow-hidden rounded-lg p-5 md:max-w-[300px] md:p-12 lg:max-w-[367px]"
              >
                {/* right gradient */}
                <figure
                  data-opai-animate
                  data-delay="0.6"
                  data-direction="right"
                  data-offset="100"
                  className="pointer-events-none absolute top-[-99%] right-[-48%] h-[300px] w-[330px] select-none md:top-[-70%] lg:top-[-64%] lg:right-[-31%]"
                >
                  <img src="/images/opai-1.png" alt="about-hero-img" />
                </figure>
                <span className="ns-shape-23 inline-block text-[56px] text-white/90"> </span>
                <div className="relative z-10 space-y-3">
                  <p className="font-inter-tight text-tagline-1 font-normal text-white/90">
                    Customer satisfaction rate
                  </p>
                  <h3
                    className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 flex items-center text-white/90"
                  >
                    <span
                      data-counter
                      data-number="95"
                      data-speed="1400"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="1.9"
                    >95</span>%
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
