import React from "react";
import BlogCard from "../shared/BlogCard";

const DetailsRelatedBlog: React.FC = () => {
  return (
    <section className="lp:py-39! py-20 md:py-28">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="space-y-3 text-center">
            <h2
              data-text-reveal
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
            >
              Related blog
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-2 text-background-13/60 font-normal"
            >
              5 AI Tools Every Business Needs to Streamline Operations
            </p>
          </div>

          {/* cards */}
          <div className="grid grid-cols-12 items-center justify-center gap-y-4 sm:gap-4">
            {/* card one */}
            <div data-opai-animate data-delay="0.3" className="col-span-12 md:col-span-6">
              <BlogCard
                image="/images/opai-img-16.png"
                date="July 5, 2025"
                imgClass="!h-[370px]"
                badge1="Press"
                badge2="Blog"
                title="5 Ways AI is revolutionizing small businesses"
                alt="5 Ways AI is revolutionizing small businesses"
              />
            </div>
            {/* card two */}
            <div data-opai-animate data-delay="0.3" className="col-span-12 md:col-span-6">
              <BlogCard
                image="/images/opai-img-18.png"
                date="July 5, 2025"
                imgClass="!h-[370px]"
                badge1="Press"
                badge2="Blog"
                title="5 Ways AI is revolutionizing small businesses"
                alt="5 Ways AI is revolutionizing small businesses"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsRelatedBlog;
