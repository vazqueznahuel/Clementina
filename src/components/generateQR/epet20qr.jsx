import React from 'react';
import QRCode from 'qrcode.react';

function Epet20qr() {
    const qrData = 'https://e-pets-clementina.netlify.app/ModelSlider/0'

        return (
            <div>
              <QRCode value={qrData}/>
            </div>
        );
}

export default Epet20qr;