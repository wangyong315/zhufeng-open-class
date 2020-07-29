import React from 'react';
import { connect } from 'react-redux'
import { Result, List } from 'antd-mobile'
import { Brief } from 'antd-mobile/lib/list/ListItem';

const { Item } = List

@connect(
  state => state.user,
)
class User extends React.Component{

  render (){
    const { user, type, company, title, desc } = this.props
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
          <Item>
            {title}
            <Brief>{desc}</Brief>
          </Item>
        </List>
        <p>用户中心</p>
      </div>
    ) : null;
  }
}

export default User;