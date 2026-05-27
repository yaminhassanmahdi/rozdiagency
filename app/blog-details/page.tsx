import React from "react";
import DetailsHero from "@/components/blog/DetailsHero";
import DetailsMarkdown from "@/components/blog/DetailsMarkdown";
import DetailsRelatedBlog from "@/components/blog/DetailsRelatedBlog";
import CTA from "@/components/shared/CTA";

export const metadata = {
  title: "Blog Details - Rozdi Agency",
};

export default function BlogDetailsPage() {
  return (
    <main className="bg-background-8">
      <DetailsHero />
      <DetailsMarkdown />
      <DetailsRelatedBlog />
      <CTA />
    </main>
  );
}
