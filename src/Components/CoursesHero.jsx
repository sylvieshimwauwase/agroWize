import React from 'react'
import SearchBar from './Search/SearchBar';

const CoursesHero = () => {
  return (
    <div>
      <div className="coursesHero">
        <SearchBar />
        <h3 className="heroTitle">COURSES</h3>
      </div>
    </div>
  );
}

export default CoursesHero