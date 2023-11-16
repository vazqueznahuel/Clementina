import React, { useState, useRef, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = ({ onClose }) => {
  const [cameraActive, setCameraActive] = useState(true);
  const [facingMode, setFacingMode] = useState('environment');
  const qrReaderRef = useRef(null);

  const handleResult = (result) => {
    if (result) {
      console.log('Resultado del escaneo:', result);
      // Realizar acciones adicionales si es necesario
      // Aquí podrías decidir si deseas desactivar la cámara o realizar otras acciones
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

  const openCamera = () => {
    setCameraActive(true);
  };

  useEffect(() => {
    console.log('facingMode cambió:', facingMode);
    // Realizar acciones adicionales si es necesario
  }, [facingMode]);

  return (
    <div>
      {cameraActive ? (
        <div>
          <QrReader
            ref={qrReaderRef}
            delay={100}
            onError={handleError}
            onResult={handleResult}
            facingMode={facingMode}
            style={{ width: '100%' }}
          />
          <button onClick={toggleCamera}>Cambiar Cámara</button>
        </div>
      ) : (
        <button onClick={openCamera}>Abrir Cámara</button>
      )}
      <button onClick={onClose}>Cerrar cámara</button>
    </div>
  );
};

export default QRScanner;
