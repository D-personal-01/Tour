import React, { useState, useEffect } from 'react';
import { insurancePlans, insuranceComparisonRows } from '../data/insuranceData';
import './InsurancePage.css';

export default function InsurancePage({ navigate, onOpenEnquiry }) {
  const [selectedPlanId, setSelectedPlanId] = useState('family-haven');
  const [travelerCount, setTravelerCount] = useState(2);
  const [tripDays, setTripDays] = useState(6);
  const [selectedFaq, setSelectedFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const activePlan = insurancePlans.find(p => p.id === selectedPlanId) || insurancePlans[0];

  // Dynamic Live Premium Calculation
  const baseRate = activePlan.baseDailyRate * travelerCount * tripDays;
  const gstTax = Math.round(baseRate * 0.18);
  const totalPremium = baseRate + gstTax;

  const faqs = [
    {
      q: "How does cashless hospitalization operate across India?",
      a: "Present your digital policy card at any of 6,500+ network hospitals for direct cashless admission without upfront out-of-pocket deposits."
    },
    {
      q: "Is emergency helicopter rescue included for high altitudes?",
      a: "Yes. The Adventure Rider plan includes emergency air and helicopter rescue up to ₹20 Lakhs in Ladakh, Spiti, and Himalayan passes."
    },
    {
      q: "What documentation is required for delay or baggage claims?",
      a: "Submit photos of your boarding passes, bag tags, and airline delay report (PIR) via our portal for claim processing within 48 hours."
    },
    {
      q: "Can insurance be added directly to an existing package?",
      a: "Yes. Any insurance tier can be bundled seamlessly into your customized itinerary and digital travel vouchers."
    }
  ];

  return (
    <div className="insurance-page">
      {/* Header Banner */}
      <section className="insurance-hero">
        <div className="bespoke-container">
          <nav className="insurance-breadcrumbs" aria-label="Breadcrumb">
            <button onClick={() => navigate('home')}>Home</button>
            <span className="bread-sep">/</span>
            <span className="bread-current">Travel Insurance Comparison</span>
          </nav>

          <span className="insurance-tag">UNCOMPROMISING TRAVEL CARE</span>
          <h1 className="insurance-title">Compare Domestic Travel Insurance Plans</h1>
          <div className="gold-divider"></div>
          <p className="insurance-subtext">
            Cashless medical, cancellation, baggage, and expedition protection across India.
          </p>
        </div>
      </section>

      {/* Interactive Premium Estimator & Quote Calculator */}
      <section className="section-padding calculator-section">
        <div className="bespoke-container">
          <div className="calculator-wrapper bespoke-card">
            <div className="calc-left-controls">
              <span className="calc-tag">INSTANT PREMIUM CALCULATOR</span>
              <h2 className="calc-title">Configure Your Policy Estimate</h2>
              <p className="calc-sub">
                Select your preferred coverage tier, group size, and journey duration to view transparent live premium estimates.
              </p>

              {/* Plan Picker */}
              <div className="calc-field">
                <label>1. Select Coverage Tier</label>
                <div className="plan-buttons-grid">
                  {insurancePlans.map((plan) => (
                    <button
                      key={plan.id}
                      className={`calc-plan-btn ${selectedPlanId === plan.id ? 'active' : ''}`}
                      onClick={() => setSelectedPlanId(plan.id)}
                    >
                      <span className="btn-plan-name">{plan.name}</span>
                      <span className="btn-plan-badge">{plan.badge}</span>
                      <span className="btn-plan-rate">₹{plan.baseDailyRate} / day</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders / Number Selectors */}
              <div className="calc-sliders-row">
                <div className="calc-field">
                  <label htmlFor="travelers-input">2. Number of Travelers: <strong>{travelerCount}</strong></label>
                  <input
                    id="travelers-input"
                    type="range"
                    min="1"
                    max="10"
                    value={travelerCount}
                    onChange={(e) => setTravelerCount(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="slider-limits">
                    <span>1 Solo</span>
                    <span>5 Family</span>
                    <span>10 Group</span>
                  </div>
                </div>

                <div className="calc-field">
                  <label htmlFor="days-input">3. Trip Duration: <strong>{tripDays} Days</strong></label>
                  <input
                    id="days-input"
                    type="range"
                    min="2"
                    max="30"
                    value={tripDays}
                    onChange={(e) => setTripDays(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="slider-limits">
                    <span>2 Days</span>
                    <span>15 Days</span>
                    <span>30 Days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Summary Invoice Card */}
            <div className="calc-summary-card bespoke-card">
              <div className="summary-card-header">
                <span className="summary-title">Policy Quote Estimate</span>
                <span className="summary-plan-badge">{activePlan.badge}</span>
              </div>

              <h3 className="summary-selected-name">{activePlan.name}</h3>
              <p className="summary-ideal-for">{activePlan.idealFor}</p>

              <div className="summary-breakdown">
                <div className="breakdown-line">
                  <span>Emergency Medical Cover</span>
                  <strong>{activePlan.medicalCoverage}</strong>
                </div>
                <div className="breakdown-line">
                  <span>Trip Cancellation Cover</span>
                  <strong>{activePlan.tripCancellation}</strong>
                </div>
                <div className="breakdown-line">
                  <span>Checked Baggage Loss</span>
                  <strong>{activePlan.baggageCoverage}</strong>
                </div>
                <div className="breakdown-line">
                  <span>Flight Delay Compensation</span>
                  <strong>{activePlan.flightDelay}</strong>
                </div>
                <div className="breakdown-line">
                  <span>Air / Heli Evacuation</span>
                  <strong>{activePlan.evacuation}</strong>
                </div>
                <div className="breakdown-line">
                  <span>Adventure Rider</span>
                  <strong className="accent-strong">{activePlan.adventureSports}</strong>
                </div>
              </div>

              <div className="summary-price-total">
                <div className="total-calculation">
                  <span>Base Premium ({travelerCount} travelers × {tripDays} days)</span>
                  <span>₹{baseRate.toLocaleString()}</span>
                </div>
                <div className="total-calculation">
                  <span>GST (18%)</span>
                  <span>₹{gstTax.toLocaleString()}</span>
                </div>
                <div className="grand-total-line">
                  <span>Total Premium</span>
                  <span className="grand-price">₹{totalPremium.toLocaleString()}</span>
                </div>
              </div>

              <button 
                className="btn-primary quote-action-btn"
                onClick={() => onOpenEnquiry({
                  packageTitle: `Travel Insurance: ${activePlan.name} (${tripDays} Days, ${travelerCount} Travelers)`,
                  destination: "Pan-India Travel Insurance"
                })}
              >
                Add to Bespoke Package
              </button>
              <p className="summary-guarantee">Instant digital policy delivery upon verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Matrix Table */}
      <section className="section-padding matrix-section">
        <div className="bespoke-container">
          <div className="section-header">
            <span className="section-label">DETAILED MATRIX</span>
            <h2 className="section-title">Side-by-Side Coverage Comparison</h2>
            <div className="gold-divider"></div>
            <p className="section-desc">
              Review every coverage limit side-by-side to determine which plan aligns with your family or journey style.
            </p>
          </div>

          <div className="comparison-table-wrapper bespoke-card">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="feature-col">Policy Benefit / Clause</th>
                  <th>
                    <div className="table-header-plan">
                      <span>Domestic Explorer</span>
                      <small>From ₹149 / day</small>
                    </div>
                  </th>
                  <th className="recommended-col">
                    <div className="table-header-plan">
                      <span className="rec-pill">Most Popular</span>
                      <span>Family Haven</span>
                      <small>From ₹349 / day</small>
                    </div>
                  </th>
                  <th>
                    <div className="table-header-plan">
                      <span>Senior Leisure</span>
                      <small>From ₹429 / day</small>
                    </div>
                  </th>
                  <th>
                    <div className="table-header-plan">
                      <span>Adventure Rider</span>
                      <small>From ₹499 / day</small>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {insuranceComparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="feature-cell">{row.feature}</td>
                    <td>{row.domestic}</td>
                    <td className="recommended-cell">{row.family}</td>
                    <td>{row.senior}</td>
                    <td>{row.adventure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verified FAQs Section */}
      <section className="section-padding insurance-faq-section">
        <div className="bespoke-container">
          <div className="section-header">
            <span className="section-label">REAL ADVISORY</span>
            <h2 className="section-title">Frequently Asked Insurance Questions</h2>
            <div className="gold-divider"></div>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item bespoke-card ${selectedFaq === idx ? 'open' : ''}`}
                onClick={() => setSelectedFaq(selectedFaq === idx ? -1 : idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="faq-toggle-icon">{selectedFaq === idx ? '−' : '+'}</span>
                </div>
                {selectedFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="insurance-help-box bespoke-card">
            <div className="help-box-content">
              <h3>Need Custom Group or Corporate Insurance?</h3>
              <p>For delegations, destination weddings, or private aircraft charter coverage, speak directly with our licensed underwriters.</p>
            </div>
            <a href="tel:+919876543210" className="btn-primary">
              Call Insurance Desk: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
