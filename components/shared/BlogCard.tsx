import Link from "next/link";
import React from "react";

interface BlogCardProps {
  image: string;
  date: string;
  badge1: string;
  badge2: string;
  title: string;
  alt?: string;
  imgClass?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  date,
  badge1,
  badge2,
  title,
  alt,
  imgClass = "",
}) => {
  return (
    <article className="group underline-hover-effect-black w-full space-y-4 rounded-3xl bg-white p-4 lg:p-6">
      <figure className={`${imgClass} h-[276px] w-full overflow-hidden rounded-2xl`}>
        <Link href="/blog-details">
          <img
            src={image}
            alt={alt || title}
            className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1"
          />
        </Link>
      </figure>

      <div className="space-y-4">
        <time
          className="font-inter-tight text-tagline-4 text-background-13/80 inline-block font-normal"
          dateTime="2025-07-05"
        >
          {date}
        </time>

        <div className="flex items-center justify-start gap-x-2">
          <div className="bg-background-13/5 text-background-13/50 font-inter-tight text-tagline-3 rounded-sm px-3 py-1 font-normal">
            {badge1}
          </div>
          <div className="bg-background-13/5 text-background-13/50 font-inter-tight text-tagline-3 rounded-sm px-3 py-1 font-normal">
            {badge2}
          </div>
        </div>

        <Link
          href="/blog-details"
          className="font-sora blog-title-black text-sora-heading-5 text-background-13/90 line-clamp-2"
        >
          <h3>{title}</h3>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
