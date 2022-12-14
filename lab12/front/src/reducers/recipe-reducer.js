const INITIAL_STATE = {
    recipes: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_RECIPE':
            return {...state, recipes: [...state.recipes, action.payload]}
        case 'SET_RECIPES':
            return {...state, recipes: action.payload}
        default:
            return state;
    }
}