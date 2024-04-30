import React, {useState, useEffect} from "react";
import ProgressRating from "../ProgressRating/ProgressRating";
import "./CourseContent.css"
import { courseDetails } from "../../Constants/Products";
import axios from "axios";
import Keys from "../../Constants/Keys";

const CourseContent = () => {
   const [progress, setProgress] = useState(0);
   const totalLessons = 14;
   const [courses, setCourses] = useState([]);
   const [unlockedLessons, setUnlockedLessons] = useState([])

    useEffect(() => {
      fetchLessonContent();
    }, []);

   const fetchLessonContent = async () => {
     try {
       const url = `${Keys.base_url}/allLessons`;
       const response = await axios.get(url);
       setCourses(response.data);
     } catch (error) {
       console.error("Error fetching lesson content:", error);
     }
   };
   
   const handlePadlockClick = (lessonId) => {
    setProgress((prevProgress) => prevProgress + 1);
     setUnlockedLessons((prevUnlockedLessons) => [
       ...prevUnlockedLessons,
       lessonId,
     ]);
   };
  return (
    <>
      <div className="colorpallete">
        <div className="coursesContainer">
          <ProgressRating progress={progress} total={totalLessons} />
          {courseDetails.map((course) => {
           const isUnlocked = unlockedLessons.includes(course.id);
            return (
              <div className="courseBar" key={course.id}>
                <div className="courseBarDetail">
                  <div className="iconAlignment">
                    <img
                      className="courseDetailIcon"
                      src="/clipboardIcon.png"
                      alt=""
                    />
                    <p className="coursetitle">{course.lesson}</p>
                  </div>
                  <h4>{course.title}</h4>
                  <div className="iconAlignment">
                    <p className="coursetitle">{course.period}</p>
                    <button
                      className={`padlock ${isUnlocked ? "unlocked" : ""}`}
                      onClick={() => handlePadlockClick(course.id)}
                      disabled={isUnlocked}
                    >
                      <img
                        className="courseDetailIcon"
                        src="/padlockicon.png"
                        alt=""
                      />
                    </button>
                  </div>
                  {/* {isUnlocked && course.id !== "6" && course.id !== "11" ? (
                    <div className="lessonContent">
                      Add your lesson content here
                      <p>This is the content of lesson {course.lesson}</p>
                    </div>
                  ) : null} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CourseContent;
