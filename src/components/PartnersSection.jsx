import React from 'react';
import './PartnersSection.css';

export default function PartnersSection() {
  const airlinePartners = [
    { name: "Air India", type: "Flag Carrier", note: "Priority check-in & business lounge access" },
    { name: "Vistara", type: "Full Service", note: "Extensive domestic connections and lounge access" },
    { name: "IndiGo", type: "Extensive Network", note: "Direct regional connectivity" },
    { name: "SpiceJet", type: "Regional Flights", note: "Direct island and mountain routes" }
  ];

  const hotelPartners = [
    { name: "Taj Hotels, Palaces & Safaris", type: "Royal Heritage", note: "Lake palaces and jungle safaris" },
    { name: "The Oberoi Group", type: "Luxury Villas", note: "World-renowned architecture & hospitality" },
    { name: "ITC Hotels", type: "Luxury Collection", note: "Sustainable royal gastronomy & wellness" },
    { name: "CGH Earth", type: "Authentic Experiences", note: "Holistic backwater & spice sanctuaries" }
  ];

  const quotations = [
    {
      quote: "Our Rajasthan family journey was seamless. The private palace suites and unhurried drives made it effortless for three generations.",
      author: "Dr. Vikram & Sunita Mehra",
      trip: "7-Day Royal Rajasthan Family Journey",
      city: "Bengaluru, India"
    },
    {
      quote: "The private houseboat in Kumarakom was magical. Every transfer was coordinated without a single minute of delay.",
      author: "Aditya & Priyadarshini Rao",
      trip: "6-Day Kerala Honeymoon Retreat",
      city: "Mumbai, India"
    },
    {
      quote: "Traveling solo through Ladakh felt completely secure with vetted local hosts and our private 4x4.",
      author: "Meera Sen",
      trip: "Ladakh High Passes Expedition",
      city: "Kolkata, India"
    }
  ];

  return (
    <section className="section-padding partners-section">
      <div className="bespoke-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">ESTABLISHED ALLIANCES</span>
          <h2 className="section-title">Our Airline & Hospitality Partners</h2>
          <div className="gold-divider"></div>
          <p className="section-desc">
            Direct airline and palace partnerships delivering VIP privileges and preferred access.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="partners-showcase-grid">
          <div className="partner-category-block">
            <h3 className="partner-category-title">Aviation & Domestic Air Carriers</h3>
            <div className="partner-cards-list">
              {airlinePartners.map((airline, idx) => (
                <div key={idx} className="partner-card bespoke-card">
                  <div className="partner-icon">✈</div>
                  <div className="partner-info">
                    <span className="partner-name">{airline.name}</span>
                    <span className="partner-type">{airline.type}</span>
                    <span className="partner-note">{airline.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="partner-category-block">
            <h3 className="partner-category-title">Luxury Hospitality & Heritage Palaces</h3>
            <div className="partner-cards-list">
              {hotelPartners.map((hotel, idx) => (
                <div key={idx} className="partner-card bespoke-card">
                  <div className="partner-icon">🏛</div>
                  <div className="partner-info">
                    <span className="partner-name">{hotel.name}</span>
                    <span className="partner-type">{hotel.type}</span>
                    <span className="partner-note">{hotel.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quotations / Traveler Stories */}
        <div className="traveler-quotations-wrapper">
          <div className="quotations-header">
            <span className="section-label">VOICES OF OUR TRAVELERS</span>
            <h3 className="quotations-title">In Their Own Words</h3>
          </div>

          <div className="quotations-grid">
            {quotations.map((q, idx) => (
              <div key={idx} className="quote-card bespoke-card">
                <div className="quote-mark">“</div>
                <p className="quote-text">{q.quote}</p>
                <div className="quote-author-info">
                  <span className="quote-author">{q.author}</span>
                  <span className="quote-trip">{q.trip}</span>
                  <span className="quote-city">{q.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
