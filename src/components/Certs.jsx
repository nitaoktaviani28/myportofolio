const certs = [
  { img: '/cert-azure.png', alt: 'Microsoft Certified Azure Administrator Associate', org: 'Microsoft', name: 'Azure Administrator Associate' },
  { img: '/cert-gcp.png', alt: 'Google Cloud Professional Cloud DevOps Engineer', org: 'Google Cloud', name: 'Professional Cloud DevOps Engineer' },
  { img: '/cert-aws.png', alt: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', name: 'AWS Certified Cloud Practitioner' },
  { img: '/cert-alibaba-ace.png', alt: 'Alibaba Cloud Certified Associate Cloud Engineer', org: 'Alibaba Cloud', name: 'Associate Cloud Engineer (ACA)' },
  { img: '/cert-alibaba-sysop.png', alt: 'Alibaba Cloud Certified Associate System Operator', org: 'Alibaba Cloud', name: 'Associate System Operator' },
]

const delay = ['', ' d1', ' d2']

export default function Certs() {
  return (
    <section id="certs">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">Certifications</span>
          <h2>Cloud credentials</h2>
          <p>Professional certifications across the major cloud providers.</p>
        </div>
        <div className="divider" />
        <div className="cert-grid">
          {certs.map((c, i) => (
            <div key={c.img} className={`cert rv${delay[i % 3]}`}>
              <div className="cert-img">
                <a href={c.img} target="_blank" rel="noopener noreferrer">
                  <img src={c.img} alt={c.alt} />
                </a>
                <span className="cert-view">View</span>
              </div>
              <div className="cert-body">
                <div className="org">{c.org}</div>
                <h3>{c.name}</h3>
              </div>
            </div>
          ))}
          <div className="cert rv d2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed' }}>
            <div className="cert-body" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, color: 'var(--faint)', marginBottom: 8 }}>+</div>
              <h3 style={{ color: 'var(--muted)' }}>More on the way</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
