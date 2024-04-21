import React from "react";
import UserProfileHeader from "../Components/UserProfile/UserProfileHeader/UserProfileHeader";
import VerticalNavBar from "../Components/VerticalNavBar/VerticalNavBar";
import UserProfileNotification from "../Components/UserProfile/UserProfileNotification/UserProfileNotification";


const UserProfileNotificationPage = () => {
  return (
    <div>
      <UserProfileHeader/>
      <VerticalNavBar />
      <UserProfileNotification />
    </div>
  );
};

export default UserProfileNotificationPage;
