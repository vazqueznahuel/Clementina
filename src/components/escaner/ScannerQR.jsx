import React, { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader'; // Asegúrate de usar { QrReader } en lugar de simplemente 'QrReader'

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
      qrReaderRef.current.openImageDialog();
    }
  };

  return (
    <div>
      {cameraActive ? (
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
          <button onClick={openDialog}>Abrir Diálogo</button>
        </div>
      ) : null}
      <button onClick={onClose}>Cerrar cámara</button>
    </div>
  );
};

export default QRScanner;