import { searchReducer } from '../reducers/reducers';
import { recipeShowReducer } from '../reducers/reducers';


module.exports = {
  getRecipe: function(searchInput) {
    console.log("hi from api", searchInput)
    searchAPI(searchInput,function(json){
      console.log(json)

    });
  }
}


function searchAPI(ingredient, cb){

        const headers = new Headers({
            "X-Mashape-Key": "myag4vesVomshRjyCEbIzvRB9AvXp1KEaP9jsnXpyENrKtvP2u",
            "Content-Type": "application/json",
            "Accept": "application/json"});
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${ingredient}&limitLicense=false&number=5&ranking=1`
        fetch(url, {headers})
            .then(function(response){
              return response.json();
            })
            .then(function(json){
              cb(json);
            

            });
}

export default searchAPI
