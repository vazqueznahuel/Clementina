import React, { useState, useEffect } from 'react';
import ModelViewer from './ModelViewer';
import Info from './modelDescription';
import infoMascota from './InfoMascota';
import { useParams } from 'react-router-dom';

function ModelSlider() {
  const {id} = useParams();
  const modelPosition = parseInt(id, 10);
  const mascota = infoMascota();
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
      />
    </div>
  );
}

export default ModelSlider;
