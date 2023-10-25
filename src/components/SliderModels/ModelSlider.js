import React, { useState } from 'react';
import ModelViewer from './ModelViewer';
import Info from './modelDescription';
import infoMascota from './InfoMascota';

function ModelSlider() {
  const mascota = infoMascota();
  const numModels = mascota.length;

  const [sliderPosition, setSliderPosition] = useState(0);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

  const sliderLimit = 5 / 6;
  const movementLimit = 1 / numModels;

  const handlePrevClick = () => {
    if (currentInfoIndex > 0) {
      setSliderPosition(sliderPosition - movementLimit);
      setCurrentInfoIndex(currentInfoIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentInfoIndex < numModels - 1) {
      setSliderPosition(sliderPosition + movementLimit);
      setCurrentInfoIndex(currentInfoIndex + 1);
    }
  };

  const getModelViewerStyle = {
    transform: `translateX(-${sliderPosition * 100}%)`,
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
      />
    </div>
  );
}

export default ModelSlider;
