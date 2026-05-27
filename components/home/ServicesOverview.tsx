import LinkPrimary from "@/components/shared/LinkPrimary";

const ServicesOverview = () => {
  const services = [
    {
      iconClass: "ns-shape-25",
      title: "SEO",
      description: "Enhance visibility, authority, and important keyword rankings.",
    },
    {
      iconClass: "ns-shape-19",
      title: "SEM",
      description: "Data-optimized campaigns designed to attract ready-to-buy audiences.",
    },
    {
      iconClass: "ns-shape-17",
      title: "Email marketing & automation",
      description: "Nurture leads and convert subscribers with timely campaigns.",
    },
    {
      iconClass: "ns-shape-34",
      title: "Link building & authority outreach",
      description: "Secure high-quality backlinks that enhance your SEO.",
    },
    {
      customIcon: (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.6693 13.4643L26.0026 0.953125L4.33594 13.4643M47.6693 13.4643L26.0026 25.6406M47.6693 13.4643V18.1908L43.1449 20.8227M26.0026 50.998L47.6693 38.1518V33.1116M26.0026 50.998L4.33594 38.1518V33.1116M26.0026 50.998V46.0505M4.33594 13.4643L26.0026 25.6406M4.33594 13.4643V18.1908L8.86032 20.8227M26.0026 25.6406V30.7947M26.0026 30.7947L8.86032 20.8227M26.0026 30.7947L43.1449 20.8227M26.0026 35.8919L47.6693 23.0099M26.0026 35.8919L4.33594 23.0099M26.0026 35.8919V40.9533M47.6693 23.0099V27.9218L43.1449 30.573M47.6693 23.0099L43.1449 20.8227M4.33594 23.0099V27.9218L8.86032 30.573M4.33594 23.0099L8.86032 20.8227M26.0026 40.9533L8.86032 30.573M26.0026 40.9533L43.1449 30.573M26.0026 46.0505L47.6693 33.1116M26.0026 46.0505L4.33594 33.1116M47.6693 33.1116L43.1449 30.573M4.33594 33.1116L8.86032 30.573"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-background-13"
          />
        </svg>
      ),
      title: "Local SEO & google business optimization",
      description: "Help local customers discover you—first, fast, and frequently.",
    },
    {
      customIcon: (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.6693 13.4781L26.0026 0.953125L17.317 5.97407M47.6693 13.4781V38.528L26.0026 51.0529M47.6693 13.4781L38.9367 18.5261M26.0026 51.0529V26.003M26.0026 51.0529L17.317 46.032V40.6548M4.33594 13.4781V38.528L12.7853 43.4123M4.33594 13.4781L26.0026 26.003M4.33594 13.4781L12.7853 8.59371L17.317 11.2247M26.0026 26.003L34.4051 21.1458M12.7853 43.4123V29.1393L17.317 32.0697V40.6548M12.7853 43.4123L17.317 40.6548M38.9367 33.6746V18.5261M38.9367 33.6746L34.4051 36.4632V31.0714M38.9367 33.6746L34.4051 31.0714M38.9367 18.5261L17.317 5.97407M34.4051 21.1458V31.0714M34.4051 21.1458L17.317 11.2247M17.317 5.97407V11.2247"
            stroke=""
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-background-13"
          />
        </svg>
      ),
      title: "Analytics & conversion optimization",
      description: "Collect data to convert clicks into customers & optimize every dollar spent.",
    },
  ];

  return (
    <section className="pt-14 pb-[220px] sm:pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="flex flex-col items-start justify-center max-md:gap-y-18 md:flex-row md:justify-between md:gap-x-[120px]">
          {/* Left: Intro */}
          <div className="lg:sticky lg:top-28">
            <span data-opai-animate data-delay="0.1" className="badge badge-cyan mb-5">
              Services overview
            </span>
            <div className="mb-14 space-y-2 md:max-w-[595px]">
              <h2 data-opai-animate data-delay="0.2" className="font-sora text-sora-heading-3 md:text-sora-heading-2 text-background-13 font-normal">
                Our performance-focused services.
              </h2>
              <p data-opai-animate data-delay="0.3" className="font-inter-tight text-tagline-2 text-background-13/70 font-normal max-w-[512px]">
                Smart, secure, and designed for simplicity—Rozdi Agency empowers you to take control effortlessly.
              </p>
            </div>
            <div data-opai-animate data-delay="0.4">
              <LinkPrimary
                buttonText="View full breakdown"
                href="/services"
              />
            </div>
          </div>
          {/* Right: Features List */}
          <div className="stack-cards js-stack-cards w-full max-w-xl">
            {services.map((service, index) => (
              <div
                key={index}
                className="stack-cards__item js-stack-cards__item border border-stroke-3/30 bg-background-8 dark:bg-background-8 z-0 min-h-[170px] space-y-4 rounded-[20px] p-8 shadow-sm"
              >
                <div className="inline-block">
                  {service.customIcon ? (
                    <span className="inline-block">{service.customIcon}</span>
                  ) : (
                    <span className={`${service.iconClass} text-background-13/90 text-[52px]`}> </span>
                  )}
                </div>
                <div>
                  <h3 className="text-heading-5 text-black font-semibold">{service.title}</h3>
                  <p className="text-black/75">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
