import React, { useState } from "react";
import axios from "axios";
import Keys from "../../Constants/Keys";
import './ContactUs.css';
import FormButton from "../FormButton";

const ContactUs = () => {
      const [formData, setFormData] = useState({
            fullname: '',
            username: '',
            message: ''
      });

      const handleInputChange = (e) => {
            const { fullname, value } = e.target;
            setFormData({
                  ...formData,
                  [fullname]: value
            });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  await axios.post(`${Keys.base_url}/contact`, formData);
                  console.log('Message sent successfully');
                  setFormData({
                        fullname: '',
                        username: '',
                        message: ''
                  });
            } catch (error) {
                  console.error('Error sending message: ', error);
                  setFormData({
                        fullname: '',
                        username: '',
                        message: ''
                  });
            }
      };
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
                                    <form onSubmit={handleSubmit}>
                                          <label className="contactUsLabel" 
                                          htmlFor="fullname">Full name</label>
                                          <input 
                                          className="contactUsInput"
                                          type="text" 
                                          name="fullname"
                                          value={formData.fullname}
                                          onChange={handleInputChange}
                                          placeholder="Enter your names" 
                                          />

                                          <label className="contactUsLabel" 
                                          htmlFor="username">Enter your username address</label>
                                          <input 
                                          className="contactUsInput"
                                          type="text" 
                                          name="username"
                                          value={formData.username}
                                          onChange={handleInputChange}
                                          placeholder="example@gmail.com" />

                                          <label  className="contactUsLabel"
                                          htmlFor="message">Message</label>
                                          <textarea 
                                          className="contactUsTextArea"
                                          id="message" 
                                          name="message"
                                          value={formData.message}
                                          onChange={handleInputChange}
                                          placeholder="Write your message">
                                          </textarea>
                                          <button type="submit" className="contactUsButton">Send Message</button>
                                    </form>
                              </div>
                        </div>
                  </section>
            </div>
      );
      };
export default ContactUs;