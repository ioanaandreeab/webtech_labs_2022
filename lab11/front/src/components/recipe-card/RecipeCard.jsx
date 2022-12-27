import React, {useState} from "react";

import './RecipeCard.css';

const RecipeCard = ({recipe, onEdit, onDelete}) => {
    const [name, setName] = useState(recipe.name);
    const [prepTime, setPrepTime] = useState(recipe.prepTime);
    const [difficulty, setDifficulty] = useState(recipe.difficulty);
    const [isEditingMode, setIsEditingMode] = useState(false);

    const options = [
        {
            label: 'Beginner',
            value: 'beginner'
        }, 
        {
            label: 'Advanced',
            value: 'advanced'
        }
    ];

    return (
        <div className="recipe-card">
            {isEditingMode ? 
                <>
                    <input type="text" placeholder="recipe name" onChange={(event) => setName(event.target.value)} value={name}/>
                    <input type="text" placeholder="recipe prep time" onChange={(event) => setPrepTime(event.target.value)} value={prepTime} />
                    <select onChange={(event)=> setDifficulty(event.target.value)} value={difficulty}>
                        {options.map((difficultyOption, index) => (
                            <option key={index} value={difficultyOption.value} label={difficultyOption.label} />
                        ))}
                    </select>
                    <button className="recipe-card-del-btn" onClick={() => setIsEditingMode(false)}>Cancel</button>
                    <button 
                        className="recipe-card-save-btn" 
                        onClick={() => {
                            onEdit({id: recipe.id, name, prepTime, difficulty});
                            setIsEditingMode(false);
                            }}>
                        Save
                    </button>
                </>
            :
                <>
                    <div className="title-container">
                        <h1>{name}</h1>
                    </div>
                    <h3>Prep time:</h3>
                    <p>{`${prepTime} minutes`}</p>
                    <h3>Difficulty:</h3>
                    <p>{difficulty}</p>
                    <button className="recipe-card-save-btn" onClick={() => setIsEditingMode(true)}>Edit</button>
                    <button className="recipe-card-del-btn" onClick={() => onDelete(recipe)}>Delete</button>
                </>
            }
        </div>
    );
};

export {RecipeCard};