import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home} from './pages/home/Home';
import {RecipesPage} from './pages/recipes-page/RecipesPage';
import {NotFound} from './pages/not-found/NotFound';

import './App.css';
import { RecipePage } from './pages/recipe-page/RecipePage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/recipes' element={<RecipesPage/>} />
            <Route path='/recipes/:id' element={<RecipePage/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
