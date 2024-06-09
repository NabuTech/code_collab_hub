// Dashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the styles

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic if needed
    // For now, just navigate to the landing page
    navigate('/');
  };

  return (
    <div className="container">
      <h2 className="mt-5">Dashboard</h2>
      <p className="lead">You are logged in as Default User</p>
      <button className="btn btn-danger" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
