import React from 'react';
import {useNavigate} from 'react-router';
import {useSelector} from 'react-redux';

import {RecipeCard} from '../recipe-card/RecipeCard';

import './RecipeList.css';


const RecipeList = () => {
    const navigate = useNavigate();

    const recipes = useSelector((state) => {
        console.log(state);
        return state.recipes});

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