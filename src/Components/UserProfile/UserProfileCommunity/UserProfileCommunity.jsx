import React, { useEffect } from 'react'
import UserProfileHeader from '../UserProfileHeader/UserProfileHeader';
import VerticalNavBar from '../../VerticalNavBar/VerticalNavBar';
import axios from 'axios';
import Keys from '../../../Constants/Keys';
import SearchBar from '../../Search/SearchBar';

const UserProfileCommunity = () => {

  const fetchCommunity = async () => {
    console.log(localStorage.getItem("auth_token"))
    try {
      const response = await axios.get(`${Keys.base_url}/communitiesJoined`, 
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching community:", error);
    }
  }
  useEffect(() => {
    fetchCommunity();
  },[]);
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