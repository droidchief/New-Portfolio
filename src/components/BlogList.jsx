import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { fetchArticles } from '../lib/devto.js'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function BlogList() {
  const [articles, setArticles] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetchArticles()
      .then((data) => { if (!cancelled) setArticles(data) })
      .catch((err) => { if (!cancelled) setError(err.message) })
    return () => { cancelled = true }
  }, [])

  return (
    <>
      <Header />

      <section className="gal-hero">
        <div className="wrap">
          <div className="kicker">Thoughts, notes, write-ups</div>
          <h1>Blog</h1>
          <p className="lede">Posts syndicated from my dev.to profile.</p>
        </div>
      </section>

      <section className="block gal-block">
        <div className="wrap">
          {error && (
            <p className="blog-error">Couldn't load posts right now. Please try again later.</p>
          )}

          {!error && articles === null && (
            <div className="gal-grid">
              {Array.from({ length: 3 }).map((_, i) => (
                <div className="gal-card blog-skeleton" key={i}>
                  <div className="gal-thumb" />
                  <div className="gal-content">
                    <div className="skeleton-line skeleton-date" />
                    <div className="skeleton-line skeleton-title" />
                    <div className="skeleton-line skeleton-desc" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!error && articles !== null && articles.length === 0 && (
            <p className="blog-empty">No posts yet — check back soon.</p>
          )}

          {!error && articles !== null && articles.length > 0 && (
            <div className="gal-grid">
              {articles.map((article) => (
                <Link className="gal-card" key={article.id} to={`/blog/${article.slug}`}>
                  <div className="gal-thumb blog-thumb">
                    {article.cover_image ? (
                      <img src={article.cover_image} alt={article.title} loading="lazy" />
                    ) : (
                      <div className="blog-thumb-fallback" />
                    )}
                  </div>
                  <div className="gal-content">
                    <span className="gal-date">{formatDate(article.published_at)}</span>
                    <h3>{article.title}</h3>
                    <p className="gal-desc">{article.description}</p>
                    {article.tag_list?.length > 0 && (
                      <div className="chip-row blog-tags">
                        {article.tag_list.map((tag) => (
                          <span className="chip" key={tag}>#{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
