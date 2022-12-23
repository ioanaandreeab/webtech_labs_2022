import React from "react";

import {Card, CardContent, Typography, Rating} from '@mui/material';

const RecipeCard = ({recipe}) => {
    const {name, prepTime, difficulty} = recipe;
    return (
         <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography variant="h4" color="text.primary" gutterBottom>
                {name}
            </Typography>
            <Typography variant="h5" component="div">
            {`${prepTime} minutes`}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                prep time
            </Typography>
            <Rating name="read-only" value={difficulty === "beginner" ? 1 : 5} readOnly />
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {difficulty}
            </Typography>
            </CardContent>
        </Card>
    );
};

export {RecipeCard};