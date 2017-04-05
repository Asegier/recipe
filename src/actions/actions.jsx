export var search = (ingredients) => {
  return {
    type: 'SEARCH_BY_INGREDIENTS',
    ingredients
  };
};

export var showAll = (recipes) => {
  return {
    type: 'SHOW_RECIPE',
    recipes
  };
};
