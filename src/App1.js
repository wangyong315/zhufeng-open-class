import React, { Component } from 'react';
import { Button, List } from 'antd-mobile';

class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    const store = this.props.store;
    const num = store.getState();
    const addGUN = this.props.addGUN;
    const addGUNAsync = this.props.addGUNAsync;
    const minGUN = this.props.minGUN;
    return (
      <div className="App">
        <h1>现在有机枪{num}</h1>  
        <Button type="primary" onClick={()=>store.dispatch(addGUN())}>申请武器</Button>
        <Button type="primary" onClick={()=>store.dispatch(minGUN())}>上交武器</Button>
        <Button type="primary" onClick={()=>store.dispatch(addGUNAsync())}>延迟两秒</Button>
      </div>
    );
  }
}

export default App;
