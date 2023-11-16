import React from 'react';
import QRCode from 'qrcode.react';

function Epet14qr() {
    const qrData = ''
    return (
        <div>
            <QRCode value={qrData}/>
        </div>
    );

}