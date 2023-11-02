import React from 'react';
import img1 from '../../imagenes/img1.png'
import '../../css/main.css'

function Window({ imagenUrl={img1}}) {
  return (
    <div className="window">
      <img className='mascota' src={img1} alt="Mascota E-pet" width={300} height={300} style={{borderRadius: '50%'}} />
    </div>
  );
}

export default Window;
