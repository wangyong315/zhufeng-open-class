import React from 'react';
import { connect } from 'react-redux'
import { NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink'
import { Switch, Route } from 'react-router-dom'
import Boss from '../boss'
import Genius from '../genius'
import User from '../user'

function Msg() {
    return (
        <h2>消息首页</h2>
    )
}

@connect(
    state => state
)
class Dashboard extends React.Component{
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
                hide: user.type === 'boss'
            },
            {
                path: '/genius',
                text: 'genius',
                icon: 'genius',
                title: 'genius',
                component: Genius,
                hide: user.type === 'genius'
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
                icon: 'me',
                title: '个人中心',
                component: User,
            }
        ]

        return (
            <div>
                <NavBar className="fixed-header" mode="dark">
                    {
                        navList.find(val => val.path === pathname).title
                    }
                </NavBar>
                <div>
                    <Switch>
                        {
                            navList.map(v => (
                                <Route key={v.path} path={v.path} component={v.component} />
                            ))
                        }
                    </Switch>
                </div>
                <NavLinkBar data={navList} />
            </div>
        )
    }
}

export default Dashboard;