import { Link } from "react-router-dom";
import "./navbar.scss";
import  "../.././data.ts" 
import { useState } from "react";
function Navbar() {
    const [activeButton, setActiveButton] = useState("home") 
    function setFilter(index : string) {
        setActiveButton(index)
    }

  return (
    
    <div className="navbarcontainer">
      <div className="logo">
        <span>Q.L</span>
      </div>
      <div className="nav-right">
        <div className="toggle">
          <span className="material-symbols-outlined">menu</span>
        </div>

        <div className="navbar-item-container">
          <Link to="/" className="navbar-home" onClick= {() => setFilter("home")} style={{
                       color: activeButton === "home" ? "rgb(2 82 205/1)": "rgb(111 116 167/1" ,
                       fontWeight: activeButton === "home" ? "600" : "400" }}> 
            <span className="material-symbols-outlined">home</span>
            <span className="home-text">Home</span>
          </Link>
          <Link to="/case-studies" className="navbar-casestudy" onClick= {() => setFilter("casestudy")} style={{
                        color: activeButton === "casestudy" ? "rgb(2 82 205/1)": "rgb(111 116 167/1" ,
                        fontWeight: activeButton === "casestudy" ? "600" : "400" }}>
            <span>Case Studies</span>
          </Link>
          <Link to="/case-studies" className="navbar-contactme" onClick= {() => setFilter("contact")} style={{
                        color: activeButton === "contact" ? "rgb(2 82 205/1)": "rgb(111 116 167/1" ,
                        fontWeight: activeButton === "contact" ? "600" : "400" }}>
            <span>Contact Me</span>
          </Link>
          <Link to="/" className="navbar-resume">
            <span className="material-symbols-outlined">download</span>
            <span>Resume</span>
          </Link>
        </div>
        <div className="navbar-theme">
          <button>
            <span className="material-symbols-outlined">light_mode</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
