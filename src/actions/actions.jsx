export var search = (ingredients) => {
  return {
    type: 'SEARCH_BY_INGREDIENTS',
    ingredients
  };
};

export var showAll = (recipe) => {
  return {
    type: 'SHOW_RECIPE',
    recipe
  };
};
