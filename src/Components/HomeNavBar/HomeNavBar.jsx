import React from "react";
import { Link } from "react-router-dom";
import './HomeNavBar.css';

const HomeNavBar = () => {
    return (
        <div className='main-container'>
        <div className='main-nav-menu'>
            <div className='agrowize-logo'>
                <img src="/AgroWizeLogo.png" alt="logo" />
            </div>
            <div className='frame'>
                <Link to="/signup" className='primary-filled-button'>
                            <span className='button-text'>Create Account</span>
                </Link>
                <Link to="/login" className='secondary-filled-button'>
                            <span className='button-text-2'>Login</span>
                </Link>
            </div>
            <div className='frame-3'>
            <span className='home'>Home</span>
            <div className='frame-4'>
                <span className='about-us'>About Us</span>
            </div>
            <div className='frame-5'>
                <span className='farm-mode'>Farm Mode</span>
            </div>
            <div className='frame-6'>
                <span className='resources'>Resources</span>
            </div>
            <div className='frame-7'>
                <span className='articles'>Articles</span>
            </div>
            <span className='community'>Community</span>
            </div>
        </div>
    </div>
    );
};

export default HomeNavBar;