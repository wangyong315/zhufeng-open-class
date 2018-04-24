import React from 'react';
import logo from './logo.jpg';
import './log.css'
class Logo extends React.Component{
    render(){
        return (
            <div className="logo-container">
                <img src={logo} alt="" />
            </div>
        )
    }
}

export default Logo;