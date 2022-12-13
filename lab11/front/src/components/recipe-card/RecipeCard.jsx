import React from "react";

import './RecipeCard.css';

const RecipeCard = ({name, prepTime, ingredients, difficulty}) => {
    return (
        <div className="recipe-card">
            <h1>{name}</h1>
            <p>Ingredients</p>
            <ul>
                <li>apples</li>
                <li>sugar</li>
                <li>plums</li>
                <li>flour</li>
            </ul>
            <h3>Prep time:</h3>
            <p>{`${prepTime} minutes`}</p>
            <h3>Difficulty:</h3>
            <p>{difficulty}</p>
            <button className="recipe-details-btn">Recipe completed?</button>
        </div>
    );
};

export {RecipeCard};