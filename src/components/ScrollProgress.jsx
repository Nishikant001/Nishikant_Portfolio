import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

/** Hairline progress bar tied to the whole page scroll. */
export default function ScrollProgress({ reduced }) {
  const bar = useRef(null)
  useLayoutEffect(() => {
    if (reduced) return undefined
    const ctx = gsap.context(() => {
      gsap.fromTo(bar.current, { scaleX: 0 }, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
      })
    })
    return () => ctx.revert()
  }, [reduced])
  if (reduced) return null
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]">
      <div ref={bar} className="h-full origin-left bg-gradient-to-r from-violet-400 to-violet-200" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}
