import React from 'react';
import './Header.css';
import Navbar from './Navbar'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img src="./src/assets/sh.png" alt="Logo" />SUNTRIP SOLTOYS</div>
      <Navbar className="nav"/> 
    </header>
  );
}

export default Header;