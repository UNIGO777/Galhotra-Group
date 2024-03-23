import React from 'react'
import logo from '../../images/Designer-pana.png'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='w-full bg-white ' style={{position: "fixed", zIndex:"1"}}>
    <nav className=' h-14 p-2 lg:px-8 flex flex-row justify-between items-center gap-x-8 font-bold text-lg'>
      <div className='w-12 h-full '>
        <img src={logo} alt='Logo' className="logo w-full h-full object-cover" />
        </div>
        <div className='w-7 h-full flex items-center md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='mt-2'><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        </div>
        <ul className='hidden md:flex flex-row justify-center text-center items-center gap-x-8 font-semibold mt-2  text-gray-700 text-[1rem] gap-2'>
          <Link className='  hover:underline' to="./">Services</Link>
          <Link className='  hover:underline' to="./">Pricing</Link>
          <Link className='  hover:underline' to="./">About</Link>
          <Link className=' hover:underline' to="./">Contact</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav