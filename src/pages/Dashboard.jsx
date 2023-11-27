import  Menubar  from '../components/Menubar';
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const isLogged = sessionStorage.getItem('isLoggedIn');
        if(!isLogged) return navigate('/log-in');
        
    })
    return (
    <div className='flex w-full h-full'>
        {/* Sidebar */}
        <div className='w-[20%] bg-[#0A3055]'>
            <Menubar/>
        </div>
        {/* Panel */}
        <div className='w-full h-full flex-col p-3 gap-8'>
            <Outlet/>
        </div>
    </div>
  )
}
export default Dashboard