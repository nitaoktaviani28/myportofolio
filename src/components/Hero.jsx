import HeroScene from './HeroScene'

export default function Hero() {
  return (
    <header id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <HeroScene />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero">
          <div>
            <span className="eyebrow rv hero-seq">DevOps &amp; Cloud Engineer</span>
            <h1 className="shimmer rv hero-seq">Nita Oktaviani</h1>
            <div className="role rv hero-seq">I keep cloud infrastructure reliable, automated, and observable.</div>
            <div className="cbs rv hero-seq">
              <span className="cb">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="6"/><path d="M9 14.5l-2 7 5-3 5 3-2-7"/></svg>
                AWS Community Builder
              </span>
              <span className="cb">
                <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 6a3 3 0 0 1 0 5.5"/><path d="M19 20a5 5 0 0 0-3.5-4.7"/></svg>
                Community Lead at CloudKraft
              </span>
            </div>
            <p className="bio rv hero-seq">
              A DevOps &amp; Cloud Engineer who turns manual, fragile operations into automated and dependable systems.
              My work spans CI/CD pipelines, containerization, cloud infrastructure, and real time monitoring.
            </p>
            <div className="edu-chip rv hero-seq">
              <div className="ic">
                <svg viewBox="0 0 24 24"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg>
              </div>
              <div>
                <div className="t">Education</div>
                <div className="v">S1 Computer Science &middot; BINUS University &middot; Expected 2029</div>
              </div>
            </div>
            <div className="hero-actions rv hero-seq">
              <a className="btn primary" href="#contact">Get in touch</a>
              <a className="btn ghost" href="#projects">View my work</a>
            </div>
          </div>
          <div className="photo-wrap rv hero-seq">
            <div className="photo-line" />
            <div className="photo">
              <img src="/nita.png" alt="Nita Oktaviani" />
            </div>
          </div>
        </div>
        <div className="hl rv hero-seq">
          <div><div className="n" data-count="3">3</div><div className="l">Years in Tech</div></div>
          <div><div className="n" data-count="5">5</div><div className="l">Cloud Certifications</div></div>
          <div><div className="n" data-count="4">4</div><div className="l">Cloud Platforms</div></div>
        </div>
      </div>
      <div className="scroll-hint rv hero-seq">
        <div className="scroll-hint-line" />
        <span>scroll</span>
      </div>
    </header>
  )
}
