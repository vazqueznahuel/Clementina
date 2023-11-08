import React, { useState, useEffect } from 'react'
import Button from '../button/button';
import Navbar from '../navbar/navbar';
import Window from '../window/window';
import SliderEpets from '../sliderEpets/sliderEpets';
import '../../css/main.css'
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../../firebase/firebaseConfig.js'
import { getFirestore, updateDoc, getDoc, doc } from 'firebase/firestore';

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

function Main() {
    const handleClick = () => {
        alert('El botón fue clickeado');
    };

    const [widi, setWidi] = useState(false);
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        setUser(user);
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setWidi(docSnap.data().Widi);
          } else {
            console.log("No such document!");
          }
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    const toggleWidi = async () => {
      const newValue = !widi;
      setWidi(newValue);
  
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        Dozer: newValue
      });
    }

    return (
        <div className='main'>
            <Navbar/>
            <Window/>
            <Button text = "Escanear QR" onClick = { handleClick }/>
            <SliderEpets/>
            <button onClick={toggleWidi}>
                {widi ? 'Desactivar Widi' : 'Activar Widi'}
            </button>
        </div>
    );
}

export default Main;