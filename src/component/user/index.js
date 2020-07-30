import React from 'react';
import { connect } from 'react-redux'
import { Result, List, WhiteSpace } from 'antd-mobile'
import browserCookie from 'browser-cookies'

const { Item } = List
const { Brief } = Item

@connect(
  state => state.user,
)
class User extends React.Component {

  logout = () => {
    browserCookie.erase('userid')
  }

  render (){
    const {
      user, 
      type, 
      company, 
      title, 
      desc, 
      money
    } = this.props
    console.log('this.props', this.props);
    return user ? (
      <div>
        <Result
          img={<img
              alt="avatar"
              style={{width: 90}}
              src={require(`../img/${this.props.avatar}.jpg`)}
            />
          }
          title={user}
          message={type === 'boss' ? company : null }
        />
        <List renderHeader={() => '简介'}>
          <Item multipleLine>
            {title}
            {
              desc.split('\n').map(v=> <Brief key={v}>{v}</Brief>)
            }
            {money ? <Brief>薪资：{money}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item onClick={this.logout}>退出登录</Item>
          <div onClick={this.logout}>退出登录</div>
        </List>
      </div>
    ) : null;
  }
}

export default User;