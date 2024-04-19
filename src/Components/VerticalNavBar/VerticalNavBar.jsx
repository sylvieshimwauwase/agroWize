import React from "react";
import { Link ,useLocation} from "react-router-dom";
import "./VerticalNavBar.css";

const VerticalNavBar = ({userName}) => {
    const location = useLocation();
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
           <div className="backdrop">
             <div className="profileCircle">
            <span>{userName}</span>
            </div>
        <ul>
            {pages.map((page, index) => (
            <li key={index}>
                {page === "Profile Update" ? (
                            <Link to="/userProfileUpdate">{page}</Link>
                        ) : page === "Notifications" ? (
                            <Link to="/userProfileNotification">{page}</Link>
                        ) : (
                            <a href="#">{page}</a>
                        )}
            </li>
        ))}
        </ul>
        <div className="button-container">
                <button className="nav-button">Logout</button>
        </div>
        </div>
        </div>
    );
};

export default VerticalNavBar;