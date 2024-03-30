import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage.jsx";
import OtpVerificationPage from "./Pages/OtpVerificationPage.jsx";
import ResetPasswordPage from "./Pages/ResetPasswordPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="createAccount" element={<SignUp />} />
        <Route path="login" element={<Login />}/>
        <Route path="forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="otpVerification" element={<OtpVerificationPage />} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;