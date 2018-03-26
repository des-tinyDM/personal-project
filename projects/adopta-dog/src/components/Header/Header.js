import React from 'react';
import './Header.css';
import logo from './logo.svg'


const Header = (props) => {
    return (
    <div>
    <header>
          <img src={logo} alt="logo" className="logo left" />
          
            <h1>Perfect Pupperonis</h1>
          
          <img src={logo} alt="logo" className="logo right"/>
        </header>
    </div>
    )
};
export default Header;