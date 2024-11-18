import React, { useState } from 'react';

const LoginPage = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hashPassword = (password) => {
    return btoa(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === hashPassword(password)) {
      setLoggedInUser(storedUser.name);
      alert('Login successful!');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="container fade-in">
      <div className="card form-container">
        <h2 className="card-title">Login</h2>

        <form>
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
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
