import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QrReader from 'react-qr-scanner';

const QRScanner = ({ onScan, onClose }) => {
  const [cameraActive, setCameraActive] = useState(true);
  const [facingMode, setFacingMode] = useState('environment'); // 'environment' para la cámara trasera

  const handleScan = (data) => {
    if (data) {
      onScan(data);
      setCameraActive(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const toggleFacingMode = () => {
    setFacingMode((prevFacingMode) =>
      prevFacingMode === 'user' ? 'environment' : 'user'
    );
  };

  const videoConstraints = {
    facingMode,
  };

  return (
    <div>
      {cameraActive ? (
        <div>
          <QrReader
            delay={100}
            style={{ width: '100%' }}
            onError={handleError}
            onScan={handleScan}
            videoConstraints={videoConstraints}
          />
          <button onClick={toggleFacingMode}>Cambiar Cámara</button>
        </div>
      ) : null}
      <Link to="/Main">
        <button>Cerrar cámara</button>
      </Link>
    </div>
  );
};

export default QRScanner;
