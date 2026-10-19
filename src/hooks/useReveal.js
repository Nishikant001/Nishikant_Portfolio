import { useLayoutEffect } from 'react'
import { gsap } from '../lib/gsap'

const trig = (trigger, start, end, scrub = 0.5) => ({ trigger, start, end, scrub })

/**
 * Scroll-scrubbed entrances (they play forwards and backwards with the scrollbar,
 * like the hero transition):
 *  - [data-reveal="words"]  headings: words rise out of a mask
 *  - [data-reveal="lit"]    paragraphs/headings: words light up one by one
 *  - [data-reveal="batch"]  groups: [data-item] children arrive in a stagger
 *  - [data-reveal="fade"]   single blocks
 * Does nothing when reduced motion is requested, so content simply renders.
 */
export default function useReveal(scopeRef, reduced, deps = []) {
  useLayoutEffect(() => {
    if (reduced || !scopeRef.current) return undefined
    const all = (sel) => gsap.utils.toArray(sel, scopeRef.current)

    const ctx = gsap.context(() => {
      all('[data-reveal="words"]').forEach((el) => {
        gsap.fromTo(el.querySelectorAll('[data-word]'), { yPercent: 118 }, {
          yPercent: 0,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: trig(el, 'top 92%', 'top 50%'),
        })
      })

      all('[data-reveal="lit"]').forEach((el) => {
        gsap.fromTo(el.querySelectorAll('[data-lit]'), { opacity: 0.12 }, {
          opacity: 1,
          ease: 'none',
          stagger: 0.12,
          scrollTrigger: trig(el, 'top 80%', 'bottom 45%', true),
        })
      })

      all('[data-reveal="fade"]').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 44 }, {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: trig(el, 'top 94%', 'top 64%'),
        })
      })

      all('[data-reveal="batch"]').forEach((group) => {
        gsap.fromTo(group.querySelectorAll('[data-item]'), { opacity: 0, y: 64, scale: 0.96 }, {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'power2.out',
          stagger: 0.14,
          clearProps: 'opacity,transform',
          scrollTrigger: trig(group, 'top 92%', 'top 38%'),
        })
      })
    }, scopeRef)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, ...deps])
}
