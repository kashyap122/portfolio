import React from 'react'
import spiderman from "../assets/spiderman.png"

const Home = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen pr-6 pl-6 bg-[#f8f0ee]">
      <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6">
        <div className="text-2xl sm:text-3xl font-semibold">Software Engineer</div>

        <div className="spiderman text-4xl sm:text-6xl minecraftory tracking-widest">HI, I AM</div>

        <div className="spiderman text-4xl sm:text-6xl minecraftory tracking-widest">
          KASHYAP CHAUHAN £
        </div>

        <div className="inline-block border-2 border-[#5a0e0e] text-[#5a0e0e] hover:bg-[#5a0e0e] hover:text-white transition-all duration-300 font-bold px-6 py-3 rounded-lg cursor-pointer">
          View Resume
        </div>
      </div>

      <div className="flex items-center justify-center mb-8 lg:mb-0">
        <img
          src={spiderman}
          alt="spiderman"
          className="h-[400px] sm:h-[500px] object-contain"
        />
      </div>

    </div>
  )
}

export default Home
