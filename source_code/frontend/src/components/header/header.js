import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/logo.webp';


const Header = () => {

    const toggleMenu = () => {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.toggle('open');
    };

    return (
        <header className="header">
        <div className="header-container">
            <div className="logo-container">
                <img src={logo} alt="DevConnect Logo" className="logo-image" />
            </div>
            <div className="nav-menu-btn" onClick={toggleMenu}>☰</div>
            <div className="nav-menu" id="navMenu">
                <ul>
                    <li><a href="#" className="link active">Home</a></li>
                </ul>
            </div>
            <div className="nav-button">
                <Link to="/signin" className="btn white-btn">Sign In</Link>
                <Link to="/signup" className="btn">Sign Up</Link>
           </div>
        </div>
    </header>
    );
};

export default Header;
