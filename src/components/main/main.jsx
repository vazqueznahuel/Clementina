import React, { useState } from 'react'
import Button from './Button';

function App() {
    const handleClick = () => {
        alert('El botón fue clickeado');
    };

    return (
        <div><h1> My React App </h1>
        <Button text = "Haz clic en mí" onClick = { handleClick }/> </div>
    );
}

export default App;