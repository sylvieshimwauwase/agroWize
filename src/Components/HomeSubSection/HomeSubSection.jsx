import React from 'react'
import "./HomeSubSection.css"
import FormButton from '../FormButton';

const HomeSubSection = () => {
  return (
    <div>
      <section className="homeSubSection">
          <div className='firstContainer'>
               <div className='imageSection'>
                <img src="/AboutUs3.png" alt="image section"/>
               </div>
               <div className='firstContentSection'>
                <h3> Welcome to the future of Agriculture </h3>
                <p><span style={{color:"#f29620"}}>Unlocking Agricultural Innovation:</span> Vertical 
                <br />
                  farming utilizes cutting-edge technology to 
                  <br />
                  grow crops in stacked layers, conserving space, 
                  <br />
                  water, and resources, while ensuring a 
                  <br />
                  brighter, greener future for food production.
                </p>
                <FormButton name="Explore"/>
               </div>
          </div>
          <div className='secondContainer'>
            <div className='secondContentSection'>
              <h3>Hydroponic Farming</h3>
              <p><span style={{color:"#000"}}>Hydroponic farming</span>, also known as hydro 
              <br />
                farming, is a cutting-edge agricultural method 
                <br />
                that is rapidly transforming the way we grow 
                <br />
                crops. Unlike traditional soil-based farming, 
                <br />
                hydroponics utilizes a water-based nutrient 
                <br />
                solution to nourish plants, eliminating the need 
                <br />
                for soil altogether.
              </p>
            </div>
            <div className='imageSection'>
                <img src="/FrameHome.png" alt="image section 1"/>
            </div>
          </div>

      </section>
    </div>
  );
}

export default HomeSubSection;