import React from 'react';
import './Header.css';
import logo from './houser_logo.png';

const Header = props => {
    return (
        <div className="header">
            <img className="logo" src={logo}/>
            <h2 className="header-text">Houser</h2>
        </div>
    )
}
export default Header;