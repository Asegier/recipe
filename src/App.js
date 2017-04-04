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
              <div className="nav-wrapper blue-grey darken-2">
                  <a href="#" className="brand-logo">FooBar</a>

                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                      <li><i className="material-icons">star f</i></li>
                      <li>
                          <a href="badges.html">Logout</a>
                      </li>
                  </ul>
              </div>
          </nav>
          <nav>
              <div className="nav-wrapper blue-grey darken-2">
                  <form>
                      <div className="input-field">
                          <input id="search" type="search" required/>
                          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                          <i className="material-icons">close</i>
                      </div>
                  </form>
              </div>
          </nav>

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
