import Link from "next/link";
import TeamCard from "@/components/shared/TeamCard";

const Hero = () => {
  const team = [
    { image: "/images/opai-avatar-img-09.png", name: "Edward Anderson", position: "Marketing coordinator" },
    { image: "/images/opai-avatar-img-10.png", name: "Edward Anderson", position: "Marketing coordinator" },
    { image: "/images/opai-avatar-img-11.png", name: "Edward Anderson", position: "Marketing coordinator" },
    { image: "/images/opai-avatar-img-12.png", name: "Edward Anderson", position: "Marketing coordinator" },
    { image: "/images/opai-avatar-img-13.png", name: "Edward Anderson", position: "Marketing coordinator" },
    { image: "/images/opai-avatar-img-15.png", name: "Edward Anderson", position: "Marketing coordinator" },
    { image: "/images/opai-avatar-img-16.png", name: "Edward Anderson", position: "Marketing coordinator" },
    { image: "/images/opai-avatar-img-17.png", name: "Edward Anderson", position: "Marketing coordinator" },
    { image: "/images/opai-avatar-img-18.png", name: "Edward Anderson", position: "Marketing coordinator" },
  ];

  return (
    <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
      <div className="main-container">
        <div className="space-y-19">
          <div className="space-y-3 text-center">
            <h2 data-text-reveal className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal">
              The minds Behind Rozdi Agency
            </h2>
            <p data-text-reveal data-delay="0.2" className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[500px] font-normal">
              Our team brings together deep expertise in AI, design, and technology to build tools that empower your creativity and productivity.
            </p>
          </div>
          <div className="grid grid-cols-12 items-center gap-x-2 gap-y-4 md:gap-y-2">
            {team.map((member, index) => (
              <div key={index} data-opai-animate data-delay={0.1 + index * 0.1} className="col-span-12 md:col-span-6 lg:col-span-4">
                <Link href="/team-details">
                  <TeamCard image={member.image} name={member.name} position={member.position} />
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
