import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/case-study/Hero';
import CTA from '@/components/shared/CTA';

export const metadata = {
  title: 'Case Study - Rozdi Agency',
  description: 'See how we\'ve delivered measurable success to our clients through our proven track record.',
};

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <main className="bg-background-8">
        <Hero />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
