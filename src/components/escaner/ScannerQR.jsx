import React, { useState, useRef, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = ({ onScan, onClose }) => {
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
    console.log('Nuevo facingMode:', facingMode);
  };

  useEffect(() => {
    console.log('facingMode cambió:', facingMode);
    // Realizar acciones adicionales si es necesario
  }, [facingMode]);

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
          />
          <button onClick={toggleCamera}>Cambiar Cámara</button>
        </div>
      )}
      <button onClick={onClose}>Cerrar cámara</button>
    </div>
  );
};

export default QRScanner;
