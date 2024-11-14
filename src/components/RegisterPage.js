import React from 'react';

const RegisterPage = () => (
  <div className="container fade-in">
    <div className="card form-container">
      <h2 className="card-title">Register as a Supporter</h2>
      <p className="card-description">Join our community and help make a difference</p>
      
      <form>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input type="tel" className="form-input" />
        </div>
        <button 
          className="button"
          onClick={(e) => {
            e.preventDefault();
            alert('Thank you for registering!');
          }}
        >
          Register
        </button>
      </form>
    </div>
  </div>
);

export default RegisterPage;