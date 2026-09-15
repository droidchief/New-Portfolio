import { useState } from 'react'

const LINK_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6.5 9.5L13.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M9 2.5H13.5V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 9.5V12.5C12 13.0523 11.5523 13.5 11 13.5H3.5C2.94772 13.5 2.5 13.0523 2.5 12.5V5C2.5 4.44772 2.94772 4 3.5 4H6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const APPLE_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
)

const GOOGLE_PLAY_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
  </svg>
)

const GLOBE_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 12h18M12 3c2.5 2.5 3.75 6 3.75 9S14.5 18.5 12 21c-2.5-2.5-3.75-6-3.75-9S9.5 5.5 12 3z" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

const FEATURED_PROJECTS = [
  {
    id: 'goapp',
    eyebrow: 'Ride-hailing & delivery · 500K+ active users',
    title: 'GoApp (GoCaby)',
    visualDesc: 'Rides, delivery, food, and payments in one super-app used across Nigeria.',
    body: "I built version 2 of GoCaby's ride and delivery experience, now serving 500,000+ users with 2M+ rides and deliveries completed. I implemented multi-drop routing for delivery runs, live GPS tracking, and vendor shipment handling, backed by a real-time event layer that keeps riders and drivers in sync as location and trip status change mid-journey. I also helped build the GoPay in-app wallet and a loyalty rewards system.",
    media: [
      { src: '/img1-gapp.webp', href: 'https://usego.app/', alt: 'GoApp — ride selection screen' },
      { src: '/img2-gapp.webp', href: 'https://usego.app/', alt: 'GoApp — GoPay wallet screen' },
      { src: '/img3-gapp.webp', href: 'https://usego.app/', alt: 'GoApp — loyalty points screen' },
      { src: '/img4-gapp.webp', href: 'https://usego.app/', alt: 'GoApp — home / services screen' },
    ],
    links: [
      { label: 'Website', href: 'https://usego.app/', icon: GLOBE_ICON },
      { label: 'App Store', href: 'https://apps.apple.com/ng/app/goapp-delivery-rides-food/id6444678067', icon: APPLE_ICON },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.gocaby.rider', icon: GOOGLE_PLAY_ICON },
    ],
  },
  {
    id: 'dayout',
    eyebrow: 'Social discovery & planning',
    title: 'Dayout',
    visualDesc: 'Turning inspiration into real plans — discover, build, and share your perfect day.',
    body: "Engineered an AI-powered plan creation feature that generates activity drafts from a user's photo gallery in seconds, using on-device EXIF extraction, GPS-based clustering, and parallel AI inference per location cluster. Built the user profile and social graph (creator discoverability, follow/unfollow), a referral system, contextual comments, and real-time notifications across calendar sync and engagement events. Own the full analytics and observability stack — Mixpanel, AppsFlyer, Meta SDK, and Firebase Crashlytics.",
    media: [
      { src: '/img1-dayout.webp', href: 'https://www.dayout.app/', alt: 'Dayout — browse and explore activities' },
      { src: '/img2-dayout.webp', href: 'https://www.dayout.app/', alt: 'Dayout — build your perfect day' },
      { src: '/img3-dayout.webp', href: 'https://www.dayout.app/', alt: 'Dayout — schedule a plan' },
    ],
    links: [
      { label: 'Website', href: 'https://www.dayout.app/', icon: GLOBE_ICON },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/dayout-create-and-find-plans/id6467653346', icon: APPLE_ICON },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.dayout.app', icon: GOOGLE_PLAY_ICON },
    ],
  },
  {
    id: 'allon-fasaha',
    eyebrow: 'Community impact · Microsoft #Build2030',
    title: 'Allon Fasaha',
    visualDesc: 'A blended offline/online literacy and numeracy app built for out-of-school children in Northern Nigeria.',
    body: 'I served as project manager and developer on a 13-person team building Allon Fasaha — an app designed to bring literacy and numeracy to children who are out of the formal school system. It works offline-first for areas with unreliable connectivity, includes Hausa audio pronunciation so children can learn in their own language, and pairs learning with a guardian employment incentive program to keep families engaged. The project won the Microsoft #Build2030 Hackathon for Community Impact in 2022.',
    media: [
      { src: '/img1-af.jpeg', href: 'https://steamledge.com/allon-fasaha/', alt: 'Allon Fasaha app — literacy activity screen' },
      { src: '/img2-af.png', href: 'https://www.linkedin.com/feed/update/urn:li:share:6892056981369409536/', alt: 'Microsoft #BuildFor2030 Hackathon Winner announcement' },
    ],
    links: [
      { label: 'Website', href: 'https://steamledge.com/allon-fasaha/', icon: GLOBE_ICON },
    ],
  },
]

export default function Work() {
  const [index, setIndex] = useState(0)
  const project = FEATURED_PROJECTS[index]

  const go = (dir) => {
    setIndex((i) => (i + dir + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length)
  }

  return (
    <section className="block" id="work">
      <div className="wrap">
        <div className="block-head">
          <h2>Selected work</h2>
          <div className="desc"></div>
        </div>

        <div className="featured-carousel">
          {FEATURED_PROJECTS.length > 1 && (
            <button type="button" className="featured-arrow featured-arrow-left" onClick={() => go(-1)} aria-label="Previous project">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          <div className="featured" key={project.id}>
            <div className="featured-visual">
              <div className="featured-eyebrow">{project.eyebrow}</div>
              <h3 style={{ marginBottom: 0 }}>{project.title}</h3>
              <p style={{ marginTop: 10 }}>{project.visualDesc}</p>
            </div>
            <div className="featured-body">
              <p>{project.body}</p>
              <div className="media-grid">
                {project.media.map((media) => (
                  <a className="media-item" key={media.src} href={media.href} target="_blank" rel="noopener noreferrer">
                    <img src={media.src} alt={media.alt} />
                    <span className="media-link-icon" aria-hidden="true">{LINK_ICON}</span>
                  </a>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="work-links">
                  {project.links.map((link) => (
                    <a className="work-link-btn" key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {FEATURED_PROJECTS.length > 1 && (
            <button type="button" className="featured-arrow featured-arrow-right" onClick={() => go(1)} aria-label="Next project">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        {FEATURED_PROJECTS.length > 1 && (
          <div className="featured-dots">
            {FEATURED_PROJECTS.map((p, i) => (
              <button
                type="button"
                key={p.id}
                className={`featured-dot${i === index ? ' active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Show ${p.title}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
