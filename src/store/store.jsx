import { createStore, compose, combineReducers } from 'redux';
import { searchReducer } from '../reducers/reducers'

export let initStore = () => {

  const reducer = combineReducers ({
    search: searchReducer,
    // recipes: recipeShowReducer
  })
  const store = createStore (reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
};
