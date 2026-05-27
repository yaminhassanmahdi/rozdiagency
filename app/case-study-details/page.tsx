import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/shared/CTA";
import DetailsHero from "@/components/case-study/DetailsHero";

const CaseStudyDetailsPage = () => {
  return (
    <>
      <Header />
      <main className="bg-background-8">
        <DetailsHero />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default CaseStudyDetailsPage;
