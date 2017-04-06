import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLink } from '../api/api';


class Recipe extends Component {

  handleClick = (e) => {

  console.log("from test api", e.target.id)

    // getLink(, function(all){
    // console.log("from test api", e.target)
    //
    // })
  }



  render() {

    let { foodInstructions } = this.props;
    console.log("this is this.props :", this.props);
    console.log("this is foodInstructions: ", foodInstructions[0])

    let renderRecipes = () => {
        return foodInstructions.map((recipe) => {
            return (

                  <div id={recipe.id}
                  key={recipe.id} onClick={this.handleClick}>
                      <h1 id={recipe.id}>{recipe.title} </h1>
                      <img id={recipe.id} src={recipe.image}/>
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
