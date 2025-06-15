import React from "react";

const Shortlisted = ({ shortlisted, setShortlisted, setCandidates }) => {
  const handleRemove = (candidate) => {
    // Remove from shortlisted
    const updatedShortlist = shortlisted.filter((c) => c.id !== candidate.id);
    setShortlisted(updatedShortlist);

    // Add back to candidates
    setCandidates((prev) => [...prev, candidate]);
  };

  return (
    <div id="shortlisted">
      <h2>Shortlisted Candidates</h2>
      <div className="card-grid">
        {shortlisted.length > 0 ? (
          shortlisted.map((candidate) => (
            <div key={candidate.id} className="card">
              <img src={candidate.photo} alt={candidate.name} />
              <h3>{candidate.name}</h3>
              <p><b>Skills:</b> {candidate.skills.join(", ")}</p>
              <p><b>Experience:</b> {candidate.experience} years</p>
              <p><b>Location:</b> {candidate.location}</p>
              <button className="remove-btn" onClick={() => handleRemove(candidate)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No candidates shortlisted yet.</p>
        )}
      </div>
    </div>
  );
};

export default Shortlisted;
