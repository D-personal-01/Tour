import React from 'react';
import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedPackages from '../components/FeaturedPackages';
import PartnersSection from '../components/PartnersSection';
import TravelInsuranceTeaser from '../components/TravelInsuranceTeaser';
import TravelJournal from '../components/TravelJournal';
import B2BSection from '../components/B2BSection';

export default function HomePage({ navigate, onOpenEnquiry, onOpenB2B }) {
  return (
    <main className="bespoke-home-page">
      {/* 1. Hero Page with Luxurious Background & Concierge Search */}
      <Hero navigate={navigate} onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Popular Domestic Destinations (categorized & interactive state cards) */}
      <PopularDestinations navigate={navigate} />

      {/* 3. What Makes Travel Bespoke India's Favorite Travel Curator */}
      <WhyChooseUs onOpenEnquiry={onOpenEnquiry} />

      {/* 4. Featured & Best Selling Packages Hand Picked For You */}
      <FeaturedPackages navigate={navigate} onOpenEnquiry={onOpenEnquiry} />

      {/* 5. Airline & Travel Partners + Genuine Traveler Quotations */}
      <PartnersSection />

      {/* 6. Travel Insurance Comparison Teaser with Button to Dedicated Page */}
      <TravelInsuranceTeaser navigate={navigate} />

      {/* 7. Travel Journal / Articles including 5 Hidden Gems in Coimbatore */}
      <TravelJournal navigate={navigate} />

      {/* 8. Travel Agent & B2B Partnership Section */}
      <B2BSection onOpenB2B={onOpenB2B} />
    </main>
  );
}
