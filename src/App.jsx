import { useState, useEffect } from 'react'
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

  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [introDone])

  useEffect(() => {
    if (!introDone) return

    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.rv').forEach(el => io.observe(el))

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

    const photo = document.querySelector('.photo-wrap')
    const onScroll = () => {
      if (!photo || window.innerWidth <= 860) return
      const r = photo.getBoundingClientRect()
      const p = (r.top + r.height / 2) / window.innerHeight
      photo.style.transform = `translateY(${(p - 0.5) * -30}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })

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
      io.disconnect()
      cup.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [introDone])

  return (
    <>
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
