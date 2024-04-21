import React from 'react'
import HomeNavBar from '../Components/HomeNavBar/HomeNavBar';
import Footer from '../Components/Footer/Footer';
import Courses from '../Components/Courses/Courses';

const CoursesPage = () => {
  return (
    <div>
      <HomeNavBar />
      <Courses/>
      <Footer/>
    </div>
  );
}

export default CoursesPage