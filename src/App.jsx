import { useState, useEffect, useRef } from 'react'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Certs from './components/Certs'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const cursorRef = useRef({ x: -9999, y: -9999 })
  const spotRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    const onMove = e => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
      if (spotRef.current) {
        spotRef.current.style.left = e.clientX + 'px'
        spotRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [introDone])

  useEffect(() => {
    if (!introDone) return

    // Hero: auto-play PPT-style — elemen muncul satu per satu
    // urutan DOM: eyebrow, h1, role, cbs, bio, edu-chip, hero-actions, photo-wrap, hl, scroll-hint
    const heroDelays = [0, 420, 780, 1080, 1380, 1720, 2060, 360, 2420, 2820]
    const timers = []
    document.querySelectorAll('.hero-seq').forEach((el, i) => {
      const t = setTimeout(() => el.classList.add('in'), heroDelays[i] ?? i * 380)
      timers.push(t)
    })

    // Sections bawah: IntersectionObserver seperti biasa
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.rv:not(.hero-seq)').forEach(el => io.observe(el))

    const cup = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target
          const end = +el.dataset.count
          let cur = 0
          const step = Math.max(1, Math.round(end / 50))
          const interval = setInterval(() => {
            cur += step
            if (cur >= end) { cur = end; clearInterval(interval) }
            el.textContent = cur
          }, 18)
          cup.unobserve(el)
        }
      }),
      { threshold: 0.5 }
    )
    document.querySelectorAll('[data-count]').forEach(el => cup.observe(el))

    const photoWrap = document.querySelector('.photo-wrap')
    const photoEl = document.querySelector('.photo')

    const onScroll = () => {
      // progress bar
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      if (barRef.current) barRef.current.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%'
      // parallax
      if (!photoWrap || window.innerWidth <= 860) return
      const r = photoWrap.getBoundingClientRect()
      const p = (r.top + r.height / 2) / window.innerHeight
      photoWrap.style.transform = `translateY(${(p - 0.5) * -30}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // 3D tilt on photo
    if (photoEl) {
      const onTilt = e => {
        const r = photoEl.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        photoEl.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale3d(1.03,1.03,1.03)`
      }
      const onTiltLeave = () => { photoEl.style.transform = '' }
      photoEl.addEventListener('mousemove', onTilt)
      photoEl.addEventListener('mouseleave', onTiltLeave)
    }

    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect()
        const x = e.clientX - r.left - r.width / 2
        const y = e.clientY - r.top - r.height / 2
        btn.style.transform = `translate(${x * 0.15}px,${y * 0.15}px)`
      })
      btn.addEventListener('mouseleave', () => { btn.style.transform = '' })
    })

    return () => {
      timers.forEach(clearTimeout)
      io.disconnect()
      cup.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [introDone])

  return (
    <>
      <div ref={barRef} className="scroll-bar" style={{ width: '0%' }} />
      <div ref={spotRef} className="cursor-spot" />
      <Intro onDone={() => setIntroDone(true)} />
      <div className="glow g1" />
      <div className="glow g2" />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Certs />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
