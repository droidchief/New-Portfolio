import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { fetchArticle } from '../lib/devto.js'

function tagsOf(article) {
  if (Array.isArray(article.tag_list)) return article.tag_list
  if (typeof article.tag_list === 'string' && article.tag_list.length > 0) {
    return article.tag_list.split(',').map((t) => t.trim())
  }
  return []
}

function normalizeMarkdown(markdown) {
  return markdown
    // dev.to allows "###Heading###" (no space after opening #, closed with trailing #s);
    // CommonMark requires a space after # to recognize an ATX heading.
    .replace(/^(#{1,6})(?=[^#\s])/gm, '$1 ')
    .replace(/^(#{1,6}\s.*?)\s*#+\s*$/gm, '$1')
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setArticle(null)
    setError(null)
    fetchArticle(slug)
      .then((data) => { if (!cancelled) setArticle(data) })
      .catch((err) => { if (!cancelled) setError(err.message) })
    return () => { cancelled = true }
  }, [slug])

  if (error) {
    return (
      <>
        <Header />
        <section className="gal-hero">
          <div className="wrap">
            <p className="blog-error">Couldn't load this post right now. Please try again later.</p>
            <Link className="btn btn-ghost" to="/blog" style={{ marginTop: 20 }}>← Back to blog</Link>
          </div>
        </section>
        <Footer />
      </>
    )
  }

  if (!article) {
    return (
      <>
        <Header />
        <section className="gal-hero">
          <div className="wrap blog-post-skeleton">
            <div className="skeleton-line skeleton-date" />
            <div className="skeleton-line skeleton-title" style={{ height: 36, marginTop: 14 }} />
          </div>
        </section>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <section className="gal-hero">
        <div className="wrap">
          <Link className="blog-back" to="/blog">← Back to blog</Link>
          <div className="kicker" style={{ marginTop: 18 }}>
            {formatDate(article.published_at)}
            {article.reading_time_minutes ? ` · ${article.reading_time_minutes} min read` : ''}
          </div>
          <h1>{article.title}</h1>
          {tagsOf(article).length > 0 && (
            <div className="chip-row blog-tags">
              {tagsOf(article).map((tag) => (
                <span className="chip" key={tag}>#{tag}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="block gal-block">
        <div className="wrap">
          {article.cover_image && (
            <img className="blog-post-cover" src={article.cover_image} alt={article.title} />
          )}

          <div className="blog-post-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{normalizeMarkdown(article.body_markdown)}</ReactMarkdown>
          </div>

          <a
            className="btn btn-ghost blog-canonical"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Originally published on dev.to
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
