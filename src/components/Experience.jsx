const experiences = [
  { title: 'DevOps Engineer', place: 'PT Astra Graphia Information Technology (AGIT)', location: 'Jakarta', type: 'work', when: 'Jan 2026 · Present' },
  { title: 'Cloud Computing Bootcamp', place: 'Orbit Future Academy', type: 'bootcamp', when: 'Jul 2025 · Oct 2025' },
  { title: 'Expert Class: GenAI & Machine Learning', place: 'SMKDEV Scholarship', type: 'bootcamp', when: 'Jun 2025 · Sep 2025' },
  { title: 'MLOps & DevOps Engineer Trainee', place: 'DevOps Focus Group', type: 'bootcamp', when: 'Jun 2025 · Aug 2025' },
  { title: 'DevOps Developer', place: 'Ordent', sub: 'Qlola Cash Management, BRI', type: 'work', when: 'Jan 2024 · Jan 2026' },
  { title: 'Linux SysAdmin Trainee', place: 'ID Networkers (IDN.ID)', type: 'bootcamp', when: 'Oct 2023 · Nov 2023' },
  { title: 'Cloud & Cybersecurity Trainee', place: 'InfraDigital Foundation', type: 'bootcamp', when: 'Aug 2023 · Oct 2023' },
  { title: 'DevOps & Cloud Engineer Intern', place: 'Boer Technology (Btech)', location: 'Bogor', type: 'intern', when: 'Jul 2023 · Dec 2023' },
  { title: 'Cloud Computing Trainee', place: 'ID Networkers (IDN.ID)', type: 'bootcamp', when: 'Sep 2022 · Dec 2022' },
  { title: 'Linux System Administrator', place: 'FazTrain I.T Training & Consulting', location: 'Palopo', type: 'intern', typeLabel: 'PKL', when: 'Mar 2022 · May 2022' },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">Experience</span>
          <h2>My journey</h2>
          <p>Work, internships, and programs that shaped my career.</p>
        </div>
        <div className="divider" />

        <div className="timeline">
          {experiences.map((e, i) => (
            <div key={i} className="exp rv">
              <div className="exp-card">
                <div className="exp-info">
                  <h3>{e.title}</h3>
                  <div className="place">
                    <em>{e.place}</em>
                    {e.sub && ` · ${e.sub}`}
                    {e.location && ` · ${e.location}`}
                  </div>
                </div>
                <div className="exp-right">
                  <span className={`type-tag ${e.type}`}>{e.typeLabel || e.type}</span>
                  <span className="when">{e.when}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="rv" style={{ fontFamily: 'var(--display)', fontWeight: 300, fontSize: 'clamp(24px,3.5vw,32px)', textAlign: 'center', marginTop: 72, letterSpacing: '-.02em', color: 'var(--white)' }}>
          Community &amp; Leadership
        </h3>
        <div className="roles">
          <div className="role-card rv">
            <div className="ic">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></svg>
            </div>
            <h4>Community Lead</h4>
            <div className="rc-org">CloudKraft Community</div>
            <p>Organizing webinars, tech talks, and knowledge sharing on Cloud Computing and DevOps. (Since 2025)</p>
          </div>
          <div className="role-card rv d1">
            <div className="ic">
              <svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>
            </div>
            <h4>Professional Speaker</h4>
            <div className="rc-org">PT Evolver Innovation Center</div>
            <p>Delivered AWS IAM technical sessions and hands on labs for students and professionals. (2025)</p>
          </div>
          <div className="role-card rv d2">
            <div className="ic">
              <svg viewBox="0 0 24 24"><path d="M12 2l2.6 5.6L20 8.3l-4 4 1 6L12 15.5 7 18.3l1-6-4-4 5.4-.7z"/></svg>
            </div>
            <h4>AWS Community Builder</h4>
            <div className="rc-org">Amazon Web Services</div>
            <p>Recognized contributor sharing knowledge on AWS and modern cloud practices.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
