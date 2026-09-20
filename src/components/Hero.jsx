import React, { useState } from 'react';
import { destinationsData } from '../data/destinationsData';
import { toCitySlug } from '../data/citiesData';
import './Hero.css';

export default function Hero({ navigate, onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('holidays');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('5-7 Days');
  const [guestCount, setGuestCount] = useState(2);

  // Search filtering over all states and cities
  const filteredSuggestions = searchQuery.trim() === '' ? [] : destinationsData.flatMap(state => {
    const matches = [];
    if (state.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      matches.push({ type: 'State', label: state.name, stateId: state.id, region: state.region });
    }
    state.cities.forEach(city => {
      if (city.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        matches.push({ type: 'City', label: `${city.name}, ${state.name}`, stateId: state.id, cityName: city.name });
      }
    });
    return matches;
  }).slice(0, 6);

  const handleSelectSuggestion = (suggestion) => {
    setSearchQuery(suggestion.label);
    setShowSuggestions(false);
    if (suggestion.type === 'City' && suggestion.cityName) {
      navigate('city', { stateId: suggestion.stateId, citySlug: toCitySlug(suggestion.cityName) });
    } else {
      navigate('state', suggestion.stateId);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      const q = searchQuery.trim().toLowerCase();
      // Check for exact city match first
      for (const s of destinationsData) {
        const foundCity = s.cities.find(c => c.name.toLowerCase() === q);
        if (foundCity) {
          navigate('city', { stateId: s.id, citySlug: toCitySlug(foundCity.name) });
          return;
        }
      }
      // Check for partial city match
      for (const s of destinationsData) {
        const foundCity = s.cities.find(c => c.name.toLowerCase().includes(q));
        if (foundCity) {
          navigate('city', { stateId: s.id, citySlug: toCitySlug(foundCity.name) });
          return;
        }
      }
      // Check for state match
      const foundState = destinationsData.find(s => s.name.toLowerCase().includes(q));
      if (foundState) {
        navigate('state', foundState.id);
        return;
      }
    }
    onOpenEnquiry({ service: activeTab, destination: searchQuery, guests: guestCount });
  };

  return (
    <section className="bespoke-hero">
      <div className="hero-bg-overlay"></div>
      
      <div className="bespoke-container hero-content">
        <div className="pill-badge hero-header-badge">
          <span>CURATING EXTRAORDINARY JOURNEYS SINCE 2010</span>
        </div>

        <h1 className="hero-headline">
          Where Extraordinary Journeys<br />
          Begin <span className="hero-gold-script">With You.</span>
        </h1>

        <p className="hero-subtext">
          Handcrafted private itineraries tailored to your desires, from the heritage palaces of Rajasthan and misty backwaters of Kerala, to high Himalayan passes and secluded coral atolls.
        </p>

        {/* Streamlined Airy Search Module */}
        <div className="hero-search-wrapper">
          {/* Frosted Pill Service Tabs */}
          <div className="search-tabs" role="tablist">
            <button 
              className={`search-tab-pill ${activeTab === 'holidays' ? 'active' : ''}`}
              onClick={() => setActiveTab('holidays')}
              role="tab"
              aria-selected={activeTab === 'holidays'}
            >
              Holidays
            </button>
            <button 
              className={`search-tab-pill ${activeTab === 'hotels' ? 'active' : ''}`}
              onClick={() => setActiveTab('hotels')}
              role="tab"
              aria-selected={activeTab === 'hotels'}
            >
              Hotels & Palaces
            </button>
            <button 
              className={`search-tab-pill ${activeTab === 'flights' ? 'active' : ''}`}
              onClick={() => setActiveTab('flights')}
              role="tab"
              aria-selected={activeTab === 'flights'}
            >
              Flights
            </button>
            <button 
              className={`search-tab-pill ${activeTab === 'visa' ? 'active' : ''}`}
              onClick={() => setActiveTab('visa')}
              role="tab"
              aria-selected={activeTab === 'visa'}
            >
              Visa
            </button>
            <button 
              className={`search-tab-pill ${activeTab === 'cruises' ? 'active' : ''}`}
              onClick={() => setActiveTab('cruises')}
              role="tab"
              aria-selected={activeTab === 'cruises'}
            >
              Cruises
            </button>
          </div>

          {/* Form Inputs with Clean Spacious Layout */}
          <form className="search-form-grid" onSubmit={handleSearchSubmit}>
            {/* Destination Field with Live Autocomplete */}
            <div className="search-field destination-field">
              <label htmlFor="destination-input">Destination / State / City</label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <input
                  id="destination-input"
                  type="text"
                  placeholder="e.g. Udaipur, Alleppey, Leh, Coonoor..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  autoComplete="off"
                />
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="suggestions-dropdown">
                  {filteredSuggestions.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="suggestion-item"
                      onClick={() => handleSelectSuggestion(item)}
                    >
                      <span className="suggestion-type">{item.type}</span>
                      <span className="suggestion-label">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Duration Selector */}
            <div className="search-field">
              <label htmlFor="duration-select">Duration</label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <select 
                  id="duration-select"
                  value={selectedDuration} 
                  onChange={(e) => setSelectedDuration(e.target.value)}
                >
                  <option value="3-4 Days">3 - 4 Days</option>
                  <option value="5-7 Days">5 - 7 Days</option>
                  <option value="8-12 Days">8 - 12 Days</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
            </div>

            {/* Guests Counter */}
            <div className="search-field">
              <label htmlFor="guests-select">Travelers</label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <select 
                  id="guests-select"
                  value={guestCount} 
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                >
                  <option value={1}>1 Solo</option>
                  <option value={2}>2 Adults</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests (Family)</option>
                  <option value={6}>5+ Group</option>
                </select>
              </div>
            </div>

            {/* Search CTA */}
            <div className="search-field search-action">
              <button type="submit" className="btn-pill-gold search-submit-btn">
                <span>Plan My Journey</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </div>

        {/* Quick Proof Highlights */}
        <div className="hero-proof-bar">
          <div className="proof-pill">
            <span className="proof-accent">50,000+</span> Discerning Travelers Since 2010
          </div>
          <div className="proof-dot">•</div>
          <div className="proof-pill">
            <span className="proof-accent">100%</span> Private Handcrafted Itineraries
          </div>
          <div className="proof-dot">•</div>
          <div className="proof-pill">
            <span className="proof-accent">24/7</span> Dedicated On-Trip Concierge
          </div>
        </div>
      </div>
    </section>
  );
}
