import React, {useState} from 'react'
import "./ProgressRating.css"

const ProgressRating = ({progress, total}) => {
 
    // const [current, setCurrent] = useState(0);

  // const updateProgress = () => {
  //    setCurrent(current => {
  //     const newCurrent = current + 1;
  //     return Math.min(newCurrent, total); 
  //   });
  // };
  function getPercentage(current, total) {
    if (total === 0) {
      return "0%";
    }
    const percentage = (current / total) * 100;
    return `${Math.min(Math.max(percentage, 0), 100)}%`;
  }

  const progressPercentage = getPercentage(progress, total);

  return (
    <div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: progressPercentage }}>
          {progressPercentage}
        </div>
      </div>
      {/* <button onClick={updateProgress}>Complete Course</button> */}
    </div>
  );
}

export default ProgressRating


