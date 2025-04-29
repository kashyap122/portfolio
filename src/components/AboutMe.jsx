import React from 'react'
import got from "../assets/kashyap.JPG"

const AboutMe = () => {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen pr-6 pl-6 pt-3 bg-[#f8f0ee]">
      
      {/* Arrow and Cinephile Text */}
      <div className="hidden lg:flex flex-col items-center absolute top-10 left-[18%] animate-bounce z-10">
        <div className="text-[#5a0e0e] text-xl font-semibold mb-2">I am a cinephile too!</div>
        <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#5a0e0e]"></div>
      </div>

      <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0 px-4">
        <img
          src={got}
          alt="Game of Thrones"
          className="w-full sm:w-3/4 md:w-1/2 lg:w-auto max-h-[60vh] h-auto object-contain rounded-full"
        />
      </div>

      <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6 px-4">
        <h2 className="gameofthrones text-5xl sm:text-6xl font-bold minecraftory tracking-widest">
          ABOUT ME
        </h2>
        <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
          Hey, I’m Kashyap Chauhan—a freshly minted software engineer (ITNU ’25) who lives and breathes code. By day I’m architecting full-stack apps, and by night I’m jotting down tech thoughts and tutorials. I’m a bit on the shy side, but once you mention your latest project or a tricky bug, I’m all ears. Always up for collaborating on anything from hack-worthy side projects to open-source contributions—so if you geek out over code as much as I do, let’s build something awesome together!
        </p>
      </div>

    </div>
  )
}

export default AboutMe
