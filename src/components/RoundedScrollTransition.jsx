import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { scrollMap } from '../lib/scrollMap'

/**
 * Full-page, scroll-driven "rounded surface" transition.
 *
 *   track ── tall spacer that owns the scroll distance
 *    └ pin ── pinned to the viewport (100vh)
 *       └ outer ── phase-2 scale (hero recedes as the page rises)
 *          └ stage ── phase-1 surface: scale + border-radius + dark card
 *             └ hero scene (portrait → profile card, copy, profile text)
 *   main ── the rest of the portfolio; a rounded sheet that slides up over the pinned hero
 *
 * Phase 1 (scrub over `D`): the full-bleed portrait morphs into the profile card,
 *   and the whole stage becomes a rounded, slightly scaled surface.
 * Phase 2 (last 100vh):    `main` rises over the stage; its top corners flatten from
 *   rounded to square while the stage recedes and dims.
 * Everything is driven by scroll progress, so reversing scroll reverses it exactly.
 */
export default function RoundedScrollTransition({ hero, children, reduced }) {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (reduced) return undefined

    const q = gsap.utils.selector(root)
    const track = q('[data-track]')[0]
    const pin = q('[data-pin]')[0]
    const outer = q('[data-outer]')[0]
    const stage = q('[data-stage]')[0]
    const shade = q('[data-shade]')[0]
    const photo = q('[data-photo]')[0]
    const slot = q('[data-slot]')[0]
    const main = q('[data-main]')[0]
    if (!track || !pin || !stage || !photo || !slot || !main) return undefined

    const mm = gsap.matchMedia()

    mm.add(
      { isDesktop: '(min-width: 768px)', isMobile: '(max-width: 767px)' },
      (context) => {
        const { isMobile } = context.conditions
        const vh = () => window.innerHeight
        // Scroll distance used by phase 1. Shorter on phones so it feels immediate.
        const D = () => vh() * (isMobile ? 1.6 : 2)
        const cardRadius = isMobile ? 28 : 40
        const stageRadius = isMobile ? 26 : 44
        const sheetRadius = isMobile ? 28 : 48

        const sizeTrack = () => {
          track.style.height = `${vh() + D() + vh()}px`
          scrollMap.aboutY = track.offsetTop + D()
        }
        sizeTrack()
        ScrollTrigger.addEventListener('refreshInit', sizeTrack)

        // Measured from layout (not transforms) so the target stays correct
        // even if a refresh happens while the stage is scaled.
        const slotBox = () => {
          const s = stage.getBoundingClientRect()
          const r = slot.getBoundingClientRect()
          const k = s.width / stage.offsetWidth || 1
          return { x: (r.left - s.left) / k, y: (r.top - s.top) / k, w: r.width / k, h: r.height / k }
        }

        ScrollTrigger.create({
          trigger: track,
          start: 'top top',
          end: () => `+=${track.offsetHeight - vh()}`,
          pin,
          pinSpacing: false,
          anticipatePin: 1,
        })

        // ---- Phase 1: portrait → card, stage → rounded surface -------------
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: track,
            start: 'top top',
            end: () => `+=${D()}`,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })

        tl.to(q('[data-hero-copy]'), { y: -90, opacity: 0, ease: 'power2.in', duration: 0.28 }, 0)
          .to(q('[data-hero-aside]'), { y: -60, opacity: 0, ease: 'power2.in', duration: 0.22 }, 0)
          .to(q('[data-photo-shade]'), { opacity: 0, duration: 0.4 }, 0.1)
          .to(
            photo,
            {
              left: () => slotBox().x,
              top: () => slotBox().y,
              width: () => slotBox().w,
              height: () => slotBox().h,
              borderRadius: cardRadius,
              ease: 'power3.inOut',
              duration: 0.55,
            },
            0.1,
          )
          .to(q('[data-photo-img]'), { scale: 1, objectPosition: '50% 18%', duration: 0.55, ease: 'power3.inOut' }, 0.1)
          .fromTo(
            q('[data-about-item]'),
            { y: 56, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.07, duration: 0.22, ease: 'power2.out' },
            0.46,
          )
          .to(
            stage,
            { scale: isMobile ? 0.95 : 0.94, borderRadius: stageRadius, duration: 0.3, ease: 'power2.inOut' },
            0.7,
          )
          .set({}, {}, 1) // pad so the timeline spans exactly 0 → 1

        // ---- Phase 2: the next sheet rises over the receding stage -----------
        const rise = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: main,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        })

        rise
          .fromTo(
            main,
            { borderTopLeftRadius: sheetRadius, borderTopRightRadius: sheetRadius },
            { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
            0,
          )
          .to(outer, { scale: 0.95, yPercent: -2 }, 0)
          .to(shade, { opacity: 0.75 }, 0)

        return () => {
          ScrollTrigger.removeEventListener('refreshInit', sizeTrack)
          track.style.height = ''
        }
      },
    )

    return () => mm.revert()
  }, [reduced])

  if (reduced) {
    return (
      <div ref={root}>
        <div id="home">{hero}</div>
        <main className="relative z-20 rounded-t-[32px] bg-surface">{children}</main>
      </div>
    )
  }

  return (
    <div ref={root}>
      <div data-track id="home" className="relative z-0">
        <div data-pin className="relative w-full" style={{ height: '100vh' }}>
          <div data-outer className="h-full w-full will-change-transform">
            <div
              data-stage
              className="relative h-full w-full overflow-hidden bg-stage will-change-transform"
              style={{ transformOrigin: '50% 50%' }}
            >
              {hero}
              <div
                data-shade
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-black opacity-0"
              />
            </div>
          </div>
        </div>
      </div>
      <main
        data-main
        className="relative z-20 bg-surface shadow-[0_-40px_80px_rgba(0,0,0,0.55)]"
        style={{ marginTop: '-100vh', borderTopLeftRadius: 48, borderTopRightRadius: 48, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
      >
        {children}
      </main>
    </div>
  )
}
