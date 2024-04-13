import React from 'react';
import "./CoreValues.css";

const CoreValues = () => {
  return (
    <div className="coreValuesSection">
      <h3 className='coreValuesSectionTitle'> Mission ,Vision,  and Core Values </h3>
      <div className="missionVisionValuesDiv">
        <div className="innerDiv">
          <img src="mission.png" alt="Mission" />
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
          <img src="vision.png" alt="Vision" />
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
          <img src="values.png" alt="Values" />
          <h3>Core Values</h3>
          <p><span style={{color:"#226d2c"}}>Innovation:</span> Innovation is woven into the 
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
    </div>
  );
}

export default CoreValues;