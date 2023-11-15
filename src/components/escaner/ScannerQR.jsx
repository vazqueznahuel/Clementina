import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QrReader from 'react-qr-scanner';

const QRScanner = ({ onScan, onClose }) => {
  const [cameraActive, setCameraActive] = useState(true);
  const [facingMode, setFacingMode] = useState('environment'); // 'environment' para la cámara trasera
  const [key, setKey] = useState(Math.random()); // Agregamos un nuevo estado para la clave
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
    setKey(Math.random()); // Actualizamos la clave para forzar el desmontaje y montaje del componente
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
            key={key} // Usamos la clave aquí
            delay={100}
            style={{ width: '100%' }}
            onError={handleError}
            onScan={handleScan}
            videoConstraints={videoConstraints}
            ref={videoRef}
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
};

export default QRScanner;
