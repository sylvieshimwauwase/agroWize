import React, {useState} from 'react'
import ProgressRating from '../ProgressRating/ProgressRating';
import { courseDetails } from "../../Constants/Products";


const CropRotationCourse = () => {
     const [progress, setProgress] = useState(0);
     const totalLessons = 25;

     const handlePadlockClick = () => {
       setProgress((prevProgress) => prevProgress + 1);
     };
  return (
    <>
      <div className="colorpallete">
        <div className="coursesContainer">
          <ProgressRating total={totalLessons} progress={progress} />
          {courseDetails.map((detail) => {
            return (
              <div className="courseBar" key={detail.id}>
                <div className="courseBarDetail">
                  <div className="iconAlignment">
                    <img
                      className="courseDetailIcon"
                      src="/clipboardIcon.png"
                      alt=""
                    />
                    <p className="coursetitle">{detail.lesson}</p>
                  </div>
                  <h4>{detail.title}</h4>
                  <div className="iconAlignment">
                    <p className="coursetitle">{detail.period}</p>
                    <button className="padlock" onClick={handlePadlockClick}>
                      <img
                        className="courseDetailIcon"
                        src="/padlockicon.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CropRotationCourse