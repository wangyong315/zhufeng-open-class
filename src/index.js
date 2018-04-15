import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { counter, addGUN, minGUN } from './index.redux';
import App from './App1';
const store = createStore(counter);

// const store = createStore(counter);
// const init = store.getState();
// console.log(init);
// function listener(){
//     const current = store.getState();
//     console.log('现在的机关枪', current);
// }
// store.subscribe(listener);
// // 派发事件
// store.dispatch({type: "addGun"});
// store.dispatch({type: "minGun"});

function render(){
    ReactDOM.render(<App store={store} addGUN={addGUN} minGUN={minGUN} />, document.getElementById("root"));
}

render();
store.subscribe(render);
