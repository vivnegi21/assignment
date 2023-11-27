import  Menubar  from '../components/Menubar';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TopPanel from '../components/TopPanel';
import SearchBar from '../components/SearchBar';
import AdminTable from '../components/AdminTable';

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const isLogged = sessionStorage.getItem('isLoggedIn');
        if(!isLogged) return navigate('/log-in');
    })
    return (
    <div className='flex'>
        {/* Sidebar */}
        <div className='w-[20%] bg-[#0A3055] h-screen'>
            <Menubar/>
        </div>
        {/* Panel */}
        <div className='w-full h-screen flex-col p-3 gap-8'>
            <TopPanel name='Admin'/>
            <SearchBar/>
            <AdminTable/>
        </div>
    </div>
  )
}

export default Dashboard