import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import QrReader from 'react-qr-scanner';

const QRScanner = React.forwardRef(({ onScan, onClose }, ref) => {
  const [cameraActive, setCameraActive] = useState(true);
  const [facingMode, setFacingMode] = useState('environment'); // 'environment' para la cámara trasera
  const videoRef = useRef();

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

  const restartCamera = () => {
    setCameraActive(true);
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
            ref={(node) => {
              videoRef.current = node;
              if (ref) {
                ref.current = node;
              }
            }}
          />
          <button onClick={toggleFacingMode}>Cambiar Cámara</button>
        </div>
      ) : (
        <Link to="/Main">
          <button onClick={restartCamera}>Cerrar cámara</button>
        </Link>
      )}
    </div>
  );
});

export default QRScanner;
