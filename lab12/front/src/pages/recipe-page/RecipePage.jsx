import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {RecipeCard} from '../../components/recipe-card/RecipeCard';

const SERVER_ADDR = "http://localhost:5002";

const RecipePage = () => {
    const [recipe, setRecipe] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${SERVER_ADDR}/api/recipes/${id}`).then(res => {
            setRecipe(res.data.recipe);
        }).catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }, [id]);

    return (
        <React.Fragment>
            <h1>Your recipe</h1>
            {isLoading ? <div>Loading...</div> : <RecipeCard recipe={recipe}/> }
        </React.Fragment>
    )
};

export {RecipePage};