import React, {useState} from "react";
import {Button, Select, FormControl, InputLabel, MenuItem, TextField, Grid} from '@mui/material';

import './RecipeForm.css';

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
        <Grid container direction="column" className="recipe-form">
            <h2>Add a new recipe</h2>
                <TextField label="Recipe name" onChange={(event) => setName(event.target.value)} value={name}/>
                <TextField label="Recipe prep time" onChange={(event) => setPrepTime(event.target.value)} value={prepTime}/>
                <FormControl fullWidth>
                    <InputLabel id="simple-select-label">Difficulty</InputLabel>
                    <Select
                        labelId="simple-select-label"
                        id="simple-select"
                        value={difficulty}
                        label="Difficulty"
                        onChange={(event) => setDifficulty(event.target.value)}
                    >
                        {options.map((difficultyOption, index) => <MenuItem key={index} value={difficultyOption.value} >{difficultyOption.label}</MenuItem>)}
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={addRecipe}>Add recipe</Button>
        </Grid>
    )
};

export {RecipeForm};