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

// function hello() {
//     console.log('hello imoce');
// }

// function WrapHello(fn) {
//     return function () {
//         console.log('before say hello');
//         fn()
//         console.log('after say hello');
//     }
// }

// hello = WrapHello(hello) // 装饰器模式

// hello()

class Hello extends Component{
    render(){
        return(
            <div>
                hello imoc react     
            </div>
        )
    }
}




@connect(
    state => state.user,
    { login}
)
class Login extends React.Component{
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

    handleChange(key, val){
        this.setState({[key]: val})
    }

    handleRegister = () => {
        this.props.register(this.state)
        console.log(this.state);
    }

    handleLogin = () => {
        this.props.login(this.state)
    }
    render(){
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                <Hello />
                <WingBlank>
                    <List>
                        <InputItem 
                            onChange={v => this.handleChange('user', v)}
                        >
                            用户
                        </InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="password"
                            onChange={v => this.handleChange('pwd', v)}
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