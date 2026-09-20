import React, { useState } from 'react';
import { destinationsData, popularDomesticDestinations } from '../data/destinationsData';
import './PopularDestinations.css';

export default function PopularDestinations({ navigate }) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [showAllStates, setShowAllStates] = useState(false);

  const regions = ['All', 'North India', 'South India', 'West India', 'East India', 'North East', 'Islands'];

  const displayedStates = showAllStates
    ? (selectedRegion === 'All' 
        ? destinationsData 
        : destinationsData.filter(s => s.region.toLowerCase().includes(selectedRegion.toLowerCase().replace(' india', ''))))
    : (selectedRegion === 'All'
        ? popularDomesticDestinations.map(p => destinationsData.find(d => d.id === p.stateId)).filter(Boolean)
        : destinationsData.filter(s => s.region.toLowerCase().includes(selectedRegion.toLowerCase().replace(' india', ''))));

  return (
    <section id="popular-destinations" className="section-padding popular-destinations-section">
      <div className="bespoke-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">CURATED DOMESTIC HORIZONS</span>
          <h2 className="section-title">Popular Domestic Destinations</h2>
          <div className="gold-divider"></div>
          <p className="section-desc">
            Hand-selected sanctuaries across the Indian subcontinent. Tap any state to discover its bespoke cities, private heritage estates, and individual regional themes.
          </p>
        </div>

        {/* Region Filter Bar */}
        <div className="destination-filters" role="tablist" aria-label="Region filters">
          {regions.map((reg) => (
            <button
              key={reg}
              className={`filter-btn ${selectedRegion === reg ? 'active' : ''}`}
              onClick={() => setSelectedRegion(reg)}
              role="tab"
              aria-selected={selectedRegion === reg}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="destinations-grid">
          {displayedStates.map((state) => {
            const cityNames = state.cities.map(c => c.name).slice(0, 3).join(', ');
            return (
              <div 
                key={state.id}
                className="destination-card bespoke-card"
                onClick={() => navigate('state', state.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate('state', state.id);
                  }
                }}
                aria-label={`Explore bespoke experiences in ${state.name}`}
              >
                <div className="dest-image-wrapper">
                  <img 
                    src={state.bannerImage} 
                    alt={`Scenic view of ${state.name}`} 
                    loading="lazy"
                    className="dest-image"
                  />
                  <div className="dest-image-scrim"></div>
                  <div className="dest-badge-container">
                    <span 
                      className="dest-theme-badge"
                      style={{ 
                        backgroundColor: state.theme.badgeBg, 
                        borderColor: state.theme.badgeBorder,
                        color: state.theme.accent 
                      }}
                    >
                      {state.cities.length} Cities / Destinations
                    </span>
                  </div>
                </div>

                <div className="dest-card-body">
                  <div className="dest-region-tag">{state.region}</div>
                  <h3 className="dest-card-title">{state.name}</h3>
                  <p className="dest-card-cities">
                    <span className="dest-cities-label">Featuring:</span> {cityNames}{state.cities.length > 3 ? ` & ${state.cities.length - 3} more` : ''}
                  </p>
                  <p className="dest-card-vibe">{state.vibe}</p>

                  <div className="dest-card-footer">
                    <span className="dest-explore-link" style={{ color: state.theme.accent }}>
                      Explore State & Cities
                      <span className="dest-arrow-symbol" aria-hidden="true">›</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle All 28 States & UTs Button */}
        <div className="view-all-states-cta">
          <button 
            className="btn-outline view-all-btn"
            onClick={() => setShowAllStates(!showAllStates)}
          >
            {showAllStates 
              ? "Show Featured Highlights" 
              : "Browse All 28 Domestic States & Union Territories"}
          </button>
        </div>
      </div>
    </section>
  );
}
