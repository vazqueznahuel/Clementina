import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useFrame, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';

// Extiende OrbitControls para personalizar los controles
extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();

  // Configura las restricciones de los controles
  useEffect(() => {
    if (controls.current) {
      controls.current.minPolarAngle = (Math.PI / 180) * 90; // Mínimo en grados (60 grados)
      controls.current.maxPolarAngle = (Math.PI / 180) * 90; // Máximo en grados (120 grados)
      controls.current.minDistance = 2.5; // Distancia mínima (valor determinado)
      controls.current.maxDistance = 2.5; // Distancia máxima (valor determinado)
      controls.current.enableDamping = true;
      controls.current.dampingFactor = 0.1;
      controls.current.enableZoom = true;
      controls.current.zoomSpeed = 1.2;
      controls.current.enablePan = false; // Deshabilitar el panning
    }
  }, []);

  useFrame(() => {
    if (controls.current) {
      controls.current.update();
    }
  });

  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Model = ({ modelo, position }) => {
  const gltf = useLoader(GLTFLoader, modelo);
  
  let mixer;
  if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach(clip => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  // Recorre todos los objetos en la escena y configura las texturas
  gltf.scene.traverse((object) => {
    if (object.isMesh) {
      const material = object.material;
      if (material.map) {
        material.map.magFilter = THREE.NearestFilter;
      }
    }
  });

    gltf.scene.position.set(position ? position[0] : 0, position ? position[1] : 0, position ? position[2] : 0);
    
  return <primitive object={gltf.scene} />;
};

const ModelViewer = ({ modelo, unlockState }) => {
    if (unlockState) {
      return(  
        <Canvas
        style={{ width: '100%', height: '45vh' }}
        camera={{ position: [0, 2, -5] }} // Establece la posición de la cámara aquí
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
      gl.toneMapping = THREE.ACESFilmicToneMapping;
    }}
  >
    
    <ambientLight intensity={4.0} />
    <pointLight position={[10, 10, 10]} intensity={1.0} />
    <CameraControls />
    <Suspense fallback={null}>
      <Model modelo={modelo} />
    </Suspense>
  </Canvas>
      )
    }
    else {
      return(
        <h1 
        style={{ width: '100%', height: '45vh' }}>
          Mascota no desbloqueada</h1>)
    }
};

export default ModelViewer;
