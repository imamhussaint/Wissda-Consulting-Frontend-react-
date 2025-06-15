import React, { useState } from "react";
import Modal from "react-modal";

const CandidateList = ({
  candidates,
  setCandidates,
  shortlisted,
  setShortlisted,
  search,
  setSearch,
  location,
  setLocation,
  experience,
  setExperience,
  clientMode
}) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // Filter logic
  const filteredCandidates = candidates.filter((candidate) => {
    const matchName = candidate.name?.toLowerCase().includes(search.toLowerCase());
    const matchLocation = location === "All" || candidate.location === location;
    const matchExperience =
      experience === "All" || candidate.experience >= parseInt(experience);
    return matchName && matchLocation && matchExperience;
  });

  // Unique locations for dropdown
  const uniqueLocations = ["All", ...new Set(candidates.map((c) => c.location))];

  // Handle shortlist
  const handleShortlist = (candidate) => {
    if (!shortlisted.find((c) => c.id === candidate.id)) {
      setShortlisted([...shortlisted, candidate]);
      const updated = candidates.filter((c) => c.id !== candidate.id);
      setCandidates(updated);
    }
  };

  return (
    <div id="candidates">
      <h2>All Candidates</h2>

      {/* Search & Filters */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="filters">
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="filter-select">
          {uniqueLocations.map((loc, index) => (
            <option key={index} value={loc}>{loc}</option>
          ))}
        </select>

        <select value={experience} onChange={(e) => setExperience(e.target.value)} className="filter-select">
          <option value="All">Any Experience</option>
          <option value="1">1+ Years</option>
          <option value="2">2+ Years</option>
          <option value="3">3+ Years</option>
          <option value="4">4+ Years</option>
        </select>
      </div>

      {/* Candidate Grid */}
      <div className="card-grid">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate) => (
            <div
              key={candidate.id}
              className="card"
              onClick={() => setSelectedCandidate(candidate)}
            >
              <img src={candidate.photo} alt={candidate.name} />
              <h3>{candidate.name}</h3>
              <p><b>Skills:</b> {candidate.skills.join(", ")}</p>
              <p><b>Experience:</b> {candidate.experience} years</p>
              <p><b>Location:</b> {candidate.location}</p>
              {!clientMode && (
                <button className="shortlist-btn" onClick={(e) => {
                  e.stopPropagation(); // prevent modal
                  handleShortlist(candidate);
                }}>
                  Shortlist
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No matching candidates found.</p>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedCandidate}
        onRequestClose={() => setSelectedCandidate(null)}
        contentLabel="Candidate Profile"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedCandidate && (
          <div>
            <h2>{selectedCandidate.name}</h2>
            <img src={selectedCandidate.photo} alt={selectedCandidate.name} style={{ width: "150px", borderRadius: "50%" }} />
            <p><b>Skills:</b> {selectedCandidate.skills.join(", ")}</p>
            <p><b>Experience:</b> {selectedCandidate.experience} years</p>
            <p><b>Location:</b> {selectedCandidate.location}</p>
            <button className="remove-btn" onClick={() => setSelectedCandidate(null)}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CandidateList;
