import React from "react";
import ProgressRating from "../ProgressRating/ProgressRating";

const CourseContent = () => {
  return (
    <>
      <div className="colorpallete">
        <div className="coursesContainer">
          <ProgressRating />
          <div className="courseBar">
            <div className="courseBarDetail">
              <img src="/clipboardIcon.png" alt="" />
              <p className="coursetitle">Lesson 1</p>
              <p>courseBarDetail</p>
              <p>5 Mins</p>
              <button className="padlock">
                <img src="/padlockicon.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
