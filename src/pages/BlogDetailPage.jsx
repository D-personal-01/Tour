import React, { useEffect } from 'react';
import { blogArticles } from '../data/blogData';
import './BlogDetailPage.css';

export default function BlogDetailPage({ slug, navigate, onOpenEnquiry }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const article = blogArticles.find(a => a.slug === slug) || blogArticles[0];

  return (
    <article className="blog-detail-page">
      {/* Article Hero */}
      <section className="article-hero-section">
        <div className="bespoke-container">
          <nav className="article-breadcrumbs" aria-label="Breadcrumb">
            <button onClick={() => navigate('home')}>Home</button>
            <span className="bread-sep">/</span>
            <button onClick={() => { navigate('home'); setTimeout(() => { const el = document.getElementById('travel-journal'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>Travel Journal</button>
            <span className="bread-sep">/</span>
            <span className="bread-current">{article.title}</span>
          </nav>

          <span className="article-category-tag">{article.category}</span>
          <h1 className="article-title">{article.title}</h1>
          <div className="gold-divider"></div>

          <div className="article-meta-row">
            <span className="article-author">By {article.author}</span>
            <span className="meta-dot">•</span>
            <span className="article-date">{article.date}</span>
            <span className="meta-dot">•</span>
            <span className="article-readtime">{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <div className="bespoke-container">
        <div className="article-cover-wrapper">
          <img src={article.coverImage} alt={article.title} className="article-cover-img" />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="bespoke-container article-content-container">
        <div className="article-lead-box">
          <p className="article-lead">{article.excerpt}</p>
        </div>

        <div className="article-sections-list">
          {article.sections.map((sec, idx) => (
            <div key={idx} className="article-section-block">
              <h2 className="article-section-heading">{sec.heading}</h2>
              <p className="article-section-body">{sec.text}</p>
            </div>
          ))}
        </div>

        {/* Bespoke Journey Recommendation Box */}
        <div className="article-cta-box bespoke-card">
          <div className="cta-box-text">
            <h3>Experience These Hidden Sanctuaries in Person</h3>
            <p>
              Our private chauffeured itineraries in Western Tamil Nadu connect Coimbatore's secluded springs and silk looms with plantation stays in Ooty and Coonoor.
            </p>
          </div>
          <button 
            className="btn-primary"
            onClick={() => onOpenEnquiry({
              packageTitle: "Tamil Nadu & Coimbatore Offbeat Journey",
              destination: "Tamil Nadu"
            })}
          >
            Plan Private Tamil Nadu Tour
          </button>
        </div>

        {/* Navigation to other articles */}
        <div className="other-articles-strip">
          <h3>More Curated Dispatches</h3>
          <div className="other-articles-grid">
            {blogArticles.filter(a => a.slug !== article.slug).map(a => (
              <div 
                key={a.slug} 
                className="other-art-card bespoke-card"
                onClick={() => navigate('blog-detail', a.slug)}
              >
                <h4>{a.title}</h4>
                <p>{a.author} • {a.readTime}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
