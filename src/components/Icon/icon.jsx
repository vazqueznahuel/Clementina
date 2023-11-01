import React, { useState } from 'react'
import imagen1 from '../../imagenes/imagen1.jpeg'
import '../../css/sliderEpets.css'

function Icon({nombre}) {
    return (
        <div className='icon'>
            <div className="epets">
                <a href="mascotas" className='nav-epets'><img className='img' src={imagen1}/></a>
                <p className='nameEpets'>{nombre}</p>
            </div>
        </div>
    );
}

export default Icon;