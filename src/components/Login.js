import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import fire from '../fire'
import { browserHistory } from 'react-router';
import {Link} from 'react-router'


class Login extends Component {

    handleSubmit(e){
        e.preventDefault();
        console.log('handle submit');
        /*this.props.actions.attemptLogin({
            email: this.emailEl.value,
            password:  this.passwordEl.value,
        })*/

        fire.auth().signInWithEmailAndPassword(this.emailEl.value, this.passwordEl.value).then( user => {
            console.log('user logged in: ', user.email);
            browserHistory.push(`/`)
        }).catch( err => {
            console.log("error: ", err);
            alert(err)
            //
        })
    }

    render() {

        return(

            <div className="row">
                <h1>Please Login</h1>
                <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" placeholder="Email" type="email" className="validate" ref={ el => this.emailEl = el } />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" placeholder="Password" type="password" className="validate" ref={ el => this.passwordEl = el }/>
                        </div>
                    </div>
                    <input type="submit" className="waves-effect waves-light btn" value="Submit" />
                </form>
                <Link to="/Create">Create New Account </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
