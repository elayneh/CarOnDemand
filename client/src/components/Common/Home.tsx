// src/App.tsx
import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import SignUp from "./Register";
import SignIn from "./Login";

const home: React.FC = () => {
  return (
    <div className="body-container">
      <h3>
        MERN stack application Home page with graphql, react-redux, redux-saga
      </h3>
      <nav>
        <ul>
          <li>
            <Link to="/register">SignUp</Link>
          </li>
          <li>
            <Link to="/login">SignIn</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Home;
