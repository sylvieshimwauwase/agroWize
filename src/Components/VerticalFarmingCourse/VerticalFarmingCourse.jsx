import React from "react";
import "./VerticalFarmingCourse.css";
import CoursesHero from "../CoursesHero";
import HomeNavBar from "../HomeNavBar/HomeNavBar";
import StarRating from "../StarRating";
import Footer from "../Footer/Footer";
import ProgressRating from "../ProgressRating/ProgressRating";
import CourseContent from "../CourseContent/CourseContent";


const VerticalFarmingCourse = () => {
  return (
    <>
      <div className="VFContainer">
        <div className="VFinnerContainer">
          <img className="vfImage" src="/AboutUs3.png" alt="Image" />
          <div className="detailsContainer">
            <div className="detailsTitle">
              <h3>vertical Farming</h3>
            </div>
            <div className="starRatingContainer">
              <StarRating />
              <span className="shareContainer">
                <img src="/share.png" alt="" />
                <p>Share with Friends</p>
              </span>
            </div>
            <div className="information">
              <span className="information infoContainer">
                <img className="infoIcon" src="/dollar-circle.png" alt="" />
                <p className="infoText">Free</p>
              </span>
              <span className="information infoContainer">
                <img className="infoIcon" src="/clock.png" alt="" />
                <p className="infoText">2 Hours</p>
              </span>
              <span className="information infoContainer">
                <img className="infoIcon" src="/global.png" alt="" />
                <p className="infoText">online</p>
              </span>
              <span className="information infoContainer">
                <img className="infoIcon" src="/lessonsIcon.png" alt="" />
                <p className="infoText">11 Lessons</p>
              </span>
              <span className="information infoContainer">
                <img className="infoIcon" src="/quiz.png" alt="" />
                <p className="infoText">2 quizzes</p>
              </span>
              <span className="information infoContainer">
                <img className="infoIcon" src="/exam.png" alt="" />
                <p className="infoText">Exam</p>
              </span>
              <span className="information infoContainer">
                <img className="infoIcon" src="/medal-star.png" alt="" />
                <p className="infoText">Certificate</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <CourseContent/>
      <Footer />
    </>
  );
};

export default VerticalFarmingCourse;
