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

<QRCode
  value={qrData}
  size={128}  // Tamaño en píxeles
  bgColor="#FFFFFF"  // Color de fondo
  fgColor="#000000"  // Color de primer plano
  level="L"  // Nivel de corrección de errores (L, M, Q, H)
/>

export default Epet20qr;