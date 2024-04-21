import React from "react";
import "./UserProfileNotification.css";
import SearchBar from "../../Search/SearchBar";

const UserProfileNotification = () => {
    return (
      <div className="userProfileUpdate">
        {" "}
        <div className="search-button">
          <SearchBar />
        </div>
        <div className="userProfileUpdateForm notificationForm">
          <h3 className="formTitle">Notifications</h3>
          <div className="userProfileNotificationContent">
            <p className="formInfo">
              You currently do not have any Notifications.
            </p>
            <p className="formInfo"> When you do, they would appear here.</p>
          </div>
        </div>
      </div>
    );
};

export default UserProfileNotification;