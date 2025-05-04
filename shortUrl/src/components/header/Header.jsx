import React, { useState } from 'react'
import logo from '../../../public/logo.svg'
import menu from '../../../public/icons8-menu.svg'
import cross from '../../../public/cross-svgrepo-com.svg'


function Header() {

  const [change,setChange ]=useState(true)
    
 const  handleChange=()=>{
  setChange((prev)=>(!prev))
 }
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
<div className='md:hidden z-30 relative bg-white rounded-4xl w-10 items-center flex justify-center'>
  <img onClick={handleChange} className='w-5 '    src={change ? menu : cross} ></img>
</div>
  </nav>
  {!change && (
  <div className='md:hidden space-y-4 bg-black absolute top-0 h-130 text-white justify-center w-screen z-10 duration-700 transition-all flex flex-col items-center py-6'>
    <a href='#' className='border-b '>Features</a>
    <a href='#' className='border-b'>Pricing</a>
    <a href='#' className='border-b'>Resources</a>
  </div>
)}
  </header>
  )
}

export default Header
