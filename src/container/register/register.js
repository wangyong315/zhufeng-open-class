import React from 'react';
import {
    List,
    InputItem,
    WingBlank,
    WhiteSpace,
    Button,
    Radio,
} from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux';
import Logo from '../../component/logo/logo';


const RadioItem = Radio.RadioItem;

@connect(
    state => state.user,
    { register}
)
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

    handleChange(key, val){
        this.setState({[key]: val})
    }

    handleRegister = () => {
        this.props.register(this.state)
        console.log(this.state);
    }
    render(){
        return (
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        {this.props.msg ? <p className="error-msg">{this.props.msg}</p>: null}
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
                        <WhiteSpace />
                        <InputItem
                            type="password"
                            onChange={v => this.handleChange('repeatpwd', v)}
                        >
                            确认密码
                        </InputItem>
                        <RadioItem 
                            checked={this.state.type=="genius"}
                            onChange={v => this.handleChange('type', 'genius')}
                        >
                            牛人
                        </RadioItem>
                        <WhiteSpace />  
                        <RadioItem 
                            checked={this.state.type=="boss"}
                            onChange={v => this.handleChange('type', 'boss')}
                        >
                            老板
                        </RadioItem>                      
                        <WhiteSpace />                                                
                        <Button type="primary" onClick={this.handleRegister}>注册</Button>
                    </List>
                    <WhiteSpace />    
                </WingBlank>
            </div>
        )
    }
}

export default Register;