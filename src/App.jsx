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
import ArticlesPage from "./Pages/ArticlesPage.jsx";
import VerticalFarmingPage from "./Pages/VerticalFarmingPage.jsx";
import CommunityPage from "./Pages/CommunityPage.jsx";
import SignUpPopUpPage from "./Pages/SignUpPopUpPage.jsx";
import LoginPopUpPage from "./Pages/LoginPopUpPage.jsx";
import UserProfileCourse from "./Components/UserProfile/UserProfileCourse/UserProfileCourse.jsx";
import UserProfileLearningHistory from "./Components/UserProfile/UserProfileLearningHistory/UserProfileLearningHistory.jsx";
import UserProfileChangePassword from "./Components/UserProfile/UserProfileChangePassword/UserProfileChangePassword.jsx";
import UserProfileBookmarkedResources from "./Components/UserProfile/UserProfilebookmarkedResources/UserProfilebookmarkedResources.jsx";
import UserProfileCertificates from "./Components/UserProfile/UserProfileCertificates/UserProfileCertificates.jsx";
import UserProfileCommunity from "./Components/UserProfile/UserProfileCommunity/UserProfileCommunity.jsx"
import UserProfileHelpCentre from "./Components/UserProfile/UserProfileHelpCentre/UserProfileHelpCentre.jsx";
import HydroponicFarmingPage from "./Pages/HydroponicFarmingPage.jsx";
import PasswordChangePopupPage from "./Pages/PasswordChangePopupPage.jsx";
import SubscribePopupPage from "./Pages/SubscribePopupPage.jsx";
import VerticalFarmingCoursePage from "./Pages/VerticalFarmingCoursePage.jsx";
import CoursesPopupPage from "./Pages/CoursesPopupPage.jsx";
import ResetPasswordPopupPage from "./Pages/ResetPasswordPopupPage.jsx";
import CoursesPage from "./Pages/CoursesPage.jsx";
import ConfirmPasswordChangePopupPage from "./Pages/ConfirmPasswordChangePopupPage.jsx";
import PasswordChangeSuccessPage from "./Pages/PasswordChangeSuccessPage.jsx";
import HydroFarmingCoursePage from "./Pages/HydroFarmingCoursePage.jsx";
import CropRotationCoursePage from "./Pages/CropRotationCoursePage.jsx";
// import Courses from "./Components/Courses/Courses.jsx";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="aboutUs" element={<AboutUsPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="otpVerification" element={<OtpVerificationPage />} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />

        {/*farming techniques pages */}
        <Route path="verticalFarming" element={<VerticalFarmingPage />} />
        <Route path="hydroponicFarming" element={<HydroponicFarmingPage />} />

        {/*user profile pages */}
        <Route path="userProfileUpdate" element={<UserProfileUpdatePage />} />
        <Route
          path="userProfileNotification"
          element={<UserProfileNotificationPage />}
        />
        <Route path="userProfileCourse" element={<UserProfileCourse />} />
        <Route
          path="userProfileLearningHistory"
          element={<UserProfileLearningHistory />}
        />
        <Route
          path="userProfileChangePassword"
          element={<UserProfileChangePassword />}
        />
        <Route
          path="UserProfileBookmarkedResources"
          element={<UserProfileBookmarkedResources />}
        />
        <Route
          path="userprofilecertificates"
          element={<UserProfileCertificates />}
        />
        <Route path="userProfileCommunity" element={<UserProfileCommunity />} />
        <Route
          path="userProfileHelpCentre"
          element={<UserProfileHelpCentre />}
        />
        <Route
          path="passwordChangePopupPage"
          element={<PasswordChangePopupPage />}
        />
        <Route
          path="VerticalFarmingCoursePage"
          element={<VerticalFarmingCoursePage />}
        />
        <Route
          path="userProfileHelpCentre"
          element={<UserProfileHelpCentre />}
        />

        {/*pop up pages*/}
        <Route path="signUpPopUpPage" element={<SignUpPopUpPage />} />
        <Route path="loginPopUpPage" element={<LoginPopUpPage />} />
        <Route
          path="passwordChangePopupPage"
          element={<PasswordChangePopupPage />}
        />
        <Route path="subscribePopupPage" element={<SubscribePopupPage />} />
        <Route path="coursesPopupPage" element={<CoursesPopupPage />} />
        <Route
          path="resetPasswordPopupPage"
          element={<ResetPasswordPopupPage />}
        />
        <Route path="coursesPopupPage" element={<CoursesPopupPage />} />
        <Route
          path="confirmPasswordChangePopupPage"
          element={<ConfirmPasswordChangePopupPage />}
        />
        <Route
          path="passwordChangeSuccessPage"
          element={<PasswordChangeSuccessPage />}
        />
        <Route path="CoursesPage" element={<CoursesPage />} />
        <Route
          path="hydroFarmingCoursePage"
          element={<HydroFarmingCoursePage />}
        />
        <Route
          path="cropRotationCoursePage"
          element={<CropRotationCoursePage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
