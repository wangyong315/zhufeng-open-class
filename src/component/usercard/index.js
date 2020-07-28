import React from 'react';
import { Card, WingBlank } from 'antd-mobile';
import PropTypes from 'prop-types'

const { Header, Body } = Card

class UserCard extends React.Component{
  static propTypes = {
    userList: PropTypes.array.isRequired
  }

  render (){
    console.log('statt', this.props);
    return (
      <WingBlank>
        {
          this.props.userList.map(v => (
            v.avatar ?
            <Card key={v._id}>
              <Header
                title={v.user}
                thumbStyle={{width: 40, height: 40}}
                thumb={require(`../img/${v.avatar}.jpg`)}
                extra={<span>{v.title}</span>}
              >
              </Header>
              <Body>
                {v.type === 'boss' ? <div>公司：{v.company}</div> : null}
                {
                  v.desc.split('\n').map(v=>(
                  <div key={v}>{v}</div>
                  ))
                }
                {v.type === 'boss' ? <div>薪资: {v.money}</div> : null}
              </Body>
            </Card>
            : null
          ))
        }
      </WingBlank>
    )
  }
}

export default UserCard;