import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import SignUp from "./components/Common/Register";
import SignIn from "./components/Common/Login";
import Footer from "./components/Common/Footer";
import NavBar from "./components/Common/Nav";

const Home: React.FC = () => {
  return (
    <div className="body-container">
      <div className="nav-bar">
        {" "}
        <NavBar />
      </div>
      <h3>MERN APPLICATION </h3>
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="/register">SignUp</Link>
          </li>
          <li>
            <Link to="/login">SignIn</Link>
          </li>
        </ul>
      </nav>
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
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
