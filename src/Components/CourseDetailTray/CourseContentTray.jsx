import React from "react";
import { courseDetails } from "../../Constants/Products";
import BtnComponent from "../BtnComponent/BtnComponent";
import "./CourseContentTray.css"

const CourseContentTray = ({lesson}) => {
    //  const lesson = courseDetails.find((item) => item.id === lesson.id);
 if (lesson?.lesson_content) {
    //  return (
    // <div>
    //   {courseDetails.map((lesson) => {
        return (
          <div className="courseDetailWrapper">
            <h3 className="lessonTitle">{lesson.lesson_title}</h3>
            {/* <p className="lessonTopic">{lesson.lessonTopic}</p> */}
            {/* <p className="lessonParagraph">{lesson.lessonDefinition}</p>
            <p className="subTitle">{lesson.subTitle}</p> */}
            <p className="lessonParagraph">{lesson.lesson_content}</p>
            <img className="lessonImg" src={lesson.image_url} alt="" />
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
