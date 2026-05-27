import React from "react";
import Link from "next/link";
import TeamCard from "../shared/TeamCard";
import LinkPrimary from "../shared/LinkPrimary";

const Team: React.FC = () => {
  const teamMembers = [
    {
      image: "/images/opai-avatar-img-09.png",
      name: "Edward Anderson",
      position: "Marketing coordinator",
      delay: "0.3",
    },
    {
      image: "/images/opai-avatar-img-10.png",
      name: "Edward Anderson",
      position: "Marketing coordinator",
      delay: "0.4",
    },
    {
      image: "/images/opai-avatar-img-11.png",
      name: "Edward Anderson",
      position: "Marketing coordinator",
      delay: "0.5",
    },
    {
      image: "/images/opai-avatar-img-12.png",
      name: "Edward Anderson",
      position: "Marketing coordinator",
      delay: "0.1",
    },
    {
      image: "/images/opai-avatar-img-13.png",
      name: "Edward Anderson",
      position: "Marketing coordinator",
      delay: "0.2",
    },
    {
      image: "/images/opai-avatar-img-15.png",
      name: "Edward Anderson",
      position: "Marketing coordinator",
      delay: "0.3",
    },
  ];

  return (
    <section className="lp:!pb-44 pb-20 md:pb-25 lg:pb-30">
      <div className="main-container">
        <div className="space-y-19">
          <div className="space-y-3 text-center">
            <h2
              data-text-reveal
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal"
            >
              The minds Behind Rozdi Agency
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[500px] font-normal"
            >
              Our team brings together deep expertise in AI, design, and technology to build tools that
              empower your creativity and productivity.
            </p>
          </div>

          <div className="grid grid-cols-12 items-center gap-x-2 gap-y-4 md:gap-y-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-opai-animate
                data-delay={member.delay}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <Link href="/team-details">
                  <TeamCard
                    image={member.image}
                    name={member.name}
                    position={member.position}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div data-opai-animate data-delay="0.4" className="mt-20 text-center">
          <LinkPrimary
            buttonText="View more our experts"
            href="/team"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
