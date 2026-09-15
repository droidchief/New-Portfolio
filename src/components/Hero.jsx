export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-hanging" aria-hidden="true">
            <div className="hero-pendulum">
              <span className="hero-rope"></span>
              <span className="hero-flutter-logo">
                <svg viewBox="0 0 24 24" width="52" height="52">
                  <defs>
                    <linearGradient id="flutterGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#54C5F8" />
                      <stop offset="1" stopColor="#01579B" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#flutterGrad)" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="kicker">Senior Mobile Engineer — Flutter &amp; Native Android</div>
          <h1>Seven years of building mobile software people actually depend on.</h1>
          <p className="lede">I design and ship mobile systems that hold up under real usage — payment infrastructure, real-time dispatch, offline-first products built for unreliable networks. Seven years across fintech, ride-hailing, and edtech, with native Android depth underneath the Flutter work.</p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">See the work</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>

        <div className="console">
          <div className="console-head">
            <span>dispatch / active-route</span>
            <span className="live"><span className="pulse"></span>online</span>
          </div>
          <svg className="route-svg" viewBox="0 0 400 130" preserveAspectRatio="none" role="img" aria-label="Illustrative multi-stop delivery route">
            <path className="route-path" d="M20,100 C90,30 140,110 200,55 C250,10 300,90 380,35" />
            <circle className="route-node" cx="20" cy="100" r="5" />
            <circle className="route-node" cx="200" cy="55" r="5" />
            <circle className="route-node end" cx="380" cy="35" r="6" />
          </svg>
          <div className="stat-grid">
            <div className="stat">
              <div className="stat-num num">7+</div>
              <div className="stat-label">Years shipping production mobile apps</div>
            </div>
            <div className="stat">
              <div className="stat-num num">500K+</div>
              <div className="stat-label">App built now serving users across ride-hailing &amp; delivery</div>
            </div>
            <div className="stat">
              <div className="stat-num num">13</div>
              <div className="stat-label">Person team led to a Microsoft award</div>
            </div>
            <div className="stat">
              <div className="stat-num num">2M+</div>
              <div className="stat-label">Rides and deliveries completed on the platform</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
