import React from "react";

interface ClientsProps {
  className?: string;
}

const Clients: React.FC<ClientsProps> = ({ className = "" }) => {
  return (
    <section
      className={`${className} pt-[45px] md:pt-[85px]`}
      aria-label="Our clients and partners"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="main-container">
        <div
          data-opai-animate
          data-delay="0.1"
          className="flex size-full items-center justify-evenly max-sm:gap-x-3"
          role="list"
          aria-label="Client logos"
        >
          <figure className="h-11 w-7" role="listitem" itemScope itemType="https://schema.org/Organization">
            <img
              src="/images/icons/scapic-metal-without-text.svg"
              alt="Scapic logo"
              className="size-full"
              itemProp="logo"
            />
          </figure>
          <figure className="h-11 w-7" role="listitem" itemScope itemType="https://schema.org/Organization">
            <img
              src="/images/icons/notion-metal-without-text.svg"
              alt="Notion logo"
              className="size-full"
              itemProp="logo"
            />
          </figure>
          <figure className="h-11 w-7" role="listitem" itemScope itemType="https://schema.org/Organization">
            <img
              src="/images/icons/hotjar-metal-without-text.svg"
              alt="Hotjar logo"
              className="size-full"
              itemProp="logo"
            />
          </figure>
          <figure className="h-11 w-7" role="listitem" itemScope itemType="https://schema.org/Organization">
            <img
              src="/images/icons/discord-metal-without-text.svg"
              alt="Discord logo"
              className="size-full"
              itemProp="logo"
            />
          </figure>
          <figure className="h-11 w-7" role="listitem" itemScope itemType="https://schema.org/Organization">
            <img
              src="/images/icons/dropbox-metal-without-text.svg"
              alt="Dropbox logo"
              className="size-full"
              itemProp="logo"
            />
          </figure>
          <figure className="h-11 w-7" role="listitem" itemScope itemType="https://schema.org/Organization">
            <img
              src="/images/icons/stripe-metal-without-text.svg"
              alt="Stripe logo"
              className="size-full"
              itemProp="logo"
            />
          </figure>
          <figure className="h-11 w-7" role="listitem" itemScope itemType="https://schema.org/Organization">
            <img
              src="/images/icons/spotify-metal-without-text.svg"
              alt="Spotify logo"
              className="size-full"
              itemProp="logo"
            />
          </figure>
          <figure className="h-11 w-7" role="listitem" itemScope itemType="https://schema.org/Organization">
            <img
              src="/images/icons/asana-metal-without-text.svg"
              alt="Asana logo"
              className="size-full"
              itemProp="logo"
            />
          </figure>
          <figure className="h-11 w-7" role="listitem" itemScope itemType="https://schema.org/Organization">
            <img
              src="/images/icons/secure-space-metal-without-text.svg"
              alt="Secure Space logo"
              className="size-full"
              itemProp="logo"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Clients;
