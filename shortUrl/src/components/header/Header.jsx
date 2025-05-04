import React, { useState } from 'react'
import logo from '../../../public/logo.svg'

function Header() {
    
  return (
  <header className='max-w-6xl mx-auto '>
  <nav className='flex w-full justify-between md:items-center shadow-2xl px-6 py-6 rounded-2xl'>
  <div className='flex md:items-center justify-around md:space-x-20  '>
  <a href='#'>
    <img src={logo}></img>
</a>
<div className='hidden md:flex space-x-10 font-bold text-gray-500'  >
    <p>Feature</p>
    <p> Pricing</p>
    <p> Resources</p>
</div>
  </div>
  <div className='hidden md:flex md:space-x-10 text-gray-500 font-bold'>
  <button className='bg-red-100 px-6 py-2 rounded-2xl'>Login</button>
  <button>Sign Up</button>


  </div>
  {/* for humber */}
<div className='md:hidden'>hello</div>
  </nav>
  </header>
  )
}

export default Header
