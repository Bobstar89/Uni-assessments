import React from 'react';
import logo from './images/logo.png';

const Header = (props) => {
  return (
    <header>
      <img id='logo' src={logo} alt=''/>
    </header>
  );
};

export default Header;
