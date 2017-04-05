import React, { Component } from 'react';
import { connect } from 'react-redux';


class Recipe extends Component {



  render() {

    let { recipes } = this.props;
    console.log("this is this.props :", this.props);


    let renderRecipes = () => {

      return recipes.map((recipe) => {
        {console.log("this is recipe: ", recipe)}
        {console.log("recipe.id: ", recipe.action.recipes[0])}
        {console.log("recipe.title: ", recipe.title)}
          return (

                <div key={recipe.action.recipes.id}>
                    <h1>{recipe.action.recipes.title} </h1>
                    <img src={recipe.image}/>
                </div>
          )
      })

    }

    return (

      <div>
        {renderRecipes()}
      </div>

    )

  }

}


export default connect(
  (state) => {
    return state;
  }
)(Recipe);
