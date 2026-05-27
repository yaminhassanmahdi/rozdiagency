import Link from "next/link";
import LinkPrimary from "@/components/shared/LinkPrimary";

const TrackRecord = () => {
  const caseStudies = [
    {
      title: "E-Commerce optimization",
      description: "Struggling with cart abandonment and low conversion rates.",
      image: "/images/opai-img-302.png",
      author: "Sarah Chen",
      position: "E-Commerce Director",
      metrics: [
        { label: "Conversion rate lift", value: "48" },
        { label: "Cart abandonment drop", value: "62" },
      ],
    },
    {
      title: "SaaS & AI automation",
      description: "Struggling with high manual support volume and workflow inefficiencies.",
      image: "/images/opai-img-303.png",
      author: "Michael Rodriguez",
      position: "Chief Operating Officer at ApexSaaS",
      metrics: [
        { label: "Support ticket drop", value: "85" },
        { label: "Faster execution speed", value: "40" },
      ],
    },
    {
      title: "Enterprise Ads & SEM",
      description: "Struggling with high cost-per-lead and inefficient Google/Meta ad spend.",
      image: "/images/opai-img-304.png",
      author: "John Smith",
      position: "Growth Director at FinTech Solutions",
      metrics: [
        { label: "Cost per Acquisition drop", value: "68" },
        { label: "Ad Spend ROAS increase", value: "320" },
      ],
    },
  ];

  return (
    <section className="py-[80px] md:py-[120px] xl:py-[156px]" aria-labelledby="track-record-heading">
      <div className="main-container">
        <div className="space-y-19">
          <div className="space-y-3 text-center">
            <h2
              id="track-record-heading"
              data-text-reveal
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal"
            >
              Our proven track record
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto text-center font-normal"
            >
              See how we've delivered measurable success to our clients.
            </p>
          </div>

          <div className="space-y-14">
            <div className="space-y-4 lg:space-y-2">
              {caseStudies.map((study, index) => (
                <div key={index} className="grid grid-cols-12 items-center justify-center gap-4 lg:grid-cols-10 lg:gap-2">
                  {/* fragment one for mobile and upper lg */}
                  <div
                    data-opai-animate
                    data-delay="0.3"
                    className="col-span-12 md:hidden lg:col-span-3 lg:block"
                  >
                    <figure className="h-[265px] overflow-hidden rounded-3xl">
                      <img
                        src={study.image}
                        alt={`${study.title} success case study visual`}
                        className="size-full object-cover"
                      />
                    </figure>
                  </div>

                  {/* fragment one for md */}
                  <div
                    data-opai-animate
                    data-delay="0.3"
                    className="relative col-span-12 hidden md:col-span-6 md:block lg:col-span-3 lg:hidden"
                  >
                    <Link href="/case-study-details">
                      <figure className="h-[265px] overflow-hidden rounded-3xl">
                        <div className="bg-background-6/60 absolute top-0 left-0 size-full rounded-3xl"></div>
                        <div className="absolute bottom-0 left-0 z-10 space-y-1 p-6 text-left">
                          <h3 className="font-sora text-sora-heading-6 text-white/90">
                            {study.title}
                          </h3>
                          <p className="font-inter-tight text-tagline-3 font-normal text-white/60">
                            {study.description}
                          </p>
                        </div>
                        <img
                          src={study.image}
                          alt={`${study.title} success case study visual`}
                          className="size-full object-cover"
                        />
                      </figure>
                    </Link>
                  </div>

                  {/* fragment two */}
                  <div
                    data-opai-animate
                    data-delay="0.4"
                    className="col-span-12 md:hidden lg:col-span-4 lg:block"
                  >
                    <div
                      className="bg-background-1 flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
                      aria-label={`${study.title} case study`}
                    >
                      <div className="space-y-1 text-left">
                        <Link href="/case-study-details">
                          <h3
                            className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                          >
                            {study.title}
                          </h3>
                        </Link>
                        <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                          {study.description}
                        </p>
                      </div>

                      <div className="text-left">
                        <h4 className="font-sora text-sora-heading-6 font-normal text-white/90">
                          {study.author}
                        </h4>
                        <p className="font-inter-tight text-tagline-3 font-normal text-white/50">
                          {study.position}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* fragment three */}
                  <div data-opai-animate data-delay="0.5" className="col-span-12 md:col-span-6 lg:col-span-3">
                    <Link href="/case-study-details">
                      <div
                        className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
                        aria-label="Performance metrics and results"
                      >
                        <div
                          className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                          aria-hidden="true"
                        >
                          <span className="relative size-6 overflow-hidden">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="absolute top-0 left-0 transition-all duration-450 ease-in-out group-hover:top-[-26px] group-hover:left-[26px]"
                            >
                              <path d="M7 17L17 7" stroke="#F8F9FA" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7 7H17V17" stroke="#F8F9FA" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="absolute top-[20px] left-[-24px] transition-all duration-450 ease-in-out group-hover:top-0 group-hover:left-0"
                            >
                              <path d="M7 17L17 7" stroke="#F8F9FA" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M7 7H17V17" stroke="#F8F9FA" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>

                        <div className="flex items-center justify-start gap-x-10 lg:justify-center">
                          {study.metrics.map((metric, mIndex) => (
                            <div key={mIndex} className="text-left">
                              <h3
                                className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                                aria-label={`${metric.value} percent ${metric.label}`}
                              >
                                <span
                                  data-counter
                                  data-number={metric.value}
                                  data-speed="1400"
                                  data-interval="200"
                                  data-rooms={metric.value.length}
                                  data-height-space="2.3"
                                >{metric.value}</span>%
                              </h3>
                              <p className="text-background-13/60 font-inter-tight text-tagline-3 font-normal">
                                {metric.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div data-opai-animate data-delay="0.6" className="text-center">
              <LinkPrimary
                buttonText="View all case studies"
                href="/case-study"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
