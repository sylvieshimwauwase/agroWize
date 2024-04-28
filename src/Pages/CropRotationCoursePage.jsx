import React from 'react'
import HomeNavBar from '../Components/HomeNavBar/HomeNavBar';
import CoursesHero from '../Components/CoursesHero';
import VerticalFarmingCourse from '../Components/VerticalFarmingCourse/VerticalFarmingCourse';
import CropRotationCourse from '../Components/CropRotationCourse/CropRotationCourse';
import Footer from '../Components/Footer/Footer';

const CropRotationCoursePage = () => {
  return (
    <div>
      <HomeNavBar />
      <CoursesHero />
      <VerticalFarmingCourse title="Crop Rotation" />
      <CropRotationCourse />
      <Footer />
    </div>
  );
}

export default CropRotationCoursePage