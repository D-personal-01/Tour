import React, { useState, useEffect } from 'react';
import './B2BModal.css';

export default function B2BModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    agencyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    iataNumber: '',
    annualVolume: '10 - 25 Journeys / Year',
    preferredDestinations: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="b2b-modal-title">
      <div className="b2b-modal bespoke-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Partner Registration">
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <span className="modal-tag">TRADE ALLIANCE PROGRAM</span>
              <h2 id="b2b-modal-title" className="modal-title">Register as Travel Partner</h2>
              <p className="modal-sub">
                Gain access to contracted B2B net rates, white-labeled client collateral, and a dedicated trade concierge.
              </p>
            </div>

            <form className="b2b-form" onSubmit={handleSubmit}>
              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="b2b-agency">Agency / Company Name *</label>
                  <input
                    id="b2b-agency"
                    type="text"
                    required
                    placeholder="e.g. Apex Luxury Travels"
                    value={formData.agencyName}
                    onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="b2b-person">Key Contact Person *</label>
                  <input
                    id="b2b-person"
                    type="text"
                    required
                    placeholder="e.g. Rajesh Khurana"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="b2b-email">Business Email *</label>
                  <input
                    id="b2b-email"
                    type="email"
                    required
                    placeholder="trade@agency.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="b2b-phone">Business Phone / WhatsApp *</label>
                  <input
                    id="b2b-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row three-col">
                <div className="form-group">
                  <label htmlFor="b2b-city">Headquarter City *</label>
                  <input
                    id="b2b-city"
                    type="text"
                    required
                    placeholder="e.g. Mumbai, Dubai, London..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="b2b-iata">IATA / GST / Reg. Number</label>
                  <input
                    id="b2b-iata"
                    type="text"
                    placeholder="Optional / Trade Reg."
                    value={formData.iataNumber}
                    onChange={(e) => setFormData({ ...formData, iataNumber: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="b2b-volume">Expected Domestic Volume</label>
                  <select
                    id="b2b-volume"
                    value={formData.annualVolume}
                    onChange={(e) => setFormData({ ...formData, annualVolume: e.target.value })}
                  >
                    <option value="5 - 10 Journeys">5 - 10 Journeys / Year</option>
                    <option value="10 - 25 Journeys">10 - 25 Journeys / Year</option>
                    <option value="25 - 50 Journeys">25 - 50 Journeys / Year</option>
                    <option value="50+ Journeys">50+ Journeys (High Volume)</option>
                  </select>
                </div>
              </div>

              <div className="form-footer">
                <button type="submit" className="btn-primary submit-b2b-btn">
                  Submit Partnership Application
                </button>
                <p className="privacy-note">
                  Partner onboarding agreements are issued following verification of agency credentials.
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="inquiry-success-view">
            <div className="success-icon">✓</div>
            <h3>Application Received</h3>
            <p>
              Thank you for applying to partner with The Travel Bespoke. Our Trade Desk Manager will review your registration and send partner credentials to <strong>{formData.email}</strong> within 1 business day.
            </p>
            <button className="btn-outline" onClick={onClose}>
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
