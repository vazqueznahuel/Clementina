import React, { useState } from 'react'
import Button from '../button/button';
import Navbar from '../navbar/navbar';

function Main() {
    const handleClick = () => {
        alert('El botón fue clickeado');
    };

    return (
        <div>
            <Navbar/>
            <Button text = "Haz clic en mí" onClick = { handleClick }/>
        </div>
    );
}

export default Main;