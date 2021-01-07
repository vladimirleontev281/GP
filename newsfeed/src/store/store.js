import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import globalReducer from './reducers/globalReducer';
import articlesReducer from './reducers/articlesReducer';

const reducers = combineReducers({
  articles: articlesReducer,
  global: globalReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;