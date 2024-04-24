import React from 'react';
import './Header.css';
import Navbar from './Navbar'; // Importera Navbar här

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img src="./src/assets/sh.png" alt="Logo" />Suntrip</div>
      <Navbar /> 
    </header>
  );
}

export default Header;