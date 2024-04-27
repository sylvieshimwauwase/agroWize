import React from "react";
import { Link } from "react-router-dom";
import './HomeNavBar.css';

const HomeNavBar = () => {
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
                <Link to="/community" className="homeNavBarLinks"></Link>
            </div>
            <div className="homeNavBarButtonSection">
                <Link  to="/signup" className="accCreation">Create Account</Link>
                <Link className="accLogin">Login</Link>
            </div>
        {/*<div className='main-nav-menu'>
            <div className='agrowize-logo'>
                <img src="/AgroWizeLogo.png" alt="logo" />
            </div>
            {/*<div className='frame'>
                <Link to="/signup" className='primary-filled-button'>
                            <span className='button-text'>Create Account</span>
                </Link>
                <Link to="/login" className='secondary-filled-button'>
                            <span className='button-text-2'>Login</span>
                </Link>
            </div>
            <div className='frame-3'>
            <Link to="/" className='home'>Home</Link>
            <Link to="/aboutUs" className='frame-4'>
                <span className='about-us'>About Us</span>
            </Link >
            
            <Link to="/courses" className='frame-6'>
                <span className='courses'>Courses</span>
            </Link>
            <Link to="/articles" className='frame-7'>
                <span className='articles'>Articles</span>
            </Link>
            <Link to="/community" className='community'>Community</Link>
            
            </div>
            
    </div>*/}
    </div>
    );
};

export default HomeNavBar;