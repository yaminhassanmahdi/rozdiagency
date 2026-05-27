import React from 'react';

interface ServicesCardProps {
  title: React.ReactNode;
  description: string;
  icon: string;
}

const ServicesCard = ({ title, description, icon }: ServicesCardProps) => (
  <div
    className="flex h-[300px] flex-col items-start rounded-3xl bg-white p-8 lg:h-[370px] xl:p-14 space-y-6 lg:space-y-8"
  >
    <span
      className="bg-background-3 flex size-17 items-center justify-center rounded-3xl p-4"
      aria-hidden="true"
    >
      <span className={`${icon} text-4xl text-white`}></span>
    </span>

    <div className="space-y-1">
      <h3
        className="font-sora text-sora-heading-5 xl:text-sora-heading-4 text-background-13/80 tracking-[-1.28px]"
        itemProp="name"
      >
        {title}
      </h3>
      <p
        className="font-inter-tight text-background-13/50 text-tagline-2 max-w-[250px] font-normal"
        itemProp="description"
      >
        {description}
      </p>
    </div>
  </div>
);

export default ServicesCard;
