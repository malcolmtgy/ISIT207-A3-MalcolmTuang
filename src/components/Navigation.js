import React from 'react';

const Navigation = ({ setCurrentPage }) => (
  <nav className="nav">
    <div className="nav-container">
      <div className="nav-brand">
        <span>Pet Heaven</span>
      </div>
      <div className="nav-links">
        <button onClick={() => setCurrentPage('home')} className="nav-button">
          <span>Home</span>
        </button>
        <button onClick={() => setCurrentPage('pets')} className="nav-button">
          <span>Available Pets</span>
        </button>
        <button onClick={() => setCurrentPage('register')} className="nav-button">
          <span>Register</span>
        </button>
        <button onClick={() => setCurrentPage('release')} className="nav-button">
          <span>Release Pet</span>
        </button>
      </div>
    </div>
  </nav>
);

export default Navigation;