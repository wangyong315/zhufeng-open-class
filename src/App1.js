import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, List } from 'antd-mobile';
import { addGUN, minGUN, addGUNAsync } from './index.redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>现在有机枪{this.props.num}</h1>  
        <Button type="primary" onClick={this.props.addGUN}>申请武器</Button>
        <Button type="primary" onClick={this.props.minGUN}>上交武器</Button>
        <Button type="primary" onClick={this.props.addGUNAsync}>延迟两秒</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {num: state}
}

const actionCreators = { addGUN, minGUN, addGUNAsync };

App = connect(mapStateToProps, actionCreators)(App);
export default App;
