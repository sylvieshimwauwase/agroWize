import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import Homepage from "./Pages/HomePage.jsx";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage.jsx";
import OtpVerificationPage from "./Pages/OtpVerificationPage.jsx";
import ResetPasswordPage from "./Pages/ResetPasswordPage.jsx";
import UserProfileUpdatePage from "./Pages/UserProfileUpdatePage.jsx";
import UserProfileNotificationPage from "./Pages/UserProfileNotificationPage.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import ResourcesPage from "./Pages/ResourcesPage.jsx";
import ResourcesPopupPage from "./Pages/ResourcesPopupPage.jsx";
// import ResourcesPopup from "./Components/ResourcePopup/ResourcePopup.jsx"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ResourcesPopupPage/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="otpVerification" element={<OtpVerificationPage />} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />
        <Route path="userProfileUpdate" element={<UserProfileUpdatePage />} />
        <Route
          path="userProfileNotification"
          element={<UserProfileNotificationPage />}
        />
        <Route path="aboutUs" element={<AboutUsPage />} />
        <Route path="resources" element={<ResourcesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
