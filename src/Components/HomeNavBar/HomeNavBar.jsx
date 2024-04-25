import React, { useState } from "react";
import { Link } from "react-router-dom";
import './HomeNavBar.css';

const HomeNavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className='main-container'>
        <div className='main-nav-menu'>
            <div className='agrowize-logo'>
                <img src="/AgroWizeLogo.png" alt="logo" />
            </div>
             <div className='menu-toggle' onClick={toggleMenu}>
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className={`frame menu-items ${isMenuOpen ? 'open' : ''}`}>
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
            <div className='frame-5' onMouseLeave={closeDropdown}>
                <span className='farm-mode' onClick={toggleDropdown}>Farm Mode</span>
                {isDropdownOpen && (
                    <div className='dropDownMenu'>
                        <Link to="/hydroponicFarming" className='dropdown-item'>HydroFarming</Link>
                        <Link to="/verticalFarming" className='dropdown-item'>VerticalFarming</Link>
                    </div>
                )}
            </div>
            {/*<Link to="/userProfileUpdate" className='frame-5'>
                <span className='farm-mode'>Farm Mode</span>
    </Link>*/}

            <Link to="/courses" className='frame-6'>
                <span className='courses'>Courses</span>
            </Link>
            <Link to="/articles" className='frame-7'>
                <span className='articles'>Articles</span>
            </Link>
            <Link to="/community" className='community'>Community</Link>
            </div>
        </div>
    </div>
    );
};

export default HomeNavBar;