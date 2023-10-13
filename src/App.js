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
    },
    {
      title: 'Jeison',
      school: 'EPET 6',
      description: 'El era un muercielago normal y feliz hasta que le agarro cancer de oreja y se la reemplazaron por antenas de router'
    },
    {
      title: 'Jeison',
      school: 'EPET 6',
      description: 'El era un muercielago normal y feliz hasta que le agarro cancer de oreja y se la reemplazaron por antenas de router'
    }
  ];

  const [sliderPosition, setSliderPosition] = useState(0);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  const maxSliderPosition = 5; // Cambia esto según la cantidad de modelos que tengas
  const sliderLimit = 0.8;
  const movementLimit = 0.2;

  const handlePrevClick = () => {
    if (sliderPosition > 0 && currentInfoIndex > 0) {
      console.log(sliderPosition)
      setSliderPosition(sliderPosition - movementLimit);
      setCurrentInfoIndex(currentInfoIndex - 1);
    }
  };
  

  const handleNextClick = () => {
    if (sliderPosition < sliderLimit) {
      console.log(sliderPosition)
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
        <ModelViewer modelo='/epet6.gltf' />
        <ModelViewer modelo='/epet3.gltf' />
      </div>
      <div className="slider-controls">
        <button onClick={handlePrevClick} disabled={sliderPosition === 0 || sliderPosition === 5.551115123125783e-17}>Anterior</button>
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
