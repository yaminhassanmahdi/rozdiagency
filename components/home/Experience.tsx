import React from "react";
import LinkPrimary from "../shared/LinkPrimary";

const Experience = () => {
  return (
    <section
      className="overflow-hidden py-[80px] md:py-[120px] xl:py-[156px]"
      aria-labelledby="experience-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="main-container">
        <div className="space-y-19">
          {/* content */}
          <div className="space-y-3">
            <h2
              data-text-reveal
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal"
            >
              Our capabilities in action
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              id="experience-description"
              className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto text-center font-normal"
            >
              Explore how we combine enterprise-grade technology, custom automation, and data marketing to deliver sustainable growth.
            </p>
          </div>

          {/* cards + btn */}
          <div className="space-y-14" role="list" aria-label="Rozdi capabilities showcase cards">
            {/* card */}
            <div
              data-opai-animate
              data-delay="0.3"
              className="grid grid-cols-12 items-start gap-4 lg:gap-2"
            >
              {/* card one */}
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6"
                role="listitem"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div
                  className="flex h-[300px] flex-col-reverse items-center justify-between rounded-3xl bg-white p-6 xl:flex-row xl:p-8"
                  aria-label="Custom web application development feature card"
                >
                  <h3
                    className="text-background-13/90 font-sora text-sora-heading-5 font-normal tracking-[-0.72px] xl:max-w-[189px]"
                    itemProp="name"
                  >
                    Custom web application development
                  </h3>
                  <figure className="w-full max-w-[230px] overflow-hidden rounded-xl xl:max-w-[262px]">
                    <img
                      src="/images/opai-img-305.png"
                      alt="Custom web application development"
                      className="size-full object-cover"
                      itemProp="image"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </div>
              </div>

              {/* card two */}
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                role="listitem"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div
                  className="flex h-[300px] flex-col justify-between rounded-3xl bg-white px-8 pt-8 pb-8 xl:h-[420px] xl:pt-[111px]"
                  aria-label="Intelligent automation workflows feature card"
                >
                  <div
                    className="relative mx-auto h-[151px] w-[230px]"
                    role="group"
                    aria-label="Intelligent automation workflows visualization"
                  >
                    <figure
                      data-opai-animate
                      data-delay="0.4"
                      className="absolute top-0 left-1/2 z-4 w-[230px] -translate-x-1/2 overflow-hidden rounded-xl"
                    >
                      <img
                        src="/images/opai-img-311.png"
                        alt="Intelligent automation workflows"
                        className="size-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>

                    <div
                      data-opai-animate
                      data-delay="0.5"
                      className="bg-background-9 absolute top-1 left-1/2 z-3 h-[129px] w-[218px] -translate-x-1/2 rounded-xl"
                      aria-hidden="true"
                    ></div>
                    <div
                      data-opai-animate
                      data-delay="0.6"
                      className="bg-background-9 absolute top-1 left-1/2 z-3 h-[138px] w-[206px] -translate-x-1/2 rounded-xl"
                      aria-hidden="true"
                    ></div>
                    <div
                      data-opai-animate
                      data-delay="0.7"
                      className="bg-background-9 absolute top-1 left-1/2 z-3 h-[147px] w-[192px] -translate-x-1/2 rounded-xl"
                      aria-hidden="true"
                    ></div>
                  </div>
                  {/* text */}
                  <h3
                    className="text-background-13/90 font-sora text-sora-heading-5 font-normal tracking-[-0.72px]"
                    itemProp="name"
                  >
                    Intelligent automation workflows
                  </h3>
                </div>
              </div>

              {/* card three */}
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                role="listitem"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div
                  className="flex h-[300px] flex-col justify-between rounded-3xl bg-white px-8 pt-8 pb-8 lg:pt-8 xl:h-[420px] xl:pt-[77px]"
                  aria-label="Scalable cloud infrastructure feature card"
                >
                  {/* lock icon */}
                  <div
                    className="lock-fade-animation-delay-1 bg-background-7 relative mx-auto size-40 rounded-full"
                    role="img"
                    aria-label="Security lock icon representing scalable cloud infrastructure"
                  >
                    <div
                      className="lock-fade-animation-delay-2 bg-background-8 absolute top-1/2 left-1/2 size-29 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      aria-hidden="true"
                    >
                      <div
                        className="bg-background-5 lock-fade-animation-delay-3 absolute top-1/2 left-1/2 flex size-17 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full px-3.5 py-3"
                        aria-hidden="true"
                      >
                        <figure className="h-[52px] w-[50px]">
                          <img
                            src="/images/lock-3.svg"
                            alt="Security lock icon for scalable cloud infrastructure"
                            className="size-full shrink-0 object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>

                  {/* text */}
                  <h3
                    className="text-background-13/90 font-sora text-sora-heading-5 font-normal tracking-[-0.72px]"
                    itemProp="name"
                  >
                    Scalable cloud infrastructure & hosting
                  </h3>
                </div>
              </div>

              {/* card four */}
              <div
                className="order-last col-span-12 md:col-span-6 lg:order-4 xl:col-span-3 xl:-mt-[120px]"
                role="listitem"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div
                  className="flex h-[420px] flex-col justify-between rounded-3xl bg-white p-8"
                  aria-label="Google & Meta ads strategy feature card"
                >
                  {/* images */}
                  <div
                    data-opai-animate
                    data-delay="0.2"
                    className="relative h-[252px] w-full"
                    role="group"
                    aria-label="Google & Meta ads strategy images"
                  >
                    <figure
                      className="absolute top-1/2 left-1/2 z-10 w-full max-w-[190px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[20px]"
                    >
                      <img
                        src="/images/opai-img-307.png"
                        alt="Google & Meta ads strategy img two"
                        className="size-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>

                    <figure
                      data-opai-animate
                      data-delay="0.3"
                      className="absolute top-[74px] left-0 z-20 w-full max-w-[159px] overflow-hidden rounded-[20px]"
                    >
                      <img
                        src="/images/opai-img-306.png"
                        alt="Google & Meta ads strategy img one"
                        className="size-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                    <figure
                      data-opai-animate
                      data-delay="0.4"
                      className="absolute right-0 bottom-0 z-0 w-full max-w-[159px] overflow-hidden rounded-[20px]"
                    >
                      <img
                        src="/images/opai-img-308.png"
                        alt="Google & Meta ads strategy img three"
                        className="size-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </div>

                  {/* text */}
                  <h3
                    className="text-background-13/90 font-sora text-sora-heading-5 font-normal tracking-[-0.72px]"
                    itemProp="name"
                  >
                    Google & Meta ads strategy
                  </h3>
                </div>
              </div>

              {/* card five */}
              <div
                className="col-span-12 md:order-5 md:col-span-6 lg:order-4 xl:col-span-3 xl:-mt-[120px]"
                role="listitem"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div
                  className="flex h-[420px] flex-col justify-between rounded-3xl bg-white p-8"
                  aria-label="Conversion-rate optimized ecommerce feature card"
                >
                  {/* images */}
                  <div
                    data-opai-animate
                    data-delay="0.4"
                    className="relative top-4 left-1/2 h-[220px] w-[206px] -translate-x-1/2"
                    role="group"
                    aria-label="Conversion-rate optimized ecommerce images"
                  >
                    <figure
                      data-opai-animate
                      data-delay="0.5"
                      data-instant
                      data-rotation="7.7"
                      data-animation-type="to"
                      data-offset="0"
                      className="absolute top-0 right-2 z-10 w-[124px] overflow-hidden rounded-[20px]"
                    >
                      <img
                        src="/images/opai-img-310.png"
                        alt="Conversion-rate optimized ecommerce"
                        className="size-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                    <figure
                      data-opai-animate
                      data-delay="0.6"
                      data-instant
                      className="absolute bottom-0 left-1/2 z-20 w-[164px] -translate-x-1/2 overflow-hidden rounded-[20px]"
                    >
                      <img
                        src="/images/opai-img-309.png"
                        alt="Conversion-rate optimized ecommerce"
                        className="size-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>

                    <div
                      data-opai-animate
                      data-delay="0.7"
                      data-instant
                      data-rotation="-7.7"
                      data-animation-type="to"
                      data-offset="0"
                      className="bg-background-10 absolute bottom-8 left-3 z-10 h-[147px] w-[124px] rounded-[20px]"
                      aria-hidden="true"
                    ></div>
                  </div>
                  {/* text */}
                  <h3
                    className="text-background-13/90 font-sora text-sora-heading-5 font-normal tracking-[-0.72px]"
                    itemProp="name"
                  >
                    Conversion-rate optimized e-commerce
                  </h3>
                </div>
              </div>

              {/* card six */}
              <div
                className="order-last col-span-12 md:order-4 md:col-span-6 lg:order-last lg:col-span-12 xl:col-span-6"
                role="listitem"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div
                  className="flex h-[300px] flex-col items-start justify-between rounded-3xl bg-white p-8"
                  aria-label="Data analytics & growth dashboard feature card"
                >
                  <figure
                    data-opai-animate
                    data-delay="0.7"
                    className="w-full max-w-[569px] overflow-hidden rounded-md"
                  >
                    <img
                      src="/images/opai-img-312.png"
                      alt="Data analytics & growth dashboard visualization"
                      className="size-full object-cover"
                      itemProp="image"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>

                  {/* text */}
                  <h3
                    className="text-background-13/90 font-sora text-sora-heading-5 text-left font-normal tracking-[-0.72px]"
                    itemProp="name"
                  >
                    Data analytics & growth dashboards
                  </h3>
                </div>
              </div>
            </div>
            {/* btn */}
            <div
              data-opai-animate
              data-delay="0.8"
              className="text-center"
              role="region"
              aria-label="Call to action"
            >
              <LinkPrimary
                buttonText="Get started today"
                href="/contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
