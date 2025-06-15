import React, { useState } from "react";
import Header from "./Header";
import CandidateList from "./CandidateList";
import Shortlisted from "./Shortlisted";
import AboutUs from "./AboutUs";
import "./App.css";
import candidates from "./data"; // 👈 Add this

function App() {
  const [clientMode, setClientMode] = useState(false);
  const [availableCandidates, setAvailableCandidates] = useState(candidates);
  const [shortlisted, setShortlisted] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [experience, setExperience] = useState("All");

  // 🌙 Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <div
        className="hero-image-section"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="hero-image-overlay">
          <h1>WISSDA CONSULTING</h1>
          <p>India’s Trusted Tech Talent Recruitment Partner</p>
          <a href="#candidates" className="hero-btn">Browse Candidates</a>
        </div>
      </div>

      {/* 🧾 Main Content */}
      <div style={{ textAlign: "center" }}>
        <CandidateList
          candidates={availableCandidates}
          setCandidates={setAvailableCandidates}
          shortlisted={shortlisted}
          setShortlisted={setShortlisted}
          search={search}
          setSearch={setSearch}
          location={location}
          setLocation={setLocation}
          experience={experience}
          setExperience={setExperience}
        />
        

        <hr />

        <Shortlisted
          shortlisted={shortlisted}
          setShortlisted={setShortlisted}
          setCandidates={setAvailableCandidates} 
        />

      </div>

      <AboutUs />
    </div>
  );
}

export default App;
