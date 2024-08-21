import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assure-toi que le chemin est correct

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Guest List Scanner</h1>
        <nav className="header__nav">
          <Link to="/" className="header__link">Home</Link>
          <Link to="/guest-list" className="header__link">Guest List</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
