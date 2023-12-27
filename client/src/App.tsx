import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "./Components/Register";
import SignIn from "./Components/Login";
import { Footer } from "./Components/Footer";
import NavBar from "./Components/LandingPage/NavBar";
import Dashboard from "./Components/DashboardNav";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { NotFound } from "./Components/NotFound";
import jwt from "jsonwebtoken";
import PrivateRoute from "./Components/ProtectedRoute";
import { JwtPayload, jwtDecode } from "jwt-decode";
import Profile from "./Components/Profile";
import LandingPage from "./Components/LandingPage";

const App: React.FC = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const token = localStorage.getItem("carondemandToken");

  useEffect(() => {
    const checkTokenValidity = () => {
      try {
        if (token) {
          const decodedToken = jwtDecode(token);
          console.log("DECODED TOKEN", decodedToken);
          const isTokenExpired =
            decodedToken.exp && Date.now() / 1000 > decodedToken.exp;
          if (isTokenExpired) {
            localStorage.removeItem("carondemandToken");
          }
          setIsValidToken(!isTokenExpired);
        } else {
          setIsValidToken(false);
        }
      } catch (error) {
        console.error("Error checking token validity:", error);
        setIsValidToken(false);
      }
    };

    checkTokenValidity();
  }, [token]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/register" element={<SignUp />} />
          <Route path="/user/login" element={<SignIn />} />
          <Route
            path="/user/*"
            element={
              isValidToken ? (
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="profile" element={<Profile />} />
                </Routes>
              ) : (
                <Navigate to="/user/login" replace />
              )
            }
          />{" "}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
