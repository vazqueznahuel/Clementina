import React, { useState } from 'react'
import imagen1 from '../../Imagenes/imagen1.jpeg';
import '../../css/sliderEpets.css'

function Icon() {
    return (
        <div className='icon'>
            <div className="epets">
                <a href="mascotas" className='nav-epets'><img className='img' src={imagen1}/></a>
                <p className='nameEpets'>Nombre de la mascota pertinente</p>
            </div>
        </div>
    );
}

export default Icon;