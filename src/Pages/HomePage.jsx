import React from "react";
import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import Home from "../Components/Home/Home";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import HomeSubSection from "../Components/HomeSubSection/HomeSubSection";
import HomeAboutUs from "../Components/HomeAboutUs/HomeAboutUs";
import CoreValues from "../Components/CoreValues/CoreValues";

const HomePage = () => {
    return (
        <div>
            <HomeNavBar />
            <Hero/>
            <HomeSubSection/>
            <HomeAboutUs/>
            <CoreValues/>
            <Home />
            <Footer />
        </div>
    );
};

export default HomePage;