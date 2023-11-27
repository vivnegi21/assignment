import React, { useState } from 'react'
import logo from '../assets/icon.png'
import smiley from '../assets/smiley.png'
import { Eye, EyeOff, KeyRound, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});
    const [password, setPassword] = useState(true);

    const handleToggle = () => setPassword(!password);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (formData['email'] === 'vivek@idh.in' && formData['password'] === 'vivek@idh') {
            sessionStorage.setItem("isLoggedIn", true);
            localStorage.setItem('linkbar','admin');
            navigate('/')
        }else{
            alert('Invalid Credentials');
        }
    };

    return (
        <div className=' mt-24 mx-auto  flex flex-col items-center justify-center gap-4'>
            <div className='absolute top-14 left-10'>
                <img src={smiley} alt="smiley" />
            </div>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <h1 className='text-xl text-[#0A3055] mt-4'>Login to your account</h1>

            <form action="" className='flex flex-col gap-4 mt-8 items-start p-3' onSubmit={onSubmit}>
                <div className='flex items-center'>
                    <Mail className='-mr-10 z-10' />
                    <input type="text" placeholder='Enter Email Address' className='border p-3 rounded-lg w-96 pl-12 border-[#0A3055] ' id='email' onChange={handleChange} />
                </div>
                <div className='flex items-center'>
                    <KeyRound className='z-10 -mr-10' />
                    <input type={password ? "password" : "text"} placeholder='Password' className=' border p-3 rounded-lg w-96 pl-12 border-[#0A3055] ' id='password' onChange={handleChange} />
                    <div className='-ml-10 cursor-pointer'>
                        {
                            password ? <Eye onClick={handleToggle} /> : <EyeOff onClick={handleToggle} />
                        }
                    </div>
                </div>
                <p className='text-[#0A3055] text-sm -ml-4'>Forget Password?</p>
                <button className='bg-[#F66] w-96 p-3 rounded-lg -ml-4 text-white mt-10'>
                    Login
                </button>
            </form>

        </div>
    )
}

export default Login