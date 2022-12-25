import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"
import './App.css';
import Dashboard from "./ValidationForm/Dashboard";
import SignUp from "./ValidationForm/SignUp";

function App() {
  const [SignupColor, setSignupColor] = useState("")
  const [DashboardColor, setDashboardColor] = useState("")

  function signupColor() {
    setSignupColor("rgb(244, 8, 8)")
    setDashboardColor("white")
  }

  function dashboardColor() {
    setDashboardColor("rgb(244, 8, 8)")
    setSignupColor("white")
  }
  
  return (
    <div className="App">
      <nav>
        <Link to="/" style={{ color: SignupColor }} className="Link" onClick={() => {
          signupColor()
        }}>SignUp</Link>
        <Link to="/Dashboard" style={{ color: DashboardColor }} className="Link" onClick={() => {
          dashboardColor()
        }}>Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
