import React from 'react';
import logo from '../../images/logo.svg'
import '../Header/Header.css'

const Header = () => {
    return (
    <div>
          <img src={logo} alt="logo" className="logo" />
    </div>
    )
};
export default Header;