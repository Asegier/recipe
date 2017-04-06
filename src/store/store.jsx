import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { searchReducer } from '../reducers/reducers';
import { recipeShowReducer } from '../reducers/reducers';
import { user } from '../reducers/userReducer'
import thunkMiddleware from 'redux-thunk'
import {routerReducer} from 'react-router-redux'

export let initStore = () => {

  const reducer = combineReducers ({
    search: searchReducer,
      user,
      routing: routerReducer,
    foodInstructions: recipeShowReducer
  })
    const store = createStore (reducer, compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ) )

  return store
};
