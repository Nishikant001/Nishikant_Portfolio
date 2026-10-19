import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Navbar from './Head'
import Preloader from './components/Preloader'
import RoundedScrollTransition from './components/RoundedScrollTransition'
import { HeroScene, StaticHero } from './Hero'
import AboutSection from './About'
import SkillsSection from './Skill'
import ExpertiseSection from './Expertise'
import ProjectsSection from './Project'
import ExperienceSection from './ExperienceSection'
import ContactSection from './Contact'
import Footer from './Footer'
import useReducedMotion from './hooks/useReducedMotion'
import ScrollProgress from './components/ScrollProgress'
import { startSmoothScroll } from './lib/smooth'

function App() {
  const reduced = useReducedMotion()
  const [ready, setReady] = useState(false)
  const onReady = useCallback(() => setReady(true), [])

  useEffect(() => (reduced ? undefined : startSmoothScroll()), [reduced])

  return (
    <>
      <a
        href="#stack"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Preloader onDone={onReady} reduced={reduced} />
      <Navbar ready={ready} />
      <ScrollProgress reduced={reduced} />
      <RoundedScrollTransition
        reduced={reduced}
        hero={reduced ? <StaticHero /> : <HeroScene ready={ready} />}
      >
        <AboutSection reduced={reduced} />
        <SkillsSection reduced={reduced} />
        <ExpertiseSection reduced={reduced} />
        <ProjectsSection reduced={reduced} />
        <ExperienceSection reduced={reduced} />
        <ContactSection reduced={reduced} />
      </RoundedScrollTransition>
      <Footer reduced={reduced} />
    </>
  )
}

export default App
