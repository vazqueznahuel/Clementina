// QRScanner.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QrReader from 'react-qr-scanner';

const QRScanner = ({ onScan, onClose }) => {
  const [cameraActive, setCameraActive] = useState(true);

  const handleScan = (data) => {
    if (data) {
      onScan(data);
      setCameraActive(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const videoConstraints = {
    facingMode: 'environment',
  };

  return (
    <div>
      {cameraActive ? (
        <QrReader
          delay={100}
          style={{ width: '100%' }}
          onError={handleError}
          onScan={handleScan}
          videoConstraints={videoConstraints}
        />
      ) : null}
      <Link to="/Main">
        <button>Cerrar cámara</button>
      </Link>
    </div>
  );
};

export default QRScanner;
