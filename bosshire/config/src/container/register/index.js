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
import { Redirect } from 'react-router-dom';
import hocForm from '../../component/hoc-form'


const RadioItem = Radio.RadioItem;

@connect(
    state => state.user,
    { register}
)
@hocForm
class Register extends React.Component{
    componentDidMount(){
        this.props.handleChange('type', 'genius')
    }
    register(){
        this.props.history.push('/register')
    }

    handleRegister = () => {
        this.props.register(this.props.state)
        console.log(this.props.state);
    }
    render(){
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo />
                <WingBlank>
                    <List>
                        {this.props.msg ? <p className="error-msg">{this.props.msg}</p>: null}
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
                        <WhiteSpace />
                        <InputItem
                            type="password"
                            onChange={v => this.props.handleChange('repeatpwd', v)}
                        >
                            确认密码
                        </InputItem>
                        <RadioItem 
                            checked={this.props.state.type === "genius"}
                            onChange={v => this.props.handleChange('type', 'genius')}
                        >
                            牛人
                        </RadioItem>
                        <WhiteSpace />  
                        <RadioItem 
                            checked={this.props.state.type === "boss"}
                            onChange={v => this.props.handleChange('type', 'boss')}
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