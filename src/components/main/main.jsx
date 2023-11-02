import React, { useState } from 'react'
import Button from '../button/button';
import Navbar from '../navbar/navbar';
import Window from '../window/window';
import SliderEpets from '../sliderEpets/sliderEpets';
import FirstModel from '../SliderModels/widi';
import '../../css/main.css'
import { getAuth } from 'firebase/auth';
import appFirebase from '../../firebase/firebaseConfig.js'
import { getFirestore } from 'firebase/firestore';

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

function Main() {
    const handleClick = () => {
        alert('El botón fue clickeado');
    };

    return (
        <div className='main'>
            <Navbar/>
            <Window/>
            <Button text = "Escanear QR" onClick = { handleClick }/>
            <SliderEpets/>
        </div>
    );
}

export default Main;