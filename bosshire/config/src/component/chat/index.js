import React from 'react';
import { List, InputItem } from 'antd-mobile'
import { connect } from 'react-redux';
import { getMsgList } from '../../redux/chat.redux'
import io from 'socket.io-client'

const socket = io('ws://localhost:9093')

@connect(
  state => state, 
  { getMsgList }
)
class Chat extends React.Component{

  state = {
    text: '',
    msg: []
  }

  componentDidMount(){
    this.props.getMsgList()
    // socket.on('recvmsg',  (data) => {
    //   console.log('data', data);
    //   this.setState({
    //     msg: [...this.state.msg, data.text]
    //   })
    // })
  }

  handleSubmit = () => {
    socket.emit('sendmsg', {text: this.state.text})
    this.setState({text: '' })
  }

  render (){
    console.log('this.state', this.state);
    return (
      <div>
        {
          this.state.msg.map(v=> (
            <p key={v}>{v}</p>
          ))
        }
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
      </div>
    )
  }
}

export default Chat;