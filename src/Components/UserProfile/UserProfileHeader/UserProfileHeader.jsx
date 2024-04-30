import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./UserProfileHeader.css";

const UserProfileHeader = () => {
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get('/api/user/name', { // Assuming endpoint to fetch name
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token') || ''}`, // Assuming token-based auth
          },
        });
        setFullName(response.data.fullName); // Update state with fetched fullName
      } catch (error) {
        console.error("Error fetching user name:", error);
        setError(error.message || "An error occurred.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserName();
  }, []);
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
        <button className="userProfileButton">{fullName}</button>
        </div>
    </div>
  );
};

export default UserProfileHeader;
