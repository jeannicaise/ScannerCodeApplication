
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage'; // Assure-toi que le chemin est correct
import GuestListPage from './GuestListPage'; // Assure-toi que le chemin est correct
import Header from './Header'; // Assure-toi que le chemin est correct
import Footer from './Footer'; // Assure-toi que le chemin est correct
import './App.css'

function App() {

  return (
    <Router>
    <div className="app">
      <Header />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guest-list" element={<GuestListPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  );
}

export default App
