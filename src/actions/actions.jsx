export var search = (ingredients) => {
  return {
    type: 'SEARCH_BY_INGREDIENTS',
    ingredients
  };
};

export var showAll = () => {
  return {
    type: 'SHOW_RECIPE'
  };
};
