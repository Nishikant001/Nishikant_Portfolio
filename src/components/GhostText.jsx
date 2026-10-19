import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import useReducedMotion from '../hooks/useReducedMotion'

/**
 * Oversized outline word behind a section. It slides sideways against the scroll while the
 * section passes, a slow background layer under the content layers.
 */
export default function GhostText({ text, dir = -1, className = '' }) {
  const wrap = useRef(null)
  const track = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !track.current) return undefined
    const section = wrap.current.closest('section') || wrap.current
    const ctx = gsap.context(() => {
      gsap.fromTo(track.current, { xPercent: dir < 0 ? 0 : -33.3 }, {
        xPercent: dir < 0 ? -33.3 : 0,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      })
    }, wrap)
    return () => ctx.revert()
  }, [reduced, dir])

  return (
    <div ref={wrap} aria-hidden="true" className={`pointer-events-none absolute inset-x-0 z-0 select-none overflow-hidden ${className}`}>
      <div
        ref={track}
        className="flex w-max whitespace-nowrap font-display font-black uppercase leading-[0.85] tracking-[-0.03em]"
        style={{
          fontSize: 'clamp(7rem, 20vw, 19rem)',
          fontStretch: '80%',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.075)',
        }}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className="pr-[0.4em]">{text}</span>
        ))}
      </div>
    </div>
  )
}
