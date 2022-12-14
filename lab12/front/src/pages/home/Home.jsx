import React from 'react';
import { useNavigate } from 'react-router';

import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='home'>
            <h1>Explore and create new recipes</h1>
            <button className='custom-btn' onClick={() => navigate('/recipes')}>Start now</button>
        </div>
    )
};

export {Home};