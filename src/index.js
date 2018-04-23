import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';
// import { counter, addGUN, minGUN, addGUNAsync } from './index.redux';
import { counter } from './index.redux';
import { Provider } from 'react-redux';
import App from './App1';
import reducers from './reducer';
import Auth from './Auth';
import Dashboard from './Dashboard';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

function Erying(){
    return <h2>二营</h2>
}
function Qibinglian(){
    return <h2>骑兵营</h2>
}

class Test extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        // this.props.history.push('/');
        return <h2>测试组件{this.props.match.params.location}</h2>
    }
}

ReactDOM.render(
    (<Provider store={store} >
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">一营</Link>
                    </li>
                    <li>
                        <Link to="/login">二营</Link>
                    </li>
                    <li>
                        <Link to="/qibinglian">骑兵连</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/login" component={Auth}></Route>
                    <Route path="/qibinglian" component={Qibinglian}></Route>
                    {/* <Route path="/:location" component={Test}></Route> */}
                </Switch>
                {/* <Redirect to="/"></Redirect> */}
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById("root")
);
