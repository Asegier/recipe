import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class CreateUser extends Component {

    handleSubmit(e){
        e.preventDefault();
        console.log('handle submit')
        this.props.actions.attemptRegister({
            email: this.emailEl.value,
            password:  this.passwordEl.value,
        })
    }

    render() {

        return(

            <div className="row">
                <h1>You are currently logged in as { this.props.user? this.props.user.email : '--'}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
