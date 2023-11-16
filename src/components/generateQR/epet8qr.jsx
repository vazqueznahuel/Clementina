import React from 'react';
import QRCode from 'qrcode.react';

function Epet8qr() {
    const qrData = ''
    return (
        <div>
            <QRCode value={qrData}/>
        </div>
    );
}
export default Epet8qr;