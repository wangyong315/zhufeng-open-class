import React from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelect from '../../component/avatar-selector';
import { connect } from 'react-redux';
import { update } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom';

@connect(
    state => state.user,
    {update}
)
class GeniusInfo extends React.Component{
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
    selectAvatar = (imgname) => {
        this.setState({avatar: imgname})
    }

    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div>
                {redirect && redirect !== path ? <Redirect to={this.props.redirectTo} /> : null}
                <NavBar mode="dark">Boss完善信息页面</NavBar>
                <AvatarSelect selectAvatar={this.selectAvatar}></AvatarSelect>
                <InputItem 
                    onChange={v => this.handleChange('title', v)}
                >
                    招聘职位
                </InputItem>
                <TextareaItem 
                    onChange={v => this.handleChange('desc', v)}
                    rows={3}
                    autoHeight
                    title="个人简介"
                >
                </TextareaItem>
                <Button 
                    onClick={() => {
                        this.props.update(this.state)
                    }}
                    type="primary"
                >保存</Button>
            </div>
        )
    }
}

export default GeniusInfo;