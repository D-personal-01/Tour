import React, { useEffect, useState } from 'react';
import { getStateById, destinationsData } from '../data/destinationsData';
import { toCitySlug } from '../data/citiesData';
import './StatePage.css';

export default function StatePage({ stateId, navigate, onOpenEnquiry }) {
  const [activeBottomTab, setActiveBottomTab] = useState('holidays');
  const state = getStateById(stateId) || destinationsData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stateId]);

  const handleBottomTabClick = (tabKey) => {
    setActiveBottomTab(tabKey);
    if (tabKey === 'holidays') {
      navigate('holidays');
    } else if (tabKey === 'hotels') {
      navigate('service-hotels');
    } else if (tabKey === 'flights') {
      navigate('service-flights');
    } else if (tabKey === 'visa') {
      navigate('service-visa');
    } else if (tabKey === 'cruises') {
      navigate('service-cruises');
    }
  };

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
      {/* Exact Replica of Reference Screenshot Hero Section */}
      <section 
        className="state-hero-showcase"
        style={{
          backgroundImage: `url(${state.bannerImage})`
        }}
      >
        <div className="state-hero-scrim"></div>

        <div className="bespoke-container state-hero-container">
          <div className="state-hero-text-block">
            {/* Pill Eyebrow Badge */}
            <div className="state-eyebrow-pill">
              <span>WELCOME TO THE TRAVEL BESPOKE</span>
            </div>

            {/* Editorial Serif Headline matching screenshot */}
            <h1 className="state-main-headline">
              Where Every Journey<br />
              Begins<br />
              <span className="gold-script-phrase">With You.</span>
            </h1>

            {/* Subtitle */}
            <p className="state-main-subtext">
              Handcrafted itineraries tailored to your desires, from the palaces of {state.name} to secluded mountain passes and coastal sanctuaries beyond.
            </p>

            {/* Two Action Buttons matching screenshot */}
            <div className="state-hero-actions">
              <button 
                className="btn-pill-gold plan-journey-btn"
                onClick={() => onOpenEnquiry({ destination: state.name })}
              >
                <span>Plan My Journey</span>
                <span className="btn-arrow-icon" aria-hidden="true">→</span>
              </button>

              <button 
                className="btn-pill-glass explore-packages-btn"
                onClick={() => {
                  const el = document.getElementById('state-cities-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Destinations
              </button>
            </div>

            {/* Slider Pagination Indicator matching screenshot: gold bar + two dots */}
            <div className="hero-slider-indicator" aria-hidden="true">
              <span className="slider-bar-active"></span>
              <span className="slider-dot"></span>
              <span className="slider-dot"></span>
            </div>
          </div>

          {/* Right-hand Vertical SCROLL Indicator matching screenshot */}
          <div className="hero-scroll-indicator" aria-hidden="true">
            <span className="scroll-text">SCROLL</span>
            <div className="scroll-vertical-line"></div>
          </div>

          {/* Floating Bottom Frosted Service Pills matching screenshot */}
          <div className="hero-floating-pills" role="tablist">
            <button 
              className={`floating-pill ${activeBottomTab === 'holidays' ? 'active' : ''}`}
              onClick={() => handleBottomTabClick('holidays')}
              role="tab"
            >
              Holidays
            </button>
            <button 
              className={`floating-pill ${activeBottomTab === 'hotels' ? 'active' : ''}`}
              onClick={() => handleBottomTabClick('hotels')}
              role="tab"
            >
              Hotels
            </button>
            <button 
              className={`floating-pill ${activeBottomTab === 'flights' ? 'active' : ''}`}
              onClick={() => handleBottomTabClick('flights')}
              role="tab"
            >
              Flights
            </button>
            <button 
              className={`floating-pill ${activeBottomTab === 'visa' ? 'active' : ''}`}
              onClick={() => handleBottomTabClick('visa')}
              role="tab"
            >
              Visa
            </button>
            <button 
              className={`floating-pill ${activeBottomTab === 'cruises' ? 'active' : ''}`}
              onClick={() => handleBottomTabClick('cruises')}
              role="tab"
            >
              Cruises
            </button>
          </div>
        </div>
      </section>

      {/* State Overview & Quick Facts Bar */}
      <section className="state-summary-bar">
        <div className="bespoke-container">
          <div className="state-facts-strip bespoke-card">
            <div className="fact-item">
              <span className="fact-label">STATE / REGION</span>
              <span className="fact-value">{state.name} ({state.region})</span>
            </div>
            <div className="fact-divider"></div>
            <div className="fact-item">
              <span className="fact-label">BEST SEASON</span>
              <span className="fact-value">{state.bestSeason}</span>
            </div>
            <div className="fact-divider"></div>
            <div className="fact-item">
              <span className="fact-label">IDEAL DURATION</span>
              <span className="fact-value">{state.idealDuration}</span>
            </div>
            <div className="fact-divider"></div>
            <div className="fact-item">
              <span className="fact-label">DESTINATIONS</span>
              <span className="fact-value" style={{ color: state.theme.accent }}>
                {state.cities.length} Curated Havens
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Open, Spacious Cities & Havens Directory from pamphlet (image.png) */}
      <section id="state-cities-section" className="section-padding state-cities-showcase">
        <div className="bespoke-container">
          <div className="section-header">
            <span className="section-label" style={{ color: state.theme.accent }}>
              OFFICIAL DOMESTIC PAMPHLET DIRECTORY
            </span>
            <h2 className="section-title">
              Destinations & Cities in {state.name}
            </h2>
            <div className="gold-divider" style={{ background: state.theme.accent }}></div>
            <p className="section-desc">
              Every city below is curated directly from our official domestic itinerary network. Select any destination to customize your private chauffeur route, villa reservations, and local experiences.
            </p>
          </div>

          {/* Spacious Cities Grid */}
          <div className="spacious-cities-grid">
            {state.cities.map((city, idx) => {
              const citySlug = toCitySlug(city.name);
              return (
                <div 
                  key={idx} 
                  className="spacious-city-card bespoke-card"
                  onClick={() => navigate('city', { stateId: state.id, citySlug })}
                  style={{ cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') navigate('city', { stateId: state.id, citySlug });
                  }}
                  aria-label={`Explore ${city.name} full destination guide`}
                >
                  <div className="city-card-top">
                    <div className="city-num-badge" style={{ color: state.theme.accent, borderColor: state.theme.badgeBorder }}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="city-title-meta">
                      <h3 className="city-title">{city.name}</h3>
                      <span className="city-state-label">{state.name}</span>
                    </div>
                  </div>

                  <div className="city-highlight-banner" style={{ background: state.theme.accentMuted }}>
                    <span className="highlight-kicker" style={{ color: state.theme.accent }}>SIGNATURE HIGHLIGHT</span>
                    <p className="highlight-quote">{city.highlight}</p>
                  </div>

                  <p className="city-narrative">{city.description}</p>

                  <div className="city-meta-tags">
                    <span className="meta-tag-label">Ideal For:</span>
                    <span className="meta-tag-value">{city.bestFor}</span>
                  </div>

                  <div className="city-footer-action">
                    <button 
                      className="city-plan-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('city', { stateId: state.id, citySlug });
                      }}
                      style={{ 
                        borderColor: state.theme.accent, 
                        background: state.theme.accent, 
                        color: '#070B12', 
                        fontWeight: '700' 
                      }}
                    >
                      <span>Explore {city.name} Guide & Places</span>
                      <span className="city-arrow" aria-hidden="true">→</span>
                    </button>
                    <button 
                      className="city-inquire-quick-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenEnquiry({ destination: `${city.name}, ${state.name}` });
                      }}
                      style={{ 
                        background: 'transparent', 
                        border: 'none', 
                        color: 'var(--text-muted)', 
                        fontSize: '0.8rem', 
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        padding: '0.4rem 0',
                        display: 'inline-block',
                        marginTop: '0.5rem',
                        textAlign: 'center'
                      }}
                    >
                      Quick Enquiry
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Spacious Multi-City Combination Banner */}
          <div className="multi-city-banner bespoke-card">
            <div className="multi-city-text">
              <span className="pill-badge">CUSTOM PRIVATE ROUTE</span>
              <h3>Combine Multiple Cities Across {state.name}</h3>
              <p>
                Prefer a multi-destination route? Our senior logistics curators arrange dedicated luxury vehicles, vetted route chauffeurs, and private guides across any combination of {state.cities.map(c => c.name).slice(0, 4).join(', ')} and beyond.
              </p>
            </div>
            <button 
              className="btn-pill-gold"
              onClick={() => onOpenEnquiry({ destination: state.name })}
              style={{ background: state.theme.accent, color: '#FFFFFF' }}
            >
              Curate Multi-City Journey →
            </button>
          </div>

          {/* Quick Switcher across all 34 Domestic States & UTs */}
          <div className="state-switcher-tray">
            <h3 className="switcher-heading">Explore Other Domestic States & Union Territories</h3>
            <p className="switcher-subheading">Tap any destination to view its curated cities and dedicated theme:</p>
            
            <div className="state-switcher-pills">
              {destinationsData.map((s) => (
                <button
                  key={s.id}
                  className={`state-jump-pill ${s.id === state.id ? 'active' : ''}`}
                  onClick={() => navigate('state', s.id)}
                  style={s.id === state.id ? { background: s.theme.accent, color: '#FFFFFF', borderColor: s.theme.accent } : {}}
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
