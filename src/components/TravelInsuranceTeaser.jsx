import React from 'react';
import './TravelInsuranceTeaser.css';

export default function TravelInsuranceTeaser({ navigate }) {
  return (
    <section className="section-padding insurance-teaser-section">
      <div className="bespoke-container">
        <div className="insurance-teaser-box bespoke-card">
          <div className="teaser-left-content">
            <div className="teaser-badge">COMPREHENSIVE TRAVEL PROTECTION</div>
            <h2 className="teaser-headline">
              Compare Tailored Domestic Travel Insurance
            </h2>
            <p className="teaser-description">
              True luxury is complete peace of mind. Whether you are trekking high passes in Ladakh, cruising quiet backwaters with family, or embarking on a sacred pilgrimage, our insurance plans provide cashless medical assistance across 6,500+ hospitals, flight delay relief, and emergency baggage protection.
            </p>

            <div className="teaser-features-row">
              <div className="teaser-feat">
                <span className="teaser-feat-icon">🛡</span>
                <div>
                  <strong>Cashless Medical</strong>
                  <span>Up to ₹25 Lakhs coverage</span>
                </div>
              </div>
              <div className="teaser-feat">
                <span className="teaser-feat-icon">✈</span>
                <div>
                  <strong>Flight & Baggage Delay</strong>
                  <span>Instant claim reimbursement</span>
                </div>
              </div>
              <div className="teaser-feat">
                <span className="teaser-feat-icon">🏔</span>
                <div>
                  <strong>Adventure Rider</strong>
                  <span>High-altitude evacuation</span>
                </div>
              </div>
            </div>

            <div className="teaser-action-wrapper">
              <button 
                className="btn-primary compare-insurance-btn"
                onClick={() => navigate('insurance')}
              >
                Compare Travel Insurance Plans
                <span className="btn-arrow" aria-hidden="true">→</span>
              </button>
              <span className="teaser-guarantee">Instant digital policy delivery within 5 minutes</span>
            </div>
          </div>

          <div className="teaser-right-graphic">
            <div className="insurance-preview-card">
              <div className="preview-card-header">
                <span className="preview-card-type">Four Dedicated Tiers</span>
                <span className="preview-card-rate">From ₹149 / day</span>
              </div>
              <ul className="preview-plans-list">
                <li>
                  <span className="plan-dot"></span>
                  <span className="plan-name">Domestic Explorer</span>
                  <span className="plan-fit">Solo & Couples</span>
                </li>
                <li className="highlight-plan">
                  <span className="plan-dot active"></span>
                  <span className="plan-name">Family Haven Comprehensive</span>
                  <span className="plan-fit">Multi-Generation</span>
                </li>
                <li>
                  <span className="plan-dot"></span>
                  <span className="plan-name">Senior Leisure Supreme</span>
                  <span className="plan-fit">Age 60+ Care</span>
                </li>
                <li>
                  <span className="plan-dot"></span>
                  <span className="plan-name">Himalayan Adventure Rider</span>
                  <span className="plan-fit">Trekking & Skiing</span>
                </li>
              </ul>
              <button 
                className="btn-outline view-matrix-btn"
                onClick={() => navigate('insurance')}
              >
                View Side-by-Side Matrix
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
