import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
  { href: '/highlights', label: 'Highlights' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="site">
      <nav className="wrap">
        <a className="brand" href="/#hero"><span className="dot"></span>Victor Loveday</a>
        <div className="navlinks">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <a href="/#contact" className="btn btn-ghost get-in-touch" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Get in touch</a>
        <button
          className={`hamburger${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`}>
        <div className="mobile-menu-links">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              style={{ transitionDelay: `${i * 40}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/#contact"
          className="btn btn-primary mobile-menu-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
