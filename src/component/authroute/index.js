import React from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

const publicList = [ '/login', '/register'];

@withRouter
class AuthRoute extends React.Component{
    componentDidMount () {
        const pathname = this.props.history.pathname
        if (publicList.indexOf(pathname) > -1) {
            return null
        }
        // 获取用户信息
        Axios.get('/user/info')
            .then(res => {
                if (res.status === 200) {
                    console.log('res.data', res.data);
                    if (res.data.code === 0) {
                        // 有登录信息的
                    } else {
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