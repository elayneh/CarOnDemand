import React, { ReactNode } from "react";
import { Route, Navigate } from "react-router-dom";
import Dashboard from "./DashboardNav";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (element) => {
  const isLoggedIn = !!localStorage.getItem("carondemandToken");
  return isLoggedIn ? (
    <Route element={<Dashboard />} />
  ) : (
    <Navigate to="/user/login" replace />
  );
};

export default PrivateRoute;
