import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';
import reducers from './reducer';
import './config';

import Login from './container/login/login';
import Register from './container/register/register';
import Auth from './Auth';
import AuthRoute from './component/authroute'
// import Dashboard from './Dashboard';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f;
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

ReactDOM.render(
    (<Provider store={store} >
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById("root")
);
