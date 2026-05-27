interface TestimonialCardProps {
  content: string;
  image: string;
  alt: string;
  name: string;
  position: string;
  className?: string;
  quoteClass?: string;
  nameClass?: string;
  positionClass?: string;
}

const TestimonialCard = ({
  content,
  image,
  alt,
  name,
  position,
  className = "",
  quoteClass = "",
  nameClass = "",
  positionClass = "",
}: TestimonialCardProps) => (
  <div
    className={`flex h-[313px] flex-col items-start justify-between rounded-3xl px-6 py-12 lg:px-8 lg:py-14 ${className}`}
  >
    <p className={`font-inter-tight text-tagline-2 font-normal ${quoteClass}`}>
      {content}
    </p>

    <div className="flex items-center justify-center gap-x-3">
      <figure className="size-12 overflow-hidden rounded-full">
        <img
          src={image.startsWith('/') ? image : `/${image}`}
          alt={alt}
          className="size-full object-cover"
        />
      </figure>

      <div>
        <h3 className={`font-manrope text-manrope-heading-6 font-medium ${nameClass}`}>{name}</h3>
        <p className={`font-inter-tight text-tagline-3 font-normal ${positionClass}`}>{position}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
