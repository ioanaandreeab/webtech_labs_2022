import {createStore} from 'redux';

import reducer from '../reducers/recipe-reducer';

const store = createStore(reducer);

export default store;