import React from 'react';
import { connect } from 'react-redux'
import { NavBar} from 'antd-mobile'

function Boss() {
    return (
        <h2>boss首页</h2>
    )
}

function Genius() {
    return (
        <h2>牛人</h2>
    )
}

function Msg() {
    return (
        <h2>消息首页</h2>
    )
}

function User() {
    return (
        <h2>消息首页</h2>
    )
}

@connect(
    state => state
)
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const user = this.props.user
        const {pathname} = this.props.location
        const navList = [
            {
                path: '/boss',
                text: 'boss',
                icon: 'boss',
                title: 'boss',
                component: Boss,
                hide: user.type == 'genius'
            },
            {
                path: '/genius',
                text: 'genius',
                icon: 'boss',
                title: 'boss',
                component: Genius,
                hide: user.type == 'genius'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg,
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User,
            }
        ]

        return (
            <div>
                <NavBar mode="dark">
                    {
                        navList.find(val => val.path === pathname).title
                    }
                </NavBar>
                <h1>header</h1>
                <h1>footer</h1>
            </div>
        )
    }
}

export default Dashboard;