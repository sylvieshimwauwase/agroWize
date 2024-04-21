import React from 'react'
import SearchBar from '../../Search/SearchBar';
import UserProfileHeader from '../UserProfileHeader/UserProfileHeader';
import VerticalNavBar from '../../VerticalNavBar/VerticalNavBar';

const UserProfilebookmarkedResources = () => {
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
          <h3 className="formTitle">Bookmarked Resources</h3>
          <div className="userProfileNotificationContent">
            <p className="formInfo">
              You currently do not have any Bookmarked Resources.
            </p>
            <p> When you do, they would appear here.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfilebookmarkedResources