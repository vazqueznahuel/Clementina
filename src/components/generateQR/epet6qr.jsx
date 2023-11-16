import React from 'react';
import QRCode from 'qrcode.react';

function Epet6qr() {

    return (
        <div>
            {/* Segunda instancia con opciones adicionales */}
            <QRCode
                value="Jeison"
                size={128}  // Tamaño en píxeles
                bgColor="#FFFFFF"  // Color de fondo
                fgColor="#000000"  // Color de primer plano
                level="L"  // Nivel de corrección de errores (L, M, Q, H)
                className='qr'
            />
        </div>
    );
}

export default Epet6qr;