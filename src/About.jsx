import { useLayoutEffect, useRef } from 'react'
import { Briefcase, GraduationCap, School } from 'lucide-react'
import GhostText from './components/GhostText'
import SplitHeading from './components/SplitHeading'
import useReveal from './hooks/useReveal'
import useParallax from './hooks/useParallax'
import { gsap } from './lib/gsap'

const facts = [
  {
    icon: Briefcase,
    label: 'Now',
    title: 'Software Developer',
    text: 'Excelligent Consulting Services, since Jan 2025. MERN, .NET, Python and PHP projects.',
  },
  {
    icon: School,
    label: 'Also',
    title: 'Founder and instructor',
    text: 'Webmasters Learning, since Jun 2023. Teaches full-stack development to students and professionals.',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    title: 'Computer Science and Engineering',
    text: 'BijuPattnaik University',
  },
]

export default function AboutSection({ reduced }) {
  const scope = useRef(null)
  useReveal(scope, reduced)
  useParallax(scope, reduced)

  // Cards fan in: each starts tilted back and settles flat as it reaches the middle of the screen.
  useLayoutEffect(() => {
    if (reduced) return undefined
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-fact]').forEach((card) => {
        gsap.fromTo(card, { rotateX: 24, scale: 0.9, transformPerspective: 900, transformOrigin: '50% 100%' }, {
          rotateX: 0,
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top 98%', end: 'top 55%', scrub: 0.6 },
        })
      })
    }, scope)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="about-details" ref={scope} className="relative overflow-hidden px-5 pb-24 pt-28 sm:px-10 md:px-14 md:pb-32 md:pt-36 lg:px-20">
      <GhostText text="Profile" dir={-1} className="top-6 md:top-10" />
      <div aria-hidden="true" data-speed="0.18" className="pointer-events-none absolute -left-40 top-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(110,60,210,0.20),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <SplitHeading
          lit
          text="I build the systems behind business software, and the screens people use to run it."
          className="font-display text-[clamp(2rem,4.6vw,4rem)] font-extrabold leading-[1] tracking-[-0.02em] text-white"
        />
        <div data-speed-md="0.07" className="lg:pt-3">
          <div data-reveal="fade" className="space-y-5 text-base leading-relaxed text-ink-muted">
            <p>
              Day to day I work across the MERN stack, .NET, Python and PHP: end-to-end development, API integrations,
              backend architecture and responsive frontends, alongside cross-functional teams.
            </p>
            <p>
              For enterprise clients that means connecting web backends to SAP ERP, deploying them on Linux, and keeping
              the interface as considered as the system underneath it.
            </p>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/85">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Available for freelance projects
            </p>
          </div>
        </div>
      </div>

      <ul className="relative mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-3">
        {facts.map(({ icon: Icon, label, title, text }, i) => (
          <li key={title} data-speed-md={[0, 0.06, 0.12][i]}>
            <div data-fact data-skew="y" className="glass-card h-full p-6">
              <div className="flex items-center gap-3 text-sm text-ink-muted">
                <Icon className="h-4 w-4 text-violet-300" aria-hidden="true" />
                {label}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold leading-tight text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
