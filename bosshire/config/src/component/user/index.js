import React from 'react';
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import { Redirect } from 'react-router-dom'
import { logoutSubmit } from '../../redux/user.redux'

const { Item } = List
const { Brief } = Item
const { alert } = Modal

@connect(
  state => state.user,
  {logoutSubmit}
)
class User extends React.Component {

  logout = () => {
    alert('注销', '你确定退出吗？？？', [
      {text: 'cancle', onPress: () => console.log('cancle')},
      {text: 'Ok', onPress: () => {
        browserCookie.erase('userid')
        this.props.logoutSubmit()
      }}
    ])
  }

  render (){
    const {
      user, 
      type, 
      company, 
      title, 
      desc, 
      money,
      redirectTo,
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
            { desc.split('\n').map(v=> <Brief key={v}>{v}</Brief>) }
            {money ? <Brief>薪资：{money}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item onClick={this.logout}>退出登录</Item>
          <div onClick={this.logout}>退出登录</div>
        </List>
      </div>
    ) : <Redirect to={redirectTo} />;
  }
}

export default User;