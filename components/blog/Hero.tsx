import BlogCard from "@/components/shared/BlogCard";

const Hero = () => {
  const blogs = [
    {
      image: "/images/opai-img-313.png",
      date: "July 5, 2025",
      badge1: "Press",
      badge2: "Blog",
      title: "5 Ways AI is revolutionizing small businesses",
      alt: "5 Ways AI is revolutionizing small businesses",
    },
    {
      image: "/images/opai-img-314.png",
      date: "July 6, 2025",
      badge1: "Press",
      badge2: "Blog",
      title: "Predictive analytics what it is and why you need It",
      alt: "Predictive analytics what it is and why you need It",
    },
    {
      image: "/images/opai-img-315.png",
      date: "July 7, 2025",
      badge1: "Press",
      badge2: "Blog",
      title: "How to Integrate AI Seamlessly Into Your Existing Systems",
      alt: "How to Integrate AI Seamlessly Into Your Existing Systems",
    },
    {
      image: "/images/opai-img-10.png",
      date: "July 8, 2025",
      badge1: "Tech",
      badge2: "Blog",
      title: "Clean Data Pipelines for Neural Networks Training",
      alt: "Clean Data Pipelines for Neural Networks Training",
    },
    {
      image: "/images/opai-img-11.png",
      date: "July 9, 2025",
      badge1: "Tech",
      badge2: "Blog",
      title: "Scaling Deep Learning: From Prototype to Production",
      alt: "Scaling Deep Learning: From Prototype to Production",
    },
    {
      image: "/images/opai-img-12.png",
      date: "July 10, 2025",
      badge1: "Insights",
      badge2: "Blog",
      title: "Navigating the Future of Neural Networks Deployment",
      alt: "Navigating the Future of Neural Networks Deployment",
    },
    {
      image: "/images/opai-img-13.png",
      date: "July 11, 2025",
      badge1: "Tech",
      badge2: "Blog",
      title: "Growing Your AI Stack: Neural Networks Integration Best Practices",
      alt: "Growing Your AI Stack: Neural Networks Integration Best Practices",
    },
    {
      image: "/images/opai-img-14.png",
      date: "July 12, 2025",
      badge1: "Insights",
      badge2: "Blog",
      title: "Human-Centric AI: Designing Neural Networks for Trust",
      alt: "Human-Centric AI: Designing Neural Networks for Trust",
    },
    {
      image: "/images/opai-img-15.png",
      date: "July 13, 2025",
      badge1: "Tech",
      badge2: "Blog",
      title: "Automating Workflows with Neural Networks APIs",
      alt: "Automating Workflows with Neural Networks APIs",
    },
  ];

  return (
    <section className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28">
      <div className="main-container">
        <div className="space-y-[70px]">
          <h2
            data-text-reveal
            className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal"
          >
            Stay informed, stay ahead
          </h2>
          <div className="grid grid-cols-12 items-center justify-center gap-y-4 sm:gap-4">
            {blogs.map((blog, index) => (
              <div
                key={index}
                data-opai-animate
                data-delay={0.2 + index * 0.1}
                className={`col-span-12 md:col-span-6 xl:col-span-4 ${index === 8 ? 'md:col-span-12' : ''}`}
              >
                <BlogCard
                  image={blog.image}
                  date={blog.date}
                  badge1={blog.badge1}
                  badge2={blog.badge2}
                  title={blog.title}
                  alt={blog.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
