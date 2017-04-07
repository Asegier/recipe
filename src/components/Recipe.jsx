import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLink } from '../api/api';
import { idURL } from '../actions/actions';

class Recipe extends Component {

  handleClick = (e) => {

    let {dispatch} = this.props;

    var id = e.target.id;
    console.log("id from recipe:", id)

    getLink(e.target.id, function(all){
      dispatch(idURL(JSON.parse(all)))
    })

    window.open(this.props.allInfo);

  }


  render() {

    let { foodInstructions } = this.props;

    let renderRecipes = () => {
        return foodInstructions.map((recipe) => {
            return (

              <div className="row">
                <div className="card"> 

                    <i className="material-icons right medium">star</i>
                      <div id={recipe.id}
                      key={recipe.id} onClick={this.handleClick} >
                          <h1 className="title" id={recipe.id}>{recipe.title} </h1>

                          <img className="image" id={recipe.id}
                         src={recipe.image}/>
                         </div>
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
