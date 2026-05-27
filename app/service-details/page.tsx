import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/shared/CTA";
import DetailsHero from "@/components/services/DetailsHero";
import TrackRecord from "@/components/services/TrackRecord";

const ServiceDetailsPage = () => {
  return (
    <>
      <Header />
      <main className="bg-background-8">
        <DetailsHero />
        <TrackRecord />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetailsPage;
