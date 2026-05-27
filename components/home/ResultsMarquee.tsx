import LinkPrimary from "@/components/shared/LinkPrimary";

const ResultsMarquee = () => {
  const results = [
    {
      label: "Campaigns",
      value: "1,200+",
      description: "Technology & marketing campaigns launched.",
      image: "/images/ns-img-514.png",
    },
    {
      label: "Average ROI",
      value: "150%+",
      description: "ROI increase across Google & Meta ad campaigns.",
      image: "/images/ns-img-514.png",
    },
    {
      label: "Cost Reduction",
      value: "40%+",
      description: "Operational cost savings from custom AI automation.",
      image: "/images/ns-img-514.png",
    },
    {
      label: "Ad Budgets Managed",
      value: "$2M+",
      description: "Ad budgets managed for startups & local brands.",
      image: "/images/ns-img-514.png",
    },
    {
      label: "Lines of Code Deployed",
      value: "1M+",
      description: "Enterprise-grade code lines deployed for platforms.",
      image: "/images/ns-img-514.png",
    },
  ];

  return (
    <section
      className="relative pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] bg-background-2 dark:bg-background-5"
    >
      <div className="main-container">
        <div className="space-y-14 mb-[70px] text-center sm:text-left mx-4 sm:mx-0">
          <div className="space-y-3">
            <h2 data-opai-animate data-delay="0.1" className="font-sora text-sora-heading-3 md:text-sora-heading-2 text-white/95">
              Results that speak for themselves.
            </h2>
            <p data-opai-animate data-delay="0.2" className="font-inter-tight text-tagline-2 text-white/65">
              A dynamic digital marketing agency trusted by clients around the globe.
            </p>
          </div>
          <div data-opai-animate data-delay="0.3">
            <LinkPrimary
              buttonText="Read more success stories"
              href="/case-study"
            />
          </div>
        </div>
      </div>
      <div data-opai-animate data-delay="0.4" className="cards-marquee-container">
        <div className="flex items-center justify-center gap-8 mb-14 overflow-x-auto no-scrollbar">
          {results.map((result, index) => (
            <div
              key={index}
              className={`min-w-[320px] sm:min-w-[360px] min-h-[270px] bg-background-3/80 border border-stroke-3/15 hover:bg-background-4/80 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden justify-between group transition-all duration-700 ease-in-out ${index === 0 ? 'ml-8' : ''}`}
            >
              <div
                className="-z-10 absolute -top-[107%] -right-[90%] size-[500px] -rotate-[60deg] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 select-none pointer-events-none"
              >
                <img src={result.image} alt="gradient" />
              </div>
              <div
                className="transition-all duration-700 ease-in-out transform group-hover:translate-y-[4px]"
              >
                <p
                  className="text-white/60 group-hover:text-white text-lg mb-2 transition-colors duration-700 ease-in-out"
                >
                  {result.label}
                </p>
                <h3
                  className="text-white/95 group-hover:text-opai-yellow font-sora text-sora-heading-3 font-normal transition-colors duration-700 ease-in-out"
                >
                  {result.value}
                </h3>
              </div>
              <p
                className="text-white/50 group-hover:text-white/80 transition-all duration-700 ease-in-out transform group-hover:translate-y-[-6px] group-hover:opacity-90"
              >
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsMarquee;
