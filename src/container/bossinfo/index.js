import React from 'react';
import { NavBar, InputItem, TextareaItem } from 'antd-mobile';
import AvatarSelect from '../../component/avatar-selector';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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

    handleChange(key, val){
        this.setState({[key]: val})
    }
    selectAvatar = (imgname) => {
        this.setState({avatar: imgname})
    }

    render(){
        return (
            <div>
                <NavBar mode="dark">Boss完善信息页面</NavBar>
                <AvatarSelect selectAvatar={this.selectAvatar}></AvatarSelect>
                <InputItem 
                    onChange={v => this.handleChange('title', v)}
                >
                    招聘职位
                </InputItem>
                <InputItem 
                    onChange={v => this.handleChange('company', v)}
                >
                    公司名称
                </InputItem>
                <InputItem 
                    onChange={v => this.handleChange('money', v)}
                >
                    薪资范围
                </InputItem>
                <TextareaItem 
                    onChange={v => this.handleChange('desc', v)}
                    rows={3}
                    autoHeight
                    title="职位要求"
                >
                </TextareaItem>
            </div>
        )
    }
}

export default BossInfo;