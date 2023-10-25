import React from 'react';
import imagen1 from '../../Imagenes/imagen1.jpeg';

function Window({ imagenUrl={imagen1}}) {
  return (
    <div className="window">
      <img src={imagen1} alt="Mascota E-pet" width={300} height={300} style={{borderRadius: '50%'}} />
    </div>
  );
}

export default Window;
