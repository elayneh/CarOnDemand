import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Common/Register";
import SignIn from "./components/Common/Login";
import { Footer } from "./components/Common/Footer";
import NavBar from "./components/Common/NavBar";
import Dashboard from "./components/Common/DashboardNav";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { NotFound } from "./components/Common/NotFound";
import jwt from "jsonwebtoken";
import PrivateRoute from "./components/Common/ProtectedRoute";
import { JwtPayload, jwtDecode } from "jwt-decode";

const Home: React.FC = () => {
  return (
    <div className="body-container">
      <div className="nav-bar">
        <NavBar />
      </div>
      <h3>MERN APPLICATION</h3>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  let isValidToken: number | undefined | boolean = false;

  useEffect(() => {
    try {
      const getToken = (): string | null => {
        return localStorage.getItem("carondemandToken");
      };

      // Get the token from localStorage
      const token = getToken();
      if (token) {
        const decodedToken: JwtPayload = jwtDecode(token);
        const isTokenExpired = !(
          decodedToken?.exp && Math.floor(Date.now() / 1000) < decodedToken.exp
        );
        isTokenExpired ? isValidToken : (isValidToken = true);
      }
    } catch (error) {
      console.error("Error checking token validity:", error);
    }
    console.log("Token Status: ", isValidToken); // Move the logging inside useEffect
  }, []);
  console.log("Token Status: ", isValidToken); // Move the logging inside useEffect

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={isLoggedIn ? <Dashboard /> : <Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/user/register" element={<SignUp />} />
          <Route path="/user/login" element={<SignIn />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          {/* Use PrivateRoute for the protected route */}
          {/* <PrivateRoute path="/user/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
