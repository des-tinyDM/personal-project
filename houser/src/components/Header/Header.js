import React from 'react';
import logo from './houser_logo.png'
import './Header.css';

const Header = props => {
    return (
    <div className="app-header"> 
        <img className="" src={logo}/>
        <h1> Houser </h1>
    </div>
    )
}

export default Header;