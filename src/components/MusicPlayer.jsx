import { useState, useRef } from 'react'

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)
  const fadeRef = useRef(null)

  const fadeTo = (target, onDone) => {
    const audio = audioRef.current
    if (!audio) return
    clearInterval(fadeRef.current)
    fadeRef.current = setInterval(() => {
      const next = audio.volume + (target > audio.volume ? 0.04 : -0.04)
      if (Math.abs(next - target) < 0.04) {
        audio.volume = target
        clearInterval(fadeRef.current)
        onDone?.()
      } else {
        audio.volume = Math.max(0, Math.min(1, next))
      }
    }, 50)
  }

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      fadeTo(0, () => audio.pause())
      setPlaying(false)
    } else {
      audio.volume = 0
      audio.play().catch(() => {})
      fadeTo(0.35)
      setPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/bgm.mp3" loop preload="none" />
      <button
        className={`music-btn${playing ? ' playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? (
          <span className="music-bars" aria-hidden="true">
            <span /><span /><span /><span />
          </span>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </svg>
        )}
      </button>
    </>
  )
}
