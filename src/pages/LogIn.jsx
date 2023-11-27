import React, { useEffect } from 'react'
import image_icon from '../assets/login-image.png'
import Login from '../components/Loginform';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        let isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if(isLoggedIn) navigate('/dashboard/admin ');
    })
    return (
        <div className='flex h-full'>
          {/* login */}
          <div className='w-[40%]'>
            <Login/>
          </div>
          {/* Image */}
          <div className='h-screen w-[60%]'>
            <img src={image_icon} alt="icon2" className='w-full h-full' />
          </div>
        </div>
      );
    
}

export default Home