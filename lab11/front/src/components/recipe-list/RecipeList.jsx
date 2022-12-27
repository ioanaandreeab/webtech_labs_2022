import React, {useState, useEffect} from 'react';
import axios from "axios";

import {RecipeCard} from '../recipe-card/RecipeCard';
import {RecipeForm} from '../recipe-form/RecipeForm';

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

    const editRecipe = async(recipe) => {
        await axios.put(`${SERVER_ADDR}/api/recipes/${recipe.id}`, {prepTime: recipe.prepTime, name: recipe.name, difficulty: recipe.difficulty});
        getRecipes();
    }

    const deleteRecipe = async(recipe) => {
        await axios.delete(`${SERVER_ADDR}/api/recipes/${recipe.id}`);
        getRecipes();
    }

    // when component is mounted, fetch recipes from backend server
    useEffect(() => {
        axios.get(`${SERVER_ADDR}/api/recipes`).then(res => setRecipes(res.data.recipes));
    }, [])

    return (
        <React.Fragment>
            <div className='recipe-list'>
                {recipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe} onEdit={editRecipe} onDelete={deleteRecipe} />)}
            </div>
            <RecipeForm onAdd={addRecipe}/>
        </React.Fragment>
    )
};

export {RecipeList};