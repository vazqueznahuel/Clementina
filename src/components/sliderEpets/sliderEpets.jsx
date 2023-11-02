import React, { useState } from 'react'
import Icon from '../Icon/icon'
import '../../css/sliderEpets.css'
import infoMascota from '../SliderModels/InfoMascota';

function SliderEpets() {
    const mascota = infoMascota();
    return (
        <div className='sliderEpet'>
            {mascota.map((mascota, index) => (
                    <Icon key={index} nombre={mascota.title} id={mascota.id}/>
                ))}
        </div>
    );
}

export default SliderEpets;