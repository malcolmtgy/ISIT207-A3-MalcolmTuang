import React from 'react';
import {IoPawSharp} from 'react-icons/io5';

const Navigation = ({ setCurrentPage }) => (
  <nav className="nav">
    <div className="nav-container">
      <div className="nav-brand">
      <button onClick={() => setCurrentPage('home')} className="nav-brand">
        <IoPawSharp className="nav-icon" />
        <span>Pet Heaven</span>
      </button>
      </div>

      <div className="nav-links">
        <button onClick={() => setCurrentPage('aboutus')} className="nav-button">
          <span>About Us</span>
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