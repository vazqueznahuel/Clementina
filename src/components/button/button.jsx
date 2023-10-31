import React from 'react';
import '../../css/main.css'
function Button({ text, onClick }) {
    return (
        <div className='escanear'><button className='boton-escanear' onClick={onClick}>{text}</button> </div>
    );
}

export default Button;