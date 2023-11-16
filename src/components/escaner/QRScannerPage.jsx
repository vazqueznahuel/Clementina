// QRScannerPage.js
import React from 'react';
import QRScanner from './ScannerQR'; // Asegúrate de ajustar la ruta según tu estructura de archivos


const QRScannerPage = ({ onScan, onClose }) => {
    return ( 
        <div >
        <QRScanner onScan = { onScan } onClose = { onClose }/> 
        </div >
    );
};

export default QRScannerPage;