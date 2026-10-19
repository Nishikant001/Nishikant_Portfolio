import { useLayoutEffect, useRef } from 'react'
import SplitHeading from './components/SplitHeading'
import useReveal from './hooks/useReveal'
import useParallax from './hooks/useParallax'
import { gsap } from './lib/gsap'
import { techStack } from './data/site'

// Three rows, each a different share of the stack, each sliding its own way and speed.
const ROWS = [0, 1, 2].map((r) => ({
  items: techStack.filter((_, i) => i % 3 === r),
  dir: r % 2 === 0 ? -1 : 1,
  k: [1, 0.75, 1.15][r],
}))
const COPIES = 3 // each row is drawn three times so it never runs out of pills while sliding
const pillClass = 'pill !h-12 !px-6 !text-base whitespace-nowrap md:!h-14 md:!px-8 md:!text-lg'

/** Technology pills. Reduced motion: wrapped, centred. Otherwise: rows slide against each other as you scroll. */
export default function SkillsSection({ reduced }) {
  const scope = useRef(null)
  useReveal(scope, reduced)
  useParallax(scope, reduced)

  useLayoutEffect(() => {
    if (reduced) return undefined
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-row]').forEach((row) => {
        const dir = Number(row.dataset.dir)
        const dist = (100 / COPIES) * Number(row.dataset.k)
        gsap.fromTo(row, { xPercent: dir < 0 ? 0 : -dist }, {
          xPercent: dir < 0 ? -dist : 0,
          ease: 'none',
          scrollTrigger: { trigger: scope.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
        })
      })
    }, scope)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="stack" ref={scope} className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        data-speed="-0.12"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(50%_70%_at_50%_0%,rgba(112,64,200,0.22),transparent_75%)]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-10">
        <SplitHeading
          text="Technologies I work with"
          className="font-display text-[clamp(2.2rem,5.4vw,4.5rem)] font-extrabold leading-none tracking-[-0.02em] text-white"
        />
        <p data-reveal="fade" className="mx-auto mt-5 max-w-xl text-ink-muted">
          Full-stack tooling for web, mobile and enterprise work, from the interface to the server it is deployed on.
        </p>
      </div>

      {reduced ? (
        <ul className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-2.5 px-5 md:gap-3">
          {techStack.map((t) => (
            <li key={t} className="pill">{t}</li>
          ))}
        </ul>
      ) : (
        <div className="relative mt-14 space-y-3 [mask-image:linear-gradient(90deg,transparent,#000_9%,#000_91%,transparent)] md:mt-20 md:space-y-4">
          {ROWS.map((row, r) => (
            <div key={r} data-row data-skew="x" data-dir={row.dir} data-k={row.k} className="flex w-max gap-3 md:gap-4">
              {Array.from({ length: COPIES }, (_, c) => (
                <ul key={c} aria-hidden={c > 0 ? 'true' : undefined} className="flex shrink-0 gap-3 md:gap-4">
                  {row.items.map((t) => (
                    <li key={t} className={pillClass}>{t}</li>
                  ))}
                </ul>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
