import React from "react";
import ProgressRating from "../ProgressRating/ProgressRating";

const CourseContent = ({updateProgress}) => {
  return (
    <>
      <div className="colorpallete">
        <div className="coursesContainer">
          <ProgressRating />
          <div className="courseBar">
            <div className="courseBarDetail">
              <img src="/clipboardIcon.png" alt="" />
              <p className="coursetitle">Lesson 1</p>
              <p>Meaning of Vertical Farming</p>
              <p>5 Mins</p>
              <button className="padlock" onClick={updateProgress}>
              </button> <img src="/padlockicon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
