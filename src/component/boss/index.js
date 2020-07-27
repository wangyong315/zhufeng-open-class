import React from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'
import { Card, WingBlank } from 'antd-mobile';

const { Header, Body } = Card

class Boss extends React.Component{
  state = {
    data: []
  }

  componentDidMount(){
    axios.get('/user/list?type=boss')
      .then(res => {
        if (res.data.code === 0) {
          this.setState({data: res.data.data})
        }
      })
  }

  render (){
    console.log('statt', this.state);
    return (
      <WingBlank>
        {
          this.state.data.map(v => (
            v.avatar ?
            <Card key={v._id}>
              <Header
                title={v.user}
                thumb={require(`../img/${v.avatar}.jpg`)}
                extra={<span>{v.title}</span>}
              >
              </Header>
              <Body>
                {
                  v.desc.split('\n').map(v=>(
                  <div key={v}>{v}</div>
                  ))
                }
              </Body>
            </Card>
            : null
          ))
        }
      </WingBlank>
    )
  }
}

export default Boss;