import React from "react";
import { Link, useLocation } from "react-router-dom";
import './HomeNavBar.css';

const HomeNavBar = () => {
    const location = useLocation();
    
    const isActive = (path) => location.pathname === path ? "active-link" : "";

    return (
        <div className='main-container'>
            <div className='main-nav-menu'>
                <div className='agrowize-logo'>
                    <img src="/AgroWizeLogo.png" alt="logo" />
                </div>
                <div className='frame'>
                    <Link to="/signup" className={`primary-filled-button ${isActive("/signup")}`}>
                        <span className='button-text'>Create Account</span>
                    </Link>
                    <Link to="/login" className={`secondary-filled-button ${isActive("/login")}`}>
                        <span className='button-text-2'>Login</span>
                    </Link>
                </div>
                <div className='frame-3'>
                    <Link to="/" className={`home ${isActive("/")}`}>Home</Link>
                    <Link to="/aboutUs" className={`frame-4 ${isActive("/aboutUs")}`}>
                        <span className='about-us'>About Us</span>
                    </Link>
                    <Link to="/courses" className={`frame-6 ${isActive("/courses")}`}>
                        <span className='courses'>Courses</span>
                    </Link>
                    <Link to="/articles" className={`frame-7 ${isActive("/articles")}`}>
                        <span className='articles'>Articles</span>
                    </Link>
                    <Link to="/community" className={`community ${isActive("/community")}`}>Community</Link>
                    <Link to="/userProfileUpdate" className={`frame-5 ${isActive("/userProfileUpdate")}`}>
                        <span className='farm-mode'>User Profile</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeNavBar;