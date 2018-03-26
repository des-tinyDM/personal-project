import React from 'react';
import './Header.css';
import logo from './logo.svg'
import Logo from '../Header/Logo/Logo'


const Header = (props) => {
    return (
    <div>
    <header>
        <Logo />
          
            <h1>Perfect Pupperonis</h1>
          
          <img src={logo} alt="logo" className="logo right"/>
        <Logo />
    </header>
    </div>
    )
};
export default Header;