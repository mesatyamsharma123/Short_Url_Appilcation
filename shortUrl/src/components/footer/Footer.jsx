import React from 'react';
import logo from '../../../public/logo.svg'
import a from '../../../public/icon-facebook.svg'
import b from '../../../public/icon-instagram.svg'
import c from '../../../public/icon-pinterest.svg'
import d from '../../../public/icon-twitter.svg'
function Footer() {
  return (
    <footer className=' bg-purple-900 fle'>
    <div className="  mx-auto  px-8 md:px-30 py-20 md:items-center text-white bg-cover mt-30 w-screen flex flex-col md:flex-row md:space-x-10 justify-between">
    <div className='md:flex md:space-x-10 md:items-center space-y-10 md:space-y-0'>
      <img className='bg-white rounded-2xl p-3 '  src={logo}></img>
      <div className='font-bold md:flex space-x-20'>
  <p>Feature </p>
  <p>Resources </p>
  <p>Company</p>
      </div>
    </div>
    <div className='flex gap-5 mt-10 md:mt-0'>
      <img className='' src={a}></img>
      <img className='' src={b}></img>
      <img className='' src={c}></img>
      <img className='' src={d}></img>
      
    </div>
    </div>
    <div className='text-center text-white font-bold pb-20'>
      <p>@Copy 2025 made by Satyam Sharma</p>
    </div>
    </footer>
  );
}

export default Footer;
