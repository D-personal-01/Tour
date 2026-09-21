import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ currentRoute, navigate, theme, toggleTheme, onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route, sectionId) => {
    setMobileMenuOpen(false);
    if (sectionId) {
      if (currentRoute !== 'home') {
        navigate('home');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={`bespoke-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="bespoke-container navbar-inner">
        {/* Brand Logo with Circular TB Monogram matching screenshot */}
        <button 
          className="brand-logo" 
          onClick={() => handleNavClick('home')} 
          aria-label="The Travel Bespoke Home"
        >
          <div className="logo-monogram-circle">
            <span>TB</span>
          </div>
          <div className="logo-text">
            <span className="logo-title">The Travel Bespoke</span>
            <span className="logo-tagline">EXPLORE • DREAM • DISCOVER</span>
          </div>
        </button>

        {/* Desktop Navigation Links matching screenshot */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <button 
            className={`nav-link ${currentRoute === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentRoute === 'holidays' ? 'active' : ''}`}
            onClick={() => handleNavClick('holidays')}
          >
            Holidays
          </button>
          <button 
            className={`nav-link ${currentRoute === 'service-hotels' ? 'active' : ''}`}
            onClick={() => handleNavClick('service-hotels')}
          >
            Hotels
          </button>
          <button 
            className={`nav-link ${currentRoute === 'service-flights' ? 'active' : ''}`}
            onClick={() => handleNavClick('service-flights')}
          >
            Flights
          </button>
          <button 
            className={`nav-link ${currentRoute === 'service-visa' ? 'active' : ''}`}
            onClick={() => handleNavClick('service-visa')}
          >
            Visa
          </button>
          <button 
            className={`nav-link ${currentRoute === 'service-cruises' ? 'active' : ''}`}
            onClick={() => handleNavClick('service-cruises')}
          >
            Cruises
          </button>
          <button 
            className="nav-link"
            onClick={() => handleNavClick('home', 'why-bespoke')}
          >
            About
          </button>
          <button 
            className={`nav-link ${currentRoute === 'blog-detail' ? 'active' : ''}`}
            onClick={() => handleNavClick('home', 'travel-journal')}
          >
            Blog
          </button>
          <button 
            className="nav-link"
            onClick={() => handleNavClick('home', 'contact-section')}
          >
            Contact
          </button>
        </nav>

        {/* Actions: Theme Toggle & Gold Pill Enquire Now Button */}
        <div className="navbar-actions">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Day' : 'Night'} Mode`}
            title={`Switch to ${theme === 'dark' ? 'Day' : 'Night'} Mode`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <button 
            className="enquire-now-pill navbar-enquire-desktop" 
            onClick={() => onOpenEnquiry()}
          >
            Enquire Now
          </button>

          {/* Mobile Hamburger Button with 44x44px touch target (R-03) */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile drawer */}
      <div 
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Luxury Off-Canvas Mobile Drawer */}
      <div 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Navigation Menu"
      >
        <div className="mobile-drawer-header">
          <div className="brand-logo">
            <div className="logo-monogram-circle">
              <span>TB</span>
            </div>
            <div className="logo-text">
              <span className="logo-title">The Travel Bespoke</span>
              <span className="logo-tagline">EXPLORE • DREAM • DISCOVER</span>
            </div>
          </div>
          <button 
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-drawer-body">
          <div className="mobile-drawer-cta">
            <button 
              className="enquire-now-pill w-full" 
              onClick={() => { setMobileMenuOpen(false); onOpenEnquiry(); }}
            >
              Enquire Now — Custom Itinerary
            </button>
          </div>

          <div className="mobile-nav-links">
            <button className={currentRoute === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>
              <span>Home</span>
              <span className="link-arrow">→</span>
            </button>
            <button className={currentRoute === 'holidays' ? 'active' : ''} onClick={() => handleNavClick('holidays')}>
              <span>Holidays & Packages</span>
              <span className="link-arrow">→</span>
            </button>
            <button className={currentRoute === 'service-hotels' ? 'active' : ''} onClick={() => handleNavClick('service-hotels')}>
              <span>Hotels & Palaces</span>
              <span className="link-arrow">→</span>
            </button>
            <button className={currentRoute === 'service-flights' ? 'active' : ''} onClick={() => handleNavClick('service-flights')}>
              <span>Aviation & Flights</span>
              <span className="link-arrow">→</span>
            </button>
            <button className={currentRoute === 'service-visa' ? 'active' : ''} onClick={() => handleNavClick('service-visa')}>
              <span>Visa Concierge</span>
              <span className="link-arrow">→</span>
            </button>
            <button className={currentRoute === 'service-cruises' ? 'active' : ''} onClick={() => handleNavClick('service-cruises')}>
              <span>Luxury Cruises</span>
              <span className="link-arrow">→</span>
            </button>
            <button className={currentRoute === 'insurance' ? 'active' : ''} onClick={() => handleNavClick('insurance')}>
              <span>Travel Insurance</span>
              <span className="link-arrow">→</span>
            </button>
            <button onClick={() => handleNavClick('home', 'why-bespoke')}>
              <span>About Us</span>
              <span className="link-arrow">→</span>
            </button>
            <button className={currentRoute === 'blog-detail' ? 'active' : ''} onClick={() => handleNavClick('home', 'travel-journal')}>
              <span>Travel Journal</span>
              <span className="link-arrow">→</span>
            </button>
            <button onClick={() => handleNavClick('home', 'contact-section')}>
              <span>Direct Contact</span>
              <span className="link-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
