import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Implement your login logic here
      console.log('Login clicked', { email, password });
    };
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input
            className="login-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <p className="login-register-link">
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
      </div>
    );
  };
  
  export default Login;
