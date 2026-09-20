import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import EnquiryModal from './components/EnquiryModal';
import B2BModal from './components/B2BModal';

import HomePage from './pages/HomePage';
import StatePage from './pages/StatePage';
import InsurancePage from './pages/InsurancePage';
import BlogDetailPage from './pages/BlogDetailPage';
import ServicePage from './pages/ServicePage';

export default function App() {
  const [route, setRoute] = useState('home');
  const [selectedStateId, setSelectedStateId] = useState('rajasthan');
  const [theme, setTheme] = useState(() => {
    // Default to 'light' theme for open, spacious aesthetic
    const saved = localStorage.getItem('bespoke_theme');
    if (!saved || saved === 'dark') {
      localStorage.setItem('bespoke_theme', 'light');
      return 'light';
    }
    return saved;
  });

  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryInitialData, setEnquiryInitialData] = useState({});
  const [b2bModalOpen, setB2BModalOpen] = useState(false);

  // Sync theme attribute with HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('bespoke_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Hash-based routing listener
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setRoute('home');
        return;
      }
      const parts = hash.split('/');
      const main = parts[0];
      const param = parts[1];

      if (main === 'state' && param) {
        setRoute('state');
        setSelectedStateId(param);
      } else if (main === 'insurance') {
        setRoute('insurance');
      } else if (main === 'blog' && param) {
        setRoute('blog-detail');
        setSelectedBlogSlug(param);
      } else if (main === 'service' && param) {
        setRoute(`service-${param}`);
      } else {
        setRoute('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  // Programmatic navigation helper
  const navigate = (toRoute, param) => {
    if (toRoute === 'home') {
      window.location.hash = '#/';
      setRoute('home');
    } else if (toRoute === 'state') {
      const stateSlug = param || 'rajasthan';
      window.location.hash = `#/state/${stateSlug}`;
      setSelectedStateId(stateSlug);
      setRoute('state');
    } else if (toRoute === 'insurance') {
      window.location.hash = '#/insurance';
      setRoute('insurance');
    } else if (toRoute === 'blog-detail') {
      const slug = param || '5-hidden-gems-in-coimbatore';
      window.location.hash = `#/blog/${slug}`;
      setSelectedBlogSlug(slug);
      setRoute('blog-detail');
    } else if (toRoute.startsWith('service-')) {
      const serviceType = toRoute.replace('service-', '');
      window.location.hash = `#/service/${serviceType}`;
      setRoute(toRoute);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (initialData = {}) => {
    setEnquiryInitialData(initialData);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="bespoke-app">
      {/* Universal Luxury Navigation */}
      <Navbar
        currentRoute={route}
        navigate={navigate}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Dynamic View Router */}
      {route === 'home' && (
        <HomePage 
          navigate={navigate} 
          onOpenEnquiry={handleOpenEnquiry}
          onOpenB2B={() => setB2BModalOpen(true)}
        />
      )}

      {route === 'state' && (
        <StatePage 
          stateId={selectedStateId} 
          navigate={navigate} 
          onOpenEnquiry={handleOpenEnquiry}
        />
      )}

      {route === 'insurance' && (
        <InsurancePage 
          navigate={navigate} 
          onOpenEnquiry={handleOpenEnquiry}
        />
      )}

      {route === 'blog-detail' && (
        <BlogDetailPage 
          slug={selectedBlogSlug} 
          navigate={navigate} 
          onOpenEnquiry={handleOpenEnquiry}
        />
      )}

      {route.startsWith('service-') && (
        <ServicePage 
          serviceType={route.replace('service-', '')} 
          navigate={navigate} 
          onOpenEnquiry={handleOpenEnquiry}
        />
      )}

      {/* Universal Luxury Footer */}
      <Footer 
        navigate={navigate} 
        onOpenEnquiry={handleOpenEnquiry}
        onOpenB2B={() => setB2BModalOpen(true)}
      />

      {/* Floating Hovering WhatsApp Button */}
      <WhatsAppButton onOpenEnquiry={handleOpenEnquiry} />

      {/* Modals */}
      <EnquiryModal 
        key={`${enquiryInitialData.packageTitle || ''}-${enquiryInitialData.destination || ''}-${enquiryModalOpen}`}
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
        initialData={enquiryInitialData}
      />

      <B2BModal 
        isOpen={b2bModalOpen} 
        onClose={() => setB2BModalOpen(false)} 
      />
    </div>
  );
}
