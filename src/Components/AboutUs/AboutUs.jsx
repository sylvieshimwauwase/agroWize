import React from "react";
import './AboutUs.css';

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
                        agricultural knowledge in Africa. Our goal is to
                        lead the way in transforming the farming
                        sector by providing comprehensive education
                        and training on sustainable agricultural practices.
                    </p>
                    <img className="sectionImage2" src="/AboutUsPicture 1.png" alt="Logo" />
                </div>
                <div className="row-section-item">
                    <img className="sectionImage2" src="/AboutUs4.png" alt="Logo" />
                    <p>We are committed to promoting sustainable
                        agricultural practices and our mission is to
                        contribute to the restoration and maintenance
                        of ecosystem balance. We aim to achieve this
                        by engaging with our community, promoting
                        communication, knowledge sharing, and
                        collaboration. Our goal is to drive positive
                        change in the agricultural sector throughout
                        Africa by fostering innovation.
                    </p>
                </div>
                <div className="row-section-item">
                    <p>At <span style={{ color: "#f29620" }}>AgroWize</span>, we are committed to advancing
                        agricultural knowledge and promoting the
                        adoption of sustainable practices among
                        farmers throughout Africa. Our community
                        platform aims to foster a culture of
                        collaboration and knowledge exchange that
                        empowers farmers to make informed decisions
                        and drive positive change in the agricultural
                        industry.
                    </p>
                    <img className="sectionImage2" src="/AboutUsPicture 2.png" alt="Logo" />
                </div>
                <div className="row-section-item">
                    <img className="sectionImage2" src="/AboutUs3.png" alt="Logo" />
                    <p>We invite you to join us on this journey
                        towards a more sustainable and thriving
                        agricultural sector in Africa. <span style={{ color: "#f29620"}}>By working
                        together, we can make a significant difference.</span></p>
                </div>
                <div className="missionVisionValuesDiv">
                    <div className="innerDiv">
                        <img src="image1.jpg" alt="Image 1" />
                        <h3>Mission</h3>
                        <p>AgroWize aims to foster the 
                            advancement of agricultural knowledge 
                            and the adoption of sustainable eco-
                            friendly practices among farmers 
                            throughout Africa through agricultural 
                            education and collaboration.
                        </p>
                    </div>
                    <div className="innerDiv">
                        <img src="image2.jpg" alt="Image 2" />
                        <h3>Vision</h3>
                        <p>AgroWize aims to be the foremost 
                            resource for agricultural knowledge in 
                            Africa, driving a paradigm shift in the 
                            farming sector through farmers' 
                            education and training in sustainable 
                            agricultural practices.
                        </p>
                    </div>
                    <div className="innerDiv">
                        <img src="image3.jpg" alt="Image 3" />
                        <h3>Core Values</h3>
                        <p><span style={{color:"#226d2c"}}>Innovation:</span>Innovation: Innovation is woven into the 
                            fabric of all our solutions as an Agrotech 
                            company.
                        </p>
                        <p><span style={{color:"#f29620"}}>Leadership:</span> We strive to be the leaders 
                            in revolutionizing Agriculture.
                        </p>
                        <p><span style={{color:"#2b2222"}}>Leadership:</span> Creating impact through 
                            sustainable farming practices.
                        </p>
                    </div>
                </div>
                <div className="section footer-section">
                    <footer>
                        <p>Contact us: contact@example.com</p>
                        <p>Address: 123 Street, City, Country</p>
                    </footer>
                </div>
            </div>
    );
};

export default HeroSection;