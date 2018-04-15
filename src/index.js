import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { counter, addGUN, minGUN, addGUNAsync } from './index.redux';
import { counter } from './index.redux';
import { Provider } from 'react-redux';
import App from './App1';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

ReactDOM.render(
    (<Provider store={store} >
        <App />
    </Provider>),
    document.getElementById("root")
);
