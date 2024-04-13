import React from "react";
import "./Hero.css";
import SearchBar from "../Search/SearchBar";

// import heroSection from "../../Assets/heroSection.svg"

const Hero = () => {
  return (
    <div className="hero">
      <div className="searchBarWrapper">
        <SearchBar />
      </div>
      <h2 className="plainText">
        Welcome to <span className="coloredText">  AgroWize</span>
      </h2>
      <h2 className="plainText">
        The <span className="coloredText"> Future </span> of Agriculture
      </h2>
    </div>
  );
};

export default Hero;
