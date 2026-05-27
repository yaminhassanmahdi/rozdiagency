import React from "react";
import LinkPrimary from "../shared/LinkPrimary";

const ApproachSteps = () => {
  return (
    <section
      className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px] -mt-[160px] sm:-mt-0"
      aria-label="Application Steps"
    >
      <div className="main-container">
        <div className="space-y-14">
          <div
            data-opai-animate
            data-delay="0.1"
            className="flex items-start xl:items-center flex-col md:flex-row gap-8"
          >
            {/* step one */}
            <div className="space-y-3 max-w-[388px] md:w-full" role="region" aria-label="Step 1">
              {/* progress bar */}
              <div
                className="w-full bg-stroke-3/20 dark:bg-stroke-7/30 h-1 rounded-full relative overflow-hidden"
              >
                <div className="progress-line w-[30%] bg-opai-cyan rounded-full h-full absolute left-0"></div>
              </div>
              {/* number */}
              <p className="font-ibm-plex-mono text-tagline-2 text-opai-cyan font-medium">01</p>

              {/* text */}
              <div className="space-y-2">
                <h2 className="font-sora text-sora-heading-5 text-background-13 font-normal">Deep audit & discovery.</h2>
                <p className="font-inter-tight text-tagline-2 text-background-13/70 font-normal">
                  We assess your current digital footprint and uncover hidden opportunities.
                </p>
              </div>
            </div>

            {/* step two */}
            <div className="space-y-3 max-w-[388px] md:w-full" role="region" aria-label="Step 2">
              {/* progress bar */}
              <div
                className="w-full bg-stroke-3/20 dark:bg-stroke-7/30 h-1 rounded-full relative overflow-hidden"
              >
                <div className="progress-line w-[60%] bg-opai-cyan rounded-full h-full absolute left-0"></div>
              </div>
              {/* number */}
              <p className="font-ibm-plex-mono text-tagline-2 text-opai-cyan font-medium">02</p>

              {/* text */}
              <div className="space-y-2">
                <h2 className="font-sora text-sora-heading-5 text-background-13 font-normal">Campaign planning & execution.</h2>
                <p className="font-inter-tight text-tagline-2 text-background-13/70 font-normal">
                  Strategy-first campaigns tailored to your goals, industry, and audience.
                </p>
              </div>
            </div>

            {/* step three */}
            <div className="space-y-3 max-w-[388px] md:w-full" role="region" aria-label="Step 3">
              {/* progress bar */}
              <div
                className="w-full bg-stroke-3/20 dark:bg-stroke-7/30 h-1 rounded-full relative overflow-hidden"
              >
                <div className="progress-line w-[100%] bg-opai-cyan rounded-full h-full absolute left-0"></div>
              </div>
              {/* number */}
              <p className="font-ibm-plex-mono text-tagline-2 text-opai-cyan font-medium">03</p>

              {/* text */}
              <div className="space-y-2">
                <h2 className="font-sora text-sora-heading-5 text-background-13 font-normal">Weekly optimization cycles.</h2>
                <p className="font-inter-tight text-tagline-2 text-background-13/70 font-normal">
                  We test, iterate, and adjust for maximum performance every week.
                </p>
              </div>
            </div>
          </div>

          <div data-opai-animate data-delay="0.2" className="text-start">
            <LinkPrimary
              buttonText="Learn about our approach"
              href="/about"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSteps;
