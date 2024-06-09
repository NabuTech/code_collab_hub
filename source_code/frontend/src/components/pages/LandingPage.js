// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import the styles

const LandingPage = () => {
  return (
    <div className="container">
      <h2 className="mt-5">Welcome to our Application</h2>
      <p>This is the landing page content.</p>
      <p>Please sign in or sign up to continue.</p>
      <div className="d-flex justify-content-center">
        <Link to="/signin" className="btn btn-primary me-3">Sign In</Link>
        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
      </div>
    </div>
  );
};

export default LandingPage;