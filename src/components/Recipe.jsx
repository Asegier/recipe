import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAPI } from '../api/api';
// import { showAll } from '../actions/actions';


class Recipe extends Component {
  render() {

    let { dispatch } = this.props;
    console.log("hi from recipe", this.props);

    let renderRecipes = () => {

      return searchAPI(this.props.search, function(json){
        console.log(json);
        // dispatch(showAll(json));
      })

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
