import React, { useState, useEffect } from 'react';
import { destinationsData } from '../data/destinationsData';
import { packagesData } from '../data/packagesData';
import './HolidaysPage.css';

export default function HolidaysPage({ navigate, onOpenEnquiry }) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const regions = ['All', 'North India', 'South India', 'West India', 'East India', 'North East', 'Islands'];
  const travelStyles = ['All', 'Family Heritage', 'Honeymoon & Romance', 'Wilderness & Safaris', 'Sacred & Cultural'];

  const filteredStates = destinationsData.filter(state => {
    if (selectedRegion !== 'All' && state.region !== selectedRegion) return false;
    return true;
  });

  const filteredPackages = packagesData.filter(pkg => {
    if (selectedStyle === 'All') return true;
    if (selectedStyle === 'Family Heritage') return pkg.category.includes('Family') || pkg.category.includes('Heritage');
    if (selectedStyle === 'Honeymoon & Romance') return pkg.category.includes('Honeymoon') || pkg.category.includes('Coastal');
    if (selectedStyle === 'Wilderness & Safaris') return pkg.category.includes('Adventure') || pkg.category.includes('Solo');
    if (selectedStyle === 'Sacred & Cultural') return pkg.category.includes('Heritage') || pkg.category.includes('Spiritual');
    return true;
  });

  return (
    <div className="holidays-page">
      {/* Cinematic Hero Section - No white layer */}
      <section className="holidays-hero-banner">
        <div className="holidays-hero-overlay"></div>
        <div className="bespoke-container holidays-hero-content">
          <nav className="holidays-breadcrumbs" aria-label="Breadcrumb">
            <button onClick={() => navigate('home')}>Home</button>
            <span className="bread-sep">/</span>
            <span className="bread-current">Curated Domestic Holidays</span>
          </nav>

          <span className="holidays-tag">PRIVATE DOMESTIC CURATIONS</span>
          <h1 className="holidays-headline">Curated Domestic Holidays & Private Journeys</h1>
          <div className="gold-divider"></div>
          <p className="holidays-desc">
            Explore 34 Indian States and Union Territories across 152 verified destinations. Every journey is privately crafted down to royal palace suites, chauffeured transfers, and personal naturalist guides.
          </p>

          <div className="holidays-hero-actions">
            <button 
              className="btn-pill-gold"
              onClick={() => onOpenEnquiry({ service: 'Holidays' })}
            >
              Plan a Custom Holiday →
            </button>
            <button 
              className="btn-pill-glass"
              onClick={() => {
                const el = document.getElementById('destinations-catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore 152 Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Region & Style Filter Strip */}
      <section id="destinations-catalog" className="section-padding holidays-directory-section">
        <div className="bespoke-container">
          <div className="section-header">
            <span className="section-label">DOMESTIC DESTINATIONS</span>
            <h2 className="section-title">Explore All 34 States & Territories</h2>
            <div className="gold-divider"></div>
            <p className="section-desc">
              Filter by geographical zone to discover private palace retreats, mountain chalets, and secluded island lagoons.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="holidays-filter-bar" role="tablist">
            {regions.map(r => (
              <button
                key={r}
                className={`holiday-filter-pill ${selectedRegion === r ? 'active' : ''}`}
                onClick={() => setSelectedRegion(r)}
                role="tab"
                aria-selected={selectedRegion === r}
              >
                {r}
              </button>
            ))}
          </div>

          {/* States Grid */}
          <div className="states-showcase-grid">
            {filteredStates.map(state => (
              <div 
                key={state.id} 
                className="state-directory-card bespoke-card"
                style={{
                  '--card-accent': state.theme.accent,
                  '--card-accent-muted': state.theme.accentMuted
                }}
              >
                <div className="state-card-media">
                  <img src={state.bannerImage} alt={state.name} loading="lazy" className="state-card-img" />
                  <div className="state-card-scrim"></div>
                  <div className="state-region-badge">{state.region}</div>
                  <div className="state-duration-badge">{state.idealDuration}</div>
                </div>

                <div className="state-card-body">
                  <h3 className="state-card-name">{state.name}</h3>
                  <p className="state-card-tagline">{state.tagline}</p>
                  <p className="state-card-overview">{state.overview}</p>

                  <div className="state-cities-preview">
                    <span className="cities-preview-label">Featured Havens:</span>
                    <div className="cities-preview-tags">
                      {state.cities.slice(0, 4).map((c, i) => (
                        <span key={i} className="city-mini-tag">{c.name}</span>
                      ))}
                      {state.cities.length > 4 && (
                        <span className="city-more-tag">+{state.cities.length - 4} more</span>
                      )}
                    </div>
                  </div>

                  <div className="state-card-actions">
                    <button 
                      className="btn-pill-gold explore-state-btn"
                      onClick={() => navigate('state', state.id)}
                    >
                      Explore {state.cities.length} Cities →
                    </button>
                    <button 
                      className="btn-pill-glass quick-inquire-btn"
                      onClick={() => onOpenEnquiry({ destination: state.name })}
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Bespoke Packages Section */}
      <section className="section-padding holidays-packages-section">
        <div className="bespoke-container">
          <div className="section-header">
            <span className="section-label">SIGNATURE CURATIONS</span>
            <h2 className="section-title">Best Selling Bespoke Packages</h2>
            <div className="gold-divider"></div>
            <p className="section-desc">
              Priced transparently for private travel parties. Fully customizable down to hotels, dining, and daily pacing.
            </p>
          </div>

          {/* Style Filter */}
          <div className="packages-style-filters" role="tablist">
            {travelStyles.map(s => (
              <button
                key={s}
                className={`style-filter-btn ${selectedStyle === s ? 'active' : ''}`}
                onClick={() => setSelectedStyle(s)}
                role="tab"
                aria-selected={selectedStyle === s}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Packages Grid */}
          <div className="holiday-packages-grid">
            {filteredPackages.map(pkg => (
              <div key={pkg.id} className="holiday-pkg-card bespoke-card">
                <div className="pkg-media-box">
                  <img src={pkg.image} alt={pkg.title} loading="lazy" className="pkg-photo" />
                  <div className="pkg-photo-scrim"></div>
                  <span className="pkg-badge-duration">{pkg.duration}</span>
                  <span className="pkg-badge-cat">{pkg.category}</span>
                </div>

                <div className="pkg-content-box">
                  <div className="pkg-location-indicator">📍 {pkg.stateName}</div>
                  <h3 className="pkg-heading">{pkg.title}</h3>
                  <p className="pkg-summary">{pkg.subtitle}</p>

                  <div className="pkg-highlights-box">
                    <span className="hl-kicker">Signature Highlights:</span>
                    <ul>
                      {pkg.highlights.map((hl, i) => (
                        <li key={i}>{hl}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pkg-inclusions-row">
                    {pkg.inclusions.map((inc, i) => (
                      <span key={i} className="inc-pill">{inc}</span>
                    ))}
                  </div>

                  <div className="pkg-card-bottom">
                    <div className="pkg-rate-info">
                      <span className="pkg-rate-price">{pkg.price}</span>
                      <span className="pkg-rate-note">Tailored on inquiry</span>
                    </div>

                    <div className="pkg-actions-group">
                      <button 
                        className="btn-pill-glass view-state-cta"
                        onClick={() => navigate('state', pkg.stateId)}
                      >
                        All Cities
                      </button>
                      <button 
                        className="btn-pill-gold book-package-cta"
                        onClick={() => onOpenEnquiry({ packageTitle: pkg.title, destination: pkg.stateName })}
                      >
                        Inquire Package →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4 Bespoke Holiday Pillars */}
      <section className="section-padding holidays-pillars-section">
        <div className="bespoke-container">
          <div className="section-header">
            <span className="section-label">THE BESPOKE STANDARD</span>
            <h2 className="section-title">How Your Holiday is Handcrafted</h2>
            <div className="gold-divider"></div>
          </div>

          <div className="pillars-cards-grid">
            <div className="pillar-item bespoke-card">
              <div className="pillar-num">01</div>
              <h3 className="pillar-title">100% Private Vehicles</h3>
              <p className="pillar-text">
                No shared tourist buses or rushed group itineraries. Your travel party travels exclusively in sanitized luxury sedans, MPVs, or high-ground-clearance 4x4s driven by verified chauffeurs.
              </p>
            </div>

            <div className="pillar-item bespoke-card">
              <div className="pillar-num">02</div>
              <h3 className="pillar-title">Heritage Palaces & Estates</h3>
              <p className="pillar-text">
                Direct relationships with royal trusts, tea estate planters, and boutique sanctuaries provide privileged room allocations, sunset terrace dining, and complimentary upgrades.
              </p>
            </div>

            <div className="pillar-item bespoke-card">
              <div className="pillar-num">03</div>
              <h3 className="pillar-title">Dedicated Human Concierge</h3>
              <p className="pillar-text">
                From departure to return, a named senior concierge is reachable 24/7 for flight adjustments, restaurant bookings, and spontaneous itinerary changes.
              </p>
            </div>

            <div className="pillar-item bespoke-card">
              <div className="pillar-num">04</div>
              <h3 className="pillar-title">Transparent Net Tariffs</h3>
              <p className="pillar-text">
                Itemized quotes with clear tax breakdowns, vetted local guides, and zero hidden shopping kickbacks or tourist traps.
              </p>
            </div>
          </div>

          <div className="holiday-final-cta bespoke-card">
            <div className="final-cta-text">
              <h3>Have a specific domestic holiday route in mind?</h3>
              <p>Speak with our senior holiday curators in New Delhi, Mumbai, or Bengaluru.</p>
            </div>
            <button 
              className="btn-pill-gold"
              onClick={() => onOpenEnquiry({ service: 'Custom Holiday Itinerary' })}
            >
              Consult Holiday Concierge →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
