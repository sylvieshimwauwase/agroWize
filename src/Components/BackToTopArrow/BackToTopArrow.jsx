import React, { useState, useEffect } from "react";
import "./BackToTopArrow.css";

const BackToTopArrow = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
     window.addEventListener("scroll", toggleVisibility);
     return () => {
       window.removeEventListener("scroll", toggleVisibility);
     };
   }, []);

   const toggleVisibility = () => {
     if (window.pageYOffset > 300) {
       setIsVisible(true);
     } else {
       setIsVisible(false);
     }
   };

   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };

    return (
    <div className={`back-to-top-arrow ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      &#8593;
    </div>
  );
}

export default BackToTopArrow