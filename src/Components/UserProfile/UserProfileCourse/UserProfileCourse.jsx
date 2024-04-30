import React from "react";
// import { useSelector } from "react-redux";
import "./UserProfileCourse.css";
import SearchBar from "../../Search/SearchBar";
import Courses from '../../Courses/Courses';
import UserProfileHeader from "../UserProfileHeader/UserProfileHeader"
import VerticalNavbar from "../../VerticalNavBar/VerticalNavBar"
import { products } from "../../../Constants/Products";

const UserProfileCourse = () => {
  // const enrolledCourses = useSelector((state) => state.enrolledCourses);
  // const filteredProducts = products.filter((product) => enrolledCourses.some((course) => course.id === product.id));

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
          {/* {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              <h3>{product.title}</h3>
            </li>
          ))}
        </ul>
      ) : ( */}
          <div className="userProfileNotificationContent">
            <p className="formInfo">
              You currently do not have any active Course.
            </p>
            <p> When you do, they would appear here.</p>
          </div>
      {/* )} */}
        </div>
      </div>
    </>
  );
};

export default UserProfileCourse;
