// SignUpPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import the styles

const SignUpPage = () => {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" name="email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input type="password" className="form-control" id="password" name="password" required />
      </div>
      {/* Replace the submit button with a Link to the Dashboard */}
      <Link to="/dashboard" className="btn btn-primary">Sign Up</Link>
      <p className="mt-3">Already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
};

export default SignUpPage;