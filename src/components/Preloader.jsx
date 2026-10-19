import { useEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap'

/** Short name-and-counter intro. Calls onDone as the curtain starts lifting. */
export default function Preloader({ onDone, reduced }) {
  const root = useRef(null)
  const [count, setCount] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    if (reduced) {
      onDone()
      setGone(true)
      return undefined
    }
    const counter = { v: 0 }
    const tl = gsap.timeline()
    tl.to(counter, {
      v: 100,
      duration: 1.15,
      ease: 'power2.inOut',
      onUpdate: () => setCount(Math.round(counter.v)),
    })
      .to(root.current, {
        yPercent: -100,
        duration: 0.85,
        ease: 'power4.inOut',
        onStart: onDone,
      }, '+=0.12')
      .add(() => setGone(true))
    return () => tl.kill()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced])

  if (gone) return null

  return (
    <div
      ref={root}
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#050407] p-6 text-white sm:p-10"
    >
      <p className="font-display text-sm font-bold tracking-wide text-white/70">Nishikant Sahoo</p>
      <p
        className="font-display text-[clamp(5rem,22vw,16rem)] font-black leading-none tracking-[-0.04em] tabular-nums"
        style={{ fontStretch: '80%' }}
      >
        {count}
        <span className="text-white/35">%</span>
      </p>
    </div>
  )
}
