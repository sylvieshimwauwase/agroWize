import React from 'react'
import FormNavbar from '../Components/FormNavbar/FormNavbar.jsx';
import LoginForm from '../Components/LoginForm/LoginForm.jsx';
import HeaderBar from '../Components/Header/HeaderBar.jsx';


const Login = () => {
  return (
    <div>
      <FormNavbar title="Login"/>
      <HeaderBar />
      <LoginForm/>
    </div>
  );
}

export default Login