import React from 'react'
import UserProfileHeader from '../UserProfileHeader/UserProfileHeader';
import VerticalNavBar from '../../VerticalNavBar/VerticalNavBar';
import SearchBar from '../../Search/SearchBar';

const UserProfileHelpCentre = () => {
  return (
    <>
      <UserProfileHeader />
      <VerticalNavBar />
      <div className="userProfileUpdate">
        {" "}
        {/* <div className="search-button">
          <SearchBar />
        </div> */}
        <div className="userProfileUpdateForm notificationForm">
          <h3 className="formTitle">Help Center</h3>
          <div className="userProfileNotificationContent">
            <p className="formInfo">
                Hi! How may we help you?
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileHelpCentre