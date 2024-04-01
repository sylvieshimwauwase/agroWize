import React from 'react'
import FormNavbar from '../Components/FormNavbar/FormNavbar.jsx';
import LoginForm from '../Components/LoginForm/LoginForm.jsx';

const Login = () => {
  return (
    <div>
      <FormNavbar title="Login"/>
      <LoginForm/>
    </div>
  );
}

export default Login