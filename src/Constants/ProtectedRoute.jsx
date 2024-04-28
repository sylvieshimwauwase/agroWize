import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, isUserLoggedIn }) => {
      if (!isUserLoggedIn) {
            return <Navigate to="/login" replace/>;
      }
      return children;
};

export default ProtectedRoute;