import React from 'react';
import './HeaderBar.css'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <header className="header">
      <img src="/ulogo.png" alt="" className='logo' />
      <div className='nav-bar'>
          <ScrollLink to="Home" smooth={true} duration={500}>Home</ScrollLink>
          <ScrollLink to="AboutUs" smooth={true} duration={500}>ABOUT</ScrollLink>
          <ScrollLink to="Services" smooth={true} duration={500}>SERVICES</ScrollLink>
          <ScrollLink to="ContactUs" smooth={true} duration={500}>CONTACT US</ScrollLink>
      </div>
      <input className='search-box'></input>
      <div className='nav-bar'>
          <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGNUP</Link>
      </div>
    </header>
  );
};

export default HeaderBar;