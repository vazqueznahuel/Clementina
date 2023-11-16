import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QrReader from 'react-qr-scanner';

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
    alert(`Cámara cambiada a ${facingMode === 'environment' ? 'frontal' : 'trasera'}`);
  };

  const openDialog = () => {
    if (qrReaderRef.current) {
      const imageDialogFunction = qrReaderRef.current.openImageDialog;
      if (imageDialogFunction && typeof imageDialogFunction === 'function') {
        imageDialogFunction();
      } else {
        console.error('La función openImageDialog no está disponible');
      }
    }
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
          <button onClick={openDialog}>Abrir Diálogo</button>
        </div>
      ) : null}
      <Link to="/Main">
        <button>Cerrar cámara</button>
      </Link>
    </div>
  );
};

export default QRScanner;
