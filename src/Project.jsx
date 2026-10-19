import { useLayoutEffect, useRef, useState } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import GhostText from './components/GhostText'
import SplitHeading from './components/SplitHeading'
import useReveal from './hooks/useReveal'
import useParallax from './hooks/useParallax'
import { gsap, ScrollTrigger } from './lib/gsap'
import { projectFilters, projects } from './data/site'

const hasLink = (href) => Boolean(href) && href !== '#'

function ProjectRow({ project, index, reduced }) {
  const flip = index % 2 === 1
  const row = useRef(null)
  const frame = useRef(null)
  const text = useRef(null)

  useLayoutEffect(() => {
    if (reduced || !frame.current) return undefined
    const img = frame.current.querySelector('img')
    const wide = window.matchMedia('(min-width: 1024px)').matches
    const ctx = gsap.context(() => {
      // The frame opens from a small rounded window to the full image as the row arrives.
      gsap.fromTo(
        frame.current,
        { clipPath: 'inset(16% 12% 16% 12% round 48px)', scale: 0.94 },
        {
          clipPath: 'inset(0% 0% 0% 0% round 28px)',
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: row.current, start: 'top 98%', end: 'top 42%', scrub: 0.6 },
        },
      )
      // The image drifts inside the frame for depth.
      gsap.fromTo(
        img,
        { scale: 1.16, yPercent: -6 },
        {
          scale: 1.16,
          yPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: row.current, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
      // The copy travels against the image.
      if (wide && text.current) {
        gsap.fromTo(text.current, { y: 70 }, {
          y: -70,
          ease: 'none',
          scrollTrigger: { trigger: row.current, start: 'top bottom', end: 'bottom top', scrub: true },
        })
      }
    }, row)
    return () => ctx.revert()
  }, [reduced])

  return (
    <li ref={row} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        <div
          ref={frame}
          data-skew="y"
          className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-surface-2 shadow-[0_30px_80px_-30px_rgba(60,30,130,0.55)]"
        >
          <div className={project.category === 'mobile' ? 'grid place-items-center bg-[#100d18] py-8' : ''}>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              decoding="async"
              className={
                project.category === 'mobile'
                  ? 'aspect-[9/18] h-[26rem] w-auto rounded-2xl object-cover sm:h-[30rem]'
                  : 'aspect-[11/5] w-full object-cover object-top'
              }
            />
          </div>
        </div>
      </div>

      <div ref={text} className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <p className="flex items-center gap-3 text-sm text-ink-muted">
          <span>{projectFilters.find((f) => f.id === project.category)?.label}</span>
          {project.status && (
            <span className="rounded-full border border-amber-300/30 px-2.5 py-0.5 text-xs text-amber-200">
              {project.status}
            </span>
          )}
        </p>
        <SplitHeading
          as="h3"
          text={project.title}
          className="mt-3 font-display text-[clamp(1.7rem,3vw,2.6rem)] font-extrabold leading-[1.02] tracking-[-0.015em] text-white"
          style={{ fontStretch: '92%' }}
        />
        <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {hasLink(project.demoLink) && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-solid">
              {project.demoLabel || 'Live site'}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {hasLink(project.codeLink) && (
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          )}
          {!hasLink(project.demoLink) && !hasLink(project.codeLink) && (
            <span className="text-sm text-ink-muted">Not public yet</span>
          )}
        </div>
      </div>
    </li>
  )
}

export default function ProjectsSection({ reduced }) {
  const scope = useRef(null)
  const [filter, setFilter] = useState('all')
  useReveal(scope, reduced, [filter])
  useParallax(scope, reduced)

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  // Row heights change with the filter, so every trigger below must re-measure.
  useLayoutEffect(() => {
    if (reduced) return undefined
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [filter, reduced])

  return (
    <section id="projects" ref={scope} className="relative px-5 py-24 sm:px-10 md:px-14 md:py-32 lg:px-20">
      <GhostText text="Selected work" dir={-1} className="top-10 md:top-16" />
      <div aria-hidden="true" data-speed="0.25" className="pointer-events-none absolute -right-48 top-[30%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,rgba(110,60,210,0.16),transparent)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SplitHeading
            text="Featured projects"
            className="font-display text-[clamp(2.2rem,5.4vw,4.5rem)] font-extrabold leading-none tracking-[-0.02em] text-white"
          />
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {projectFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === f.id
                    ? 'border-white bg-white text-black'
                    : 'border-white/[0.12] text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-16 space-y-20 md:space-y-28">
          {visible.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} reduced={reduced} />
          ))}
        </ul>

        <div data-reveal="fade" className="mt-20 flex justify-center">
          <a href="https://github.com/Nishikant001?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Github className="h-4 w-4" aria-hidden="true" />
            All repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
