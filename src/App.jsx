import React from 'react'
import "./index.css"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Work from "./components/Work"
import Connect from "./components/Connect"
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import SkillsMarquee from './components/SkillsMarquee'

const App = () => {
  return (
      <div className='bg-[#f8f0ee] h-screen w-screen scroll-smooth overflow-auto text-[#5a0e0e]'>
      <Header />
      <SkillsMarquee />
      <AboutMe />
      <Work />
      <Services />
      <Testimonials />
      <Connect />
    </div>
  )
}

export default App