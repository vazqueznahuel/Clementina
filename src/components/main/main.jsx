import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, updateDoc, getDoc, doc } from 'firebase/firestore';
import QrReader from 'react-qr-scanner';
import QRCode from 'react-qr-code';
import '../../css/main.css';

import Navbar from '../navbar/navbar';
import Window from '../window/window';
import SliderEpets from '../sliderEpets/sliderEpets';
import Button from '../button/button';

import appFirebase from '../../firebase/firebaseConfig.js';

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

function Main() {
  const [widi, setWidi] = useState(false);
  const [user, setUser] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setWidi(docSnap.data().Widi);
        } else {
          console.log('No such document!');
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleWidi = async () => {
    const newValue = !widi;
    setWidi(newValue);

    const docRef = doc(db, 'users', user.uid);
    await updateDoc(docRef, {
      Widi: newValue,
    });
  };

  const handleScan = async (data) => {
    if (data) { // Verificar si se escaneó algo antes de actualizar
      const docRef = doc(db, 'users', user.uid);
      await updateDoc(docRef, {
        Widi: true,
      });
      console.log("seescanei")
      setCameraActive(false); // Desactivar la cámara después de escanear
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const startCamera = () => {
    setCameraActive(true);
  };

  const stopCamera = () => {
    setCameraActive(false);
  };

  const videoConstraints = {
    facingMode: 'environment', // Utiliza la cámara trasera (cambia a 'user' para la frontal)
  };

  return (
    <div className="main">
      <Navbar />
      <Window />
      {cameraActive ? (
        <QrReader
          delay={100}
          style={{ width: '100%' }}
          onError={handleError}
          onScan={handleScan}
          videoConstraints={videoConstraints}
        />
      ) : (
        <video
          autoPlay
          playsInline
          muted
          style={{ width: '100%', height: 'auto' }}
        ></video>
      )}
      <button onClick={startCamera}>Activar cámara</button>
      <button onClick={stopCamera}>Desactivar cámara</button>
      <SliderEpets />
      <button onClick={toggleWidi}>
        {widi ? 'Desactivar Widi' : 'Activar Widi'}
      </button>
      <QRCode value="Widi" />
    </div>
  );
}

export default Main;
