import React, { useEffect } from 'react';
import { getStateById, destinationsData } from '../data/destinationsData';
import './StatePage.css';

export default function StatePage({ stateId, navigate, onOpenEnquiry }) {
  const state = getStateById(stateId) || destinationsData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stateId]);

  if (!state) return null;

  return (
    <div 
      className="state-experience-page" 
      style={{
        '--state-accent': state.theme.accent,
        '--state-accent-hover': state.theme.accentHover,
        '--state-accent-muted': state.theme.accentMuted,
        '--state-gradient': state.theme.gradient
      }}
    >
      {/* State Hero Banner */}
      <section 
        className="state-hero-section"
        style={{
          backgroundImage: `url(${state.bannerImage})`
        }}
      >
        <div className="state-hero-overlay"></div>
        <div className="bespoke-container state-hero-content">
          {/* Breadcrumbs */}
          <nav className="state-breadcrumbs" aria-label="Breadcrumb">
            <button onClick={() => navigate('home')}>Home</button>
            <span className="bread-sep">/</span>
            <button onClick={() => navigate('home', 'popular-destinations')}>Domestic Destinations</button>
            <span className="bread-sep">/</span>
            <span className="bread-current">{state.name}</span>
          </nav>

          <div className="state-theme-pill">
            <span className="state-region-tag">{state.region}</span>
            <span className="pill-divider">•</span>
            <span>{state.cities.length} Curated Cities & Havens</span>
          </div>

          <h1 className="state-hero-title">{state.name}</h1>
          <p className="state-hero-tagline">{state.tagline}</p>
          <div className="gold-divider" style={{ background: state.theme.accent }}></div>

          <p className="state-hero-overview">{state.overview}</p>

          {/* Quick Facts Strip */}
          <div className="state-quick-facts bespoke-card">
            <div className="fact-item">
              <span className="fact-label">BEST SEASON TO VISIT</span>
              <span className="fact-value">{state.bestSeason}</span>
            </div>
            <div className="fact-divider"></div>
            <div className="fact-item">
              <span className="fact-label">RECOMMENDED DURATION</span>
              <span className="fact-value">{state.idealDuration}</span>
            </div>
            <div className="fact-divider"></div>
            <div className="fact-item">
              <span className="fact-label">SIGNATURE VIBE</span>
              <span className="fact-value">{state.vibe}</span>
            </div>
            <div className="fact-action">
              <button 
                className="btn-primary state-plan-btn"
                onClick={() => onOpenEnquiry({ destination: state.name })}
                style={{ background: state.theme.accent, color: '#0B0F15' }}
              >
                Plan {state.name} Itinerary
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cities and Destinations Directory as specified in image.png */}
      <section className="section-padding state-cities-section">
        <div className="bespoke-container">
          <div className="section-header">
            <span className="section-label" style={{ color: state.theme.accent }}>
              VERIFIED DESTINATION CATALOG
            </span>
            <h2 className="section-title">
              Cities, Harbors & Valleys in {state.name}
            </h2>
            <div className="gold-divider" style={{ background: state.theme.accent }}></div>
            <p className="section-desc">
              Every destination listed below is part of our official domestic itinerary network. Select any location to incorporate it into your private custom route.
            </p>
          </div>

          {/* Cities Grid */}
          <div className="cities-grid">
            {state.cities.map((city, idx) => (
              <div key={idx} className="city-card bespoke-card">
                <div className="city-card-header">
                  <div className="city-number" style={{ color: state.theme.accent }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="city-title-group">
                    <h3 className="city-name">{city.name}</h3>
                    <span className="city-state-ref">{state.name}</span>
                  </div>
                </div>

                <div className="city-highlight-box" style={{ background: state.theme.accentMuted }}>
                  <span className="highlight-tag" style={{ color: state.theme.accent }}>SIGNATURE HIGHLIGHT</span>
                  <p className="highlight-text">{city.highlight}</p>
                </div>

                <p className="city-description">{city.description}</p>

                <div className="city-best-for">
                  <span className="best-for-label">Best For:</span>
                  <span className="best-for-tags">{city.bestFor}</span>
                </div>

                <div className="city-card-actions">
                  <button 
                    className="city-inquire-btn"
                    onClick={() => onOpenEnquiry({ destination: `${city.name}, ${state.name}` })}
                    style={{ borderColor: state.theme.badgeBorder }}
                  >
                    Inquire for {city.name}
                    <span className="city-btn-arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Direct CTA for Custom Route */}
          <div className="custom-route-cta bespoke-card" style={{ borderColor: state.theme.badgeBorder }}>
            <div className="custom-route-text">
              <h3>Looking to combine multiple cities in {state.name}?</h3>
              <p>
                Our private route specialists configure chauffeured transfers, luggage transit, and private guides across any combination of {state.cities.map(c => c.name).slice(0, 3).join(', ')} and beyond.
              </p>
            </div>
            <button 
              className="btn-primary" 
              onClick={() => onOpenEnquiry({ destination: state.name })}
              style={{ background: state.theme.accent, color: '#0B0F15' }}
            >
              Craft Multi-City Itinerary
            </button>
          </div>

          {/* Quick State Switcher */}
          <div className="other-states-browser">
            <h3 className="switcher-title">Explore Other Domestic States & Union Territories</h3>
            <p className="switcher-sub">Tap any state below to view its dedicated cities and regional theme:</p>
            
            <div className="states-pills-cloud">
              {destinationsData.map((s) => (
                <button
                  key={s.id}
                  className={`state-pill-btn ${s.id === state.id ? 'active' : ''}`}
                  onClick={() => navigate('state', s.id)}
                  style={s.id === state.id ? { background: s.theme.accent, color: '#0B0F15' } : {}}
                >
                  {s.name} ({s.cities.length})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
