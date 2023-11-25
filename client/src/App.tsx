import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import SignUp from "./components/Common/Register";
import SignIn from "./components/Common/Login";
import Footer from "./components/Common/Footer";
import NavBar from "./components/Common/NavBar";
import Dashboard from "./components/Common/DashboardNav";


const Home: React.FC = () => {
  return (
    <div className="body-container">
      <div className="nav-bar">
        {" "}
        <NavBar />
      </div>
      <h3>MERN APPLICATION </h3>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/user/register" element={<SignUp />} />
          <Route path="/user/login" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
