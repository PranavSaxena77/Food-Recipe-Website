import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Icons for added touch

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} 
      style={{
        padding: '20px', 
        background: 'rgba(255, 248, 240, 0.9)', 
        maxWidth: '400px', 
        margin: 'auto', 
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Georgia, serif',
      }}
    >
      <h2 className="text-center mb-4" 
        style={{ color: '#D2691E', fontFamily: 'Brush Script MT, cursive', fontSize: '28px' }}
      >
        Welcome Back to <span style={{ fontStyle: 'italic' }}>Indian Bites</span>!
      </h2>
      <div className="mb-3">
        <label className="form-label" style={{ fontWeight: '500' }}>Email Address</label>
        <div className="input-group">
          <span className="input-group-text"><FaEnvelope color="#D2691E" /></span>
          <input
            type="email"
            className="form-control"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              borderRadius: '5px',
              backgroundColor: '#fffaf0',
              border: '1px solid #D2691E',
            }}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label" style={{ fontWeight: '500' }}>Password</label>
        <div className="input-group">
          <span className="input-group-text"><FaLock color="#D2691E" /></span>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              borderRadius: '5px',
              backgroundColor: '#fffaf0',
              border: '1px solid #D2691E',
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn w-100"
        style={{
          borderRadius: '5px', 
          padding: '10px', 
          fontWeight: 'bold', 
          backgroundColor: '#D2691E', 
          color: '#fff'
        }}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
