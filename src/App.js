import React, { useState, useEffect } from 'react';
import ModelViewer from './components/ModelViewer';

function App() {
  const modelPaths = [
    '/widiModelo.gltf',
    '/epet8.gltf',
    '/epet5.gltf'
    // Agrega más rutas de modelos 
  ];

  const modelPositions = [
    [0, -1, 0],
    [0, -1, 0],
    [0, -1, 0]
    // Agrega más posiciones de modelos 
  ];

  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const loadModels = async () => {
    const modelPromises = modelPaths.map(async (path) => {
      const response = await fetch(path);
      const modelData = await response.arrayBuffer();
      // Aquí puedes cargar el modelo en tu visor 3D o realizar cualquier otra operación necesaria
    });

    await Promise.all(modelPromises);
    setModelsLoaded(true);
  };

  useEffect(() => {
    loadModels();
  }, []);

  const handleNextModel = () => {
    if (modelsLoaded) {
      console.log("Siguiente Modelo:", modelPaths[currentIndex]); // Imprime la ruta del modelo
      setCurrentIndex((prevIndex) => (prevIndex + 1) % modelPaths.length);
    } else {
      console.log("Los modelos aún se están cargando. Por favor, espera...");
    }
  };

  const handlePreviousModel = () => {
    if (modelsLoaded) {
      console.log("Modelo Anterior:", modelPaths[currentIndex]); // Imprime la ruta del modelo
      setCurrentIndex((prevIndex) => (prevIndex - 1 + modelPaths.length) % modelPaths.length);
    } else {
      console.log("Los modelos aún se están cargando. Por favor, espera...");
    }
  };

  return (
    <div>
      <div style={{ height: '70vh', overflow: 'hidden' }}>
        <ModelViewer modelo={modelPaths[currentIndex]} modelPosition={modelPositions[currentIndex]} />
      </div>
      <button onClick={handlePreviousModel}>Modelo Anterior</button>
      <button onClick={handleNextModel}>Siguiente Modelo</button>
    </div>
  );
}

export default App;
