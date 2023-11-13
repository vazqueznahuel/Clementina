import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth'; // Correct import for getAuth
import { updateDoc, getDoc, doc, getFirestore } from 'firebase/firestore'; // Correct import for getFirestore
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';

import Navbar from '../navbar/navbar';
import Window from '../window/window';
import SliderEpets from '../sliderEpets/sliderEpets';
import Button from '../button/button';
import QRScannerPage from '../escaner/QRScannerPage.js'; // Importa el nuevo componente

import appFirebase from '../../firebase/firebaseConfig.js';

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);


function Main() {
  const [widi, setWidi] = useState(false);
  const [user, setUser] = useState(null);
  const [showScanner, setShowScanner] = useState(false);

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

  const handleScan = (data) => {
    // Manejar los datos escaneados aquí
    console.log('Datos escaneados:', data);
  };

  const openScanner = () => {
    setShowScanner(true);
  };

  const closeScanner = () => {
    setShowScanner(false);
  };

  return (
    <div className="main">
      <Navbar />
      <Window />
      {showScanner && <QRScannerPage onScan={handleScan} onClose={closeScanner} />}
      <Link to="/QRScannerPage">
        <div className='div-center'>
        <button className='button scanQR'>Escanear QR</button>
        </div>
      </Link>
      <SliderEpets />
    </div>
  );
}

export default Main;
