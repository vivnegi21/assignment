import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    sessionStorage.clear();
    const navigate = useNavigate();
    
    navigate('/log-in');
}

export default Logout