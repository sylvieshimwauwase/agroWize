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
import SignUpPopUpPage from "./Components/PopupMessage/SignUpPopUpPage.jsx";
import LoginPopUpPage from "./Components/PopupMessage/LoginPopUpPage.jsx";
import UserProfileCourse from "./Components/UserProfile/UserProfileCourse/UserProfileCourse.jsx";
import UserProfileLearningHistory from "./Components/UserProfile/UserProfileLearningHistory/UserProfileLearningHistory.jsx";
import UserProfileChangePassword from "./Components/UserProfile/UserProfileChangePassword/UserProfileChangePassword.jsx";
import UserProfileBookmarkedResources from "./Components/UserProfile/UserProfilebookmarkedResources/UserProfilebookmarkedResources.jsx";
import UserProfileCertificates from "./Components/UserProfile/UserProfileCertificates/UserProfileCertificates.jsx";
import UserProfileCommunity from "./Components/UserProfile/UserProfileCommunity/UserProfileCommunity.jsx"
import UserProfileHelpCentre from "./Components/UserProfile/UserProfileHelpCentre/UserProfileHelpCentre.jsx";
import HydroponicFarmingPage from "./Pages/HydroponicFarmingPage.jsx";
import PasswordChangePopupPage from "./Components/PopupMessage/PasswordChangePopupPage.jsx";
import SubscribePopupPage from "./Components/PopupMessage/SubscribePopupPage.jsx";
import VerticalFarmingCoursePage from "./Pages/VerticalFarmingCoursePage.jsx";
import CoursesPopupPage from "./Components/PopupMessage/CoursesPopupPage.jsx";
import ResetPasswordPopupPage from "./Components/PopupMessage/ResetPasswordPopupPage.jsx";
import CoursesPage from "./Pages/CoursesPage.jsx";
import ConfirmPasswordChangePopupPage from "./Components/PopupMessage/ConfirmPasswordChangePopupPage.jsx";
import PasswordChangeSuccessPage from "./Components/PopupMessage/PasswordChangeSuccessPage.jsx";
// import Courses from "./Components/Courses/Courses.jsx";

import Courses from "./Components/Courses/Courses.jsx";
import TomatoVerticalPopup from "./Components/PopupMessage/CommunityPopup/TomatoVerticalPopup.jsx";
import TuberHydroPopup from "./Components/PopupMessage/CommunityPopup/TuberHydroPopup.jsx";
import GrainVerticalPopup from "./Components/PopupMessage/CommunityPopup/GrainVerticalPopup.jsx";
import PotatoVerticalPopup from "./Components/PopupMessage/CommunityPopup/PotatoVerticalPopup.jsx";
import GrainHydroPopup from "./Components/PopupMessage/CommunityPopup/GrainHydroPopup.jsx";
import TomatoHydroPopup from "./Components/PopupMessage/CommunityPopup/TomatoHydroPopup.jsx";
import LettuceVerticalPopup from "./Components/PopupMessage/CommunityPopup/LettuceVerticalPopup.jsx";
import LettuceHydroPopup from "./Components/PopupMessage/CommunityPopup/LettuceHydroPopup.jsx";





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
        <Route path="CoursesPage" element={<CoursesPage />} />

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
        <Route
          path="confirmPasswordChangePopupPage"
          element={<ConfirmPasswordChangePopupPage />}
        />
        <Route
          path="passwordChangeSuccessPage"
          element={<PasswordChangeSuccessPage />}
        />
        <Route path="tomatoVerticalPopup" element={<TomatoVerticalPopup />}/>
        <Route path="grainHydroPopup" element={<GrainHydroPopup />} />
        <Route path="grainVerticalPopup" element={<GrainVerticalPopup />} />
        <Route path="lettuceHydroPopup" element={<LettuceHydroPopup />} />
        <Route path="lettuceVerticalPopup" element={<LettuceVerticalPopup />} />
        <Route path="tomatoHydroPopup" element={<TomatoHydroPopup />} />
        <Route path="tuberHydroPopup" element={<TuberHydroPopup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
