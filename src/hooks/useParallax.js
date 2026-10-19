import { useLayoutEffect } from 'react'
import { gsap } from '../lib/gsap'

/**
 * Depth layers. An element with data-speed="0.2" drifts 0.2 x viewport height
 * against the scroll (negative = lags behind). data-speed-md applies from 768px up only.
 * Put it on a wrapper, never on an element another tween also moves on y.
 */
export default function useParallax(scopeRef, reduced, deps = []) {
  useLayoutEffect(() => {
    if (reduced || !scopeRef.current) return undefined
    const wide = window.matchMedia('(min-width: 768px)').matches
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-speed],[data-speed-md]', scopeRef.current).forEach((el) => {
        const s = parseFloat(el.dataset.speed ?? (wide ? el.dataset.speedMd : 0)) || 0
        if (!s) return
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: () => -s * window.innerHeight,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
          },
        )
      })
    }, scopeRef)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, ...deps])
}
