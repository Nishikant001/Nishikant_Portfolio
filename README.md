# Nishikant Sahoo — Portfolio

React 18 + Vite + Tailwind CSS 3, with GSAP ScrollTrigger for scroll-driven motion.

## Commands

```bash
npm install          # install dependencies
npm run dev          # development server
npm run build        # production build  -> dist/
npm run preview      # serve the production build locally
npm run lint         # ESLint
```

## The signature transition

`src/components/RoundedScrollTransition.jsx` owns it. Everything is scrubbed to scroll position, so reversing scroll reverses it exactly.

1. **Phase 1** (2 viewport heights on desktop, 1.6 on phones): the full-bleed portrait morphs into the rounded profile card (its target is measured from a layout slot), hero copy leaves, profile text arrives, and the whole stage becomes a scaled, rounded surface.
2. **Phase 2** (last viewport height): the next sheet rises over the receding stage; its top corners go from rounded to square while the stage dims.

`prefers-reduced-motion` skips pinning, morphing and cycling and renders a static hero plus a normal profile section.

## Structure

- `src/data/site.js` — all content (profile, roles, stack, expertise, projects, experience). Edit text here.
- `src/Hero.jsx`, `About.jsx`, `Skill.jsx`, `Expertise.jsx`, `Project.jsx`, `ExperienceSection.jsx`, `Contact.jsx`, `Footer.jsx` — sections
- `src/Head.jsx` — navigation (desktop pill, mobile sheet, active state)
- `src/components/` — `RoundedScrollTransition`, `RoleCycler`, `Preloader`, `SplitHeading`
- `src/hooks/` — `useReveal` (scroll entrances), `useReducedMotion`
- `src/lib/` — `gsap.js` (single registration), `goTo.js` (anchor scrolling), `scrollMap.js`

## Contact form

Unchanged EmailJS service, template and public key (now via the installed `emailjs-com` package instead of a CDN script).

## Motion system (whole page)

Everything below the hero follows the same rule as the hero transition: **scrubbed to scroll, reversible**.

- `src/lib/smooth.js`: Lenis inertial scrolling, driven by GSAP's ticker (off under reduced motion). `goTo` uses it.
- `src/hooks/useReveal.js`: `data-reveal` = `words` (mask rise), `lit` (words light up), `fade`, `batch`, all scrubbed.
- `src/hooks/useParallax.js`: `data-speed="0.2"` (or `data-speed-md`) gives any wrapper a depth offset.
- About: lit headline, parallax columns, cards tilt flat. Skills: three rows slide against each other.
- Expertise: sticky sheets that stack over each other (previous one recedes and dims).
- Projects: frame opens from a rounded window, image drifts inside, copy counter-moves.
- Experience: entries come into focus, dot lights, left meta stays sticky. Contact: orbs + form tips up.
- Extra depth: `GhostText` outline words drift behind each section, hero orbs follow the pointer, scroll velocity skews `[data-skew]` cards, frames and rows.
- Footer: fixed behind the page sheet and uncovered as the sheet lifts (clip-path wrapper), letters rise in.
