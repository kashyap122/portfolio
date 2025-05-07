import React from 'react'
import "./index.css"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Work from "./components/Work"
import Connect from "./components/Connect"
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import SkillsMarquee from './components/SkillsMarquee'
import ProjectsCarousel from './components/ProjectsCarousel'

const App = () => {
  

  return (
      <div className='bg-[#1d1d1d] h-screen w-screen scroll-smooth overflow-auto text-white'>
      <Header />
      <AboutMe />
      <SkillsMarquee />
      <Work />
      {/* <Services />
      <Testimonials /> */}
      <Connect />
    </div>
  )
}

export default App