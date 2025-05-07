import React from 'react'
import ppf from "../assets/spiderman.png"

const Home = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen pr-6 pl-6 bg-[#1d1d1d]">
      <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6">
        <div className="text-2xl sm:text-3xl font-semibold text-whiet">Software Engineer</div>

        <div className="ppf text-4xl sm:text-6xl minecraftory tracking-widest">HI, I AM</div>

        <div className="ppf text-4xl sm:text-6xl minecraftory tracking-widest">
          KASHYAP CHAUHAN
        </div>
        <button className="inline-block border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-bold px-6 py-3 rounded-lg cursor-pointer">
          View Resume
        </button>
      </div>

      <div className="flex items-center justify-center m-8 lg:mb-0">
        <img
          src={ppf}
          alt="ppf"
          className="h-[400px] sm:h-[500px] object-contain"
        />
      </div>

    </div>
  )
}

export default Home
