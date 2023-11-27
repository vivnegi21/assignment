import React from 'react'
import banner from '../assets/banner-image.png'
const TopPanel = ({ name }) => {
    return (
        <div className='pl-9 rounded-lg mx-5 h-fit py-5' style={{
            backgroundImage: `linear-gradient(45deg, 
                rgba(255,255,255,0.8), 
                rgba(8,83,156, 0.0)),url(${banner})`,
        }}>
                <h1 className="text-4xl font-bold text-[#0A3055]">{name} Management </h1>
                <h1 className="text-xl font-bold text-[#0A3055] flex gap-3">Dashboard<span className='font-normal flex items-center gap-2'> <hr  className='w-1 h-1 border-0 bg-dark-1 rounded-full'/>{name} Management</span> </h1>
        </div>
    )
}

export default TopPanel