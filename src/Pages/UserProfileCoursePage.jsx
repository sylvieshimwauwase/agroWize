import React from "react";
import UserProfileCourse from "../Components/UserProfile/UserProfileCourse/UserProfileCourse";
import VerticalNavBar from "../Components/VerticalNavBar/VerticalNavBar";
import UserProfileHeader from "../Components/UserProfile/UserProfileHeader/UserProfileHeader";

const UserProfileCoursePage = () => {
  return (
    <div>
      <UserProfileHeader />
      <VerticalNavBar />
      <UserProfileCourse />
    </div>
  );
};

export default UserProfileCoursePage;
