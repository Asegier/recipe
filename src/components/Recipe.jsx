import React, { Component } from 'react';
import { connect } from 'react-redux';


class Recipe extends Component {



  render() {

    let { foodInstructions } = this.props;
    console.log("this is this.props :", this.props);
    console.log("this is foodInstructions: ", foodInstructions[0])

    let renderRecipes = () => {

      return foodInstructions.map((recipe) => {
            return (

                  <div key={recipe.id}>
                      <h1>{recipe.title} </h1>
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
