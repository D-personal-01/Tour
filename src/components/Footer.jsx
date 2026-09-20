import React, { useState } from 'react';
import './Footer.css';

export default function Footer({ navigate, onOpenEnquiry, onOpenB2B }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterStatus('error');
      return;
    }
    setNewsletterStatus('success');
    setNewsletterEmail('');
    setTimeout(() => {
      setNewsletterStatus('');
    }, 5000);
  };

  return (
    <footer id="contact-section" className="bespoke-footer">
      {/* Top Newsletter Strip */}
      <div className="footer-newsletter-strip">
        <div className="bespoke-container newsletter-inner">
          <div className="newsletter-text">
            <span className="newsletter-tag">CURATED DISPATCHES</span>
            <h3 className="newsletter-title">Travel Inspiration Delivered Monthly</h3>
            <p className="newsletter-sub">Receive seasonal domestic insights, secret villa openings, and cultural essays directly in your inbox.</p>
          </div>

          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                aria-label="Email address for monthly travel newsletter"
                required
              />
              <button type="submit" className="btn-primary newsletter-submit-btn">
                Subscribe
              </button>
            </div>
            {newsletterStatus === 'error' && (
              <p className="newsletter-msg error">Please enter a valid email address.</p>
            )}
            {newsletterStatus === 'success' && (
              <p className="newsletter-msg success">Thank you. You are now subscribed to our monthly private dispatch.</p>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="bespoke-container footer-main-content">
        <div className="footer-columns-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <span className="logo-title">THE TRAVEL BESPOKE</span>
              <span className="logo-tagline">EST. 2010 • LUXURY CURATIONS</span>
            </div>
            <p className="footer-brand-desc">
              India's premier bespoke private travel curator since 2010. Handcrafting individual journeys for families, honeymoons, and solo explorers with dedicated on-ground care.
            </p>
            
            <div className="footer-direct-contact">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉</span>
                <a href="mailto:concierge@thetravelbespoke.com">concierge@thetravelbespoke.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Bespoke House, 42 Kasturba Gandhi Marg, Connaught Place, New Delhi 110001</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="footer-socials" aria-label="Social media channels">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow The Travel Bespoke on Facebook"
                className="social-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow The Travel Bespoke on Instagram"
                className="social-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow The Travel Bespoke on LinkedIn"
                className="social-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Watch The Travel Bespoke on YouTube"
                className="social-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="var(--bg-base)"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigate('holidays')}>Curated Domestic Holidays</button></li>
              <li><button onClick={() => navigate('service-hotels')}>Heritage Palace Stays</button></li>
              <li><button onClick={() => navigate('service-flights')}>Private Flight Concierge</button></li>
              <li><button onClick={() => navigate('service-taxis')}>Chauffeured Fleet</button></li>
              <li><button onClick={() => navigate('service-cruises')}>Solar Houseboats & Cruises</button></li>
              <li><button onClick={() => navigate('insurance')}>Travel Insurance Comparison</button></li>
              <li><button onClick={() => onOpenEnquiry()}>Custom Itinerary Design</button></li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><button onClick={() => { navigate('home'); setTimeout(() => { const el = document.getElementById('why-bespoke'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>Our Promise Since 2010</button></li>
              <li><button onClick={() => { navigate('home'); setTimeout(() => { const el = document.getElementById('travel-journal'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>Travel Journal</button></li>
              <li><button onClick={() => onOpenB2B()}>Travel Agent & B2B Portal</button></li>
              <li><button onClick={() => onOpenEnquiry({ subject: "Press Inquiry" })}>Press & Features</button></li>
              <li><button onClick={() => onOpenEnquiry({ subject: "Careers" })}>Careers with Bespoke</button></li>
            </ul>
          </div>

          {/* Support Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Support & Trust</h4>
            <ul className="footer-links">
              <li><button onClick={() => onOpenEnquiry({ subject: "24/7 Concierge Support" })}>24/7 Traveler Helpdesk</button></li>
              <li><button onClick={() => navigate('insurance')}>Insurance Claims Assistance</button></li>
              <li><button onClick={() => onOpenEnquiry({ subject: "Booking Terms" })}>Booking Terms & Conditions</button></li>
              <li><button onClick={() => onOpenEnquiry({ subject: "Privacy Policy" })}>Privacy & Data Policy</button></li>
              <li><button onClick={() => onOpenEnquiry({ subject: "Cancellation Protection" })}>Cancellation & Refund Policy</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© 2010 - 2026 The Travel Bespoke Private Limited. All rights reserved.</p>
          <div className="footer-bottom-pills">
            <span>GST Registered</span>
            <span>•</span>
            <span>Ministry of Tourism Approved Allied Partner</span>
            <span>•</span>
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
