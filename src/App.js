import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';


import fire from './fire'
import './App.css';


class App extends Component {

    componentWillMount(){
        fire.auth().onAuthStateChanged( user => {

            this.props.actions.setLoggedInUser(user);
        })
    }
    render() {


        return(
            <div className="App">
              <div>
                  <nav>


                      <div className="nav-wrapper blue-grey darken-2">
                          <div className="brand-logo center">FoodBar</div>

                          <ul id="nav-mobile" className="right hide-on-med-and-down">
                              <li><i className="material-icons">star f</i></li>
                              <li>
                                  <a href="badges.html">Logout</a>
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
