import React from "react";
import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import Home from "../Components/Home/Home";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
    return (
        <div>
            <HomeNavBar />
            <Home />
            <Footer />
        </div>
    );
};

export default HomePage;