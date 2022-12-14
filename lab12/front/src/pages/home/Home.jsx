import React, {useEffect} from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {setRecipes} from '../../actions/actions';

import './Home.css';

const SERVER_ADDR = "http://localhost:5002";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${SERVER_ADDR}/api/recipes`).then(res => dispatch(setRecipes(res.data.recipes)));
    }, []);

    return (
        <div className='home'>
            <h1>Explore and create new recipes</h1>
            <button className='custom-btn' onClick={() => navigate('/recipes')}>Start now</button>
        </div>
    )
};

export {Home};