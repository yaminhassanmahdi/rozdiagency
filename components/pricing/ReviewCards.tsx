import TestimonialCard from "@/components/shared/TestimonialCard";

const ReviewCards = () => {
  const reviews = [
    {
      content: "Rozdi's analytics tools cut our reporting time by 70%. We now get insights in minutes instead of days.",
      image: "/images/opai-avatar-img-275.png",
      alt: "Jordan Smith, Data Analyst at FinServe",
      name: "Jordan Smith",
      position: "Data Analyst, FinServe",
      className: "bg-white",
      quoteClass: "text-background-13/90",
      nameClass: "text-black",
      positionClass: "text-background-13/60",
    },
    {
      content: "Our support tickets dropped by 40% after deploying their AI chatbot. Customer satisfaction is at an all-time high.",
      image: "/images/opai-avatar-img-276.png",
      alt: "Mia Thompson, Chief Operations Officer at Nexora",
      name: "Mia Thompson",
      position: "Chief Operations Officer, Nexora",
      className: "bg-white",
      quoteClass: "text-background-13/90",
      nameClass: "text-black",
      positionClass: "text-background-13/60",
    },
    {
      content: "The custom NLP pipeline they built has transformed how we handle feedback. Response times and accuracy are outstanding.",
      image: "/images/opai-avatar-img-03.png",
      alt: "Alex Johnson, Customer Experience Lead at BrandFlow",
      name: "Alex Johnson",
      position: "Customer Experience Lead, BrandFlow",
      className: "bg-white",
      quoteClass: "text-background-13/90",
      nameClass: "text-black",
      positionClass: "text-background-13/60",
    },
    {
      content: "From inventory forecasting to personalized recommendations, Rozdi Agency delivered exactly what we needed. ROI within 3 months.",
      image: "/images/opai-avatar-img-274.png",
      alt: "Sarah Chen, Founder at ShopLuxe",
      name: "Sarah Chen",
      position: "Founder, ShopLuxe",
      className: "bg-background-1",
      quoteClass: "text-white/90",
      nameClass: "text-white",
      positionClass: "text-white/60",
    },
  ];

  return (
    <section className="lp:py-39! py-20 md:py-28">
      <div className="main-container">
        <div className="space-y-19">
          <h2
            data-text-reveal
            id="testimonials-heading"
            className="text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-sora text-center font-normal"
          >
            What our clients say
          </h2>

          <div className="grid grid-cols-12 items-center justify-center gap-4 xl:gap-2">
            {reviews.map((review, index) => (
              <div
                key={index}
                data-opai-animate
                data-delay={0.1 + index * 0.1}
                className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
              >
                <TestimonialCard
                  content={review.content}
                  image={review.image}
                  alt={review.alt}
                  name={review.name}
                  position={review.position}
                  className={review.className}
                  quoteClass={review.quoteClass}
                  nameClass={review.nameClass}
                  positionClass={review.positionClass}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;
