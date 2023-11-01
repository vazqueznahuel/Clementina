import React, { useState } from 'react'
import Button from '../button/button';
import Navbar from '../navbar/navbar';
import Window from '../window/window';
import '../../css/main.css'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import appFirebase from '../../firebase/firebaseConfig.js'
const auth = getAuth(appFirebase);


function Main() {
    const handleClick = () => {
        alert('El botón fue clickeado');
    };

    return (
        <div className='main'>
            <button onClick={() => {
                    signOut(auth);
                }}>Cerrar Sesion</button>
            <Navbar/>
            <Window/>
            <Button text = "Escanear QR" onClick = { handleClick }/>
        </div>
    );
}

export default Main;