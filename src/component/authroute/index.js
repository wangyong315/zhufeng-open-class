import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { loadData } from '../../redux/user.redux'

const publicList = [ '/login', '/register'];

@withRouter
@connect(
    null,
    {loadData}
)
class AuthRoute extends React.Component{
    componentDidMount () {
        const pathname = this.props.history.pathname
        if (publicList.indexOf(pathname) > -1) {
            return null
        }
        axios.get('/user/info')
        .then(res => {
          if (res.status === 200) {
              console.log('res.data', res.data);
              if (res.data.code === 0) {
                // 有登录信息的
              } else {
                this.props.loadData(res.data.data)
                this.props.history.push('/login')
              }
          }
        })
    }
    render (){
        return  null
    }
}

export default AuthRoute;