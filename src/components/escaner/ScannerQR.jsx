import React, { useState, useRef } from 'react';
import QrReader from 'react-qr-reader';

const QRScanner = ({ onScan }) => {
  const [cameraActive, setCameraActive] = useState(true);
  const [facingMode, setFacingMode] = useState('environment');
  const qrReaderRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      onScan(data);
      setCameraActive(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const toggleCamera = () => {
    setFacingMode((prevFacingMode) =>
      prevFacingMode === 'environment' ? 'user' : 'environment'
    );
  };

  const closeCamera = () => {
    setCameraActive(false);
  };

  return (
    <div>
      {cameraActive && (
        <div>
          <QrReader
            ref={qrReaderRef}
            delay={100}
            onError={handleError}
            onScan={handleScan}
            facingMode={facingMode}
            style={{ width: '100%' }}
            key={facingMode}
          />
          <button onClick={toggleCamera}>Cambiar Cámara</button>
        </div>
      )}
      <button onClick={closeCamera}>Cerrar cámara</button>
    </div>
  );
};

export default QRScanner;
