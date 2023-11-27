import React, { useEffect } from 'react'
import image_icon from '../assets/login-image.png'
import { useNavigate } from 'react-router-dom';
import Loginform from '../components/Loginform';

const Home = () => {
    const navigate = useNavigate();
    
    useEffect(()=>{
        let isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if(isLoggedIn) navigate('/dashboard/admin ');
    })

    return (
        <div className='flex h-full max-lg:flex-col'>

          {/* login */}
          <div className='lg:w-[40%]'><Loginform/></div>
          {/* Image */}
          <div className='md:h-screen lg:w-[60%]'><img src={image_icon} alt="icon2" className='w-full h-full' /></div>

        </div>
      );
    
}

export default Home