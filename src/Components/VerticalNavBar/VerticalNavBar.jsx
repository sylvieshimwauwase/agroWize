import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./VerticalNavBar.css";

const VerticalNavBar = ({ userName }) => {
  const location = useLocation();
  const pages = [
    { name: "Profile Update", path: "/userProfileUpdate" },
    { name: "Notifications", path: "/userProfileNotification" },
    { name: "Change Password", path: "/userProfileChangePassword" },
    { name: "My Courses", path: "/userProfileCourse" },
    { name: "Learning History", path: "/userProfileLearningHistory" },
    { name: "Bookmarked Resources", path: "/userProfileBookmarkedResources" },
    { name: "Certificates", path: "/userProfileCertificates" },
    { name: "Community", path: "/userProfileCommunity" },
    { name: "Help Centre", path: "/userProfilehelpCentre" },
    { name: "Settings", path: "/userProfilesettings" },
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
              <Link to={page.path} className={location.pathname === page.path ? 'active' : ''}>
                {page.name}
              </Link>
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