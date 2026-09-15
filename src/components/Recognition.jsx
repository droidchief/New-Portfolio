const REC_ITEMS = [
  {
    when: '2022',
    title: 'Microsoft #Build2030 Hackathon — Community Impact winner',
    desc: 'Won as project manager and developer on Allon Fasaha, leading a 13-person team building for underserved communities in Northern Nigeria.',
  },
  {
    when: 'Undergrad',
    title: 'Lead Organiser, Google Developer Student Clubs (GDSC)',
    desc: 'Ran 10+ technical sessions spanning Cloud, Mobile, AI/ML, and Web3 for a student developer community.',
  },
]

export default function Recognition() {
  return (
    <section className="block" id="recognition">
      <div className="wrap">
        <div className="block-head">
          <h2>Recognition &amp; community</h2>
          <div className="desc">Leadership beyond the codebase.</div>
        </div>
        <div className="rec-list">
          {REC_ITEMS.map((item) => (
            <div className="rec-item" key={item.title}>
              <div className="rec-when">{item.when}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
