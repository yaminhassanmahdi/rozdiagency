import EcosystemCard from "@/components/shared/EcosystemCard";
import CTA from "@/components/shared/CTA";

export default function IntegrationPage() {
  const integrations = [
    { icon: "/images/icons/slack.svg", title: "Slack", description: "Send voice-generated alerts directly to team chats.", delay: "0.1" },
    { icon: "/images/icons/discord.svg", title: "Discord", description: "Send voice-generated alerts directly to team chats.", delay: "0.2" },
    { icon: "/images/icons/telegram.svg", title: "Telegram", description: "Send voice-generated alerts directly to team chats.", delay: "0.3" },
    { icon: "/images/icons/messenger-dark.svg", title: "Messenger", description: "Send voice-generated alerts directly to team chats.", delay: "0.4" },
    { icon: "/images/icons/duolingo.svg", title: "Duolingo", description: "Send voice-generated alerts directly to team chats.", delay: "0.5" },
    { icon: "/images/icons/skype.svg", title: "Skype", description: "Send voice-generated alerts directly to team chats.", delay: "0.6" },
    { icon: "/images/icons/netflix.svg", title: "Netflix", description: "Send voice-generated alerts directly to team chats.", delay: "0.7" },
    { icon: "/images/icons/confluence.svg", title: "Confluence", description: "Send voice-generated alerts directly to team chats.", delay: "0.8" },
    { icon: "/images/icons/claude-ai.svg", title: "Claude", description: "Send voice-generated alerts directly to team chats.", delay: "0.9" },
    { icon: "/images/icons/behance.svg", title: "Behance", description: "Send voice-generated alerts directly to team chats.", delay: "0.1" },
    { icon: "/images/icons/edge.svg", title: "Edge", description: "Send voice-generated alerts directly to team chats.", delay: "0.2" },
    { icon: "/images/icons/skype.svg", title: "Skype", description: "Send voice-generated alerts directly to team chats.", delay: "0.3" },
    { icon: "/images/icons/pinterest.svg", title: "Pinterest", description: "Send voice-generated alerts directly to team chats.", delay: "0.4" },
    { icon: "/images/icons/discord.svg", title: "Discord", description: "Send voice-generated alerts directly to team chats.", delay: "0.5" },
    { icon: "/images/icons/jira_service_desk.svg", title: "Jira", description: "Send voice-generated alerts directly to team chats.", delay: "0.6" },
    { icon: "/images/icons/tiktok.svg", title: "TikTok", description: "Send voice-generated alerts directly to team chats.", delay: "0.7" },
    { icon: "/images/icons/safari.svg", title: "Safari", description: "Send voice-generated alerts directly to team chats.", delay: "0.8" },
    { icon: "/images/icons/mastar-card.svg", title: "Mastercard", description: "Send voice-generated alerts directly to team chats.", delay: "0.9" },
  ];

  return (
    <main className="bg-background-8">
      <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
        <div className="main-container">
          <div className="space-y-14">
            <div className="space-y-3 text-center">
              <h2
                data-text-reveal
                id="ecosystem-heading"
                className="text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-sora font-normal tracking-[-2.4px]"
              >
                Rozdi Agency works with your ecosystem
              </h2>
              <p
                data-text-reveal
                data-delay="0.2"
                className="font-inter-tight text-tagline-2 text-background-13/50 font-normal"
              >
                Rozdi Agency works with your ecosystem
              </p>
            </div>

            <div className="grid grid-cols-12 items-center justify-center gap-4 md:gap-2" role="list" aria-label="Platform integrations">
              {integrations.map((item, index) => (
                <EcosystemCard
                  key={index}
                  icon={item.icon}
                  alt={item.title}
                  title={item.title}
                  description={item.description}
                  delay={item.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
