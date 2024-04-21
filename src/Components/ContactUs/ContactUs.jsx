import React from "react";
import './ContactUs.css';
import FormButton from "../FormButton";

const ContactUs = () => {
      return (
            <div>
                  <section className="contactUsSection">
                        <div className="contactUsTitle">
                              <h3>Contact Us</h3>
                        </div>
                        <div className="contactUsGrid">
                              <div className="imageArea">
                                    <img src="/ContactUsImage.png" alt="Contact Us" />
                              </div>
                              <div className="contactUsForm">
                                    <form >
                                          <label className="contactUsLabel" htmlFor="name">Full name</label>
                                          <input 
                                          className="contactUsInput"
                                          type="text" 
                                          name="name" 
                                          placeholder="Enter your name" 
                                          />
                                          <label className="contactUsLabel" htmlFor="email">Enter your email address</label>
                                          <input 
                                          className="contactUsInput"
                                          type="text" 
                                          name="email" 
                                          placeholder="example@gmail.com" />
                                          <label  className="contactUsLabel"htmlFor="subject">Message</label>
                                          <textarea 
                                          className="contactUsTextArea"
                                          id="subject" 
                                          name="subject" 
                                          placeholder="Write your message">
                                          </textarea>
                                          <button className="contactUsButton">Send Message</button>
                                    </form>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default ContactUs;