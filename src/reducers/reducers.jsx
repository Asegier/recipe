

export var searchReducer = (state = '', action) => {
  switch (action.type) {
  case 'SEARCH_BY_INGREDIENTS':
    return action.ingredients;
  default:
    return state;
  }
}

export var recipeShowReducer = (state = [], action) => {

  switch (action.type) {
  case 'SHOW_RECIPE':
    return [
    ...state,
      {
        action
      }
    ];

  default:
    return state;

  }

}
