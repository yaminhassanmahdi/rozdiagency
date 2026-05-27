import React from "react";
import BlogCard from "../shared/BlogCard";
import LinkPrimary from "../shared/LinkPrimary";

const Blog = () => {
  return (
    <section className="py-[80px] md:py-[120px] xl:py-[156px]" aria-labelledby="blog-heading">
      <div className="main-container">
        <div className="space-y-13 md:space-y-[70px]">
          <h2
            data-text-reveal
            className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
          >
            Stay informed, stay ahead
          </h2>

          {/* blogs */}
          <div className="grid grid-cols-12 items-center justify-center gap-4 lg:gap-x-2">
            {/* blog 01 */}
            <div data-opai-animate data-delay="0.2" className="col-span-12 md:col-span-6 lg:col-span-4">
              <BlogCard
                image="/images/opai-img-313.png"
                date="July 5, 2025"
                badge1="Press"
                badge2="Blog"
                title="5 Ways AI is revolutionizing small businesses"
                alt="5 Ways AI is revolutionizing small businesses"
              />
            </div>

            {/* blog 02 */}
            <div data-opai-animate data-delay="0.3" className="col-span-12 md:col-span-6 lg:col-span-4">
              <BlogCard
                image="/images/opai-img-314.png"
                date="July 6, 2025"
                badge1="Press"
                badge2="Blog"
                title="Predictive analytics what it is and why you need It"
                alt="Predictive analytics what it is and why you need It"
              />
            </div>

            {/* blog 03 */}
            <div data-opai-animate data-delay="0.4" className="col-span-12 md:col-span-6 lg:col-span-4">
              <BlogCard
                image="/images/opai-img-315.png"
                date="July 7, 2025"
                badge1="Press"
                badge2="Blog"
                title="How to Integrate AI Seamlessly Into Your Existing Systems"
                alt="How to Integrate AI Seamlessly Into Your Existing Systems"
              />
            </div>
          </div>
        </div>
        <div data-opai-animate data-delay="0.5" className="mt-[76px] text-center">
          <LinkPrimary
            buttonText="Read more articles"
            href="/blog"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
