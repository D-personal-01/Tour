import React, { useEffect } from 'react';
import { getCityData } from '../data/citiesData';
import './CityPage.css';

export default function CityPage({ stateId, citySlug, navigate, onOpenEnquiry }) {
  const city = getCityData(stateId, citySlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stateId, citySlug]);

  if (!city) return null;

  return (
    <div 
      className="city-destination-page"
      style={{
        '--city-accent': city.theme?.accent || '#C8A45D',
        '--city-accent-hover': city.theme?.accentHover || '#D8B878',
        '--city-accent-muted': city.theme?.accentMuted || 'rgba(200, 164, 93, 0.15)'
      }}
    >
      {/* Cinematic Hero Banner - No White Layer */}
      <section 
        className="city-hero-banner"
        style={{ backgroundImage: `url(${city.heroImage})` }}
      >
        <div className="city-hero-scrim"></div>
        <div className="bespoke-container city-hero-content">
          <nav className="city-breadcrumbs" aria-label="Breadcrumb">
            <button onClick={() => navigate('home')}>Home</button>
            <span className="bread-sep">/</span>
            <button onClick={() => navigate('holidays')}>Holidays</button>
            <span className="bread-sep">/</span>
            <button onClick={() => navigate('state', city.stateId)}>{city.stateName}</button>
            <span className="bread-sep">/</span>
            <span className="bread-current">{city.name}</span>
          </nav>

          <div className="city-eyebrow-pill">
            <span>{city.stateName.toUpperCase()} • LUXURY HAVEN GUIDE</span>
          </div>

          <h1 className="city-hero-title">{city.name}</h1>
          <div className="gold-divider" style={{ background: city.theme?.accent }}></div>
          <p className="city-hero-tagline">{city.tagline}</p>
          <p className="city-hero-desc">{city.overview}</p>

          <div className="city-hero-actions">
            <button 
              className="btn-pill-gold"
              onClick={() => onOpenEnquiry({ destination: `${city.name}, ${city.stateName}` })}
              style={{ background: city.theme?.accent }}
            >
              <span>Plan Journey to {city.name}</span>
              <span aria-hidden="true">→</span>
            </button>
            <button 
              className="btn-pill-glass"
              onClick={() => {
                const el = document.getElementById('city-places-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Favourite Places ↓
            </button>
          </div>
        </div>
      </section>

      {/* Quick Facts Strip */}
      <section className="city-quick-facts-bar">
        <div className="bespoke-container">
          <div className="city-facts-strip bespoke-card">
            <div className="c-fact-item">
              <span className="c-fact-label">BEST SEASON</span>
              <span className="c-fact-value">{city.quickFacts.bestSeason}</span>
            </div>
            <div className="c-fact-divider"></div>
            <div className="c-fact-item">
              <span className="c-fact-label">IDEAL DURATION</span>
              <span className="c-fact-value">{city.quickFacts.idealDays}</span>
            </div>
            <div className="c-fact-divider"></div>
            <div className="c-fact-item">
              <span className="c-fact-label">REGION & STATE</span>
              <span className="c-fact-value">{city.stateName} ({city.region})</span>
            </div>
            <div className="c-fact-divider"></div>
            <div className="c-fact-item">
              <span className="c-fact-label">TRAVEL VIBE</span>
              <span className="c-fact-value" style={{ color: city.theme?.accent }}>
                {city.quickFacts.vibe}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Most Favourite Places & Key Attractions */}
      <section id="city-places-section" className="section-padding city-places-showcase">
        <div className="bespoke-container">
          <div className="section-header">
            <span className="section-label" style={{ color: city.theme?.accent }}>
              ICONIC LANDMARKS & SECRET SPOTS
            </span>
            <h2 className="section-title">Most Favourite Places in {city.name}</h2>
            <div className="gold-divider" style={{ background: city.theme?.accent }}></div>
            <p className="section-desc">
              Every landmark below is handpicked by our senior destination scouts, complete with insider visiting hours and private chauffeur routing.
            </p>
          </div>

          <div className="city-places-grid">
            {city.favouritePlaces.map((place, idx) => (
              <div key={idx} className="place-card bespoke-card">
                <div className="place-media-box">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    loading="lazy" 
                    className="place-photo"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                  <div className="place-photo-scrim"></div>
                  <span className="place-num-tag" style={{ color: city.theme?.accent }}>
                    0{idx + 1}
                  </span>
                  <span className="place-category-badge">{place.category}</span>
                </div>

                <div className="place-content-box">
                  <h3 className="place-name">{place.name}</h3>
                  <div className="place-highlight-quote" style={{ background: city.theme?.accentMuted }}>
                    <span className="quote-star">★</span>
                    <p>{place.highlight}</p>
                  </div>

                  <p className="place-desc">{place.description}</p>

                  <div className="place-timing-row">
                    <span className="timing-icon">🕒</span>
                    <span className="timing-text"><strong>Best Time:</strong> {place.bestTime}</span>
                  </div>

                  <div className="place-insider-tip">
                    <span className="tip-badge">CONCIERGE TIP</span>
                    <p>{place.tip}</p>
                  </div>

                  <button 
                    className="place-inquire-btn"
                    onClick={() => onOpenEnquiry({ destination: `${place.name} (${city.name})` })}
                    style={{ borderColor: city.theme?.accent }}
                  >
                    <span>Inquire Experience Here</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Signature Bespoke Experiences */}
      <section className="section-padding city-experiences-section">
        <div className="bespoke-container">
          <div className="section-header">
            <span className="section-label" style={{ color: city.theme?.accent }}>
              PRIVATE SIGNATURE ACTIVITIES
            </span>
            <h2 className="section-title">Bespoke Experiences in {city.name}</h2>
            <div className="gold-divider" style={{ background: city.theme?.accent }}></div>
            <p className="section-desc">
              Privileged access, private historians, and curated moments reserved exclusively for your travel party.
            </p>
          </div>

          <div className="city-experiences-grid">
            {city.experiences.map((exp, idx) => (
              <div key={idx} className="experience-card bespoke-card">
                <div className="exp-index" style={{ color: city.theme?.accent }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-desc">{exp.desc}</p>
                <div className="exp-perk-badge" style={{ background: city.theme?.accentMuted, color: city.theme?.accent }}>
                  ✓ 100% Private & Fully Chauffeur-Assisted
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Curated Stays & Havens */}
      <section className="section-padding city-stays-section">
        <div className="bespoke-container">
          <div className="section-header">
            <span className="section-label" style={{ color: city.theme?.accent }}>
              HANDPICKED HOSPITALITY
            </span>
            <h2 className="section-title">Curated Stays & Estates in {city.name}</h2>
            <div className="gold-divider" style={{ background: city.theme?.accent }}></div>
            <p className="section-desc">
              Preferred partner tariffs, complimentary suite upgrades, and VIP amenities secured through our senior concierge network.
            </p>
          </div>

          <div className="city-stays-grid">
            {city.curatedStays.map((stay, idx) => (
              <div key={idx} className="stay-card bespoke-card">
                <div className="stay-type-badge">{stay.type}</div>
                <h3 className="stay-name">{stay.name}</h3>
                <p className="stay-highlight"><strong>Signature Perk:</strong> {stay.highlight}</p>
                <button 
                  className="stay-book-btn"
                  onClick={() => onOpenEnquiry({ packageTitle: `${stay.name} (${city.name})` })}
                  style={{ color: city.theme?.accent }}
                >
                  Reserve Preferred Tariff →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Custom Concierge Itinerary Planner CTA */}
      <section className="city-cta-section">
        <div className="bespoke-container">
          <div className="city-custom-banner bespoke-card">
            <div className="city-banner-text">
              <span className="pill-badge" style={{ background: city.theme?.accentMuted, color: city.theme?.accent }}>
                TAILORED CHAUFFEUR ROUTE
              </span>
              <h3>Ready to Experience {city.name}?</h3>
              <p>
                Our senior itinerary curators will coordinate luxury vehicles, palace room allocations, and private guides across {city.name} and the surrounding destinations in {city.stateName}.
              </p>
            </div>
            <button 
              className="btn-pill-gold banner-cta-btn"
              onClick={() => onOpenEnquiry({ destination: `${city.name}, ${city.stateName}` })}
              style={{ background: city.theme?.accent }}
            >
              Curate My {city.name} Journey →
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Sister Cities Navigator in Same State */}
      {city.sisterCities.length > 0 && (
        <section className="section-padding sister-cities-section">
          <div className="bespoke-container">
            <div className="sister-cities-header">
              <h3>Explore Other Havens in {city.stateName}</h3>
              <p>Combine multiple destinations on a single chauffeured itinerary:</p>
            </div>

            <div className="sister-cities-pills">
              {city.sisterCities.map((sc, i) => (
                <button
                  key={i}
                  className="sister-city-pill bespoke-card"
                  onClick={() => navigate('city', { stateId: city.stateId, citySlug: sc.slug })}
                >
                  <span className="sc-name">{sc.name}</span>
                  <span className="sc-tag">{sc.bestFor.split(',')[0]}</span>
                  <span className="sc-arrow">→</span>
                </button>
              ))}
            </div>

            <div className="return-state-cta">
              <button 
                className="btn-pill-glass"
                onClick={() => navigate('state', city.stateId)}
              >
                ← Back to All {city.stateName} Destinations
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
