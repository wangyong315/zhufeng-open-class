import React, { Component } from 'react';
import { Button, List } from 'antd-mobile';
import { createStore } from 'redux';
import './App.css';

const Title = (props) => <h1>{props.name}</h1>

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [1,2,3]
    }
    this.handleAdd = this.handleAdd.bind(this);
  }
  componentWillMount(){
    console.log('组件将要加载')
  }
  componentDidMount(){
    console.log("组件加载完毕")
  }
  handleAdd(){
    console.log("000");
    this.setState({
      data: [...this.state.data, 'new data'+Math.random()]
    })
  }
  render() {
    console.log("组件马上加载")
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary" onClick={this.handleAdd}>添加</Button>  
          <Title name="dadf" />
          <List
            renderHeader={()=>'士兵列表'}
          >
            {this.state.data.map((v, index)=>{
              return (
                <List.Item key={index}>
                  {v}
                </List.Item>
              )
            })}
          </List>
        </header>
      </div>
    );
  }
}

export default App;
