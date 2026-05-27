import React from "react";
import ServicesCard from "../shared/ServicesCard";

const TrackRecord: React.FC = () => {
  return (
    <section className="lp:py-39! py-20 md:py-28">
      <div className="main-container">
        <div className="space-y-17.5">
          {/* content  */}
          <div className="space-y-3 text-center">
            <h2
              data-text-reveal
              id="track-record-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal tracking-[-2.4px]"
              itemProp="name"
            >
              Our proven track record
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto text-center font-normal"
              itemProp="description"
            >
              See how we&apos;ve delivered measurable success to our clients.
            </p>
          </div>

          {/* cards  */}
          <div className="flex flex-col items-center gap-x-2 gap-y-4 md:flex-row md:gap-y-0">
            {/* card one  */}
            <div data-opai-animate data-delay="0.3" className="w-full">
              <ServicesCard
                title="Deep Learning"
                description="Train multi-layer Neural Networks for complex pattern recognition and prediction."
                icon="ns-shape-30"
              />
            </div>
            {/* card two  */}
            <div data-opai-animate data-delay="0.4" className="w-full">
              <ServicesCard
                title="Computer Vision"
                description="Image and video analysis powered by convolution Neural Networks (CNNs)."
                icon="ns-shape-31"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
