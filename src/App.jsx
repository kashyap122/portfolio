import React from 'react'
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Work from "./components/Work"
import Connect from "./components/Connect"

const App = () => {
  return (
    <div className='bg-[#f8f0ee] h-screen w-screen scroll-smooth overflow-auto text-[#5a0e0e]'>
      <Header />
      <AboutMe />
      <Work />
      <Connect />
    </div>
  )
}

export default App