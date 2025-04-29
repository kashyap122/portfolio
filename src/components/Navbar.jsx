import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center sm:justify-end items-center p-4">
      
      <div className="flex flex-col sm:flex-row items-center text-2xl font-bold space-y-2 sm:space-y-0 sm:space-x-8">
        <div className="spiderman p-2 tracking-widest cursor-pointer hover:text-[#5a0e0e] transition">ABOUT ME</div>
        <div className="spiderman p-2 tracking-widest cursor-pointer hover:text-[#5a0e0e] transition">WORK</div>
        <div className="spiderman p-2 tracking-widest cursor-pointer hover:text-[#5a0e0e] transition">SERVICES</div>
        <div className="spiderman p-2 tracking-widest cursor-pointer hover:text-[#5a0e0e] transition">TESTIMONIALS</div>
        <div className="spiderman p-2 tracking-widest cursor-pointer hover:text-[#5a0e0e] transition">CONNECT</div>
      </div>

    </div>
  )
}

export default Navbar
