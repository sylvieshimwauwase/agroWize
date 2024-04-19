import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage.jsx";
import OtpVerificationPage from "./Pages/OtpVerificationPage.jsx";
import ResetPasswordPage from "./Pages/ResetPasswordPage.jsx";
import UserProfileUpdatePage from "./Pages/UserProfileUpdatePage.jsx";
import UserProfileNotificationPage from "./Pages/UserProfileNotificationPage.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import ResourcesPage from "./Pages/ResourcesPage.jsx";
import ArticlesPage from "./Pages/ArticlesPage.jsx";
import VerticalFarmingPage from "./Pages/VerticalFarmingPage.jsx";
import CommunityPage from "./Pages/CommunityPage.jsx";
import SignUpPopUpPage from "./Pages/SignUpPopUpPage.jsx";
import LoginPopUpPage from "./Pages/LoginPopUpPage.jsx";
import PasswordChangePopup from "./Components/PassordChangePopup/PasswordChangePopup.jsx";
import PasswordChangePopupPage from "./Pages/PasswordChangePopupPage.jsx";






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UserProfileUpdatePage/>} />
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
        <Route path="courses" element={<ResourcesPage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="verticalFarming" element={<VerticalFarmingPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="signUpPopUpPage" element={<SignUpPopUpPage />} />
        <Route path="loginPopUpPage" element={<LoginPopUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
