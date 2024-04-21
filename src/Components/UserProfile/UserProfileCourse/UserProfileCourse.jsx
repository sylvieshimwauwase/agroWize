import React from "react";
import "./UserProfileCourse.css";
import SearchBar from "../../Search/SearchBar";
import UserProfileHeader from "../UserProfileHeader/UserProfileHeader"
import VerticalNavbar from "../../VerticalNavBar/VerticalNavBar"

const UserProfileCourse = () => {
  return (
    <>
      <UserProfileHeader />
      <VerticalNavbar />
      <div className="userProfileUpdate">
        {" "}
        <div className="search-button">
          <SearchBar />
        </div>
        <div className="userProfileUpdateForm notificationForm">
          <h3 className="formTitle">My Courses</h3>
          <div className="userProfileNotificationContent">
            <p className="formInfo">
              You currently do not have any active Course.
            </p>
            <p> When you do, they would appear here.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileCourse;
