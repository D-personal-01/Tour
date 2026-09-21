import React, { useState } from 'react';
import { packagesData } from '../data/packagesData';
import './FeaturedPackages.css';

export default function FeaturedPackages({ navigate, onOpenEnquiry }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Family & Heritage', 'Honeymoon & Romance', 'Solo Explorer & Wilderness'];

  const filteredPackages = activeFilter === 'All'
    ? packagesData
    : packagesData.filter(pkg => {
        if (activeFilter === 'Family & Heritage') return pkg.category.includes('Family') || pkg.category.includes('Heritage');
        if (activeFilter === 'Honeymoon & Romance') return pkg.category.includes('Honeymoon') || pkg.category.includes('Wellness') || pkg.category.includes('Coastal');
        if (activeFilter === 'Solo Explorer & Wilderness') return pkg.category.includes('Solo') || pkg.category.includes('Adventure');
        return true;
      });

  return (
    <section id="featured-packages" className="section-padding featured-packages-section">
      <div className="bespoke-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">SIGNATURE CURATIONS</span>
          <h2 className="section-title">Featured & Best Selling Packages</h2>
          <div className="gold-divider"></div>
          <p className="section-desc">
            Hand-picked luxury itineraries, fully customizable to your pace and preferences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="packages-filters" role="tablist">
          {filters.map(f => (
            <button
              key={f}
              className={`package-filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
              role="tab"
              aria-selected={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="package-card bespoke-card">
              <div className="package-image-container">
                <img src={pkg.image} alt={pkg.title} loading="lazy" className="package-img" />
                <div className="package-scrim"></div>
                <div className="package-duration-pill">{pkg.duration}</div>
                <div className="package-category-pill">{pkg.category}</div>
              </div>

              <div className="package-body">
                <div className="package-state-indicator">
                  <span className="package-pin">📍</span> {pkg.stateName}
                </div>
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-subtitle">{pkg.subtitle}</p>

                {/* Highlights List */}
                <div className="package-highlights">
                  <span className="highlights-header">Signature Highlights:</span>
                  <ul>
                    {pkg.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Inclusions Tags */}
                <div className="package-inclusions">
                  {pkg.inclusions.map((inc, i) => (
                    <span key={i} className="inc-tag">{inc}</span>
                  ))}
                </div>

                {/* Pricing & Booking Action */}
                <div className="package-footer">
                  <div className="package-pricing">
                    <span className="price-tag">{pkg.price}</span>
                    <span className="price-sub">Customizable on inquiry</span>
                  </div>

                  <div className="package-actions">
                    <button 
                      className="btn-outline view-state-btn"
                      onClick={() => navigate('state', pkg.stateId)}
                      title={`Explore all cities in ${pkg.stateName}`}
                    >
                      Explore State
                    </button>
                    <button 
                      className="btn-primary book-pkg-btn"
                      onClick={() => onOpenEnquiry({ packageTitle: pkg.title, destination: pkg.stateName })}
                    >
                      Inquire Package
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
