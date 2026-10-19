import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { gsap } from './lib/gsap'
import { onNavClick } from './lib/goTo'
import RoleCycler from './components/RoleCycler'
import portrait from './assets/portrait.jpg'
import { heroRoles, profile } from './data/site'

const ABOUT_COPY =
  'I build enterprise web applications with React and the MERN stack, connect them to SAP ERP, and design the interfaces my teams ship. I also lead developers through delivery.'

function HeroCopy({ reduced }) {
  return (
    <>
      <div
        data-hero-copy
        data-depth="16"
        data-axis="x"
        className="absolute inset-x-0 bottom-0 px-5 pb-24 sm:px-10 md:px-14 md:pb-16"
      >
        <p
          data-intro="line"
          className="mb-3 inline-block border-b border-white/70 pb-0.5 text-[0.7rem] font-bold tracking-wide text-white sm:text-xs"
        >
          Hi, I&apos;m Nishikant
        </p>
        <h1
          data-intro="line"
          className="font-display text-[clamp(2.9rem,11.5vw,10.5rem)] font-black uppercase leading-[0.86] tracking-[-0.025em] text-white"
          style={{ fontStretch: '78%' }}
        >
          <span className="sr-only">Nishikant Sahoo, </span>
          <RoleCycler roles={heroRoles} reduced={reduced} />
        </h1>
        <p
          data-intro="line"
          className="mt-5 flex items-center gap-3 text-xs text-white/60"
        >
          <span className="scroll-cue" aria-hidden="true" />
          Scroll to explore
        </p>
      </div>

      <div
        data-hero-aside
        data-depth="28"
        data-axis="x"
        className="absolute bottom-24 right-5 hidden max-w-[19rem] text-right sm:block md:bottom-16 md:right-14"
      >
        <p data-intro="aside" className="text-sm leading-relaxed text-white/75">
          React and Node.js products for business teams, connected to SAP ERP when the work calls for it.
        </p>
        <div data-intro="aside" className="mt-5 flex justify-end gap-3">
          <a href="#projects" onClick={onNavClick('projects')} className="btn-solid">
            View my work
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#contact" onClick={onNavClick('contact')} className="btn-ghost">
            Contact
          </a>
        </div>
      </div>
    </>
  )
}

