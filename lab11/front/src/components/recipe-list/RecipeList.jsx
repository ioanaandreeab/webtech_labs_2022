import React, {useState, useEffect} from 'react';
import axios from "axios";

import './RecipeList.css';

const SERVER_ADDR = "http://localhost:5002";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    const getRecipes = async() => {
        const allRecipes = await axios.get(`${SERVER_ADDR}/api/recipes`).then(res => res.data.recipes);
        setRecipes(allRecipes);
    };

    const addRecipe = async(recipe) => {
        await axios.post(`${SERVER_ADDR}/api/recipes`, recipe);
        getRecipes();
    }

    // when component is mounted, fetch recipes from backend server

    return (
        <React.Fragment>
            <div className='recipe-list'>
                list of recipes goes here
            </div>
            add recipe form goes here
        </React.Fragment>
    )
};

export {RecipeList};