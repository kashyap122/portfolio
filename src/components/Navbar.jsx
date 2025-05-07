import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center sm:justify-end items-center p-4">
      
      <div className="flex flex-col sm:flex-row items-center text-2xl font-bold space-y-2 sm:space-y-0 sm:space-x-8">
        <a href='#about-me' className="ppf p-2 tracking-widest cursor-pointer hover:text-white transition">ABOUT ME</a>
        <a href='#work' className="ppf p-2 tracking-widest cursor-pointer hover:text-white transition">WORK</a>
        {/* <div className="ppf p-2 tracking-widest cursor-pointer hover:text-white transition">SERVICES</div> */}
        {/* <div className="ppf p-2 tracking-widest cursor-pointer hover:text-white transition">TESTIMONIALS</div> */}
        <a href='#connect' className="ppf p-2 tracking-widest cursor-pointer hover:text-white transition">CONNECT</a>
      </div>

    </div>
  )
}

export default Navbar
