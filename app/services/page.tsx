import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/services/Hero';
import TrackRecord from '@/components/home/TrackRecord';
import CTA from '@/components/shared/CTA';

export const metadata = {
  title: 'Services - Rozdi Agency',
  description: 'Centralized technology and digital transformation solutions designed to help your business grow smarter while reducing operational costs.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-background-8">
        <Hero />
        <TrackRecord />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
