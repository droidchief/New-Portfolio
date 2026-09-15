export default function Header() {
  return (
    <header className="site">
      <nav className="wrap">
        <a className="brand" href="/#hero"><span className="dot"></span>Victor Loveday</a>
        <div className="navlinks">
          <a href="/#work">Work</a>
          <a href="/#experience">Experience</a>
          <a href="/#about">About</a>
          <a href="/#recognition">Recognition</a>
          <a href="/#contact">Contact</a>
          <a href="/highlights">Highlights</a>
        </div>
        <a href="/#contact" className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Get in touch</a>
      </nav>
    </header>
  )
}
