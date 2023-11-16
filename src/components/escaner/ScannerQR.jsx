import React, { useState, useRef, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged
import { updateDoc, doc, getFirestore, getDoc } from 'firebase/firestore';
import appFirebase from '../../firebase/firebaseConfig.js';

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const QRScanner = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [facingMode, setFacingMode] = useState('environment');
  const [user, setUser] = useState(null);
  const qrReaderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Agrega un listener para detectar cambios en la autenticación
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    // Limpia el listener al desmontar el componente
    return () => unsubscribe();
  }, []);

  const handleResult = async (result) => {
    if (result && user) {
      try {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);


        if (result=="Widi"){
          
        if (docSnap.exists()) {
          await updateDoc(docRef, {
            Widi: true,
          });
        }
        setCameraActive(false);
        navigate("/ModelSlider/0");
      }

        if (result=="Calamaria"){
          
          if (docSnap.exists()) {
            await updateDoc(docRef, {
              Calamaria: true,
            });
  
          }
          // Realizar acciones adicionales si es necesario
          // Aquí podrías decidir si deseas desactivar la cámara o realizar otras acciones
          setCameraActive(false);
          navigate("/ModelSlider/1");
        }

        if (result=="Dozer"){
          
          if (docSnap.exists()) {
            await updateDoc(docRef, {
              Dozer: true,
            });
          }
          setCameraActive(false);
          navigate("/ModelSlider/2");
        }

        if (result=="Jeison"){
          
          if (docSnap.exists()) {
            await updateDoc(docRef, {
              Jeison: true,
            });
          }
          setCameraActive(false);
          navigate("/ModelSlider/3");
        }

        if (result=="Recipablo"){
          
          if (docSnap.exists()) {
            await updateDoc(docRef, {
              Recipablo: true,
            });
          }
          setCameraActive(false);
          navigate("/ModelSlider/4");
        }

        if (result=="Gato"){
          
          if (docSnap.exists()) {
            await updateDoc(docRef, {
              Gato: true,
            });
          }
          setCameraActive(false);
          navigate("/ModelSlider/5");
        }

        if (result=="Anguila"){
          
          if (docSnap.exists()) {
            await updateDoc(docRef, {
              Anguila: true,
            });
          }
          setCameraActive(false);
          navigate("/ModelSlider/6");
        }


      } catch (error) {
        console.error("Error al actualizar el documento:", error);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const toggleCamera = () => {
    setFacingMode((prevFacingMode) =>
      prevFacingMode === 'environment' ? 'user' : 'environment'
    );
  };

  const closeCamera = () => {
    setCameraActive(false);
  };

  const openCamera = () => {
    setCameraActive(true);
  };

  useEffect(() => {
    console.log('facingMode cambió:', facingMode);
    // Realizar acciones adicionales si es necesario
  }, [facingMode]);

  return (
    <div>
      {cameraActive ? (
        <div>
          <QrReader
            ref={qrReaderRef}
            delay={100}
            onError={handleError}
            onResult={handleResult}
            facingMode={facingMode}
            style={{ width: '100%' }}
          />
          <button onClick={toggleCamera}>Cambiar Cámara</button>
          <button onClick={closeCamera}>Cerrar Cámara</button>
        </div>
      ) : (
        <button onClick={openCamera}>Abrir Cámara</button>
      )}
    </div>
  );
};

export default QRScanner;
