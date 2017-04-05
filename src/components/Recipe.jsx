import React, { Component } from 'react';
import { connect } from 'react-redux';


class Recipe extends Component {



  render() {

    let { foodInstructions } = this.props;
    console.log("this is this.props :", this.props);


    let renderRecipes = () => {

      return foodInstructions.map((recipe) => {

          return (

                <div key={recipe.action.recipes[0].id}>
                    <h1>{recipe.action.recipes[0].title} </h1>
                    <img src={recipe.action.recipes[0].image}/>
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
