import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

const QRScanner = () => {
  const videoRef = useRef(null);
  const [data, setData] = useState('No result');
  const [guest, setGuest] = useState(null);

  // Liste statique des invités
  const guests = [
    { id: '1', name: 'Alice Johnson', qrCode: 'alice123' },
    { id: '2', name: 'Bob Smith', qrCode: 'bob456' },
    { id: '3', name: 'Charlie Brown', qrCode: 'charlie789' },
    // Ajoute d'autres invités ici
  ];

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
      if (result) {
          // Met à jour les données scannées et vérifie l'invité
          setData(result.getText());
          const foundGuest = guests.find(g => g.qrCode === result.getText());
          setGuest(foundGuest ? foundGuest : null);
        console.log(result.getText());
      }
      if (err && !(err instanceof NotFoundException)) {
        console.error(err);
      }
    });

    return () => {
      codeReader.reset();
    };
  }, [guests]); // Ajout de guests pour mettre à jour l'effet si la liste change


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Scan the QR code</h2>
      <video ref={videoRef} style={{ width: '200px' }} />
      <p>Scanned Data: {data}</p>
      {guest ? (
        <p style={{ color: 'green' }}>Welcome, {guest.name}!</p>
      ) : (
        data !== 'No result' && <p style={{ color: 'red' }}>Guest not found.</p>
      )}
    </div>
  );
};

export default QRScanner;
