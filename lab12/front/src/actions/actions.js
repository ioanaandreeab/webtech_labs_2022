export function addRecipe(recipe) {
    return {
        type: 'ADD_RECIPE',
        payload: recipe
    }
}

export const setRecipes = (recipes) => {
    return {
        type: "SET_RECIPES",
        payload: recipes
    }
}