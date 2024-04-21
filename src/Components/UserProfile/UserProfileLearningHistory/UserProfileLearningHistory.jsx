import React from 'react'
import UserProfileHeader from '../UserProfileHeader/UserProfileHeader';
import VerticalNavBar from '../../VerticalNavBar/VerticalNavBar';
import SearchBar from '../../Search/SearchBar';

const UserProfileLearningHistory = () => {
  return (
    <>
      <UserProfileHeader />
      <VerticalNavBar />
      <div className="userProfileUpdate">
        <div className="search-button">
          <SearchBar />
        </div>
        <div className="userProfileUpdateForm notificationForm">
          <h3 className="formTitle">Learning History</h3>
          <div className="userProfileNotificationContent">
            <p className="formInfo">
              You currently do not have any Learning History.
            </p>
            <p> When you do, they would appear here.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileLearningHistory