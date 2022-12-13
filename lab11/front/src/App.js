import './App.css';
import { RecipeCard } from './components/recipe-card/RecipeCard';
import {recipes} from './utils';

function App() {
  return (
    <div className="App">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} name={recipe.name} prepTime={recipe.prepTime} difficulty={recipe.difficulty} ingredients={recipe.ingredients}/>
      ))}
    </div>
  );
}

export default App;
