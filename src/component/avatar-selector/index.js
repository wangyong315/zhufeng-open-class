import React from 'react';
import { Grid, List } from 'antd-mobile'

class AvatarSelect extends React.Component{

    state = {}

    render(){
        console.log('tsistat', this.state);
        const avatarList = 'app1,app2,app3,app4,app5,app6,app7'
                            .split(',')
                            .map(v => ({
                                icon: require(`../img/${v}.jpg`),
                                text: v
                            }))
        const gridHeader = this.state.icon
                            ?(
                                <div>
                                    <span>已选择头像</span>
                                    <img alt="icon" style={{width: 20}} src={this.state.icon} />                                    
                                </div>
                            )
                            : '请选择头像'
        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid
                        data={avatarList}
                        columnNum={5}
                        onClick={ele => {
                            this.setState(ele)
                            this.props.selectAvatar(ele.text)
                        }}
                    />
                </List>
            </div>
        )
    }
}

export default AvatarSelect;