import React from "react";
const Header = ({ darkMode, toggleDarkMode }) => {

  return (
    <div className="header">
      <button
        className="toggle-btn"
        onClick={toggleDarkMode} // passed as prop
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1 className="title">WISSDA CONSULTING PVT LTD</h1>
      <nav className="nav">
        <a href="#home" className="link">Home</a>
        <a href="#candidates" className="link">Candidates</a>
        <a href="#shortlisted" className="link">Shortlisted</a>
        <a href="#about" className="link">About Us</a>
      </nav>
    </div>
  );
};

export default Header;
