import Header from './Header.jsx'
import Footer from './Footer.jsx'

const MOMENTS = [
  {
    youtubeId: 'ubdHMlHjO2M',
    date: 'Jun, 2024',
    title: 'GDSC Lead application — Bayero University, Kano',
    desc: "My application video for Google Developer Student Club Lead. I was selected to lead the community, grew it to over 1,000 members, and led workshops across 13 tracks — from AI and Cloud to Blockchain and Mobile.",
  },
  {
    date: 'Jan, 2022',
    title: 'Won the Microsoft #Build2030 Hackathon',
    desc: 'Led a 13-person team building Allon Fasaha, aimed at reintegrating over 7 million out-of-school children in Northern Nigeria back into formal education — recognised for Community Impact.',
    media: '/img2-af.png',
    alt: 'Microsoft #BuildFor2030 Hackathon Winner announcement',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:6892056981369409536/',
  },
  {
    youtubeId: 'CLLYpdPt5oc',
    date: 'Jan, 2022',
    title: 'Interview — Lead Android Engineer at Steamledge',
    desc: 'A short interview on my role at Steamledge, the products I built, and what we were building with Allon Fasaha.',
  },
]

export default function Gallery() {
  return (
    <>
      <Header />

      <section className="gal-hero">
        <div className="wrap">
          <div className="kicker">The journey, in snapshots</div>
          <h1>Highlights</h1>
          <p className="lede">A few of the moments and milestones behind the work — in the order they happened.</p>
        </div>
      </section>

      <section className="block gal-block">
        <div className="wrap">
          <div className="gal-grid">
            {MOMENTS.map((m) => {
              const CardTag = m.href ? 'a' : 'div'
              return (
                <CardTag
                  className="gal-card"
                  key={m.title}
                  {...(m.href ? { href: m.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <div className="gal-thumb">
                    {m.youtubeId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${m.youtubeId}`}
                        title={m.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : m.video ? (
                      <video src={m.media} muted loop autoPlay playsInline />
                    ) : (
                      <img src={m.media} alt={m.alt} loading="lazy" />
                    )}
                  </div>
                  <div className="gal-content">
                    <span className="gal-date">{m.date}</span>
                    <h3>{m.title}</h3>
                    <p className="gal-desc">{m.desc}</p>
                  </div>
                </CardTag>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
