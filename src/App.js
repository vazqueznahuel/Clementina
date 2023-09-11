import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; // Importa collection y getDocs
import db from './firebase/firebaseConfig.js';
import './App.css';
import Form from './components/form/form.jsx';
import Home from './components/home/home.jsx';
import appFirebase from './firebase/firebaseConfig.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase);


function App() {

    const [ usuario, setUsuario ] = useState(null);

    onAuthStateChanged(auth, (usuarioFirebase)=> {
      if (usuarioFirebase){
        setUsuario(usuarioFirebase)
      }
      else{
        setUsuario(null)
      }
    })


  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email}/> : <Form/>}
    </div>
  );
}

export default App;
