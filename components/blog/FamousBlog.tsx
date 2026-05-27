import BlogCard from "@/components/shared/BlogCard";

const FamousBlog = () => {
  const blogs = [
    {
      image: "/images/opai-img-16.png",
      date: "July 5, 2025",
      badge1: "Press",
      badge2: "Blog",
      title: "Understanding Activation Functions The Heart of Neural",
    },
    {
      image: "/images/opai-img-17.png",
      date: "July 6, 2025",
      badge1: "Tech",
      badge2: "Blog",
      title: "Backpropagation Explained: How Neural Networks Learn",
    },
    {
      image: "/images/opai-img-18.png",
      date: "July 7, 2025",
      badge1: "Tech",
      badge2: "Blog",
      title: "Convolutional Neural Networks for Image Recognition",
    },
    {
      image: "/images/opai-img-19.png",
      date: "July 8, 2025",
      badge1: "Insights",
      badge2: "Blog",
      title: "Transfer Learning: Leveraging Pre-trained Neural Networks",
    },
  ];

  return (
    <section className="lp:py-39! py-20 md:py-28">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div>
            <h2
              data-text-reveal
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
            >
              Don’t miss this
            </h2>
            <p
              data-text-reveal
              data-delay="0.2"
              className="font-inter-tight text-tagline-2 text-background-13/50 text-center font-normal"
            >
              5 AI Tools Every Business Needs to Streamline Operations
            </p>
          </div>
          <div className="grid grid-cols-12 items-center justify-center gap-y-4 sm:gap-4">
            {blogs.map((blog, index) => (
              <div
                key={index}
                data-opai-animate
                data-delay={0.1 + index * 0.1}
                className="col-span-12 md:col-span-6"
              >
                <BlogCard
                  image={blog.image}
                  date={blog.date}
                  imgClass="!h-[370px]"
                  badge1={blog.badge1}
                  badge2={blog.badge2}
                  title={blog.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamousBlog;
