import Link from "next/link";
import ServicesCard from "@/components/shared/ServicesCard";
import LinkPrimary from "@/components/shared/LinkPrimary";

const Solutions = () => {
  return (
    <section className="py-[80px] md:py-[120px] xl:py-[156px]" aria-labelledby="solutions-heading">
      <div className="main-container">
        <div className="space-y-14">
          {/* content */}
          <div className="space-y-3">
            <h2
              data-text-reveal
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[703px] text-center font-normal"
            >
              Smart solutions, tailored for you
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto max-w-[390px] text-center font-normal"
              itemProp="description"
            >
              Empowering industries with AI-driven innovation to solve real-world challenges.
            </p>
          </div>

          {/* card */}
          <div
            className="grid grid-cols-12 items-center justify-center gap-4 *:col-span-12 md:*:col-span-6 lg:gap-2 lg:*:col-start-auto md:[&>*:last-child]:col-span-12 lg:[&>*:nth-child(5n+1)]:col-span-4 lg:[&>*:nth-child(5n+2)]:col-span-4 lg:[&>*:nth-child(5n+3)]:col-span-4 lg:[&>*:nth-child(5n+4)]:col-span-6 lg:[&>*:nth-child(5n+5)]:col-span-6"
            role="list"
            aria-label="AI solutions"
          >
            {/* card one */}
            <div data-opai-animate data-delay="0.1" role="listitem">
              <Link href="/service-details">
                <ServicesCard
                  title="Custom AI Automation"
                  description="Develop AI-powered systems that automate repetitive tasks, improve workflows, and reduce manual labor."
                  icon="ns-shape-1"
                />
              </Link>
            </div>

            {/* card two */}
            <div
              data-opai-animate
              data-delay="0.2"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              <Link href="/service-details">
                <ServicesCard
                  title="Website Development"
                  description="Build modern, fast, responsive, and enterprise-grade websites optimized for branding and conversion."
                  icon="ns-shape-2"
                />
              </Link>
            </div>

            {/* card three */}
            <div
              data-opai-animate
              data-delay="0.3"
              className="col-span-12 md:col-span-6 lg:col-span-4"
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              <Link href="/service-details">
                <ServicesCard
                  title="Ecommerce Development"
                  description="Create powerful ecommerce platforms focused on user experience, speed, and conversion optimization."
                  icon="ns-shape-3"
                />
              </Link>
            </div>

            {/* card four */}
            <div
              data-opai-animate
              data-delay="0.4"
              className="col-span-12 md:col-span-6"
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              <Link href="/service-details">
                <ServicesCard
                  title={<>Systems & Digital<br className='hidden sm:inline' />Transformation</>}
                  description="Modernize workflows using CRM setups, custom automation, cloud systems, and scalable operations tech."
                  icon="ns-shape-4"
                />
              </Link>
            </div>

            {/* card five */}
            <div
              data-opai-animate
              data-delay="0.5"
              className="col-span-12 col-start-auto md:col-span-6 md:col-start-4 lg:col-start-auto"
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              <Link href="/service-details">
                <ServicesCard
                  title={<>Digital Growth &<br className='hidden sm:inline' />SEO</>}
                  description="Boost search visibility, drive organic traffic, and build brand authority with technical optimization."
                  icon="ns-shape-5"
                />
              </Link>
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
              buttonText="Discover our services"
              href="/services"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
