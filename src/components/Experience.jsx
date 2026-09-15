import { useRef, useState } from 'react'

const TIMELINE = [
  {
    current: true,
    role: 'Flutter Developer',
    org: 'Dayout Technologies Association — Remote, Delaware, USA',
    period: 'Dec 2025 — Present',
    desc: "Engineered an AI-powered plan creation feature that generates activity drafts from a user's photo gallery using on-device EXIF extraction, GPS-based clustering, and parallel AI inference. Built the user profile system (creator discoverability, follow/unfollow), a referral system, a contextual comment system, and real-time notifications across calendar sync and engagement events. Own the full analytics and observability stack — Mixpanel, AppsFlyer, Meta SDK, and Firebase Crashlytics.",
  },
  {
    role: 'Mobile Engineer',
    org: 'GoCaby Technologies — Remote, Nigeria',
    period: 'Jul 2024 — Jul 2025',
    desc: 'Built version 2 of GoRide and GoDelivery, now serving 500,000+ active users with 2M+ rides and deliveries completed, with real-time driver tracking and dynamic routing. Helped build GoPay, a payment system, and a loyalty rewards feature. Integrated Firebase, Facebook Analytics, and Sentry to reduce crash rate and improve retention, and refactored KYC and onboarding flows, cutting registration time by 5%.',
  },
  {
    role: 'Lead Mobile Developer',
    org: 'HackCity Tech — Remote, USA',
    period: 'Oct 2022 — Apr 2024',
    desc: 'Built EduCarts, a cross-border tuition payment app for international students, and Piremit, a fintech app for cross-border money transfers. Built AudaXious, an AI/Web3 app focused on gamified community engagement, and collaborated on AI-enabled product initiatives translating complex requirements into scalable software.',
  },
  {
    role: 'Software Developer',
    org: 'Medping — Remote, Nigeria',
    period: 'Oct 2022 — Dec 2022',
    desc: 'Contributed to mobile features improving patient engagement and responsiveness through modular UI components in React Native.',
  },
  {
    role: 'Lead Android Developer',
    org: 'Steamledge Limited — Onsite, Nigeria',
    period: 'Jan 2022 — Oct 2022',
    desc: 'Built an AI-powered tutor application using OCR and machine learning to interpret user inputs, analyse mathematical problems, and generate educational solutions. Mentored junior developers, led code reviews, and enforced clean architecture and testing practices.',
  },
  {
    role: 'Project Manager & Developer',
    org: 'Allon Fasaha (Microsoft Hackathon Winner) — Nigeria',
    period: 'Aug 2021 — Oct 2022',
    desc: 'Led a 13-person team building a blended offline/online learning app for underserved communities in Northern Nigeria. The project won the #Build2030 Microsoft Hackathon for Community Impact.',
  },
  {
    role: 'Software Developer',
    org: 'Steamledge Limited — Onsite, Nigeria',
    period: 'Jul 2019 — Oct 2022',
    desc: 'Built CovidVent, a COVID-19 tracker app, and the frontend for an inventory management system and a midwives accreditation platform. Started as a Software Developer Trainee, and taught kids basic programming as a STEM educator during a summer bootcamp.',
  },
]

const COLLAPSED_COUNT = 2

function TimelineItem({ item, isLast }) {
  return (
    <div
      className={`tl-item${item.current ? ' current' : ''}`}
      style={isLast ? { paddingBottom: 0 } : undefined}
    >
      <div className="tl-role">
        <h3>{item.role}</h3>
        {item.current && <span className="tl-tag">current</span>}
      </div>
      <div className="tl-org">{item.org}</div>
      <div className="tl-org" style={{ marginTop: 2 }}>{item.period}</div>
      <div className="tl-desc">{item.desc}</div>
    </div>
  )
}

export default function Experience() {
  const [expanded, setExpanded] = useState(false)
  const toggleRef = useRef(null)

  const collapsed = TIMELINE.slice(0, COLLAPSED_COUNT)
  const rest = TIMELINE.slice(COLLAPSED_COUNT)
  const hiddenCount = rest.length

  return (
    <section className="block" id="experience">
      <div className="wrap exp-wrap">
        <div className="hero-hanging hero-hanging-right exp-hanging" aria-hidden="true">
          <div className="hero-pendulum hero-pendulum-alt">
            <span className="hero-rope"></span>
            <span className="hero-flutter-logo">
              <svg viewBox="0 0 24 24" width="44" height="44">
                <path fill="#3DDC84" d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z" />
              </svg>
            </span>
          </div>
          <div className="hero-pendulum hero-pendulum-alt2">
            <span className="hero-rope hero-rope-short"></span>
            <span className="hero-flutter-logo">
              <svg viewBox="0 0 24 24" width="40" height="40">
                <path fill="#F05138" d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="block-head">
          <h2>Experience</h2>
          <div className="desc"></div>
        </div>

        <div className="timeline">
          {collapsed.map((item, i) => (
            <TimelineItem item={item} key={item.role + item.org} isLast={!hiddenCount && i === collapsed.length - 1} />
          ))}

          <div
            className={`tl-extra${expanded ? ' tl-extra-open' : ''}`}
            onTransitionEnd={(e) => {
              if (e.propertyName === 'grid-template-rows' && !expanded) {
                toggleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }
            }}
          >
            <div className="tl-extra-inner">
              {rest.map((item, i) => (
                <div className="tl-extra-item" style={{ transitionDelay: `${i * 60}ms` }} key={item.role + item.org}>
                  <TimelineItem item={item} isLast={i === rest.length - 1} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {hiddenCount > 0 && (
          <button
            ref={toggleRef}
            type="button"
            className="tl-toggle"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Show less' : `View all ${TIMELINE.length} Experience`}</span>
            <svg className="tl-toggle-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}
