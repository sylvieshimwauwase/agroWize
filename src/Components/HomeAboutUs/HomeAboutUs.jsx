import React from 'react'
import './HomeAboutUs.css';
import FormButton from '../../Components/FormButton';
import { useNavigate } from 'react-router-dom';

const HomeAboutUs = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/aboutUs');
  };

  return (
    <div>
      <section className="homeAboutUs">
        <h3 className="homeAboutUsTitle">About Us</h3>
      <div className="containerOne">
        <div className="firstContent">
          <p>Welcome to <span style={{color:"#226d2c"}}>AgroWize</span>, the foremost
          
            source of agricultural knowledge in Africa. Our goal is to lead the
            
            way in transforming the farming sector by providing comprehensive
            
            education and training on sustainable agricultural practices.
          </p>
        </div>
        <div className='imageRegion'>
          <img src="/AboutUsPicture 1.png" alt="AboutUs Picture Home"/>
        </div>
      </div>
      <div className="containerTwo">
      <div className='imageRegion'>
          <img src="/AboutUsPicture 2.png" alt="AboutUs Picture Home"/>
        </div>
        <div className="secondContent">
          <p>
            At <span style={{color:"#f29620"}}>AgroWize</span>, we are committed to
            advancing agricultural knowledge and promoting the adoption of
            sustainable practices among farmers throughout Africa. Our community
            platform aims to foster a culture of collaboration and knowledge
            exchange that empowers farmers to make informed decisions and drive
            positive change in the agricultural industry.
          </p>
          <FormButton name="Learn More" onClick={handleLearnMoreClick} />
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default HomeAboutUs;