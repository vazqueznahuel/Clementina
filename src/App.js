import React, { useState } from 'react';
import ModelViewer from './components/ModelViewer';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);

  const modelPaths = [
    '/widiModelo.gltf',
    '/epet8.gltf',
    // Agrega más rutas de modelos 
  ];

  const modelPositions = [
    [0, -1, 0],
    [0, -1, 0],
    // Agrega más posiciones de modelos 
  ];

  const handleNextModel = () => {
    setPreviousIndex(currentIndex); 
    setCurrentIndex((prevIndex) => (prevIndex + 1) % modelPaths.length);
  };

  const handlePreviousModel = () => {
    if (previousIndex !== null) {
      setCurrentIndex(previousIndex); 
      setPreviousIndex((prevIndex) => (prevIndex - 1 + modelPaths.length) % modelPaths.length);
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