function ProfileText({ itemAttr = {} }) {
  return (
    <div className="flex flex-col justify-center">
      <h2
        {...itemAttr}
        className="font-display text-[clamp(2.2rem,5.6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.02em] text-white"
        style={{ fontStretch: '88%' }}
      >
        Hello, I&apos;m
        <br />
        {profile.name}
      </h2>
      <p {...itemAttr} className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink-muted md:text-base">
        {ABOUT_COPY}
      </p>
      <ul {...itemAttr} className="mt-6 flex flex-wrap gap-2 text-sm text-white/85">
        {['Full stack', 'React and Node', 'SAP ERP integration'].map((t) => (
          <li key={t} className="rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2">
            {t}
          </li>
        ))}
      </ul>
      <div {...itemAttr} className="mt-6 flex items-center gap-3">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile">
          <Github className="h-[18px] w-[18px]" aria-hidden="true" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile">
          <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}

function OpenBadge() {
  return (
    <span className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-2 text-[0.68rem] font-semibold tracking-wide text-white backdrop-blur-md">
      <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
      Open to opportunities
    </span>
  )
}

/** Pinned, scroll-driven scene: full-bleed portrait that morphs into the profile card. */
export function HeroScene({ ready }) {
  const scope = useRef(null)

  // Start hidden; the entrance plays once the preloader hands over.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('[data-intro]', { opacity: 0, y: 40 })
      gsap.set('[data-photo-img]', { scale: 1.18 })
      gsap.set('[data-photo]', { opacity: 0 })
    }, scope)
    return () => ctx.revert()
  }, [])

  // Pointer depth: atmosphere orbs and copy shift at different rates (fine pointers only).
  useLayoutEffect(() => {
    if (!ready || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined
    const layers = gsap.utils.toArray('[data-depth]', scope.current).map((el) => {
      const opts = { duration: 1.3, ease: 'power3.out' }
      return { d: parseFloat(el.dataset.depth), xOnly: el.dataset.axis === 'x', x: gsap.quickTo(el, 'x', opts), y: gsap.quickTo(el, 'y', opts) }
    })
    const move = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      layers.forEach((l) => {
        l.x(-nx * l.d * 2)
        if (!l.xOnly) l.y(-ny * l.d * 1.4)
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [ready])

  useLayoutEffect(() => {
    if (!ready) return undefined
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.to('[data-photo]', { opacity: 1, duration: 1.1, ease: 'power2.out' }, 0)
        .to('[data-photo-img]', { scale: 1.06, duration: 2.2, ease: 'power3.out' }, 0)
        .to('[data-intro="line"]', { opacity: 1, y: 0, duration: 1.1, stagger: 0.14 }, 0.25)
        .to('[data-intro="aside"]', { opacity: 1, y: 0, duration: 1, stagger: 0.12 }, 0.7)
    }, scope)
    return () => ctx.revert()
  }, [ready])

  return (
    <div ref={scope} className="absolute inset-0">
      {/* Deep-purple atmosphere that the card state sits in */}
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_30%,rgba(88,52,160,0.30),transparent_70%),radial-gradient(60%_50%_at_85%_80%,rgba(60,30,120,0.22),transparent_70%)]" />

      <div aria-hidden="true" data-depth="40" className="pointer-events-none absolute -left-24 top-1/4 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(124,77,230,0.30),transparent)]" />
      <div aria-hidden="true" data-depth="90" className="pointer-events-none absolute -right-20 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(80,50,180,0.26),transparent)]" />

      {/* Profile layer: text + a measured slot the portrait lands in */}
      <div className="absolute inset-0 flex items-start justify-center px-5 pb-8 pt-24 sm:px-10 md:items-center md:px-14 md:pt-20 lg:px-20">
       <div className="grid w-full max-w-[72rem] grid-cols-1 items-center gap-6 md:grid-cols-[minmax(260px,34vw)_1fr] md:gap-14">
        <div className="relative mx-0 w-[min(62vw,34vh)] md:w-full md:max-w-[28rem]">
          <div data-slot className="aspect-[4/5] w-full" />
        </div>
        <ProfileText itemAttr={{ 'data-about-item': '' }} />
       </div>
      </div>

      {/* The one photo: starts full-bleed, scroll turns it into the card */}
      <div
        data-photo
        className="absolute left-0 top-0 h-full w-full overflow-hidden bg-[#15121d] will-change-[width,height,left,top]"
        style={{ borderRadius: 0 }}
      >
        <img
          data-photo-img
          src={portrait}
          alt="Nishikant Sahoo in a dark blazer, wearing sunglasses, against a brick wall"
          width="1157"
          height="1280"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: '56% 3%' }}
        />
        <div
          data-photo-shade
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_30%,transparent_35%,rgba(5,3,10,0.78)_100%),linear-gradient(to_top,rgba(8,5,16,0.92)_0%,rgba(8,5,16,0.55)_32%,rgba(8,5,16,0.0)_62%),linear-gradient(to_right,rgba(40,20,80,0.35),transparent_55%)]"
        />
        <div data-about-item className="pointer-events-none opacity-0">
          <OpenBadge />
        </div>
      </div>

      <HeroCopy reduced={false} />
    </div>
  )
}

/** Reduced-motion fallback: no pinning, no morph, no cycling. Same content, still composed. */
export function StaticHero() {
  return (
    <>
      <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-stage">
        <img
          src={portrait}
          alt="Nishikant Sahoo in a dark blazer, wearing sunglasses, against a brick wall"
          width="1157"
          height="1280"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: '56% 3%' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_30%,transparent_35%,rgba(5,3,10,0.78)_100%),linear-gradient(to_top,rgba(8,5,16,0.92)_0%,rgba(8,5,16,0.55)_32%,rgba(8,5,16,0.0)_62%)]"
        />
        <HeroCopy reduced />
      </section>
      <section id="about-intro" className="relative bg-stage px-5 pb-24 pt-24 sm:px-10 md:px-14 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(260px,34vw)_1fr] md:gap-14">
          <div className="relative w-[min(70vw,320px)] md:w-full md:max-w-[28rem]">
            <img
              src={portrait}
              alt=""
              width="1157"
              height="1280"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[36px] object-cover"
              style={{ objectPosition: '50% 18%' }}
            />
            <OpenBadge />
          </div>
          <ProfileText />
        </div>
      </section>
    </>
  )
}
