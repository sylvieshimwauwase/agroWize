import React, {useState} from 'react'
// import { useDispatch } from 'react-redux';
import "./Courses.css";
import { useNavigate } from 'react-router-dom';
import { products } from '../../Constants/Products';
import CoursesHero from '../CoursesHero';
import Popup from '../PopupMessage/Popup/Popup';
import SmallSizeFormButton from '../SmallSizeFormButton/SmallSizeFormButton';
import FormButton from '../FormButton';
import axios from 'axios';
import Keys from '../../Constants/Keys';


const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleEnrollClick = () => {
    // const clickedCourse = dispatch ({
    //   type: "ENROLL_COURSE",
    //   payload: clickedCourse
    // })
    setIsVisible(!isVisible);
  }
  const handleLearningClick = async() => {
    navigate("/VerticalFarmingCoursePage");
    try {
      const response = await axios.get(`${Keys.base_url}/fetchCourses`)
      .then((response) => {
        console.log(response.data);
      })
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
   
  const handleEnrollClick = (title) => {
    setSelectedTitle(title);
    setIsVisible(true);
  }
  const handleLearningClick = () => {
    navigate(`/${selectedTitle.replace(/\s+/g, "")}CoursePage`);
    setIsVisible(false); 

  };


    // const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const [selectedProduct, setSelectedProduct] = useState(null);
    // const [learningStates, setLearningStates] = useState(Array(products.length).fill(false));

    // const openPopup = (product) => {
    //   setSelectedProduct(product);
    //   setIsPopupOpen(true);
    // };

    // const closePopup = () => {
    //   setIsPopupOpen(false);
    //     setSelectedProduct(null); 
    // };

    // const handleLearningClick = (index) => {
    //   // Logic for handling learning click
    // };

  return (
    <>
      <Popup
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        text="Congratulations!"
        paragraph={
          <>
            You have successfully enrolled for mastering
            <span style={{ color: "#226D2C" }}> {selectedTitle}</span> course.
            <br />
            Get ready for an{" "}
            <span style={{ color: "#F29620" }}>
              {" "}
              immersive learning journey
            </span>
          </>
        }
        button={
          <FormButton name="Start Learning" onClick={handleLearningClick} />
        }
      />
      <CoursesHero />
      {products.map((item, index) => {
        return (
          <div className="productDetails" key={index}>
            <img className="images" src={item.image} alt="" />
            <div className="borderDetails">
              <h3>{item.title}</h3>
              <h6>Duration: 1 - 3 Months</h6>
              <h6>Certificate: Available Upon Completion</h6>
              <h5 className="primaryColor">Online</h5>

              {/*<FormButton
                onClick={() => openPopup(product)}
        name="Enroll Now" />*/}

              {/* <Link to={`/${item.title.replace(/\s+/g, '')}CoursePage`}> */}
              {/* <SmallSizeFormButton
                name={
                  learningStates[index] ? "Continue Learning" : "Enroll Now"
                }
                onClick={() => handleLearningClick(index)}
              /> */}
              {/* </Link> */}
              <SmallSizeFormButton
                name="Enroll Now"
                onClick={() => {
                  handleEnrollClick(item.title);
                }}
              />
            </div>
          </div>
        );
      })}
      {/* {isPopupOpen && (
        <CoursesPopupPage product={selectedProduct} onClose={closePopup} />
      )} */}
    </>
  );
}
};
export default Courses;