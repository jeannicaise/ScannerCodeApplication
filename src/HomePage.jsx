import React from 'react';
import QRScanner from './QRScanner'; // Assure-toi que le chemin est correct
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page home">
      <div className="home__content">
        <h1 className="home__title">Scan Your QR Code</h1>
        <QRScanner />
      </div>
    </div>
  );
};

export default HomePage;
