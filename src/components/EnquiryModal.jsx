import React, { useState, useEffect } from 'react';
import { destinationsData } from '../data/destinationsData';
import './EnquiryModal.css';

export default function EnquiryModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: initialData.destination || '',
    travelDate: '',
    duration: initialData.duration || '5-7 Days',
    guests: initialData.guests || 2,
    travelStyle: initialData.travelStyle || 'Family Vacation',
    notes: initialData.packageTitle ? `Inquiring for package: ${initialData.packageTitle}` : ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Keyboard escape handler
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
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
      <div className="enquiry-modal bespoke-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Inquiry Window">
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <span className="modal-tag">BESPOKE JOURNEY DESIGN</span>
              <h2 id="enquiry-title" className="modal-title">Plan Your Private Itinerary</h2>
              <p className="modal-sub">
                Share your travel vision with our senior travel curators. We craft custom quotes within 24 hours with zero obligation.
              </p>
            </div>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="inq-name">Your Full Name *</label>
                  <input
                    id="inq-name"
                    type="text"
                    required
                    placeholder="e.g. Rohini Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inq-phone">Contact Phone / WhatsApp *</label>
                  <input
                    id="inq-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="inq-email">Email Address *</label>
                  <input
                    id="inq-email"
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inq-dest">Target Destination / State</label>
                  <select
                    id="inq-dest"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  >
                    <option value="">Select a Destination (or open to ideas)</option>
                    {destinationsData.map((d) => (
                      <option key={d.id} value={d.name}>{d.name} ({d.region})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row three-col">
                <div className="form-group">
                  <label htmlFor="inq-date">Approximate Travel Date</label>
                  <input
                    id="inq-date"
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inq-duration">Trip Length</label>
                  <select
                    id="inq-duration"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  >
                    <option value="3-4 Days">3 - 4 Days</option>
                    <option value="5-7 Days">5 - 7 Days</option>
                    <option value="8-12 Days">8 - 12 Days</option>
                    <option value="14+ Days">14+ Days</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inq-guests">Travelers</label>
                  <select
                    id="inq-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  >
                    <option value={1}>1 Solo Explorer</option>
                    <option value={2}>2 Adults</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests (Family)</option>
                    <option value={6}>5+ Group / Family</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inq-notes">Special Requests, Dietary Preferences, or Package Inquiries</label>
                <textarea
                  id="inq-notes"
                  rows="3"
                  placeholder="Tell us about special occasions, preferred hotel style, private guide requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <div className="form-footer">
                <button type="submit" className="btn-primary submit-inquiry-btn">
                  Submit Bespoke Inquiry
                </button>
                <p className="privacy-note">
                  🔒 Your contact information is never shared with third parties.
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="inquiry-success-view">
            <div className="success-icon">✓</div>
            <h3>Inquiry Successfully Received</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. Your dedicated Senior Travel Concierge will review your requirements and reach out via WhatsApp / Email within 24 business hours.
            </p>
            <button className="btn-outline" onClick={onClose}>
              Return to Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
