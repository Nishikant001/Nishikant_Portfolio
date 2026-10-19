import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'
import GhostText from './components/GhostText'
import SplitHeading from './components/SplitHeading'
import useReveal from './hooks/useReveal'
import useParallax from './hooks/useParallax'
import { gsap, ScrollTrigger } from './lib/gsap'
import { experiences } from './data/site'

export default function ExperienceSection({ reduced }) {
  const scope = useRef(null)
  const line = useRef(null)
  useReveal(scope, reduced)
  useParallax(scope, reduced)

  // The spine draws itself as the section scrolls past; each entry comes into focus
  // and lights its dot when it reaches the reading line.
  useLayoutEffect(() => {
    if (reduced || !line.current) return undefined
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-exp]').forEach((li) => {
        gsap.fromTo(li, { opacity: 0.18, y: 70 }, {
          opacity: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: { trigger: li, start: 'top 92%', end: 'top 56%', scrub: 0.5 },
        })
        ScrollTrigger.create({
          trigger: li,
          start: 'top 62%',
          end: 'bottom 62%',
          toggleClass: { targets: li.querySelector('[data-dot]'), className: 'is-active' },
        })
      })
      gsap.fromTo(
        line.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top',
          scrollTrigger: { trigger: scope.current, start: 'top 60%', end: 'bottom 70%', scrub: 0.5 },
        },
      )
    }, scope)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="experience" ref={scope} className="relative px-5 py-24 sm:px-10 md:px-14 md:py-32 lg:px-20">
      <GhostText text="Journey" dir={1} className="top-10 md:top-16" />
      <div aria-hidden="true" data-speed="-0.15" className="pointer-events-none absolute -left-52 top-[40%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(100,60,200,0.16),transparent)]" />
      <div className="relative mx-auto max-w-6xl">
        <SplitHeading
          text="Professional experience"
          className="font-display text-[clamp(2.2rem,5.4vw,4.5rem)] font-extrabold leading-none tracking-[-0.02em] text-white"
        />

        <div className="relative mt-16">
          <div aria-hidden="true" className="absolute bottom-0 left-[7px] top-2 w-px bg-white/10 md:left-[11px]">
            <div ref={line} className="h-full w-full origin-top bg-gradient-to-b from-violet-300 to-violet-500/40" />
          </div>

          <ol className="space-y-14 md:space-y-20">
            {experiences.map((exp) => (
              <li key={exp.id} data-exp className="relative pl-9 md:pl-16">
                <span
                  aria-hidden="true"
                  data-dot
                  className="exp-dot absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-violet-300 bg-surface transition-all duration-500 md:h-[23px] md:w-[23px]"
                />
                <div className="grid gap-6 lg:grid-cols-[14rem_1fr] lg:gap-14">
                  <div className="text-sm text-ink-muted lg:sticky lg:top-28 lg:self-start">
                    <p className="font-display text-lg font-bold text-white">{exp.duration}</p>
                    <p className="mt-1">{exp.type}</p>
                    <p className="mt-1 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {exp.location}
                    </p>
                  </div>

                  <div>
                    <h3
                      className="font-display text-[clamp(1.6rem,2.6vw,2.3rem)] font-extrabold leading-tight tracking-[-0.01em] text-white"
                      style={{ fontStretch: '92%' }}
                    >
                      {exp.title}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-violet-300 transition-colors hover:text-white"
                    >
                      {exp.company}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{exp.description}</p>
                    <ul data-reveal="batch" className="mt-5 max-w-2xl space-y-2 text-[0.95rem] text-white/85">
                      {exp.achievements.map((a) => (
                        <li key={a} data-item className="flex gap-3">
                          <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-violet-300/70" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <ul data-reveal="batch" className="mt-6 flex flex-wrap gap-2">
                      {exp.skills.map((s) => (
                        <li key={s} data-item className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/75">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
