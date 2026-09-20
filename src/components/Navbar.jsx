import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ currentRoute, navigate, theme, toggleTheme, onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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

  return (
    <header className={`bespoke-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="bespoke-container navbar-inner">
        {/* Brand Logo */}
        <button 
          className="brand-logo" 
          onClick={() => handleNavClick('home')} 
          aria-label="The Travel Bespoke Home"
        >
          <div className="logo-emblem">
            <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
              <path d="M12 28 L20 10 L28 28 L20 22 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-title">THE TRAVEL BESPOKE</span>
            <span className="logo-tagline">EST. 2010 • LUXURY CURATIONS</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <button 
            className={`nav-link ${currentRoute === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home', 'popular-destinations')}
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
            className={`nav-link ${currentRoute === 'service-taxis' ? 'active' : ''}`}
            onClick={() => handleNavClick('service-taxis')}
          >
            Taxis
          </button>
          <button 
            className={`nav-link ${currentRoute === 'service-cruises' ? 'active' : ''}`}
            onClick={() => handleNavClick('service-cruises')}
          >
            Cruises
          </button>
          <button 
            className={`nav-link ${currentRoute === 'insurance' ? 'active' : ''}`}
            onClick={() => handleNavClick('insurance')}
          >
            Insurance
          </button>
          <button 
            className="nav-link"
            onClick={() => handleNavClick('home', 'why-bespoke')}
          >
            About
          </button>
          <button 
            className={`nav-link ${currentRoute === 'blog' ? 'active' : ''}`}
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
          <button 
            className="nav-link b2b-nav"
            onClick={() => handleNavClick('home', 'b2b-section')}
          >
            B2B
          </button>
        </nav>

        {/* Actions: Theme Toggle & Enquire Now */}
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
            className="btn-primary enquire-now-btn" 
            onClick={() => onOpenEnquiry()}
          >
            Enquire Now
          </button>

          {/* Mobile Hamburger Button */}
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

      {/* Mobile Off-Canvas Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <button onClick={() => handleNavClick('home', 'popular-destinations')}>Holidays</button>
          <button onClick={() => handleNavClick('service-hotels')}>Hotels & Palaces</button>
          <button onClick={() => handleNavClick('service-flights')}>Flight Concierge</button>
          <button onClick={() => handleNavClick('service-taxis')}>Chauffeured Taxis</button>
          <button onClick={() => handleNavClick('service-cruises')}>Luxury Cruises</button>
          <button onClick={() => handleNavClick('insurance')}>Travel Insurance</button>
          <button onClick={() => handleNavClick('home', 'why-bespoke')}>About Bespoke</button>
          <button onClick={() => handleNavClick('home', 'travel-journal')}>Travel Blog</button>
          <button onClick={() => handleNavClick('home', 'b2b-section')}>B2B Partners</button>
          <button onClick={() => handleNavClick('home', 'contact-section')}>Contact Concierge</button>
          <div className="mobile-drawer-cta">
            <button 
              className="btn-primary" 
              onClick={() => { setMobileMenuOpen(false); onOpenEnquiry(); }}
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
