import React from 'react';
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile';

class NavLinkBar extends React.Component{
    static propTypes = {
      data: PropTypes.array.isRequired
    }
    render (){
      const navlist = this.props.data.filter(v => !v.hide )
      console.log('navlist', navlist);
        return  (
          <div>
            <TabBar>
              {
                navlist.map(v => 
                  <TabBar.Item
                    key={v.path} 
                    title={v.title}
                    icon={v.icon}
                  >

                  </TabBar.Item>  
                )
              }
            </TabBar>
          </div>
        )
    }
}

export default NavLinkBar;