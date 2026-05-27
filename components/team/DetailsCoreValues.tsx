import React from "react";

const DetailsCoreValues: React.FC = () => {
  return (
    <section className="lp:py-39! py-20 md:py-28">
      <div className="main-container">
        <div className="space-y-17.5">
          <h2
            data-text-reveal
            className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
          >
            My core values
          </h2>

          <div
            data-opai-animate
            data-delay="0.2"
            className="grid grid-cols-12 items-center gap-x-2 gap-y-2 rounded-3xl bg-[url('/images/opai-35.jpg')] bg-cover bg-center p-2 lg:gap-y-0"
          >
            {/* card one  */}
            <div
              data-opai-animate
              data-delay="0.2"
              className="col-span-12 rounded-[18px] bg-white px-8 py-14 text-center md:col-span-6 lg:col-span-3"
            >
              <h3 className="font-sora text-sora-heading-5 text-background-13/90 font-normal">
                Collaboration
              </h3>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                Increase open and click rates with AI-optimized content
              </p>
            </div>
            {/* card two  */}
            <div
              data-opai-animate
              data-delay="0.3"
              className="col-span-12 rounded-[18px] bg-white px-8 py-14 text-center md:col-span-6 lg:col-span-3"
            >
              <h3 className="font-sora text-sora-heading-5 text-background-13/90 font-normal">
                Integrity
              </h3>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                We build trust through transparency and accountability.
              </p>
            </div>
            {/* card three  */}
            <div
              data-opai-animate
              data-delay="0.4"
              className="col-span-12 rounded-[18px] bg-white px-8 py-14 text-center md:col-span-6 lg:col-span-3"
            >
              <h3 className="font-sora text-sora-heading-5 text-background-13/90 font-normal">
                Innovation
              </h3>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                Pushing boundaries to create AI solutions that drive real change.
              </p>
            </div>
            {/* card four  */}
            <div
              data-opai-animate
              data-delay="0.5"
              className="col-span-12 rounded-[18px] bg-white px-8 py-14 text-center md:col-span-6 lg:col-span-3"
            >
              <h3 className="font-sora text-sora-heading-5 text-background-13/90 font-normal">
                Sustainability
              </h3>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                We prioritize long-term value for businesses, people, and the planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsCoreValues;
