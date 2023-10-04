import React, { useState } from 'react';
import ModelViewer from './components/ModelViewer';

function App() {
  const [sliderPosition, setSliderPosition] = useState(0);
  const maxSliderPosition = 3; // Cambia esto según la cantidad de modelos que tengas
  const sliderLimit = 0.66666666;
  const movementLimit = 0.33333333;

  const handlePrevClick = () => {
    if (sliderPosition > 0) {
      setSliderPosition(sliderPosition - movementLimit);
      console.log(sliderPosition)
    }
  };

  const handleNextClick = () => {
    if (sliderPosition < sliderLimit) {
      setSliderPosition(sliderPosition + movementLimit);
      console.log(sliderPosition)
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
        <ModelViewer modelo='/widiModelo.gltf' modelPosition={[0, 0, 0]} />
        <ModelViewer modelo='/epet5.gltf'  modelPosition={[0, 0, 0]} />
        <ModelViewer modelo='/epet8.gltf'  modelPosition={[0, 0, 0]}   />
      </div>
      <div className="slider-controls">
        <button onClick={handlePrevClick} disabled={sliderPosition === 0}>Anterior</button>
        <button onClick={handleNextClick} disabled={sliderPosition === sliderLimit}>Siguiente</button>
      </div>
    </div>
  );
}

export default App;
