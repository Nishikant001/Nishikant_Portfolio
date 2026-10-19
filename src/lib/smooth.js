import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { gsap, ScrollTrigger } from './gsap'

let lenis = null
export const getLenis = () => lenis

/** Inertial smooth scrolling, driven by GSAP's ticker so ScrollTrigger scrubs stay in sync. */
export function startSmoothScroll() {
  if (lenis) return () => {}
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95 })
  lenis.on('scroll', ScrollTrigger.update)

  // Scroll velocity leans [data-skew] elements (y: cards and frames, x: rows), then eases back.
  let els = []
  const collect = () => { els = gsap.utils.toArray('[data-skew]').map((el) => ({ el, prop: el.dataset.skew === 'x' ? 'skewX' : 'skewY' })) }
  collect()
  ScrollTrigger.addEventListener('refresh', collect)
  let target = 0
  let cur = 0
  lenis.on('scroll', ({ velocity }) => { target = gsap.utils.clamp(-3, 3, velocity * -0.1) })
  const skew = () => {
    target *= 0.9
    cur += (target - cur) * 0.14
    if (Math.abs(cur) < 0.005 && Math.abs(target) < 0.005) { if (cur !== 0) { cur = 0; els.forEach(({ el, prop }) => gsap.set(el, { [prop]: 0 })) } return }
    els.forEach(({ el, prop }) => gsap.set(el, { [prop]: prop === 'skewX' ? cur * 0.8 : cur }))
  }
  gsap.ticker.add(skew)
  const tick = (t) => lenis?.raf(t * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)
  const onLoad = () => ScrollTrigger.refresh()
  window.addEventListener('load', onLoad)
  return () => {
    window.removeEventListener('load', onLoad)
    gsap.ticker.remove(tick)
    gsap.ticker.remove(skew)
    ScrollTrigger.removeEventListener('refresh', collect)
    lenis?.destroy()
    lenis = null
  }
}
