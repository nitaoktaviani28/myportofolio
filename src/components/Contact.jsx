import { useState } from 'react'
import { siGmail, siMedium } from 'simple-icons'

const linkedinPath = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

const socials = [
  {
    name: 'LinkedIn',
    label: 'linkedin.com/in/nita-oktaviani',
    path: linkedinPath,
    color: '#0A66C2',
    href: 'https://www.linkedin.com/in/nita-oktaviani',
  },
  {
    name: 'Gmail',
    label: 'nitaoktaviani2005@gmail.com',
    path: siGmail.path,
    color: `#${siGmail.hex}`,
    href: 'mailto:nitaoktaviani2005@gmail.com',
  },
  {
    name: 'Medium',
    label: 'medium.com/@nitaoktaviani2005',
    path: siMedium.path,
    color: '#F7F7F7',
    href: 'https://medium.com/@nitaoktaviani2005',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xqeovqze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', company: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s build something <em>reliable</em>.</h2>
          <p>Open to DevOps &amp; Cloud roles. Based in Bandung and Jakarta, Indonesia.</p>
        </div>
        <div className="divider" />

        <div className="contact-socials rv">
          {socials.map(s => (
            <a key={s.name} className="contact-social" href={s.href} target="_blank" rel="noopener noreferrer">
              <div className="contact-social-icon">
                <svg viewBox="0 0 24 24" style={{ fill: s.color }} aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </div>
              <div className="contact-social-text">
                <span className="contact-social-name">{s.name}</span>
                <span className="contact-social-label">{s.label}</span>
              </div>
            </a>
          ))}
        </div>

        <form className="contact-form rv d1" onSubmit={handleSubmit}>
          <div className="contact-form-head">
            <h3>Send a Message</h3>
            <p>Fill the form below and hit Send.</p>
          </div>
          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="cf-name">Your Name</label>
              <input id="cf-name" type="text" placeholder="John Doe" value={form.name} onChange={set('name')} required />
            </div>
            <div className="contact-field">
              <label htmlFor="cf-company">Company Name</label>
              <input id="cf-company" type="text" placeholder="PT. Example Corp" value={form.company} onChange={set('company')} required />
            </div>
          </div>
          <div className="contact-field">
            <label htmlFor="cf-email">Your Email</label>
            <input id="cf-email" type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} required />
          </div>
          <div className="contact-field">
            <label htmlFor="cf-msg">Message</label>
            <textarea id="cf-msg" rows={5} placeholder="Tell me about the role or opportunity..." value={form.message} onChange={set('message')} required />
          </div>
          {status === 'sent' ? (
            <div className="contact-success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
              </svg>
              Message sent! I'll get back to you soon.
            </div>
          ) : (
            <button type="submit" className="btn primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          )}
          {status === 'error' && (
            <p className="contact-error">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
