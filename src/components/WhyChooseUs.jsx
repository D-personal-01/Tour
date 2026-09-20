import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs({ onOpenEnquiry }) {
  return (
    <section id="why-bespoke" className="section-padding why-choose-us-section">
      <div className="bespoke-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">A PROMISE SINCE 2010</span>
          <h2 className="section-title">What Makes The Travel Bespoke India's Favorite Travel Curator</h2>
          <div className="gold-divider"></div>
          <p className="section-desc">
            We do not sell pre-packaged group tours. For over 14 years, our team has curated intimate, private travel memories tailored to individual travelers, couples, and multi-generational families.
          </p>
        </div>

        {/* 3 Pillars of Audience Focus */}
        <div className="audience-focus-grid">
          <div className="audience-card bespoke-card">
            <div className="audience-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="audience-title">Crafted for Families</h3>
            <p className="audience-desc">
              Spacious private heritage suites, child-friendly safari jeeps, vetted chauffeurs, and paced itineraries that respect both grandparents and young children.
            </p>
            <div className="audience-tags">
              <span>Interconnecting Rooms</span>
              <span>Private Guides</span>
              <span>Dietary Care</span>
            </div>
          </div>

          <div className="audience-card bespoke-card featured-audience">
            <div className="audience-badge">Signature Speciality</div>
            <div className="audience-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3 className="audience-title">Crafted for Honeymoons</h3>
            <p className="audience-desc">
              Secluded pool villas in Kerala and Andaman, private dinner setups on lake terraces in Udaipur, stargazing glamping domes in Ladakh, and total discretion.
            </p>
            <div className="audience-tags">
              <span>Private Plunge Pools</span>
              <span>Sunset Charters</span>
              <span>Couples Spa</span>
            </div>
          </div>

          <div className="audience-card bespoke-card">
            <div className="audience-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
              </svg>
            </div>
            <h3 className="audience-title">Crafted for Solo Explorers</h3>
            <p className="audience-desc">
              Safe, deeply researched explorations across ancient monastic trails, living root bridges, and wildlife reserves with licensed local historians and naturalists.
            </p>
            <div className="audience-tags">
              <span>Boutique Eco-Lodges</span>
              <span>Verified Chauffeurs</span>
              <span>24/7 SOS Desk</span>
            </div>
          </div>
        </div>

        {/* Concrete Statistics & Proof Row */}
        <div className="metrics-row bespoke-card">
          <div className="metric-box">
            <span className="metric-number">2010</span>
            <span className="metric-label">Year Established</span>
            <span className="metric-sub">Over 14 years of curated travel</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <span className="metric-number">50K+</span>
            <span className="metric-label">Happy Travelers</span>
            <span className="metric-sub">Across 28 Indian States & UTs</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <span className="metric-number">100%</span>
            <span className="metric-label">Private Journeys</span>
            <span className="metric-sub">Zero shared tour buses or rushed schedules</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <span className="metric-number">24/7</span>
            <span className="metric-label">On-Trip Support</span>
            <span className="metric-sub">Dedicated human concierge assignment</span>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="why-cta-wrapper">
          <div className="why-cta-text">
            <h3>Ready for an itinerary built solely around your preferences?</h3>
            <p>Speak directly with our senior travel curators in New Delhi, Mumbai, or Bengaluru.</p>
          </div>
          <button className="btn-primary" onClick={() => onOpenEnquiry()}>
            Speak to a Concierge
          </button>
        </div>
      </div>
    </section>
  );
}
