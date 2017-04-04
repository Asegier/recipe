import { createStore, compose, combineReducers } from 'redux';
import { searchReducer } from '../reducers/reducers';
// import { recipeShowReducer } from '../reducers/reducers';

export let initStore = () => {

  const reducer = combineReducers ({
    search: searchReducer
    // recipe: recipeShowReducer
  })
  const store = createStore (reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
};
