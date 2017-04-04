import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Search } from './Search'
// import { getRecipe } from '../api/api';

//props of objects returned by API

class Recipe extends Component {
  render() {

    let { recipes } = this.props;
    console.log(this.props);
    let renderRecipes = () => {

      // return getRecipe(this.props);

    }


    return(
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
