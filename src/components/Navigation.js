import React, { useState } from 'react';
import { IoPawSharp } from 'react-icons/io5';
import { FiMenu, FiUser } from "react-icons/fi";

const Navigation = ({ loggedInUser, setLoggedInUser, setCurrentPage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('user');
    alert('You have been logged out.');
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Brand */}
        <div className="nav-brand">
          <button onClick={() => setCurrentPage('home')} className="nav-brand">
            <IoPawSharp className="nav-icon" />
            <span>Pet Heaven</span>
          </button>
        </div>

        {/* Links */}
        <div className="nav-links">
          <button onClick={() => setCurrentPage('aboutus')} className="nav-button">
            <span>About Us</span>
          </button>
          <button onClick={() => setCurrentPage('pets')} className="nav-button">
            <span>Available Pets</span>
          </button>
          <button onClick={() => setCurrentPage('release')} className="nav-button">
            <span>Release Pet</span>
          </button>
          <button onClick={() => setCurrentPage('donation')} className="nav-button">
            <span>Donation</span>
          </button>
        </div>

        {/* User Status with Dropdown */}
        <div className="user-status">
          <span> <FiUser/> {loggedInUser ? ` Welcome, ${loggedInUser}` : 'Not Logged In'}</span>
          <button 
            className="dropdown-toggle" 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-label="Toggle dropdown">
          <FiMenu />
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              {!loggedInUser ? (
                <>
                  <button 
                    onClick={() => { 
                      setCurrentPage('login'); 
                      setDropdownOpen(false); 
                    }} 
                    className="dropdown-item">
                    Login
                  </button>
                  <button 
                    onClick={() => { 
                      setCurrentPage('register'); 
                      setDropdownOpen(false); 
                    }} 
                    className="dropdown-item"
                  >
                    Register
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => { 
                    handleLogout(); 
                    setDropdownOpen(false); 
                  }} 
                  className="dropdown-item"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
