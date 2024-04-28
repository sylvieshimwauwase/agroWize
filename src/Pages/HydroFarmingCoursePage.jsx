import React from 'react'
import HomeNavBar from '../Components/HomeNavBar/HomeNavBar'
import CoursesHero from '../Components/CoursesHero'
import Footer from '../Components/Footer/Footer'
import VerticalFarmingCourse from '../Components/VerticalFarmingCourse/VerticalFarmingCourse'
import HydroFarmingCourse from '../Components/HydroFarmingCourse/HydroFarmingCourse'

const HydroFarmingCoursePage = () => {
  return (
    <>
    <HomeNavBar/>
    <CoursesHero/>
    <VerticalFarmingCourse title="Hydroponic Farming"/>
    <HydroFarmingCourse/>
    <Footer/>
    </>
  )
}

export default HydroFarmingCoursePage