import React from 'react';
import { useState, useEffect } from 'react';
import img1 from '../../Imagenes/img1.png'
import '../../css/main.css'
import Nav from '../nav/nav';
import { getAuth } from 'firebase/auth';
import appFirebase from '../../firebase/firebaseConfig.js'
import { doc, getDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

function Navbar() {
  const [user, setUser] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNombre(docSnap.data().nombre);
          setApellido(docSnap.data().apellido);
        } else {
          console.log("No such document!");
        }
      }
    });

    return () => unsubscribe();
  }, []);
  
  return (
    <nav className="navbar">
      <ul className="nav-list">
        
      <li className="nav-item">
          <Nav/>
        </li>
        <li><h1>E-Pets</h1></li>
      </ul>
    </nav>
  );
}

export default Navbar;