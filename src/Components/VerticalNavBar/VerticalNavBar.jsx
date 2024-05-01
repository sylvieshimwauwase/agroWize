import React, { useState } from "react";
import axios from "axios";
import Keys from "../../Constants/Keys";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./VerticalNavBar.css";

const VerticalNavBar = ({ userName }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${Keys.base_url}/Logout`);
      if (response.status === 200) {
        localStorage.removeItem("auth_token");
        // localStorage.deleteItem("auth_token");
        navigate("/");
        setIsLoading(false);
      } else {
        console.error("Error logging out:", response.data);
      }
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      navigate("/");
      console.error("Error logging out:", error);
  } finally {
    setIsLoading(false);
  }

};

  return (
    <div className="verticalNavbar">
      {isLoading && (
        <div className="loading">
          <center>Loading...</center>
        </div>
      )}
      <div className="backdrop">
        <div className="profileCircle">
        <img src="/User Profile Avatar.png" alt="Profile pic" />
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
          <button className="nav-button" onClick={handleLogout} >Logout</button>
        </div>
      </div>
    </div>
  );
};

export default VerticalNavBar;