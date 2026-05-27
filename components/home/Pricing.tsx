import CheckIconBlack from "@/components/shared/CheckIconBlack";
import PricingButton from "@/components/shared/PricingButton";
import LinkPrimaryV2 from "@/components/shared/LinkPrimaryV2";

const Pricing = () => {
  return (
    <section
      data-opai-animate
      data-delay="0.1"
      className="bg-[url('/images/opai-35.jpg')] bg-cover bg-center bg-no-repeat py-[80px] md:py-[120px] xl:py-[156px]"
      aria-labelledby="pricing-heading"
    >
      <div className="main-container">
        <div className="space-y-12">
          {/* text content */}
          <div
            data-opai-animate
            data-delay="0.1"
            className="rounded-3xl bg-white/10 px-2 py-8 md:px-0 md:py-14"
          >
            <h2
              data-text-reveal
              data-delay="0.2"
              className="text-sora-heading-3 lg:text-sora-heading-2 font-sora mx-auto max-w-[600px] text-center font-normal text-white/90"
            >
              Symmetric pricing plans built for your scale
            </h2>
          </div>

          {/* pricing cards */}
          <div className="flex flex-wrap items-stretch justify-center gap-4 lg:flex-nowrap">
            {/* card one: Growth Plan */}
            <div
              data-opai-animate
              data-delay="0.2"
              className="flex w-full max-w-[415px] flex-col items-start justify-between rounded-3xl bg-white p-6 xl:p-8 shadow-xl"
            >
              <div className="w-full space-y-5">
                <div className="space-y-2">
                  <h3 className="font-sora text-sora-heading-4 text-background-13/90 font-normal">Growth Plan</h3>
                  <p className="font-inter-tight text-tagline-3 text-background-13/60 font-normal leading-relaxed h-[72px] overflow-hidden">
                    Perfect for startups and growing businesses that want a professional digital presence without building an in-house tech team.
                  </p>
                </div>

                <h4 className="font-inter-tight text-it-heading-4 font-normal text-black flex items-baseline">
                  <span className="text-background-13/40" aria-hidden="true">$</span>
                  <span className="text-sora-heading-3 font-sora font-semibold">790</span>
                  <span className="text-it-heading-6 text-background-13/40">/year</span>
                </h4>

                <ul className="space-y-3 border-t border-stroke-3/15 pt-5" aria-label="Growth plan features">
                  {[
                    "Highly Converting Company Website",
                    "Enterprise Development (Next.js/Laravel/Vite)",
                    "Mobile Responsive Design",
                    "SEO Optimization",
                    "Professional Corporate Email Setup",
                    "Social Media Automation",
                    "AI Auto Replies & Comment Tools",
                    "Occasional Graphic Design Support",
                    "Maintenance & Technical Support",
                    "1 Year Consultation & Hosting Help",
                    "Monthly Progress Tracking & Reporting",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start justify-start gap-x-2">
                      <span aria-hidden="true" className="mt-1">
                        <CheckIconBlack />
                      </span>
                      <span className="text-background-13/75 font-inter-tight text-tagline-3 font-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full mt-6 pt-5 border-t border-stroke-3/10 space-y-4">
                <p className="text-tagline-4 font-inter-tight text-background-13/50 italic leading-relaxed min-h-[44px]">
                  <strong>Best for:</strong> Startups, local businesses, agencies, and companies beginning transformation.
                </p>
                <PricingButton buttonText="Get started" href="/contact" />
              </div>
            </div>

            {/* card two: Business Plan */}
            <div
              data-opai-animate
              data-delay="0.3"
              className="flex w-full max-w-[415px] flex-col items-start justify-between rounded-3xl bg-white p-6 xl:p-8 shadow-xl border-2 border-opai-purple/35 relative"
            >
              <div className="w-full space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-sora text-sora-heading-4 text-background-13/90 font-normal">Business Plan</h3>
                    <span className="badge badge-purple text-[10px] px-2 py-0.5">Popular</span>
                  </div>
                  <p className="font-inter-tight text-tagline-3 text-background-13/60 font-normal leading-relaxed h-[72px] overflow-hidden">
                    Designed for businesses that need deeper automation, customer management, and stronger digital operations.
                  </p>
                </div>

                <h4 className="font-inter-tight text-it-heading-4 font-normal text-black flex items-baseline">
                  <span className="text-background-13/40" aria-hidden="true">$</span>
                  <span className="text-sora-heading-3 font-sora font-semibold">1,390</span>
                  <span className="text-it-heading-6 text-background-13/40">/year</span>
                </h4>

                <ul className="space-y-3 border-t border-stroke-3/15 pt-5" aria-label="Business plan features">
                  <li className="font-inter-tight text-tagline-3 text-opai-purple font-semibold flex items-center gap-x-2">
                    <span>⚡ Everything in Growth, plus:</span>
                  </li>
                  {[
                    "Client Relationship Management (CRM)",
                    "Lead Management Dashboard & Automation",
                    "Advanced Business Automation Systems",
                    "Enhanced Social Media Management",
                    "More Frequent Graphic Design Support",
                    "Marketing Consultation & Growth Strategy",
                    "Priority Technical Support & Optimization",
                    "Analytics, Business Insights & Reports",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start justify-start gap-x-2">
                      <span aria-hidden="true" className="mt-1">
                        <CheckIconBlack />
                      </span>
                      <span className="text-background-13/75 font-inter-tight text-tagline-3 font-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full mt-6 pt-5 border-t border-stroke-3/10 space-y-4">
                <p className="text-tagline-4 font-inter-tight text-background-13/50 italic leading-relaxed min-h-[44px]">
                  <strong>Best for:</strong> Growing businesses, ecommerce brands, service companies, and scaling operations.
                </p>
                <LinkPrimaryV2
                  buttonText="Get started"
                  href="/contact"
                  className="bg-background-4 w-full justify-center"
                />
              </div>
            </div>

            {/* card three: Customized Plan */}
            <div
              data-opai-animate
              data-delay="0.4"
              className="flex w-full max-w-[415px] flex-col items-start justify-between rounded-3xl bg-white p-6 xl:p-8 shadow-xl"
            >
              <div className="w-full space-y-5">
                <div className="space-y-2">
                  <h3 className="font-sora text-sora-heading-4 text-background-13/90 font-normal">Customized Plan</h3>
                  <p className="font-inter-tight text-tagline-3 text-background-13/60 font-normal leading-relaxed h-[72px] overflow-hidden">
                    Every business is different. Rozdi offers solutions tailored to your business goals, workflow, and budget so you get exactly what you need.
                  </p>
                </div>

                <h4 className="font-inter-tight text-it-heading-4 font-normal text-black flex items-baseline">
                  <span className="text-sora-heading-5 font-sora font-semibold text-background-13/90">Tailored to Your Needs</span>
                </h4>

                <ul className="space-y-3 border-t border-stroke-3/15 pt-5" aria-label="Customized plan options">
                  <li className="font-inter-tight text-[11px] uppercase tracking-wider text-background-13/50 font-bold">
                    Whether you need:
                  </li>
                  {[
                    "Only marketing services",
                    "Only website development",
                    "AI automation systems",
                    "Ecommerce infrastructure",
                    "CRM setup",
                    "Social media management",
                    "SEO services",
                    "Internal business systems",
                    "Complete digital transformation",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start justify-start gap-x-2">
                      <span aria-hidden="true" className="mt-1">
                        <CheckIconBlack />
                      </span>
                      <span className="text-background-13/75 font-inter-tight text-tagline-3 font-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full mt-6 pt-5 border-t border-stroke-3/10 space-y-4">
                <p className="text-[12px] font-inter-tight text-background-13/75 font-medium leading-relaxed">
                  You only pay for what your business actually needs while still getting enterprise-grade quality, strategy, and support.
                </p>
                <p className="text-tagline-4 font-inter-tight text-background-13/50 italic leading-relaxed min-h-[44px]">
                  <strong>Best for:</strong> Businesses looking for flexible, scalable, and personalized digital transformation solutions.
                </p>
                <PricingButton buttonText="Request custom quote" href="/contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
