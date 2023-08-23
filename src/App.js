import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'; // Importa collection y getDocs
import db from './firebase/firebaseConfig.js';
import './App.css';
import Form from './components/form/form.jsx';

function App() {
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'usuarios')); // Usa collection aquí
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
