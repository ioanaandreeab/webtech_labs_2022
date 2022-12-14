import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router';

import {RecipeCard} from '../recipe-card/RecipeCard';

import './RecipeList.css';

const SERVER_ADDR = "http://localhost:5002";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    const getRecipes = async() => {
        const allRecipes = await axios.get(`${SERVER_ADDR}/api/recipes`).then(res => res.data.recipes);
        setRecipes(allRecipes);
    };

    const addRecipe = async(recipe) => {
        await axios.post(`${SERVER_ADDR}/api/recipes`, recipe);
        getRecipes();
    }

    useEffect(() => {
        getRecipes();
    }, []);

    const navigateToRecipe = (id) => {
        navigate(`/recipes/${id}`)
    }

    return (
        <React.Fragment>
            <div className='recipe-list'>
                {recipes.map((recipe, index) => <RecipeCard onClick={() => navigateToRecipe(recipe.id)} key={index} recipe={recipe} />)}
            </div>
        </React.Fragment>
    )
};

export {RecipeList};