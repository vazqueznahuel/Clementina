import React, { useState } from 'react';
import ModelViewer from './components/ModelViewer';
import Info from './components/modelDescription';

function App() {
  const mascota = [
    {
      route: '/widiModelo.gltf',
      title: 'Wi-di',
      school: 'EPET 20',
      description: 'Este es la mascota de la epet 20, te dice hola como estas, es cacheton',
      unlock: true
    },
    {
      route: '/epet5.gltf',
      title: 'Calamaria',
      school: 'EPET 5',
      description: 'Es tecnica quimica, es de la epet 5 y es una calamar',
      unlock: true
    },
    {
      route: '/epet8.gltf',
      title: 'Dozer',
      school: 'EPET 8',
      description: 'Este conejo se hizo un robot para que no le duela el brazo de llevar el tablero y ahora le duele la espalda, es de la epet 8',
      unlock: true
    },
    {
      route: '/epet6.gltf', 
      title: 'Jeison',
      school: 'EPET 6',
      description: 'El era un muercielago normal y feliz hasta que le agarro cancer de oreja y se la reemplazaron por antenas de router',
      unlock: false
    },
    {
      route: '/epet3.gltf',
      title: 'Jeison',
      school: 'EPET 3',
      description: 'El era un muercielago normal y feliz hasta que le agarro cancer de oreja y se la reemplazaron por antenas de router',
      unlock: true
    },
    {
      route: '/epet17.gltf',
      title: 'Jeison',
      school: 'EPET 17',
      description: 'El era un muercielago normal y feliz hasta que le agarro cancer de oreja y se la reemplazaron por antenas de router',
      unlock: true
    }
  ];

  const [sliderPosition, setSliderPosition] = useState(0);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  const maxSliderPosition = 6; // Cambia esto según la cantidad de modelos que tengas
  const sliderLimit = 0.8333333333333336;
  const movementLimit = 0.1666666666666667;

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
        <ModelViewer modelo={mascota[0].route} unlockState={mascota[0].unlock} />
        <ModelViewer modelo={mascota[1].route} unlockState={mascota[1].unlock}/>
        <ModelViewer modelo={mascota[2].route} unlockState={mascota[2].unlock}/>
        <ModelViewer modelo={mascota[3].route} unlockState={mascota[3].unlock}/>
        <ModelViewer modelo={mascota[4].route} unlockState={mascota[4].unlock}/>
        <ModelViewer modelo={mascota[5].route} unlockState={mascota[5].unlock}/>
      </div>
      <div className="slider-controls">
        <button onClick={handlePrevClick} disabled={sliderPosition === 0 || sliderPosition === -5.551115123125783e-17}>Anterior</button>
        <button onClick={handleNextClick} disabled={sliderPosition === sliderLimit}>Siguiente</button>
      </div>
      <Info
        title={mascota[currentInfoIndex].title}
        school={mascota[currentInfoIndex].school}
        description={mascota[currentInfoIndex].description}
      />
    </div>
  );
}

export default App;
