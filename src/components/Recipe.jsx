import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLink } from '../api/api';


class Recipe extends Component {

  handleClick = (e) => {




  }

  render() {

    let { foodInstructions } = this.props;

    let renderRecipes = () => {

      return foodInstructions.map((recipe) => {
            return (

              <div className="wrapper-recipe">
                  <div key={recipe.id} onClick={this.handleClick}
                   >
                      <h1 className="title">{recipe.title} </h1>
                      <img className="image" src={recipe.image}/>
                  </div>
              </div>
            )

      })
    };




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
