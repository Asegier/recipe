import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


// import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Router, browserHistory, IndexRoute, Route } from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux';


import CreateUser from './components/CreateUser'
import Login from './components/Login'
import FrontPage from './components/FrontPage'

// import Header from './common/header'
//import Recipe from './components/Recipe';
//import Search from './components/Search';
// import Api from './api/api'


//init store
import { initStore } from './store/store';
const store = initStore();

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={ store }>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={FrontPage} />
                <Route path="/Create" component={CreateUser} />
                <Route path="/Login" component={Login} />
            </Route>
        </Router>

    </Provider>,
    document.getElementById('root')
);
