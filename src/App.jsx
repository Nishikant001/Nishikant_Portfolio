// import { useState } from 'react'

import './App.css'
import LandingPage from './Landing'
import MainLayout from './Head'
import HeroSection from './Hero'
import Footer from './Footer'
import AboutSection from './About'
import SkillsSection from './Skill'
import ProjectsSection from './Project'
import ContactSection from './Contact'
import ExperienceSection from './ExperienceSection'

function App() {
  

  return (
    <>
      {/* <LandingPage/> */}
      <MainLayout/>
      <HeroSection/>
      <AboutSection/>
      <ExperienceSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
