import React, {useState} from "react";

import './RecipeForm.css';

// used for adding a recipe
const RecipeForm = (props) => {
    const [name, setName] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const {onAdd} = props;

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

    const addRecipe = () => {
        // onAdd is an async function -> we can use then
        onAdd({
            name, 
            prepTime, 
            difficulty
        }).then(() =>  {
            // reset form fields
            setName('');
            setDifficulty('');
            setPrepTime('');
        });
    }

    return (
        <div className="recipe-form">
            <h2>Add a new recipe</h2>
            <div className="recipe-form-fields">
                <input type="text" placeholder="recipe name" onChange={(event) => setName(event.target.value)} value={name}/>
                <input type="text" placeholder="recipe prep time" onChange={(event) => setPrepTime(event.target.value)} value={prepTime} />
                <select onChange={(event )=> setDifficulty(event.target.value)} value={difficulty}>
                    {options.map((difficultyOption, index) => (
                        <option key={index} value={difficultyOption.value} label={difficultyOption.label} />
                    ))}
                </select>
                <button className="add-recipe-btn" onClick={addRecipe}>Add recipe</button>
            </div>
        </div>
    )
};

export {RecipeForm};