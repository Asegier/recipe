import React, { Component } from 'react';

import Search from './Search'
import Recipe from './Recipe'
import fire from '../fire'
//import firebase from 'firebase'

class Favourites extends Component {

    constructor(props){
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        fire.auth().onAuthStateChanged( user => {

            if (user) {
                console.log('Favorites: requesting favorites');
                fire.database().ref('/favourites/' + user.uid).once('value').then(function (snapshot) {
                    var recipes_obj = snapshot.val();
                    let recipes = [];
                    for (let id in recipes_obj) {
                        let recipe = recipes_obj[id];
                        recipe.id = id;
                        recipes.push(recipe);
                        console.log("recipes: ", recipes)
                    }
                    console.log("recipes outside", recipes);
                    this.setState({recipes: recipes});
                }.bind(this));
            } else {
                console.log('Favorites: no user')
            }
        })
    }

    render() {

        return(
            <div>


                <div className="wrapper">


                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                {console.log("this is recipes!", this.state.recipes)}
                                {this.state.recipes.map( recipe => {
                                    return (
                                        <div className="row center" key={recipe.id}>
                                            <div className="wrapper-recipe center card">
                                                <div id={recipe.id}
                                                     key={recipe.id}
                                                     >
                                                    <h1 className="title" id={recipe.id}>{recipe.title} </h1>
                                                    <img className="image" id={recipe.id} src={recipe.image}/>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="container" id="search">
                        <div className="row">
                            <div className="col s12">
                                <Recipe/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}

export default Favourites;
