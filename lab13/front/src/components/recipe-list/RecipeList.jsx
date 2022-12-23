import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Grid} from '@mui/material';

import {RecipeCard} from '../recipe-card/RecipeCard';
import {RecipeForm} from '../recipe-form/RecipeForm';

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

    useEffect(() => {
        axios.get(`${SERVER_ADDR}/api/recipes`).then(res => setRecipes(res.data.recipes));
    }, [])

    return (
        <React.Fragment>
            <Grid container spacing={2} m={2}>
                {recipes.map((recipe, index) => (
                <Grid item key={index}>
                    <RecipeCard recipe={recipe}/>
                </Grid>
                ))}
            </Grid>
            <RecipeForm onAdd={addRecipe}/>
        </React.Fragment>
    )
};

export {RecipeList};