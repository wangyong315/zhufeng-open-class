import React from 'react';
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chatuser.redux'
import { withRouter } from 'react-router-dom'

@withRouter
class Chat extends React.Component{

  render (){
    return (
      <div>chat with user: {this.props.match.params.user}</div> 
    )
  }
}

export default Chat;