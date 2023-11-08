import React, { useState, useEffect } from 'react';
import ModelViewer from './ModelViewer';
import Info from './modelDescription';
import infoMascota from './InfoMascota';
import { useParams } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import appFirebase from '../../firebase/firebaseConfig.js'
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

function ModelSlider() {
  const [user, setUser] = useState(null);
  const [widi, setWidi] = useState("");
  const [calamaria, setCalamaria] = useState("");
  const [dozer, setDozer] = useState("");
  const [jeison, setJeison] = useState("");
  const [recipablo, setRecipablo] = useState("");
  const [gato, setGato] = useState("");
  const [anguila, setAnguila] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setWidi(docSnap.data().Widi);
          setCalamaria(docSnap.data().Calamaria);
          setDozer(docSnap.data().Dozer);
          setJeison(docSnap.data().Jeison);
          setRecipablo(docSnap.data().Recipablo);
          setGato(docSnap.data().Gato);
          setAnguila(docSnap.data().Anguila);
        } else {
          console.log("No such document!");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const {id} = useParams();
  const modelPosition = parseInt(id, 10);
  const mascota = infoMascota(widi, calamaria, dozer, jeison, recipablo, gato, anguila);
  const numModels = mascota.length;
  const [sliderPosition, setSliderPosition] = useState(modelPosition);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(modelPosition);

  const movementLimit = 1 / numModels;

  useEffect(() => {
    // Actualizar el sliderPosition y currentInfoIndex cuando modelPosition cambia
    setSliderPosition(modelPosition);
    setCurrentInfoIndex(modelPosition);
  }, [modelPosition]);

  const handlePrevClick = () => {
    if (currentInfoIndex > 0) {
      setSliderPosition(currentInfoIndex - 1);
      setCurrentInfoIndex(currentInfoIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentInfoIndex < numModels - 1) {
      setSliderPosition(currentInfoIndex + 1);
      setCurrentInfoIndex(currentInfoIndex + 1);
    }
  };

  const getModelViewerStyle = {
    transform: `translateX(-${sliderPosition * (100 / numModels)}%)`,
    transition: 'transform 0.5s ease-in-out',
    display: 'flex',
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <div className="model-viewer-slider" style={{ display: 'flex', width: `${numModels * 100}%`, ...getModelViewerStyle }}>
        {mascota.map((model, index) => (
          <ModelViewer key={index} modelo={model.route} unlockState={model.unlock} />
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={handlePrevClick} disabled={currentInfoIndex === 0}>Anterior</button>
        <button onClick={handleNextClick} disabled={currentInfoIndex === numModels - 1}>Siguiente</button>
      </div>
      <Info
        title={mascota[currentInfoIndex].title}
        school={mascota[currentInfoIndex].school}
        description={mascota[currentInfoIndex].description}
        unlockState={mascota[currentInfoIndex].unlock}
      />
    </div>
  );
}

export default ModelSlider;
