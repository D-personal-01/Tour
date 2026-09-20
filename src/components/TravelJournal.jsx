import React from 'react';
import { blogArticles } from '../data/blogData';
import './TravelJournal.css';

export default function TravelJournal({ navigate }) {
  return (
    <section id="travel-journal" className="section-padding travel-journal-section">
      <div className="bespoke-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">EDITORIAL PERSPECTIVES</span>
          <h2 className="section-title">Curated Stories & Travel Journal</h2>
          <div className="gold-divider"></div>
          <p className="section-desc">
            Deep-dive accounts written by on-ground travel writers, botanists, and historians uncovering overlooked sanctuaries and living traditions.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="journal-grid">
          {blogArticles.map((article, idx) => (
            <article 
              key={article.slug} 
              className={`journal-card bespoke-card ${idx === 0 ? 'featured-journal-card' : ''}`}
              onClick={() => navigate('blog-detail', article.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('blog-detail', article.slug);
                }
              }}
              aria-label={`Read article: ${article.title}`}
            >
              <div className="journal-image-box">
                <img src={article.coverImage} alt={article.title} loading="lazy" className="journal-img" />
                <span className="journal-category-badge">{article.category}</span>
              </div>

              <div className="journal-card-body">
                <div className="journal-meta">
                  <span className="journal-author">{article.author}</span>
                  <span className="meta-sep">•</span>
                  <span className="journal-time">{article.readTime}</span>
                </div>

                <h3 className="journal-card-title">{article.title}</h3>
                <p className="journal-card-excerpt">{article.excerpt}</p>

                <div className="journal-card-footer">
                  <span className="journal-read-link">
                    Read Full Story
                    <span className="journal-arrow" aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
