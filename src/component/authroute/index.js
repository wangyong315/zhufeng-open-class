import React from 'react';
import Axios from 'axios';

class AuthRoute extends React.Component{
    componentDidMount () {
        // 获取用户信息
        Axios.get('/user/info')
            .then(res => {
                if (res.status === 200) {
                    console.log('res.data', res.data);
                }
            })
    }
    render (){
        return  null
    }
}

export default AuthRoute;