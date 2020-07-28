import React from 'react';
import { connect } from 'react-redux'
import { Result } from 'antd-mobile'
import { getUserList } from '../../redux/chatuser.redux'

@connect(
  state => state.user,
)
class User extends React.Component{

  render (){
    const { user } = this.props
    console.log('this.props', this.props);
    return user ? (
      <Result
        img={<img alt="avatar" src={require(`../img/${this.props.avatar}.jpg`)} />}
        title={this.props.user}
      />
    ) : null;
  }
}

export default User;