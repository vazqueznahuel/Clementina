import React, { useState } from 'react'
import Button from '../button/button';
import navbar from '../navbar/navbar';

function Main() {
    const handleClick = () => {
        alert('El botón fue clickeado');
    };

    return (
        <div>
        <Button text = "Haz clic en mí" onClick = { handleClick }/>
        </div>
    );
}

export default Main;