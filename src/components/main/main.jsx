import React, { useState } from 'react'
import Button from '../button/button';
import Navbar from '../navbar/navbar';
import Window from '../window/window';
import '../../css/main.css'

function Main() {
    const handleClick = () => {
        alert('El botón fue clickeado');
    };

    return (
        <div className='main'>
            <Navbar/>
            <Window/>
            <Button text = "Escanear QR" onClick = { handleClick }/>
            <Button text = "Icon"onClick = { handleClick }/>
        </div>
    );
}

export default Main;