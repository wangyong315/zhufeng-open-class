import React from 'react';
import {
    List,
    InputItem,
    WingBlank,
    WhiteSpace,
    Button,
    Radio,
} from 'antd-mobile';
import Logo from '../../component/logo/logo';

const RadioItem = Radio.RadioItem;

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'
        }
    }
    register(){
        this.props.history.push('/register')
    }
    render(){
        return (
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <WhiteSpace />
                        <InputItem>密码</InputItem>
                        <WhiteSpace />
                        <InputItem>确认密码</InputItem>
                        <RadioItem checked={this.state.type=="genius"}>
                            牛人
                        </RadioItem>
                        <WhiteSpace />                        
                        <RadioItem checked={this.state.type=="boss"}>
                            老板
                        </RadioItem>
                        <WhiteSpace />                                                
                        <Button type="primary">注册</Button>
                    </List>
                    <WhiteSpace />    
                </WingBlank>
            </div>
        )
    }
}

export default Register;