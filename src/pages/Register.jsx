import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Implement your registration logic here
    console.log("Register clicked", { name, email, password });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <label>Name:</label>
        <input
          className="register-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          className="register-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          className="register-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="register-button"
          type="button"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
      <p className="register-login-link">
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default Register;
