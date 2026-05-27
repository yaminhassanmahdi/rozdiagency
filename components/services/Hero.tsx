import React from 'react';
import Link from 'next/link';
import ServicesCard from '../shared/ServicesCard';

const Hero = () => {
  const services = [
    {
      title: "Custom AI Automation",
      description: "AI-powered systems that automate repetitive tasks, improve workflows, reduce manual work, and increase business efficiency.",
      icon: "ns-shape-1",
      delay: "0.1"
    },
    {
      title: "Website Development",
      description: "Modern, fast, responsive, and enterprise-grade websites optimized for performance, branding, and conversion.",
      icon: "ns-shape-2",
      delay: "0.2"
    },
    {
      title: "Ecommerce Development",
      description: "Powerful ecommerce systems focused on user experience, speed, scalability, automation, and conversion optimization.",
      icon: "ns-shape-3",
      delay: "0.3"
    },
    {
      title: "SEO Services",
      description: "Improve your search engine visibility using modern SEO strategies focused on long-term organic growth and content optimization.",
      icon: "ns-shape-4",
      delay: "0.4",
      cols: "md:col-span-6"
    },
    {
      title: "Google Ads Management",
      description: "High-performing search ad campaigns designed to generate leads, increase conversions, and maximize ad spend ROI.",
      icon: "ns-shape-5",
      delay: "0.5",
      cols: "md:col-span-6"
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Data-driven Meta campaigns to reach the right audience, increase sales, and build modern brand visibility.",
      icon: "ns-shape-6",
      delay: "0.1"
    },
    {
      title: "Social Media Management",
      description: "Build a strong online brand presence through content planning, active engagement, and consistent channel growth.",
      icon: "ns-shape-7",
      delay: "0.2"
    },
    {
      title: "Professional Email Services",
      description: "Enterprise business email solutions that improve professionalism, reliability, and corporate communications.",
      icon: "ns-shape-8",
      delay: "0.3"
    },
    {
      title: "Branding & Digital Identity",
      description: "Design systems, visual consistency, modern logos, and strategic digital positioning to build a professional identity.",
      icon: "ns-shape-9",
      delay: "0.4",
      cols: "md:col-span-6"
    },
    {
      title: "Marketing & Growth Strategy",
      description: "Tailored growth strategies designed around your business goals, target audiences, and measurable performance.",
      icon: "ns-shape-10",
      delay: "0.5",
      cols: "md:col-span-6"
    },
    {
      title: "Business Process Automation",
      description: "Automate manual workflows, back-office operations, internal comms, and administrative tasks to improve productivity.",
      icon: "ns-shape-11",
      delay: "0.1",
      cols: "lg:col-span-6"
    },
    {
      title: "Hosting & Technical Infrastructure",
      description: "Secure, high-performance hosting solutions alongside server deployment, maintenance, and expert server optimization.",
      icon: "ns-shape-12",
      delay: "0.2",
      cols: "lg:col-span-6"
    }
  ];

  return (
    <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
      <div className="main-container">
        <div className="space-y-14">
          <div className="space-y-3">
            <h2
              data-text-reveal
              id="solutions-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[800px] text-center font-normal tracking-[-2.4px]"
              itemProp="name"
            >
              Outsource Enterprise-Grade Technology Within Budget
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-1 text-background-13/60 mx-auto max-w-[550px] text-center font-normal"
              itemProp="description"
            >
              Centralized technology and digital transformation solutions designed to help your business grow smarter while reducing operational costs.
            </p>
          </div>

          <div
            className="grid grid-cols-12 items-center justify-center gap-4 lg:gap-2"
            role="list"
            aria-label="Rozdi solutions"
          >
            {services.map((service, index) => (
              <div
                key={index}
                data-opai-animate
                data-delay={service.delay}
                className={`col-span-12 ${service.cols || 'md:col-span-6 lg:col-span-4'}`}
                role="listitem"
                itemScope
                itemType="https://schema.org/Service"
              >
                <Link href="/service-details">
                  <ServicesCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
