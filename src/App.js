import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
// import Header from './common/header'
import Recipe from './components/Recipe';
import Search from './components/Search';
// import Api from './api/api'


//init store
import { initStore } from './store/store';
const store = initStore();


class App extends Component {
  render() {

    return(
      <Provider store={ store }>
      <div>
        <nav>
          <div  className="nav-wrapper blue-grey darken-2">
            <a href="#" className="brand-logo">FoodBar</a>
            <div className="chip">
          <img src="images/jlm.jpeg" alt="Contact Person" />
          JLM
            </div>

          </div>

        </nav>

        <div className="wrapper-icon">
            <i className="medium material-icons">star</i>
        </div>


        <div className="wrapper">

          <div className="container">
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <Recipe/>
              </div>
            </div>
          </div>

          <div className="container" id="search">
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <Search/>
              </div>
            </div>
          </div>
        </div>

      </div>

      </Provider>

    )
  }

}

export default App;
