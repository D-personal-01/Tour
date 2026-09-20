import React, { useState } from 'react';
import './WhatsAppButton.css';

export default function WhatsAppButton({ onOpenEnquiry }) {
  const [chatOpen, setChatOpen] = useState(false);

  const startWhatsApp = (message) => {
    const encoded = encodeURIComponent(message || "Hello Travel Bespoke, I would like to inquire about curating a luxury domestic holiday.");
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="whatsapp-floating-container">
      {/* Interactive Chat Popup */}
      {chatOpen && (
        <div className="whatsapp-chat-box bespoke-card" role="dialog" aria-label="WhatsApp Concierge Chat">
          <div className="chat-box-header">
            <div className="concierge-avatar">
              <span>TB</span>
              <span className="online-indicator"></span>
            </div>
            <div className="concierge-info">
              <h4>Senior Travel Concierge</h4>
              <p>The Travel Bespoke • Live</p>
            </div>
            <button 
              className="chat-close-btn" 
              onClick={() => setChatOpen(false)}
              aria-label="Close WhatsApp chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-box-body">
            <div className="chat-bubble received">
              <p>Namaste! Welcome to The Travel Bespoke.</p>
              <p>How may our private concierge team assist your journey planning today?</p>
              <span className="chat-time">Just now</span>
            </div>

            <div className="chat-quick-actions">
              <button onClick={() => startWhatsApp("Hello, I am looking to curate a private luxury family holiday in India.")}>
                👨‍👩‍👧‍👦 Family Vacation
              </button>
              <button onClick={() => startWhatsApp("Hello, I would like to inquire about a romantic luxury honeymoon itinerary.")}>
                💍 Honeymoon Itinerary
              </button>
              <button onClick={() => startWhatsApp("Hello, I would like to inquire about palace bookings in Rajasthan.")}>
                🏰 Rajasthan Palaces
              </button>
              <button onClick={() => startWhatsApp("Hello, I want to explore high altitude Ladakh / Spiti expeditions.")}>
                🏔 Ladakh / Spiti
              </button>
            </div>
          </div>

          <div className="chat-box-footer">
            <button 
              className="btn-primary direct-wa-btn"
              onClick={() => startWhatsApp()}
            >
              <span>Continue on WhatsApp</span>
              <span className="wa-btn-icon">→</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        className="whatsapp-fab"
        onClick={() => setChatOpen(!chatOpen)}
        aria-label="Chat with luxury travel concierge on WhatsApp"
        aria-expanded={chatOpen}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-10.416c-5.522 0-10 4.477-10 10 0 1.772.463 3.491 1.341 5.014l-1.425 5.23 5.37-1.408c1.475.805 3.136 1.233 4.714 1.233 5.522 0 10-4.477 10-10s-4.478-10-10-10z"/>
        </svg>
      </button>
    </div>
  );
}
