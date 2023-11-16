import React, { useState, useRef } from 'react';
import QrReader from 'react-qr-scanner';

const QRScanner = () => {
  const [cameraFacingMode, setCameraFacingMode] = useState('environment'); // 'environment' para la cámara trasera
  const [cameraActive, setCameraActive] = useState(true);
  const videoRef = useRef();

  const handleScan = (data) => {
    if (data) {
      console.log('Código QR escaneado:', data);
      // Lógica para manejar el código QR escaneado
    }
  };

  const handleError = (err) => {
    console.error('Error al escanear código QR:', err);
  };

  const toggleCameraFacingMode = () => {
    setCameraFacingMode((prevFacingMode) =>
      prevFacingMode === 'user' ? 'environment' : 'user'
    );
  };

  const restartCamera = () => {
    setCameraActive(true);
  };

  return (
    <div>
      {cameraActive && (
        <div>
          <QrReader
            delay={100}
            style={{ width: '100%' }}
            onError={handleError}
            onScan={handleScan}
            videoConstraints={{ facingMode: cameraFacingMode }}
            ref={(node) => {
              videoRef.current = node;
            }}
          />
          <button onClick={toggleCameraFacingMode}>Cambiar Cámara</button>
        </div>
      )}
      {!cameraActive && (
        <button onClick={restartCamera}>Reiniciar Cámara</button>
      )}
    </div>
  );
};

export default QRScanner;
