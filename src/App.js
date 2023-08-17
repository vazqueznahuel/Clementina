import React, { useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore/lite'; // Importa 'collection' desde 'firebase/firestore/lite'
import db from './firebase/firebaseConfig.js'; // Importa 'db' desde el archivo de configuración

import './App.css';
import Form from './components/form/form.jsx';

function App() {
  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection('usuarios', db));
      console.log(datos.docs[0].data(data));
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
