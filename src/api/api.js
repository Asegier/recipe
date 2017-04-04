// var unirest = require('unirest');
module.exports = {
   searchAPI:
          function(ingredient, cb){

          const headers = new Headers({
              "X-Mashape-Key": "XWkI3QrSiwmshqIW6tagnOvwpVdnp1VccZYjsnmytVAkNgFL85",
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
          }
}


// module.exports = {
//   getRecipe: function(searchInput) {
//     searchAPI(searchInput,function(json){
//       console.log(json);
//
//     });
//   }
// }
