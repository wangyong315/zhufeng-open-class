import React from 'react';
import { List, InputItem } from 'antd-mobile'
import io from 'socket.io-client'

const socket = io('ws://localhost:9093')
class Chat extends React.Component{

  state = {
    text: ''
  }

  componentDidMount(){
  }

  handleSubmit = () => {
    console.log('sgtasgasd');
    socket.emit('sendmsg', function (params) {
      
    })
  }

  render (){
    console.log('this.state', this.state);
    return (
      <div className="stick-footer">
        <List>
          <InputItem
            placeholder="请输入"
            value={this.state.text}
            onChange={ v => {
              this.setState({text: v})
            }}
            extra={<span onClick={() => this.handleSubmit()}>发送</span>}
          >
            信息
          </InputItem>
        </List>
      </div> 
    )
  }
}

export default Chat;