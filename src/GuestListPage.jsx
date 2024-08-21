import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GuestListPage.css';

const GuestListPage = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        // Utilisation d'axios pour faire la requête GET
        const response = await axios.get('http://localhost:5001/api/guests');
        setGuests(response.data); 
        console.log(response.data)// `response.data` contient les données retournées par l'API
      } catch (error) {
        console.error('Failed to fetch guests:', error);
        setError('Failed to load guest list. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="guest-list">
      <h1 className="guest-list__title">Guest List</h1>
      <ul className="guest-list__list">
        {guests.map(guest => (
          <li key={guest.id} className="guest-list__item">
            <div className="guest-list__header">
              <span className="guest-list__name">{guest.name}</span>
            </div>
            <div className="guest-list__details">
              <p><strong>QR Code:</strong> {guest.qrCode}</p>
              <p><strong>Scanned At:</strong> {guest.scannedAt ? new Date(guest.scannedAt).toLocaleString() : 'Not scanned yet'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestListPage;
