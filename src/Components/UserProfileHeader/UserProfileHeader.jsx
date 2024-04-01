import React from "react";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-router-dom';
import "./UserProfileHeader.css";

const UserProfileHeader = ({ userName }) => {
  return (
    <nav className="userProfileHeader">
        <div>
          <img className="formNavbarLogo" src="/AgroWizeLogo.png" alt="Logo" />
        </div>
        <div>
        <a className="formNavbarLink" href="/">Home</a>
        <a className="formNavbarLink" href="/about">About Us</a>
        <a className="formNavbarLink" href="/farm-mode">Farm Mode</a>
        <a className="formNavbarLink" href="/resources">Resources</a>
        <a className="formNavbarLink" href="/articles">Articles</a>
        <a className="formNavbarLink" href="/community">Community</a>
      </div>
        <div>
        <button className="userProfileButton">{userName}</button>
        </div>
    </nav>
  );
};

export default UserProfileHeader;
