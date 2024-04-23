import React, {useState} from 'react'

const ProgressBarParent = () => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const totalLessons = 25;

    const updateProgress = () => {
      setCurrentProgress((current) => {
        const newCurrent = current + 1;
         console.log("Updating progress...");
        return Math.min(newCurrent, totalLessons);
      });
    };
  return (
    <>
      <ProgressRating current={currentProgress} total={totalLessons} />
      <CourseContent updateProgress={updateProgress} />
    </>
  );
}

export default ProgressBarParent