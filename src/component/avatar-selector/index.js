import React from 'react';
import { Grid } from 'antd-mobile'

class AvatarSelect extends React.Component{
    render(){
        const avatarList = 'app1,app2,app3,app4,app5,app6,app7'
                            .split(',')
                            .map(v => ({
                                icon: require(`../img/${v}.jpg`),
                                text: v
                            }))

        return (
            <div>
                <Grid
                    data={avatarList}
                    columnNum={5}
                    onClick={ele => {
                        this.props.selectAvatar(ele.text)
                    }}
                />
                选择投降
            </div>
        )
    }
}

export default AvatarSelect;