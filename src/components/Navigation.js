import React from 'react';
import { Home, Heart, UserPlus, SendHorizontal, PawPrint } from 'lucide-react';

const Navigation = ({ setCurrentPage }) => (
  <nav className="nav">
    <div className="nav-container">
      <div className="nav-brand">
        <PawPrint />
        <span>Pet Heaven</span>
      </div>
      <div className="nav-links">
        <button onClick={() => setCurrentPage('home')} className="nav-button">
          <Home />
          <span>Home</span>
        </button>
        <button onClick={() => setCurrentPage('pets')} className="nav-button">
          <Heart />
          <span>Available Pets</span>
        </button>
        <button onClick={() => setCurrentPage('register')} className="nav-button">
          <UserPlus />
          <span>Register</span>
        </button>
        <button onClick={() => setCurrentPage('release')} className="nav-button">
          <SendHorizontal />
          <span>Release Pet</span>
        </button>
      </div>
    </div>
  </nav>
);

export default Navigation;