import React, { useState } from 'react'
import profile from '../assets/women.png'
import { Link } from 'react-router-dom'
import { UserCog2, UserRound } from 'lucide-react'
const Menubar = () => {
  const activeLink = localStorage.getItem('linkbar');

  return (
    <div className='py-4 p-3 flex mx-auto flex-col gap-4 w-full min-h-screen'>
      <h1 className='text-[#FF6666] text-4xl text-center font-bold'>Womb</h1>
      <div className='gap-2  flex-col mx-auto'>
        <div className='rounded-full w-1/2 h-1/2 mx-auto'>
        <img src={profile} alt="profile" className='w-full h-full ' />
        </div>
        <p className='text-sm text-center text-white mt-2'>Melanie M.</p>
        <p className='text-sm text-center text-white text-opacity-90'>emailid@idh.com</p>
      </div>
        <hr className='h-px bg-gray border-0'/>

      <div className='flex-col gap-4'>
        <Link to='/dashboard/admin' onClick={()=>localStorage.setItem('linkbar','admin')}>
          <p className={`p-3 w-full text-white rounded-lg text-lg text-center flex gap-2 ${(activeLink==='admin')? 'bg-[#FF6666]' :''}`}>
          <UserRound/>
            Admin Management
          </p>
        </Link>
        <Link to='/dashboard/roles' onClick={()=>localStorage.setItem('linkbar','roles')}>
          <p className={`p-3 w-full text-white rounded-lg text-lg text-center flex gap-2 ${(activeLink==='roles')? 'bg-[#FF6666]' :''}`}>
          <UserCog2 />Role Management
          </p>
        </Link>
        <Link to='/' onClick={()=>{
          sessionStorage.clear();
          localStorage.setItem('linkbar','admin')
        }}>
          <p className={`p-3 w-full text-white rounded-lg text-lg text-center flex gap-2 ${(activeLink==='logout')? 'bg-[#FF6666]' :''}`}>
          <UserCog2/> Logout
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Menubar