import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QrReader from 'react-qr-scanner';

const QRScanner = ({ onScan, onClose }) => {
  const [cameraActive, setCameraActive] = useState(true);
  const [facingMode, setFacingMode] = useState('environment');
  const qrReaderRef = useRef(null);

  useEffect(() => {
    if (qrReaderRef.current) {
      qrReaderRef.current.openImageDialog();
    }
  }, [qrReaderRef]);

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

  return (
    <div>
      {cameraActive ? (
        <div>
          <QrReader
            ref={qrReaderRef}
            delay={100}
            style={{ width: '100%' }}
            onError={handleError}
            onScan={handleScan}
            videoConstraints={{ facingMode }}
          />
          <button onClick={toggleCamera}>Cambiar Cámara</button>
        </div>
      ) : null}
      <Link to="/Main">
        <button>Cerrar cámara</button>
      </Link>
    </div>
  );
};

export default QRScanner;