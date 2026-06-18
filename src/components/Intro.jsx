import { useState, useEffect } from 'react'

export default function Intro({ onDone }) {
  const [haloVisible, setHaloVisible] = useState(false)
  const [next, setNext] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const t = [
      setTimeout(() => setHaloVisible(true), 250),
      setTimeout(() => setNext(true), 2100),
      setTimeout(() => setLeaving(true), 3900),
      setTimeout(onDone, 4800),
    ]
    return () => t.forEach(clearTimeout)
  }, [onDone])

  return (
    <div className={`intro${leaving ? ' intro-leaving' : ''}`}>
      <div className={`intro-slide${next ? ' intro-slide--out' : ''}`}>
        <span className={`intro-halo${haloVisible ? ' show' : ''}`}>Halo,</span>
      </div>
      <div className={`intro-slide intro-slide--right${next ? ' intro-slide--in' : ''}`}>
        <span className="intro-portfolio">This is my portfolio</span>
      </div>
    </div>
  )
}
