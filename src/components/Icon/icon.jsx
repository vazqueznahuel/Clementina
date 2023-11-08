import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import img1 from '../../imagenes/coala.png'
import '../../css/sliderEpets.css'

function Icon({nombre, id}) {
    return (
        <div className='icon'>
            <div className="epets">
            <Link to={`/ModelSlider/${id}`} className="nav-epets">
          <div className='itemIcon'></div>
        </Link>
                <p className='nameEpets'>{nombre}</p>
            </div>
        </div>
    );
}

export default Icon;