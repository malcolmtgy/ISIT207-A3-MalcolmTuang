import React, { useState } from 'react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const hashPassword = (password) => {
    return btoa(password); // Simple Base64 encoding (not secure for production)
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (name && email && phone && password) {
      // Save user data in localStorage
      const user = {
        name,
        email,
        phone,
        password: hashPassword(password), // Save hashed password
      };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Registration successful!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="container fade-in">
      <div className="card form-container">
        <h2 className="card-title">Register as a Supporter</h2>
        <p className="card-description">Join our community and help make a difference</p>

        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              className="form-input" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-input" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              className="form-input" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="form-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button 
            className="button"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
