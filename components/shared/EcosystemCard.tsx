interface EcosystemCardProps {
  icon: string;
  alt: string;
  title: string;
  description: string;
  delay?: string;
}

const EcosystemCard = ({ icon, alt, title, description, delay = "0.1" }: EcosystemCardProps) => (
  <div
    data-opai-animate
    data-delay={delay}
    className="col-span-12 space-y-2 rounded-3xl bg-white p-5 md:col-span-6 lg:col-span-4 lg:p-6 xl:p-8"
  >
    <div
      className="flex flex-col items-center justify-center gap-x-3 gap-y-3 md:flex-row md:justify-start md:gap-y-0"
    >
      <span className="bg-background-8 flex size-[72px] items-center justify-center rounded-3xl p-2">
        <figure
          className="flex size-14 items-center justify-center overflow-hidden rounded-[20px] bg-white"
        >
          <img src={icon.startsWith('.') ? icon.substring(1) : icon} alt={alt} className="size-[34px]" />
        </figure>
      </span>
      <h3 className="font-inter-tight text-tagline-1 font-medium text-black">{title}</h3>
    </div>

    <p
      className="text-background-13/60 text-tagline-2 mx-auto max-w-[200px] text-center font-normal md:mx-0 md:text-left"
    >
      {description}
    </p>
  </div>
);

export default EcosystemCard;
