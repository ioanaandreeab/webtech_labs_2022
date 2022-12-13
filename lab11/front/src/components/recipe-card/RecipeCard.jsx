import React from "react";
import { useState } from "react";

import './RecipeCard.css';

const RecipeCard = ({name, prepTime, ingredients, difficulty}) => {
    const [completedTimesCount, setCompletedTimesCount] = useState(0);

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
            <p>{`You completed this recipe ${completedTimesCount} times`}</p>
            <button className="recipe-details-btn" onClick={() => setCompletedTimesCount(completedTimesCount + 1)}>Recipe completed?</button>
        </div>
    );
};

export {RecipeCard};