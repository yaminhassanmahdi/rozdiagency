import React from 'react';
import Link from 'next/link';
import ArrowUpRight from '../shared/ArrowUpRight';

const Hero = () => {
  const caseStudies = [
    {
      image: "/images/opai-img-302.png",
      title: "E-Commerce optimization",
      description: "Struggling with cart abandonment and low conversion rates.",
      person: "Sarah Chen",
      jobTitle: "E-Commerce Director",
      stats: [
        { label: "Increased conversion rates", value: "48", suffix: "%" },
        { label: "Email open rate", value: "62", suffix: "%" }
      ]
    },
    {
      image: "/images/opai-img-303.png",
      title: "Healthcare predictive model",
      description: "Need for early disease detection and risk prediction.",
      person: "Dr. Michael Rodriguez",
      jobTitle: "Chief Medical Officer",
      stats: [
        { label: "Increased conversion rates", value: "91", suffix: "%" }, // Note: HTML had "Increased conversion rates" for all
        { label: "Email open rate", value: "38", suffix: "%" }
      ]
    },
    {
      image: "/images/opai-img-304.png",
      title: "Financial analytics",
      description: "Complex risk assessment and fraud detection challenges.",
      person: "David Thompson",
      jobTitle: "Chief Risk Officer",
      stats: [
        { label: "Increased conversion rates", value: "87", suffix: "%" },
        { label: "Email open rate", value: "54", suffix: "%" }
      ]
    },
    {
      image: "/images/opai-img-3.png",
      title: "CNN defect detection",
      description: "Real-time visual inspection and quality control on production lines.",
      person: "James Park",
      jobTitle: "VP of Manufacturing",
      stats: [
        { label: "Defect detection accuracy", value: "94", suffix: "%" },
        { label: "Fewer product recalls", value: "40", suffix: "%" }
      ]
    },
    {
      image: "/images/opai-img-4.png",
      title: "Transformer-based support",
      description: "Scaling customer service with NLP and intent recognition at scale.",
      person: "Priya Sharma",
      jobTitle: "Head of Customer Experience",
      stats: [
        { label: "Ticket volume reduction", value: "65", suffix: "%" },
        { label: "Faster resolution time", value: "3.2", suffix: "x" }
      ]
    },
    {
      image: "/images/opai-img-5.png",
      title: "Neural perception systems",
      description: "Real-time object detection and scene understanding for autonomous platforms.",
      person: "Alex Kim",
      jobTitle: "Director of Autonomy",
      stats: [
        { label: "Detection accuracy", value: "99.2", suffix: "%" },
        { label: "Faster inference", value: "45", suffix: "%" }
      ]
    },
    {
      image: "/images/opai-img-6.png",
      title: "Smart grid demand forecasting",
      description: "Deep learning for load prediction and grid optimization.",
      person: "Maria Santos",
      jobTitle: "Chief Data Officer",
      stats: [
        { label: "Forecast accuracy gain", value: "23", suffix: "%" },
        { label: "Operational cost reduction", value: "31", suffix: "%" }
      ]
    }
  ];

  return (
    <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
      <div className="main-container">
        <div className="space-y-19">
          <div className="space-y-3 text-center">
            <h2
              data-text-reveal
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto text-center font-normal tracking-[-2.4px]"
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

          <div
            className="grid grid-cols-12 items-center justify-center gap-4 lg:grid-cols-10 lg:gap-2"
            role="list"
            aria-label="Success stories and case studies"
          >
            {caseStudies.map((study, index) => (
              <React.Fragment key={index}>
                {/* Image Card */}
                <div
                  data-opai-animate
                  data-delay="0.3"
                  className="col-span-12 md:col-span-6 lg:col-span-3"
                  role="listitem"
                  itemScope
                  itemType="https://schema.org/ImageObject"
                >
                  <figure
                    className="h-[265px] overflow-hidden rounded-3xl"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <img
                      src={study.image}
                      alt={`${study.title} success case study visual`}
                      className="size-full object-cover"
                      itemProp="image"
                    />
                  </figure>
                </div>

                {/* Content Card */}
                <div
                  data-opai-animate
                  data-delay="0.4"
                  className="col-span-12 md:col-span-6 lg:col-span-4"
                  role="listitem"
                  itemScope
                  itemType="https://schema.org/CaseStudy"
                >
                  <div
                    className="bg-background-1 flex h-[265px] flex-col items-start justify-between rounded-3xl p-8"
                    aria-label={`${study.title} case study`}
                  >
                    <div className="space-y-1">
                      <Link href="/case-study-details">
                        <h3
                          className="font-sora text-sora-heading-5 xl:text-sora-heading-4 font-normal tracking-[-1.28px] text-white/90"
                          itemProp="name"
                        >
                          {study.title}
                        </h3>
                      </Link>
                      <p className="font-inter-tight text-tagline-2 font-normal text-white/60" itemProp="about">
                        {study.description}
                      </p>
                    </div>

                    <div itemScope itemType="https://schema.org/Person">
                      <h4 className="font-sora text-sora-heading-6 font-normal text-white/90" itemProp="name">
                        {study.person}
                      </h4>
                      <p
                        className="font-inter-tight text-tagline-3 font-normal text-white/50"
                        itemProp="jobTitle"
                      >
                        {study.jobTitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Card */}
                <div
                  data-opai-animate
                  data-delay="0.5"
                  className="col-span-12 lg:col-span-3"
                  role="listitem"
                  itemScope
                  itemType="https://schema.org/AggregateRating"
                >
                  <Link href="/case-study-details">
                    <div
                      className="group flex h-[265px] flex-col justify-between rounded-3xl bg-white p-8"
                      aria-label="Performance metrics and results"
                    >
                      <div
                        className="bg-background-4 mr-0 ml-auto flex size-13 items-center justify-center rounded-xl"
                        aria-hidden="true"
                      >
                        <span className="relative size-6 overflow-hidden" aria-hidden="true">
                          <ArrowUpRight className="absolute top-0 left-0 transition-all duration-450 ease-in-out group-hover:top-[-26px] group-hover:left-[26px] text-[#F8F9FA]" />
                          <ArrowUpRight className="absolute top-[20px] left-[-24px] transition-all duration-450 ease-in-out group-hover:top-0 group-hover:left-0 text-[#F8F9FA]" />
                        </span>
                      </div>

                      <div
                        className="flex items-center justify-start gap-x-10 lg:justify-center"
                        role="group"
                        aria-label="Performance statistics"
                      >
                        {study.stats.map((stat, sIndex) => (
                          <div key={sIndex}>
                            <h3
                              className="font-sora text-sora-heading-5 text-background-13/90 flex items-center justify-start font-normal tracking-[-0.72px]"
                              itemProp={sIndex === 0 ? "ratingValue" : undefined}
                              aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                            >
                              <span
                                data-counter
                                data-number={stat.value}
                                data-speed="1400"
                                data-interval="200"
                                data-rooms="2"
                                data-height-space="2.3"
                              >
                                {stat.value.split('.')[0]}
                              </span>
                              {stat.value.includes('.') && '.'}
                              {stat.value.includes('.') && (
                                <span
                                  data-counter
                                  data-number={stat.value.split('.')[1]}
                                  data-speed="1400"
                                  data-interval="200"
                                  data-rooms="1"
                                  data-height-space="2.1"
                                >
                                  {stat.value.split('.')[1]}
                                </span>
                              )}
                              {stat.suffix}
                            </h3>
                            <p
                              className="text-background-13/60 font-inter-tight text-tagline-3 font-normal"
                              itemProp={sIndex === 0 ? "description" : undefined}
                            >
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
