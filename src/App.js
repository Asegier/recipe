import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';


import fire from './fire'
import './App.css';
import { browserHistory } from 'react-router'

import { Link } from 'react-router'


class App extends Component {

    componentWillMount(){
        fire.auth().onAuthStateChanged( user => {

            this.props.actions.setLoggedInUser(user);

            if (!user){
                browserHistory.push(`/login`)
            }
        })
    }

    handleLogout = (e) => {
        e.preventDefault();
        fire.auth().signOut().then( () => {
            console.log('user logged out ');
            browserHistory.push(`/LoggedOut`)
        }).catch( err => {
            console.log("error: ", err);
            //
        })
    };

    handleDisplayFavourites = () => {
        browserHistory.push(`/Favourites`)
    }


    render() {


        return(
            <div className="App">
              <div>
                  <nav>


                      <div className="nav-wrapper blue-grey darken-2">
                          <div className="left">{ this.props.user ? this.props.user.email : 'Guest' }</div>
                          <Link to="/"><
                              img className="center nav-wrapper" id="foodbar" src="/images/foodbar2.png"/>
                          </Link>
                          {/*<div className="brand-logo center">FoodBar</div>*/}
                          <ul id="nav-mobile" className="nav-mobile right hide-on-med-and-down">
                              <li><i
                                  className="material-icons"
                                  onClick={this.handleDisplayFavourites}
                              >star f</i></li>
                              <li>
                                  <a
                                      href="badges.html"
                                      onClick={this.handleLogout.bind(this)}
                                  >Logout</a>
                              </li>
                          </ul>

                    </div>
                  </nav>
              </div>

              <div>

                          <Parallax>

                            <Background>
                              <img src="images/maya.jpg"/>
                    		    </Background>
                               {this.props.children}
                        </Parallax>

               </div>

               <div className="wrapper-footer">
                 <div className="smallLetters">© Viviane & Chris.  All rights reserved.</div>
               </div>

            </div>

        )
    }

}
function mapStateToProps(state, ownProps){
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
