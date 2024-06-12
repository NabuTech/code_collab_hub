// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import developerIcon from '../../assets/images/developer.webp';
import projectIcon from '../../assets/images/project.webp';
import collaborationIcon from '../../assets/images/collaboration.webp';
import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main">
        <div className="hero-container">
          <div className="hero-image">
            <div className="hero-content">
              <h1 className="hero-header">
                <p>
                  <strong>Welcome to DevConnect</strong>
                </p>
              </h1>
              <hr />
              <div className="hero-text">
                <p>The Software Developer Hub</p>
                <hr />
                <p>Connect with other developers, showcase your projects, and find collaboration opportunities</p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-container">
          <h1 className="features-heading">
            <span><strong>What you get with DevConnect</strong></span>
          </h1>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="feature-box">
                <img src={developerIcon} alt="Developer" className="feature-image" />
                <h3 className="feature-title">Profile Management</h3>
                <p className="feature-text">Create and manage your developer profile with ease. Showcase your skills, expertise, and preferred programming languages to let others know about your strengths.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <img src={projectIcon} alt="Project" className="feature-image" />
                <h3 className="feature-title">Project Showcase</h3>
                <p className="feature-text">Showcase your coding projects in a visually appealing manner. Provide details about your projects, share code repositories, and highlight your achievements.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <img src={collaborationIcon} alt="Collaboration" className="feature-image" />
                <h3 className="feature-title">Collaboration Hub</h3>
                <p className="feature-text">Connect with other developers for collaborative projects. Find skilled individuals or projects that align with your interests. Build a network of like-minded developers to enhance your coding journey.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default LandingPage;