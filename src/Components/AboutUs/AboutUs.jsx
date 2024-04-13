import React from "react";
import './AboutUs.css';
import CoreValues from "../CoreValues/CoreValues";
import Footer from "../Footer/Footer";
import Team from "../Team/Team";
import ContactUs from "../ContactUs/ContactUs";

const HeroSection = () => {
    return (
        <div className="aboutUsPage">
                <div className="section">
                    <img className="sectionImage1" src="/HeroSectionHomePage.png" alt="Logo" />
                    <button className="overlayBtn">Search</button>
                    <div className="overlay">
                        <h2>About Us</h2>
                    </div>
                </div>
                <div className="row-section-item">
                    <p>Welcome to <span style={{ color: "#226d2c" }}>AgroWize</span>, the foremost source of
                        <br />
                        agricultural knowledge in Africa. Our goal is to
                        <br />
                        lead the way in transforming the farming
                        <br />
                        sector by providing comprehensive education
                        <br />
                        and training on sustainable agricultural practices.
                    </p>
                    <img className="sectionImage2" src="/AboutUsPicture 1.png" alt="Logo" />
                </div>
                <div className="row-section-item">
                    <img className="sectionImage2" src="/AboutUs4.png" alt="Logo" />
                    <p>We are committed to promoting sustainable
                    <br />
                        agricultural practices and our mission is to
                        <br />
                        contribute to the restoration and maintenance
                        <br />
                        of ecosystem balance. We aim to achieve this
                        <br />
                        by engaging with our community, promoting
                        <br />
                        communication, knowledge sharing, and
                        <br />
                        collaboration. Our goal is to drive positive
                        <br />
                        change in the agricultural sector throughout
                        <br />
                        Africa by fostering innovation.
                    </p>
                </div>
                <div className="row-section-item">
                    <p>At <span style={{ color: "#f29620" }}>AgroWize</span>, we are committed to advancing 
                    <br />
                        agricultural knowledge and promoting the
                        <br />
                        adoption of sustainable practices among
                        <br />
                        farmers throughout Africa. Our community
                        <br />
                        platform aims to foster a culture of
                        <br />
                        collaboration and knowledge exchange that
                        <br />
                        empowers farmers to make informed decisions
                        <br />
                        and drive positive change in the agricultural
                        <br />
                        industry.
                    </p>
                    <img className="sectionImage2" src="/AboutUsPicture 2.png" alt="Logo" />
                </div>
                <div className="row-section-item">
                    <img className="sectionImage2" src="/AboutUs3.png" alt="Logo" />
                    <p>We invite you to join us on this journey
                    <br />
                        towards a more sustainable and thriving
                        <br />
                        agricultural sector in Africa. <span style={{ color: "#f29620"}}>By working
                        <br />
                        together, we can make a significant difference.</span></p>
                </div>
                <CoreValues />
                <Team />
                <ContactUs />
                <Footer />
            </div>
    );
};

export default HeroSection;