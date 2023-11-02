import React, { useState } from 'react'
import img1 from '../../imagenes/imagen1.jpeg'
import '../../css/sliderEpets.css'

function Icon({nombre}) {
    return (
        <div className='icon'>
            <div className="epets">
                <a href={nombre} className='nav-epets'><img className='img' src={img1}/></a>
                <p className='nameEpets'>{nombre}</p>
            </div>
        </div>
    );
}

export default Icon;