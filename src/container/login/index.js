import React, { Component } from 'react';
import {
    List,
    InputItem,
    WingBlank,
    WhiteSpace,
    Button,
} from 'antd-mobile';
import Logo from '../../component/logo/logo';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/user.redux';
import hocForm from '../../component/hoc-form'

@connect(
    state => state.user,
    { login}
)
@hocForm
class Login extends Component{
    register = () => {
        console.log(this.props);
        this.props.history.push('/register')
    }

    handleRegister = () => {
        this.props.register(this.props.state)
        console.log(this.props.state);
    }

    handleLogin = () => {
        this.props.login(this.props.state)
        console.log('this.pprops', this.props);
    }
    render(){
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem 
                            onChange={v => this.props.handleChange('user', v)}
                        >
                            用户
                        </InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="password"
                            onChange={v => this.props.handleChange('pwd', v)}
                        >
                            密码
                        </InputItem>
                    </List>
                    <WhiteSpace />                    
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;