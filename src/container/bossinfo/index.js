import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Logo from '../../component/logo/logo';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/user.redux';

class BossInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pwd: '',
        }
    }
    register = () => {
        console.log(this.props);
        this.props.history.push('/register')
    }

    render(){
        return (
            <div>
                <NavBar mode="dark">Boss完善信息页面</NavBar>
            </div>
        )
    }
}

export default BossInfo;