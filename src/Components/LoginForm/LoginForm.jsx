import React from "react";
import { useState } from "react";
import axios from "axios";
import "./LoginForm.css"
import MediaBar from "../MediaBar";
import FormButton from "../FormButton";

const LoginForm = ({onFormSubmit}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post("/login", { username, password });
      console.log(response.data);
      onFormSubmit(response.data);
    } catch (error) {
      console.error("Error logging in: ", error);
      setError("Invalid username or password");
    }
    
  };
  return (
    <div className="container">
      <form className="login-form" onFormSubmit={handleSubmit}>
        <div className="welcomeBack">
          <h3>Welcome Back</h3>
          <p className="welcomeMsg">Glad to see you again!</p>
        </div>
        <div className="formContainer">
          <label htmlFor="username">Enter your email:</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="/forgotPassword" className="forgot-password">
            Forgot password?
          </a>
        </div>
        <FormButton name="Login" />
        <MediaBar
        registerText="Or Login with"
        loginText="Create Account"
        />
      </form>
    </div>
  );
};
export default LoginForm;
