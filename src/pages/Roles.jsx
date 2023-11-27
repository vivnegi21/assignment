import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Menubar from '../components/Menubar';
import TopPanel from '../components/TopPanel';

const Roles = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const isLogged = sessionStorage.getItem('isLoggedIn');
        if (!isLogged) return navigate('/log-in');
    })
    return (
        <div className='flex'>
            {/* Sidebar */}
            <div className='w-[20%] bg-[#0A3055] h-screen'>
                <Menubar />
            </div>
            {/* Panel */}
            <div className='w-full h-screen flex-col p-3 gap-4'>
            <TopPanel name='Role'/>
            </div>
        </div>
    )
}

export default Roles