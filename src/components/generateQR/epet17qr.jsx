import React from 'react';
import QRCode from 'qrcode.react';

function Epet17qr() {
    const qrData = ''
    return (
        <div>
            <QRCode value={qrData}/>
        </div>  
    );

}