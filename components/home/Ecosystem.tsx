import React from "react";
import EcosystemCard from "../shared/EcosystemCard";
import LinkPrimary from "../shared/LinkPrimary";

const Ecosystem = () => {
  return (
    <section
      className="py-[80px] md:py-[120px] xl:py-[156px]"
      aria-labelledby="ecosystem-heading"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <div className="main-container">
        <div className="space-y-14">
          {/* text */}
          <div className="space-y-3 text-center">
            <h2
              data-text-reveal
              className="text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-sora font-normal"
            >
              Rozdi Agency works with your ecosystem
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-2 text-background-13/50 font-normal"
              itemProp="description"
            >
              Rozdi Agency works with your ecosystem
            </p>
          </div>

          {/* cards */}
          <div
            className="grid grid-cols-12 items-center justify-center gap-4 md:gap-2"
            role="list"
            aria-label="Platform integrations"
          >
            {/* card one */}
            <EcosystemCard
              icon="/images/icons/slack.svg"
              alt="Rozdi Agency"
              title="Slack"
              description="Send voice-generated alerts directly to team chats."
              delay="0.3"
            />

            {/* card two */}
            <EcosystemCard
              icon="/images/icons/discord.svg"
              alt="Rozdi Agency"
              title="Discord"
              description="Send voice-generated alerts directly to team chats."
              delay="0.4"
            />
            {/* card three */}
            <EcosystemCard
              icon="/images/icons/telegram.svg"
              alt="Rozdi Agency"
              title="Telegram"
              description="Send voice-generated alerts directly to team chats."
              delay="0.5"
            />
            {/* card four */}
            <EcosystemCard
              icon="/images/icons/messenger-dark.svg"
              alt="Rozdi Agency"
              title="Messenger"
              description="Send voice-generated alerts directly to team chats."
              delay="0.6"
            />
            {/* card five */}
            <EcosystemCard
              icon="/images/icons/duolingo.svg"
              alt="Rozdi Agency"
              title="Duolingo"
              description="Send voice-generated alerts directly to team chats."
              delay="0.7"
            />
            {/* card six */}
            <EcosystemCard
              icon="/images/icons/skype.svg"
              alt="Rozdi Agency"
              title="Skype"
              description="Send voice-generated alerts directly to team chats."
              delay="0.8"
            />
          </div>
        </div>

        <div data-opai-animate data-delay="0.9" className="mt-19 text-center">
          <LinkPrimary buttonText="See all integrations" href="/integration" />
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
