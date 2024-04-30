import React from "react";
import { Link } from "react-router-dom";
import './HomeNavBar.css';

const HomeNavBar = () => {
    // const location = useLocation();
    
    // const isActive = (path) => location.pathname === path ? "active-link" : "";

    return (
        <div className='homeNavBarmain-container'>
            <div className="homeNavBarLogoSection">
                <img src="/AgroWizeLogo.png" alt="logo" />
            </div>
            <div className="homeNavBarLinksSection">
                <Link to="/" className="homeNavBarLinks">Home</Link>
                <Link to="/aboutUs" className="homeNavBarLinks">About Us</Link>
                <Link to="/courses" className="homeNavBarLinks">Courses</Link>
                <Link to="/articles" className="homeNavBarLinks">Articles</Link>
                <Link to="/community" className="homeNavBarLinks">Community</Link>
            </div>
            <div className="homeNavBarButtonSection">
                <Link  to="/signup" className="accCreation">Create Account</Link>
                <Link to="/login" className="accLogin">Login</Link>
            </div>
    </div>
    );
};

export default HomeNavBar;