import React from "react";
import UserProfileHeader from "../Components/UserProfileHeader/UserProfileHeader";
import VerticalNavBar from "../Components/VerticalNavBar/VerticalNavBar";
import UserProfileUpdate from "../Components/UserProfileUpdate/UserProfileUpdate";

const UserProfileUpdatePage = () => {
    return (
        <div>
            <UserProfileHeader />
            <VerticalNavBar userName="my name"/>
            <UserProfileUpdate />
        </div>
    );
}

export default UserProfileUpdatePage;