const CoreValues = () => {
  const values = [
    { title: "Collaboration", description: "Increase open and click rates with AI-optimized content" },
    { title: "Integrity", description: "We build trust through transparency and accountability." },
    { title: "Innovation", description: "Pushing boundaries to create AI solutions that drive real change." },
    { title: "Sustainability", description: "We prioritize long-term value for businesses, people, and the planet." },
  ];

  return (
    <section className="lp:py-39! py-20 md:py-28">
      <div className="main-container">
        <div className="space-y-12 md:space-y-17.5">
          <div className="space-y-8 md:space-y-14">
            <h2 data-text-reveal className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal">
              Our Core Values
            </h2>
            <div className="grid grid-cols-12 items-center gap-y-6 lg:gap-x-8 lg:gap-y-0">
              {values.map((value, index) => (
                <div key={index} className="col-span-12 text-center md:col-span-6 lg:col-span-3">
                  <h3 data-text-reveal data-delay="0.2" className="font-sora text-sora-heading-5 text-background-13/90 font-normal">
                    {value.title}
                  </h3>
                  <p data-text-reveal data-delay="0.3" className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto w-full max-w-[215px] font-normal">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <figure data-opai-animate data-delay="0.4" className="outline-background-13/5 w-full overflow-hidden rounded-2xl outline-8 md:h-[480px] md:rounded-3xl xl:h-[614px]">
            <img src="/images/opai-img-26.png" alt="core-values-img" className="size-full rounded-xl object-cover md:rounded-[18px]" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
