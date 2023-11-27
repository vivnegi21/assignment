import React, { useState } from 'react'
import profile from '../assets/women.png'
import { Link } from 'react-router-dom'
import { UserCog2, UserRound } from 'lucide-react'
const Menubar = () => {
  const [linkbar, setLinkBar] = useState('admin');

  return (
    <div className='py-4 p-3 flex mx-auto flex-col gap-4 w-full lg:min-h-screen max-lg:h-fit max-lg:text-xs'>

      <h1 className='text-[#FF6666] text-4xl text-center font-bold'>Womb</h1>

      <div className='gap-2  flex-col mx-auto'>
        <div className='rounded-full w-1/2 h-1/2 mx-auto'>
          <img src={profile} alt="profile" className='w-full h-full ' />
        </div>
        <p className='text-sm text-center text-white mt-2'>Melanie M.</p>
        <p className='text-sm text-center text-white text-opacity-90'>emailid@idh.com</p>
      </div>

      <hr className='h-px bg-gray border-0' />

      <div className='flex flex-col gap-4 max-lg:flex-row'>
        <Link to='/dashboard/admin' onClick={() => setLinkBar('admin')}>
          <p className={`p-3 w-full text-white rounded-lg text-lg text-center max-lg:text-xs flex gap-2 ${(linkbar === 'admin') ? 'bg-[#FF6666]' : ''}`}>
            <UserRound /> Admin Management
          </p>
        </Link>
        <Link to='/dashboard/roles' onClick={() => setLinkBar('roles')}>
          <p className={`p-3 w-full text-white rounded-lg max-lg:text-xs text-lg text-center flex gap-2 ${(linkbar === 'roles') ? 'bg-[#FF6666]' : ''}`}>
            <UserCog2 /> Role Management
          </p>
        </Link>
        <Link to='/' onClick={() => sessionStorage.clear()}>
          <p className={`p-3 w-full text-white rounded-lg text-lg text-center flex gap-2 max-lg:text-xs`}>
            <UserCog2 /> Logout
          </p>
        </Link>
      </div>

    </div>
  )
}

export default Menubar