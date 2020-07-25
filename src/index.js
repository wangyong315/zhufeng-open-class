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

import Login from './container/login';
import Register from './container/register';
import BossInfo from './container/bossinfo';
import GeniusInfo from './container/geniusinfo';
import Auth from './Auth';
import AuthRoute from './component/authroute'
import './index.css'

// import Dashboard from './Dashboard';

function Boss(params) {
    return (
        <h1>khhjjhkk</h1>
    )
}

function Dashboard(params) {
    return (
        <h1>khhjjhkk</h1>
    )
}

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
                <Switch>
                    <Route path="/geniusinfo" component={GeniusInfo}></Route>
                    <Route path="/bossinfo" component={BossInfo}></Route>
                    <Route path="/boss" component={Boss}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById("root")
);
