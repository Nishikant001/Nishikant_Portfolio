import { useLayoutEffect, useRef } from 'react'
import { Layers, Monitor, Network, PenTool, Rocket, Server } from 'lucide-react'
import GhostText from './components/GhostText'
import SplitHeading from './components/SplitHeading'
import useReveal from './hooks/useReveal'
import { gsap } from './lib/gsap'
import { expertise } from './data/site'

const icons = { Layers, Monitor, Server, Network, PenTool, Rocket }

// Solid surfaces (cards overlap, so they cannot be translucent) with a violet-family glow each.
const surfaces = ['#130e21', '#110e24', '#150e22', '#0f1023', '#130d20', '#100c1e']
const glows = ['124,77,230', '99,102,241', '168,85,247', '79,70,229', '139,92,246', '192,132,252']

/**
 * Same idea as the hero → profile hand-off: each card is a sheet that slides up over the
 * previous one, which recedes (scales down, dims) while the next arrives.
 */
export default function ExpertiseSection({ reduced }) {
  const scope = useRef(null)
  useReveal(scope, reduced)

  useLayoutEffect(() => {
    if (reduced) return undefined
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('[data-stack-item]')
      items.forEach((li, i) => {
        const next = items[i + 1]
        if (next) {
          gsap
            .timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: next,
                start: 'top bottom',
                end: () => `top ${parseFloat(getComputedStyle(next).top) || 96}px`,
                scrub: true,
                invalidateOnRefresh: true,
              },
            })
            .to(li.querySelector('[data-stack-card]'), { scale: 0.93, yPercent: -2 }, 0)
            .to(li.querySelector('[data-stack-shade]'), { opacity: 0.72 }, 0)
        }
        // The oversized icon drifts and turns slowly behind the copy.
        gsap.fromTo(li.querySelector('[data-ghost]'), { yPercent: 22, rotate: -10 }, {
          yPercent: -22,
          rotate: 10,
          ease: 'none',
          scrollTrigger: { trigger: li, start: 'top bottom', end: 'bottom top', scrub: true },
        })
      })
    }, scope)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="expertise" ref={scope} className="relative px-5 py-24 sm:px-10 md:px-14 md:py-32 lg:px-20">
      <GhostText text="Expertise" dir={1} className="top-10 md:top-16" />
      <div className="relative mx-auto max-w-6xl">
        <SplitHeading
          text="Core expertise"
          className="font-display text-[clamp(2.2rem,5.4vw,4.5rem)] font-extrabold leading-none tracking-[-0.02em] text-white"
        />

        <ul className="mt-14 md:mt-20">
          {expertise.map(({ icon, title, text }, i) => {
            const Icon = icons[icon]
            const last = i === expertise.length - 1
            return (
              <li
                key={title}
                data-stack-item
                className={`${reduced ? '' : 'sticky'} ${last ? '' : 'mb-5 md:mb-7'}`}
                style={{ top: `calc(5.5rem + ${i * 14}px)` }}
              >
                <article
                  data-stack-card
                  className="relative min-h-[19rem] overflow-hidden rounded-[28px] border border-white/10 p-7 will-change-transform md:min-h-[22rem] md:rounded-[36px] md:p-12"
                  style={{ background: surfaces[i % surfaces.length], transformOrigin: '50% 0%' }}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full"
                    style={{ background: `radial-gradient(closest-side, rgba(${glows[i % glows.length]},0.28), transparent)` }}
                  />
                  <Icon
                    data-ghost
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-10 right-4 h-56 w-56 text-white/[0.045] md:right-14 md:h-72 md:w-72"
                    strokeWidth={1}
                  />
                  <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:gap-14">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-violet-300 md:h-16 md:w-16">
                      <Icon className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
                    </span>
                    <div className="max-w-2xl">
                      <h3
                        className="font-display text-[clamp(1.7rem,3.4vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.015em] text-white"
                        style={{ fontStretch: '90%' }}
                      >
                        {title}
                      </h3>
                      <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">{text}</p>
                    </div>
                  </div>
                  <div data-stack-shade aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black opacity-0" />
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
