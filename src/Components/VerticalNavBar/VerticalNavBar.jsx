import React from "react";
import { Link } from "react-router-dom";
import "./VerticalNavBar.css";

const VerticalNavBar = ({userName}) => {
    const pages = [
        "Profile Update",
        "Notifications",
        "Change Password",
        "My Courses",
        "Learning History",
        "Bookmarked Resources",
        "Certificates",
        "Community",
        "Help Centre",
        "Settings"
    ];

    return (
        <div className="verticalNavbar">
            <div className="profileCircle">
            {/* Placeholder for profile picture */}
            <span>{userName}</span>
            </div>
        <ul>
            {pages.map((page, index) => (
            <li key={index}>
                {page === "Notifications" ? (
                            // Use Link for Notifications page
                            <Link to="/userProfileNotification">{page}</Link>
                        ) : (
                            // Use normal anchor tag for other pages
                            <a href="#">{page}</a>
                        )}
            </li>
        ))}
        </ul>
        <div className="button-container">
                <button className="nav-button">Logout</button>
        </div>
        </div>
    );
};

export default VerticalNavBar;