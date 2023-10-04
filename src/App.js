import React, { useState } from 'react';
import ModelViewer from './components/ModelViewer';
import Info from './components/modelDescription';

function App() {
  const info = [
    {
      title: 'Wi-di',
      school: 'EPET 20',
      description: 'Este es la mascota de la epet 20, te dice hola como estas, es cacheton'
    },
    {
      title: 'Calamaria',
      school: 'EPET 5',
      description: 'Es tecnica quimica, es de la epet 5 y es una calamar'
    },
    {
      title: 'Dozer',
      school: 'EPET 8',
      description: 'Este conejo se hizo un robot para que no le duela el brazo de llevar el tablero y ahora le duele la espalda, es de la epet 8'
    }
  ];

  const [sliderPosition, setSliderPosition] = useState(0);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  const maxSliderPosition = 3; // Cambia esto según la cantidad de modelos que tengas
  const sliderLimit = 0.66666666;
  const movementLimit = 0.33333333;

  const handlePrevClick = () => {
    if (sliderPosition > 0) {
      setSliderPosition(sliderPosition - movementLimit);
      setCurrentInfoIndex(currentInfoIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (sliderPosition < sliderLimit) {
      setSliderPosition(sliderPosition + movementLimit);
      setCurrentInfoIndex(currentInfoIndex + 1);
    }
  };

  const getModelViewerStyle = (index) => {
    return {
      transform: `translateX(-${sliderPosition * 100}%)`,
      transition: 'transform 0.5s ease-in-out',
      display: 'flex',
    };
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <div className="model-viewer-slider" style={{ display: 'flex', width: `${maxSliderPosition * 100}%`, ...getModelViewerStyle() }}>
        <ModelViewer modelo='/widiModelo.gltf'  />
        <ModelViewer modelo='/epet5.gltf' />
        <ModelViewer modelo='/epet8.gltf' />
      </div>
      <div className="slider-controls">
        <button onClick={handlePrevClick} disabled={sliderPosition === 0}>Anterior</button>
        <button onClick={handleNextClick} disabled={sliderPosition === sliderLimit}>Siguiente</button>
      </div>
      <Info
        title={info[currentInfoIndex].title}
        school={info[currentInfoIndex].school}
        description={info[currentInfoIndex].description}
      />
    </div>
  );
}

export default App;
