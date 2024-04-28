import React from 'react'
import HomeNavBar from '../Components/HomeNavBar/HomeNavBar'
import CoursesHero from '../Components/CoursesHero'
import CourseContent from '../Components/CourseContent/CourseContent'
import Footer from '../Components/Footer/Footer'
import VerticalFarmingCourse from '../Components/VerticalFarmingCourse/VerticalFarmingCourse'

const VerticalFarmingCoursePage = () => {
  return (
   <>
   <HomeNavBar/>
  <CoursesHero/>
  <VerticalFarmingCourse title="Vertical Farming"/>
  <CourseContent/>
  <Footer/>
   </>
  )
}

export default VerticalFarmingCoursePage