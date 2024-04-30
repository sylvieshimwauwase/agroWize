import React from "react";
import { courseDetails } from "../../Constants/Products";
import BtnComponent from "../BtnComponent/BtnComponent";
import "./CourseContentTray.css"

const CourseContentTray = ({lesson}) => {
     const lessonData = courseDetails.find((item) => item.id === lesson.id);
 if (lessonData) {
    //  return (
    // <div>
    //   {courseDetails.map((lesson) => {
        return (
          <div className="courseDetailWrapper">
            <h3 className="lessonTitle">{lesson.lessonTitle}</h3>
            <p className="lessonTopic">{lesson.lessonTopic}</p>
            <p className="lessonParagraph">{lesson.lessonDefinition}</p>
            <p className="subTitle">{lesson.subTitle}</p>
            <p className="lessonParagraph">{lesson.lessonParagraph}</p>
            <img className="lessonImg" src={lesson.img} alt="" />
            <BtnComponent
              variant="primary"
              size="large"
              fullWidth={false}
              className="btn"
            >
              {" "}
              Unlock Next Lesson
            </BtnComponent>
          </div>
        );
    //   })}
    // </div>
      } else {
    return <p>Lesson not available.</p>;
      }
};

export default CourseContentTray;
