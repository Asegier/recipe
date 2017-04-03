import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/actions';


class Search extends Component {

  handleSubmit = (e) => {

    e.preventDefault();

    let {dispatch} = this.props;
    let searchInput = this.refs.searchInput.value;
    console.log(this.refs.searchInput.value);

    if(searchInput.length > 0 ){
      this.refs.searchInput.value = '';
      dispatch(search(searchInput));
    } else{
      this.refs.searchInput.focus();
    }

  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
          <input ref="searchInput" className="form-control input-lg" type="text" placeholder="What's in your fridge?" />
          <button type="submit" className="btn btn-primary btn-lg btn-block">Go!</button>
      </form>

    )
  }
}

export default connect()(Search);
