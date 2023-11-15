// QRScanner.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QrReader from 'react-qr-scanner';

const QRScanner = ({ onScan, onClose }) => {
  const [cameraActive, setCameraActive] = useState(true);
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

  const getDeviceId = (devices) => {
    const rearCamera = devices.find((device) => device.label.includes('back'));
    return rearCamera ? rearCamera.deviceId : devices[0].deviceId;
  };

  const handleCameraStart = () => {
    if (videoRef.current && videoRef.current.stream) {
      // Asegurarnos de que el objeto stream esté definido antes de acceder a él
      const deviceId = getDeviceId(videoRef.current.stream.getTracks());
      videoRef.current.stream.getVideoTracks()[0].applyConstraints({ deviceId });
    }
  };

  useEffect(() => {
    if (videoRef.current && videoRef.current.stream) {
      handleCameraStart();
    }
  }, [videoRef.current]);

  return (
    <div>
      {cameraActive ? (
        <QrReader
          delay={100}
          style={{ width: '100%' }}
          onError={handleError}
          onScan={handleScan}
          videoConstraints={false} // Desactivar videoConstraints por ahora
          onLoad={handleCameraStart}
          ref={videoRef}
        />
      ) : null}
      <Link to="/Main">
        <button>Cerrar cámara</button>
      </Link>
    </div>
  );
};

export default QRScanner;