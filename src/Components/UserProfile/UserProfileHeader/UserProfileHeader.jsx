import React from "react";
import { Link } from 'react-router-dom';
import "./UserProfileHeader.css";

const UserProfileHeader = ({ userName }) => {
  return (
    <div className="userProfileHeader">
        <div>
          <img className="formNavbarLogo" src="/AgroWizeLogo.png" alt="Logo" />
        </div>
        <div className="userProfileHeaderDiv">
        <Link to="/" className="formNavbarLink">Home</Link>
        <Link to="/aboutUs" className="formNavbarLink">About Us</Link>
        <Link to="/courses" className="formNavbarLink">Courses</Link>
        <Link to="/community" className="formNavbarLink">Community</Link>
        <Link to="/articles" className="formNavbarLink">Articles</Link>
      </div>
        <div>
        <button className="userProfileButton">{userName}</button>
        </div>
    </div>
  );
};

export default UserProfileHeader;
