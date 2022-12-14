import React from "react";

import './RecipeCard.css';

const RecipeCard = ({recipe, onClick}) => {
    const {name, prepTime, difficulty} = recipe;
    return (
        <div className="recipe-card" onClick={onClick}>
            <div className="title-container">
                <h1>{name}</h1>
            </div>
            <h3>Prep time:</h3>
            <p>{`${prepTime} minutes`}</p>
            <h3>Difficulty:</h3>
            <p>{difficulty}</p>
        </div>
    );
};

export {RecipeCard};