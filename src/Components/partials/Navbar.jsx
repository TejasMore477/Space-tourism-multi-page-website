import React from 'react';
import logo from '/shared/logo.svg';
import menu from '/shared/icon-hamburger.svg';

function Navbar({setMenuBar}) {
  return (
    <div className='w-full bg-zinc-600 bg-opacity-20 backdrop-blur-sm flex items-center justify-between px-4 py-2'>
       <img className='size-[9vw] cursor-pointer' src={logo} alt="" />
       <img onClick={()=>setMenuBar(prev=>!prev)} className='size-[3.5vw] cursor-pointer' src={menu} alt="" /> 
    </div>
  )
}

export default Navbar