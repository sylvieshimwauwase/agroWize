import React from "react";
import ProgressRating from "../ProgressRating/ProgressRating";
import "./CourseContent.css"
import { courseDetails } from "../../Constants/Products";

const CourseContent = ({}) => {
  return (
    <>
      <div className="colorpallete">
        <div className="coursesContainer">
          <ProgressRating />
          {courseDetails.map((detail)=>{
            return(
          <div className="courseBar" key={detail.id}>
            <div className="courseBarDetail">
              <img
                className="courseDetailIcon"
                src="/clipboardIcon.png"
                alt=""
              />
              <p className="coursetitle">{detail.lesson}</p>
              <h4>{detail.title}</h4>
              <p className="coursetitle">{detail.period}</p>
              <button className="padlock">
                <img
                  className="courseDetailIcon"
                  src="/padlockicon.png"
                  alt=""
                />
              </button>
            </div>
          </div>
           )})}
        </div>
      </div>
    </>
  );
};

export default CourseContent;
