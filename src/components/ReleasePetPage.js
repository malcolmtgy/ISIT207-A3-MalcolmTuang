import React from 'react';

const ReleasePetPage = () => (
  <div className="container fade-in">
    <div className="card form-container">
      <h2 className="card-title">Release a Pet</h2>
      <p className="card-description">Please provide details about the pet you wish to release</p>
      
      <form>
        <div className="form-group">
          <label className="form-label">Pet Name</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Pet Type</label>
          <select className="form-input">
            <option>Dog</option>
            <option>Cat</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Age</label>
          <input type="number" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Reason for Release</label>
          <textarea className="form-textarea"></textarea>
        </div>
        <button 
          className="button"
          onClick={(e) => {
            e.preventDefault();
            alert('Submission successful!');
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  </div>
);

export default ReleasePetPage;