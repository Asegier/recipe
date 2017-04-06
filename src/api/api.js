// var unirest = require('unirest');
module.exports = {
   searchAPI:
          function(ingredient, cb){

          const headers = new Headers({
              "X-Mashape-Key": "XWkI3QrSiwmshqIW6tagnOvwpVdnp1VccZYjsnmytVAkNgFL85", //Viviane
              // "X-Mashape-Key":"myag4vesVomshRjyCEbIzvRB9AvXp1KEaP9jsnXpyENrKtvP2u", //Chris
              // "X-Yummly-App-Key":"2feabaa7be8cb35038e8faf080f3a2bf",
              "Content-Type": "application/json",
              "Accept": "application/json"});
          const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${ingredient}&limitLicense=false&number=5&ranking=1`
          fetch(url, {headers})
              .then(function(response){
                return response.text();
              })
              .then(function(json){
                cb(json);

              });
          },

    getLink:
          function(id, cb){

          const headers = new Headers({
              "X-Mashape-Key": "XWkI3QrSiwmshqIW6tagnOvwpVdnp1VccZYjsnmytVAkNgFL85",
              "Content-Type": "application/json",
              "Accept": "application/json"});
          const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`
          fetch(url, {headers})
              .then(function(response){
                return response.text();
              })
              .then(function(json){
                cb(json);

              });
    }

}

//
