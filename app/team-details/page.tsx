import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/shared/CTA";
import DetailsHero from "@/components/team/DetailsHero";
import DetailsCoreValues from "@/components/team/DetailsCoreValues";

const TeamDetailsPage = () => {
  return (
    <>
      <Header />
      <main className="bg-background-8">
        <DetailsHero />
        <DetailsCoreValues />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default TeamDetailsPage;
