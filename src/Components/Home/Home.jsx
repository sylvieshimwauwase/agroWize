import React from "react";
import './Home.css';
import FormButton from "../FormButton";

const Home = () => {
    return (
        <div className="homePage">
                <div className="section">
                    <img className="sectionImage1" src="/HeroSectionHomePage.png" alt="Logo" />
                    <button className="overlayBtn">Search</button>
                    <div className="overlay">
                        <h2>Welcome to <span style={{ color: "#f29620" }}>AgroWize</span></h2>
                        <h2>The <span style={{ color: "#f29620" }}>Future</span>of Agriculture</h2>
                    </div>
                </div>
                <div className="row-section-item">
                    <img className="sectionImage2" src="/AboutUs3.png" alt="Logo" />
                    <div className="textColumn">
                    <h4><span style={{color:"#226d2c"}}>Welcome to the Future of Agriculture</span></h4>
                    <p><span style={{color:"#f29620"}}>Unlocking Agricultural Innovation:</span> Vertical 
                        farming utilizes cutting-edge technology to 
                        grow crops in stacked layers, conserving space, 
                        water, and resources, while ensuring a 
                        brighter, greener future for food production.
                    </p>
                    <FormButton name="Explore"/>
                    </div>
                </div>
                <div className="row-section-item">
                    <div className="textColumn">
                    <h4>Hydroponic Farming</h4>
                    <p>Hydroponic farming, also known as hydro 
                        farming, is a cutting-edge agricultural method 
                        that is rapidly transforming the way we grow 
                        crops. Unlike traditional soil-based farming, 
                        hydroponics utilizes a water-based nutrient 
                        solution to nourish plants, eliminating the need 
                        for soil altogether.
                    </p>
                    </div>
                    <img className="sectionImage2" src="/FrameHome.png" alt="Logo" />
                </div>
                <h3><span style={{color:"#226d2c"}}>About Us</span></h3>
                <div className="row-section-item">
                    <p>Welcome to <span style={{color:"#226d2c"}}>AgroWize</span>, the foremost source of 
                        agricultural knowledge in Africa. Our goal is to 
                        lead the way in transforming the farming 
                        sector by providing comprehensive education 
                        and training on sustainable agricultural 
                        practices.
                    </p>
                    <img className="sectionImage2" src="/AboutUsPicture 1.png" alt="Logo" />
                </div>
                <div className="row-section-item">
                    <img className="sectionImage2" src="/AboutUsPicture 2.png" alt="Logo" />
                    <div className="textColumn">
                        <p>At <span style={{color:"#f29620"}}>AgroWize</span>, we are committed to advancing 
                        agricultural knowledge and promoting the 
                        adoption of sustainable practices among 
                        farmers throughout Africa. Our community 
                        platform aims to foster a culture of 
                        collaboration and knowledge exchange that 
                        empowers farmers to make informed decisions 
                        and drive positive change in the agricultural 
                        industry.
                    </p>
                    <FormButton name="  Learn More"/>
                    </div>
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
                <div className="row-section-item">
                    <img className="sectionImage2" src="/VerticalLearning.png" alt="Logo" />
                    <div className="textColumn">
                        <p>Join us at <span style={{color:"#226d2c"}}>AgroWize</span> to
                            increase your Knowledge in
                            <span style={{color:"#f29620"}}>Agriculture</span> and get certified.
                        </p>
                        <FormButton name="Learn More"/>
                    </div>
                    
                </div>
                <div className="row-section-item">
                    <img className="sectionImage2" src="/Community.png" alt="Logo" />
                    <div className="textColumn">
                    <p>Join your tailored <span style={{color:"#f29620"}}>community</span>
                        at <span style={{color:"#226d2c"}}>AgroWize</span> to increase
                        your Knowledge and get 
                        adequately informed.
                    </p>
                    <FormButton name="Explore"/>
                    </div>
                </div>
            </div>
    );
};

export default Home;