import React from 'react';
import './B2BSection.css';

export default function B2BSection({ onOpenB2B }) {
  return (
    <section id="b2b-section" className="section-padding b2b-section">
      <div className="bespoke-container">
        <div className="b2b-wrapper bespoke-card">
          <div className="b2b-content">
            <div className="b2b-tag">COLLABORATE WITH US</div>
            <h2 className="b2b-headline">
              Travel Agent & B2B Partnerships
            </h2>
            <p className="b2b-desc">
              Are you an outbound travel agent, boutique agency, or corporate concierge seeking dedicated, luxury domestic handling in India? The Travel Bespoke provides white-label itineraries, contracted palace allocations, and reliable on-ground execution.
            </p>

            <div className="b2b-benefits-grid">
              <div className="b2b-benefit">
                <div className="benefit-icon">✦</div>
                <div>
                  <h4>Contracted Net Tariffs</h4>
                  <p>Guaranteed trade allocations across 5-star heritage hotels and luxury houseboats.</p>
                </div>
              </div>
              <div className="b2b-benefit">
                <div className="benefit-icon">✦</div>
                <div>
                  <h4>White-Label Itineraries</h4>
                  <p>Client-ready vouchers and proposals branded completely with your agency identity.</p>
                </div>
              </div>
              <div className="b2b-benefit">
                <div className="benefit-icon">✦</div>
                <div>
                  <h4>4-Hour Turnaround</h4>
                  <p>Dedicated B2B trade desk for rapid customized quote generation.</p>
                </div>
              </div>
              <div className="b2b-benefit">
                <div className="benefit-icon">✦</div>
                <div>
                  <h4>Zero On-Ground Friction</h4>
                  <p>Our chauffeurs and concierges safeguard your agency reputation with discretion.</p>
                </div>
              </div>
            </div>

            <div className="b2b-cta-group">
              <button 
                className="btn-primary b2b-register-btn"
                onClick={() => onOpenB2B()}
              >
                Register as Travel Partner
              </button>
              <a 
                href="mailto:b2b@thetravelbespoke.com" 
                className="btn-outline b2b-email-btn"
              >
                Email Trade Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
