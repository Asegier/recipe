import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLink } from '../api/api';
import { idURL } from '../actions/actions';
import fire from '../fire'

class Recipe extends Component {

    handleClick = (recipe, e) => {

        let {dispatch} = this.props;

        //var id = e.target.id;
        console.log("id from recipe:", recipe.id);

        getLink(recipe.id, function(all){
            dispatch(idURL(all));
            console.log(all)
            window.open( all.sourceUrl );
        })

        // window.open(this.props.allInfo);

    }

    handleFavourite = (recipe, e) => {

            var upd = {};
            upd[recipe.id] = {
                title: recipe.title,
                image: recipe.image
            };
            fire.database().ref('favourites/' + this.props.user.uid).update(upd);
            console.log("favourites have been saved in Firebase")

    }


    render() {

        let { foodInstructions } = this.props;

        if( !foodInstructions || !foodInstructions.length ) foodInstructions = [];

        let renderRecipes = () => {
            return foodInstructions.map((recipe) => {
                return (


                    <div className="row" key={recipe.id}>
                        <div className="wrapper-recipe center card">

                            <i className="material-icons right medium"
                               onClick={this.handleFavourite.bind(this, recipe)}
                            >star</i>
                            <div id={recipe.id}
                                 key={recipe.id}
                                 onClick={this.handleClick.bind(this, recipe)} >
                                <h1 className="title" id={recipe.id}>{recipe.title} </h1>
                                <img className="image" id={recipe.id} src={recipe.image}/>
                            </div>
                        </div>


            )

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

function mapStateToProps(state, ownProps){
    return {
        user: state.user,
        foodInstructions: state.foodInstructions
    }
}

export default connect(mapStateToProps)(Recipe);
