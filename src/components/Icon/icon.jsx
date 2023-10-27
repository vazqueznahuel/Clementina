import React, { useState } from 'react'
import imagen1 from '../../Imagenes/imagen1.jpeg';

function Icon() {
    return (
        <div className='icon'>
            <div className="epets">
                <a href="mascotas" className='nav-epets'><img src={imagen1} height={250} width={250}/></a>
                <p className='nameEpets'>Nombre de la mascota pertinente</p>
            </div>
        </div>
    );
}

export default Icon;