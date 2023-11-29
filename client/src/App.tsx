import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Common/Register";
import SignIn from "./components/Common/Login";
import Footer from "./components/Common/Footer";
import NavBar from "./components/Common/NavBar";
import Dashboard from "./components/Common/DashboardNav";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { NotFound } from "./components/Common/NotFound";
import Logout from "./components/Common/Logout";

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
  const { loginCredential, loading, error } = useSelector(
    (state: RootState) => state.userAuthentication
  );
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/register" element={<SignUp />} />
          <Route path="/user/login" element={<SignIn />} />
          <Route path="/user/logout" element={<Dashboard />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
