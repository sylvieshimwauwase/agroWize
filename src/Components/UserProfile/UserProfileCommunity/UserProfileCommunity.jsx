import React from 'react'
import UserProfileHeader from '../UserProfileHeader/UserProfileHeader';
import VerticalNavBar from '../../VerticalNavBar/VerticalNavBar';
import SearchBar from '../../Search/SearchBar';

const UserProfileCommunity = () => {
  return (
    <>
      <UserProfileHeader />
      <VerticalNavBar />
      <div className="userProfileUpdate">
        {" "}
        <div className="search-button">
          <SearchBar />
        </div>
        <div className="userProfileUpdateForm notificationForm">
          <h3 className="formTitle">Community</h3>
          <div className="userProfileNotificationContent">
            <p className="formInfo">
              You currently are not in any Community.
            </p>
            <p> When you do, they would appear here.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileCommunity